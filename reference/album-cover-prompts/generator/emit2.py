# -*- coding: utf-8 -*-
import os, sys, zipfile
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from concepts import K
from shots import SHOTS
from build2 import build, REF

MEMBERS = ['ROA', 'BINA', 'CHERRY']
PER = 2000
NC, NS = len(K), len(SHOTS)
assert NC * NS == PER, (NC, NS)

GROUP_KO = {'studio':'스튜디오','retro':'필름·레트로','city':'시티·스트리트','nature':'네이처·시즌',
            'water':'워터','interior':'인테리어·라이프스타일','cafe':'카페·푸드','fashion':'하이패션 에디토리얼',
            'night':'나이트·무드','thematic':'컨셉·테마'}

def rows_for(member):
    out = [('no','member','ref','usage','group','group_ko','concept','shot_id','shot_title','prompt')]
    for i in range(PER):
        ci, si = i % NC, (i // NC) % NS
        c, sh = K[ci], SHOTS[si]
        out.append((str(i + 1), member, REF[member], sh[1], c['group'], GROUP_KO[c['group']],
                    c['key'], sh[0], sh[2], build(member, ci, si, i)))
    return out

def concept_rows():
    out = [('#','group','group_ko','concept','climate','light_level','stock','scene')]
    for n, c in enumerate(K, 1):
        out.append((str(n), c['group'], GROUP_KO[c['group']], c['key'], c['climate'],
                    c['level'], c['stock'], c['scene']))
    return out

def shot_rows():
    out = [('#','shot_id','usage','shot_title','focal','framing')]
    for n, s in enumerate(SHOTS, 1):
        out.append((str(n), s[0], s[1], s[2], s[3], s[4]))
    return out

README = [
 ('항목','내용'),
 ('규모','멤버별 2000컷 × 3명 = 6000 프롬프트. 125개 컨셉 × 16개 샷 = 정확히 2000. 같은 (컨셉, 샷) 조합은 멤버당 단 한 번만 나옵니다.'),
 ('비율','전부 1:1 정사각. 힉스필드 나노바나나프로 2K 기준.'),
 ('레퍼런스','@ROA / @BN / @CHERRY. 프롬프트 맨 앞 한 줄에 단독으로 둡니다. BINA는 힉스필드 등록명 @BN으로 통일.'),
 ('usage 컬럼','album_cover 6종(컷당 타이포 여백 지정) / photobook 10종(화보 스프레드 구성). 컨셉마다 커버 6 + 화보 10.'),
 ('실사 설계','"photorealistic" 같은 선언어와 "plastic skin / porcelain / doll-like" 네거티브 나열을 쓰지 않습니다. 나노바나나프로는 네거티브 채널이 없어 그 단어들이 그대로 조건에 들어가고, 선언어는 학습 데이터상 번들번들한 AI 렌더링과 같은 캡션이라 오히려 그쪽으로 끌립니다.'),
 ('대신 쓰는 것','CAPTURE(바디·렌즈·조리개·셔터·ISO·필름/센서 색응답) / LIGHT(광원 이름·방향·질·색온도) / SCENE / SUBJECT / SKIN(무보정 프레임) / FRAME / NO TYPE.'),
 ('노출 일관성','조명 레벨에서 노출값을 유도하므로 물리적으로 맞습니다. 한낮 ISO 100·1/2500s, 스튜디오 스트로브 f/8·1/200s, 달빛 ISO 3200·1/60s, 설경 +1EV, 고정렌즈 바디(폴라로이드·캠코더)는 샷의 초점거리를 적용하지 않고 거리와 크롭으로 프레이밍.'),
 ('11종 색응답','digital / Portra 400 / CineStill 800T / 고감도 디지털 / 중형 / Kodachrome 64 / 인스턴트 / 캠코더 / Ilford HP5 흑백 / Velvia 50 / Superia 400. 컨셉별로 고정되어 있고 바디도 그에 맞춰 배정됩니다.'),
 ('샷 16종','커버 6 — 정면 센터 바스트, 전신 네거티브, 클로즈업 뷰티, 프로필 엣지, 로우앵글 히어로, 오버헤드. 화보 10 — 3/4 턴, 캔디드, 전신, 착석, 리닝, 워킹, 핸즈 인 헤어, 룩 백, 리클라이닝, 디테일 크롭. 샷마다 초점거리가 달라 한 컨셉 16컷이 실제 촬영 콘택트시트처럼 읽힙니다.'),
 ('의상','멤버별 팔레트 유지 — ROA 파스텔·드레이프, BINA 채도 높은 정색·테일러드, CHERRY 밝은 색·크롭. 20개 의상군 × 4템플릿으로 장면에 맞게 조합되고, 원단명과 실제 주름까지 명시합니다.'),
 ('시트 구성','ROA / BINA / CHERRY 각 2000행, CONCEPTS 125행, SHOTS 16행, README.'),
 ('그룹 컷','이 파일은 솔로 전용입니다. 트리오(@ROA, @BN, @CHERRY 좌–중앙–우 고정) 200컷은 앞서 만든 PHOTOREAL_v2 파일에 들어 있습니다.'),
]

def esc(t):
    t = ''.join(ch for ch in t if ch in '\n\t' or ord(ch) >= 32)
    return t.replace('&', '&amp;').replace('<', '&lt;').replace('>', '&gt;')

def colname(i):
    s = ''; i += 1
    while i:
        i, r = divmod(i - 1, 26); s = chr(65 + r) + s
    return s

def sheet_xml(rows, widths):
    x = ['<?xml version="1.0" encoding="UTF-8" standalone="yes"?>',
         '<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">',
         '<sheetFormatPr defaultRowHeight="15"/><cols>']
    for n, w in enumerate(widths, 1):
        x.append('<col min="%d" max="%d" width="%d"/>' % (n, n, w))
    x.append('</cols><sheetData>')
    for ri, row in enumerate(rows, 1):
        x.append('<row r="%d">' % ri)
        for ci, v in enumerate(row):
            x.append('<c r="%s%d" t="inlineStr"><is><t xml:space="preserve">%s</t></is></c>'
                     % (colname(ci), ri, esc(str(v))))
        x.append('</row>')
    x.append('</sheetData></worksheet>')
    return ''.join(x)

W_MAIN = [6, 9, 10, 13, 11, 20, 26, 26, 22, 150]
books = [(m, rows_for(m), W_MAIN) for m in MEMBERS]
books.append(('CONCEPTS', concept_rows(), [5, 11, 20, 26, 12, 13, 11, 110]))
books.append(('SHOTS', shot_rows(), [5, 26, 13, 24, 15, 110]))
books.append(('README', README, [16, 150]))

wb = ('<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'
 '<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" '
 'xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"><sheets>'
 + ''.join('<sheet name="%s" sheetId="%d" r:id="rId%d"/>' % (n, i + 1, i + 1)
           for i, (n, _, _) in enumerate(books)) + '</sheets></workbook>')
rels = ('<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'
 '<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">'
 + ''.join('<Relationship Id="rId%d" Type="http://schemas.openxmlformats.org/officeDocument/2006/'
           'relationships/worksheet" Target="worksheets/sheet%d.xml"/>' % (i + 1, i + 1)
           for i in range(len(books))) + '</Relationships>')
ct = ('<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'
 '<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">'
 '<Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>'
 '<Default Extension="xml" ContentType="application/xml"/>'
 '<Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.'
 'spreadsheetml.sheet.main+xml"/>'
 + ''.join('<Override PartName="/xl/worksheets/sheet%d.xml" ContentType="application/vnd.openxmlformats-'
           'officedocument.spreadsheetml.worksheet+xml"/>' % (i + 1) for i in range(len(books)))
 + '</Types>')
root_rels = ('<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'
 '<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">'
 '<Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/'
 'officeDocument" Target="xl/workbook.xml"/></Relationships>')

dst = sys.argv[1]
with zipfile.ZipFile(dst, 'w', zipfile.ZIP_DEFLATED, compresslevel=9) as z:
    z.writestr('[Content_Types].xml', ct)
    z.writestr('_rels/.rels', root_rels)
    z.writestr('xl/workbook.xml', wb)
    z.writestr('xl/_rels/workbook.xml.rels', rels)
    for i, (n, rows, w) in enumerate(books):
        z.writestr('xl/worksheets/sheet%d.xml' % (i + 1), sheet_xml(rows, w))
tot = sum(len(r) - 1 for _, r, _ in books[:3])
print('wrote %s | %d prompts | %.1f MB' % (dst, tot, os.path.getsize(dst) / 1e6))
