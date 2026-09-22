<#
    PresentationTimer.ps1
    부서별 발표 시간 관리용 항상-위(Always on Top) 카운트다운 오버레이.
    PowerPoint 전체화면 슬라이드쇼 위에 떠 있으며, 포커스를 빼앗지 않으므로
    방향키/클릭으로 슬라이드를 계속 넘길 수 있다.

    사용:  powershell -ExecutionPolicy Bypass -File PresentationTimer.ps1 -Minutes 15
#>

param(
    [int]$Minutes = 15,
    [switch]$NoSound
)

Add-Type -AssemblyName System.Windows.Forms
Add-Type -AssemblyName System.Drawing

Add-Type @'
using System;
using System.Runtime.InteropServices;
public static class NativeWin {
    [DllImport("user32.dll", SetLastError = true)]
    public static extern int GetWindowLong(IntPtr hWnd, int nIndex);
    [DllImport("user32.dll", SetLastError = true)]
    public static extern int SetWindowLong(IntPtr hWnd, int nIndex, int dwNewLong);
    [DllImport("user32.dll", SetLastError = true)]
    public static extern bool SetWindowPos(IntPtr hWnd, IntPtr hWndInsertAfter,
        int X, int Y, int cx, int cy, uint uFlags);
    [DllImport("user32.dll")]
    public static extern bool SetProcessDPIAware();
}
'@

try { [void][NativeWin]::SetProcessDPIAware() } catch { }

# ---------------------------------------------------------------- 상태
$script:total    = [Math]::Max(60, $Minutes * 60)
$script:remain   = [double]$script:total
$script:running  = $false
$script:deadline = Get-Date
$script:alerted  = $false
$script:blinkOn  = $false
$script:tickNo   = 0
$script:dragging = $false
$script:dragOrigin = New-Object System.Drawing.Point(0, 0)
$script:formOrigin = New-Object System.Drawing.Point(0, 0)
$script:opacityStep = 0

$opacityLevels = @(0.92, 0.70, 1.00)

function Get-Hex([string]$hex) { [System.Drawing.ColorTranslator]::FromHtml($hex) }

$C = @{
    Bg        = Get-Hex '#0F172A'
    BgOver    = Get-Hex '#7F1D1D'
    BgOverAlt = Get-Hex '#B91C1C'
    Bar       = Get-Hex '#1E293B'
    BarHover  = Get-Hex '#334155'
    Normal    = Get-Hex '#F1F5F9'
    Caution   = Get-Hex '#FBBF24'
    Critical  = Get-Hex '#F87171'
    OverFg    = Get-Hex '#FFFFFF'
    Track     = Get-Hex '#334155'
    Fill      = Get-Hex '#38BDF8'
    FillWarn  = Get-Hex '#FBBF24'
    FillOver  = Get-Hex '#FCA5A5'
    BtnFg     = Get-Hex '#CBD5E1'
}

# ---------------------------------------------------------------- 폼
$W = 268
$H = 108

$form = New-Object System.Windows.Forms.Form
$form.Text            = '발표 타이머'
$form.FormBorderStyle = [System.Windows.Forms.FormBorderStyle]::None
$form.StartPosition   = [System.Windows.Forms.FormStartPosition]::Manual
$form.ShowInTaskbar   = $false
$form.TopMost         = $true
$form.BackColor       = $C.Bg
$form.ClientSize      = New-Object System.Drawing.Size($W, $H)
$form.Opacity         = $opacityLevels[0]

$wa = [System.Windows.Forms.Screen]::PrimaryScreen.WorkingArea
$form.Location = New-Object System.Drawing.Point(($wa.Right - $W - 28), ($wa.Top + 28))

# 둥근 모서리
$path = New-Object System.Drawing.Drawing2D.GraphicsPath
$r = 18
$path.AddArc(0, 0, $r, $r, 180, 90)
$path.AddArc(($W - $r), 0, $r, $r, 270, 90)
$path.AddArc(($W - $r), ($H - $r), $r, $r, 0, 90)
$path.AddArc(0, ($H - $r), $r, $r, 90, 90)
$path.CloseFigure()
$form.Region = New-Object System.Drawing.Region($path)

# 시간 표시
$lblTime = New-Object System.Windows.Forms.Label
$lblTime.AutoSize   = $false
$lblTime.Location   = New-Object System.Drawing.Point(0, 6)
$lblTime.Size       = New-Object System.Drawing.Size($W, 52)
$lblTime.TextAlign  = [System.Drawing.ContentAlignment]::MiddleCenter
$lblTime.BackColor  = [System.Drawing.Color]::Transparent
$lblTime.ForeColor  = $C.Normal
$lblTime.Font       = New-Object System.Drawing.Font('Consolas', 30, [System.Drawing.FontStyle]::Bold)
$form.Controls.Add($lblTime)

# 진행 막대
$track = New-Object System.Windows.Forms.Panel
$track.Location  = New-Object System.Drawing.Point(14, 62)
$track.Size      = New-Object System.Drawing.Size(($W - 28), 5)
$track.BackColor = $C.Track
$form.Controls.Add($track)

$fill = New-Object System.Windows.Forms.Panel
$fill.Location  = New-Object System.Drawing.Point(0, 0)
$fill.Size      = New-Object System.Drawing.Size(0, 5)
$fill.BackColor = $C.Fill
$track.Controls.Add($fill)

# 버튼
$btns  = @{}
$specs = @(
    @('play',  '시작'),
    @('reset', '리셋'),
    @('minus', '-1분'),
    @('plus',  '+1분'),
    @('close', '닫기')
)
$bw = 50
$bx = [int](($W - ($bw * 5 + 4 * 2)) / 2)
for ($i = 0; $i -lt $specs.Count; $i++) {
    $b = New-Object System.Windows.Forms.Button
    $b.Tag       = $specs[$i][0]
    $b.Text      = $specs[$i][1]
    $b.Location  = New-Object System.Drawing.Point(($bx + $i * ($bw + 2)), 74)
    $b.Size      = New-Object System.Drawing.Size($bw, 26)
    $b.FlatStyle = [System.Windows.Forms.FlatStyle]::Flat
    $b.FlatAppearance.BorderSize = 0
    $b.BackColor = $C.Bar
    $b.ForeColor = $C.BtnFg
    $b.Font      = New-Object System.Drawing.Font('Malgun Gothic', 8.5)
    $b.TabStop   = $false
    $b.Cursor    = [System.Windows.Forms.Cursors]::Hand
    $b.Add_MouseEnter({
        param($s, $e)
        $s.BackColor = $C.BarHover
    })
    $b.Add_MouseLeave({
        param($s, $e)
        $s.BackColor = $C.Bar
    })
    $form.Controls.Add($b)
    $btns[$specs[$i][0]] = $b
}

# ---------------------------------------------------------------- 동작
function Update-Display {
    $rem = $script:remain

    if ($rem -gt 0) {
        $t = [int][Math]::Ceiling($rem)
        $sign = ''
    } else {
        $t = [int][Math]::Floor(-$rem)
        $sign = '+'
    }
    $mm = [int][Math]::Floor($t / 60)
    $ss = $t % 60
    $lblTime.Text = ('{0}{1:00}:{2:00}' -f $sign, $mm, $ss)

    if ($rem -le 0) {
        $bg = if ($script:blinkOn) { $C.BgOverAlt } else { $C.BgOver }
        $fg = $C.OverFg
        $fill.BackColor = $C.FillOver
    } elseif ($rem -le 60) {
        $bg = $C.Bg
        $fg = if ($script:blinkOn) { $C.Critical } else { $C.Normal }
        $fill.BackColor = $C.Critical
    } elseif ($rem -le 300) {
        $bg = $C.Bg
        $fg = $C.Caution
        $fill.BackColor = $C.FillWarn
    } else {
        $bg = $C.Bg
        $fg = $C.Normal
        $fill.BackColor = $C.Fill
    }

    if ($form.BackColor -ne $bg) { $form.BackColor = $bg }
    $lblTime.ForeColor = $fg

    $ratio = 0.0
    if ($script:total -gt 0) { $ratio = ($script:total - $rem) / $script:total }
    if ($ratio -lt 0) { $ratio = 0.0 }
    if ($ratio -gt 1) { $ratio = 1.0 }
    $fill.Width = [int]([Math]::Round($track.Width * $ratio))

    $btns['play'].Text = if ($script:running) { '멈춤' } else { '시작' }
}

function Start-Countdown {
    $script:deadline = (Get-Date).AddSeconds($script:remain)
    $script:running  = $true
}

function Stop-Countdown {
    if ($script:running) {
        $script:remain  = ($script:deadline - (Get-Date)).TotalSeconds
        $script:running = $false
    }
}

function Invoke-Toggle {
    if ($script:running) { Stop-Countdown } else { Start-Countdown }
    Update-Display
}

function Reset-Countdown {
    $script:running = $false
    $script:remain  = [double]$script:total
    $script:alerted = $false
    $script:blinkOn = $false
    Update-Display
}

function Add-Minute([int]$delta) {
    $script:total = [Math]::Max(60, $script:total + $delta * 60)
    if ($script:running) {
        $script:deadline = $script:deadline.AddSeconds($delta * 60)
        $script:remain   = ($script:deadline - (Get-Date)).TotalSeconds
    } else {
        $script:remain = $script:remain + $delta * 60
        if ($script:remain -lt 0) { $script:remain = 0 }
    }
    if ($script:remain -gt 0) { $script:alerted = $false }
    Update-Display
}

function Step-Opacity {
    $script:opacityStep = ($script:opacityStep + 1) % $opacityLevels.Count
    $form.Opacity = $opacityLevels[$script:opacityStep]
}

$click = {
    param($s, $e)
    switch ($s.Tag) {
        'play'  { Invoke-Toggle }
        'reset' { Reset-Countdown }
        'minus' { Add-Minute -1 }
        'plus'  { Add-Minute 1 }
        'close' { $form.Close() }
    }
}
foreach ($key in $btns.Keys) { $btns[$key].Add_Click($click) }

# 드래그 이동
$down = {
    param($s, $e)
    if ($e.Button -eq [System.Windows.Forms.MouseButtons]::Left) {
        $script:dragging   = $true
        $script:dragOrigin = [System.Windows.Forms.Cursor]::Position
        $script:formOrigin = $form.Location
    }
}
$move = {
    param($s, $e)
    if ($script:dragging) {
        $cur = [System.Windows.Forms.Cursor]::Position
        $form.Location = New-Object System.Drawing.Point(
            ($script:formOrigin.X + $cur.X - $script:dragOrigin.X),
            ($script:formOrigin.Y + $cur.Y - $script:dragOrigin.Y))
    }
}
$up = {
    param($s, $e)
    $script:dragging = $false
    if ($e.Button -eq [System.Windows.Forms.MouseButtons]::Right) { Step-Opacity }
}
foreach ($ctl in @($form, $lblTime, $track)) {
    $ctl.Add_MouseDown($down)
    $ctl.Add_MouseMove($move)
    $ctl.Add_MouseUp($up)
}
$lblTime.Add_DoubleClick({ Invoke-Toggle })

# ---------------------------------------------------------------- 타이머 루프
$tick = New-Object System.Windows.Forms.Timer
$tick.Interval = 250
$tick.Add_Tick({
    $script:tickNo++
    if ($script:tickNo % 2 -eq 0) { $script:blinkOn = -not $script:blinkOn }

    if ($script:running) {
        $script:remain = ($script:deadline - (Get-Date)).TotalSeconds
        if ($script:remain -le 0 -and -not $script:alerted) {
            $script:alerted = $true
            if (-not $NoSound) {
                try { [System.Media.SystemSounds]::Exclamation.Play() } catch { }
            }
        }
    }

    # 다른 창이 위로 올라오는 경우를 대비해 최상위 상태를 주기적으로 재선언
    if ($script:tickNo % 8 -eq 0 -and $form.IsHandleCreated) {
        [void][NativeWin]::SetWindowPos($form.Handle, [IntPtr](-1), 0, 0, 0, 0, 0x0013)
    }

    Update-Display
})

$form.Add_Shown({
    # WS_EX_NOACTIVATE(0x08000000) + WS_EX_TOOLWINDOW(0x00000080)
    # : 클릭해도 포커스를 가져가지 않아 슬라이드쇼 조작이 끊기지 않는다.
    $ex = [NativeWin]::GetWindowLong($form.Handle, -20)
    [void][NativeWin]::SetWindowLong($form.Handle, -20, ($ex -bor 0x08000000 -bor 0x00000080))
    [void][NativeWin]::SetWindowPos($form.Handle, [IntPtr](-1), 0, 0, 0, 0, 0x0013)
    $tick.Start()
    Update-Display
})

$form.Add_FormClosed({ $tick.Stop(); $tick.Dispose() })

[void]$form.ShowDialog()
