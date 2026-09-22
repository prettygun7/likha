@echo off
rem 부서별 발표 타이머 실행 (기본 15분). 인자로 분을 줄 수 있음: 발표타이머.bat 20
setlocal
set "MIN=%~1"
if "%MIN%"=="" set "MIN=15"
start "" powershell -NoProfile -ExecutionPolicy Bypass -WindowStyle Hidden -File "%~dp0PresentationTimer.ps1" -Minutes %MIN%
endlocal
exit
