"""Build Japanese and Traditional Chinese browser editions.
usage: python3 build.py            -> standalone edition pages for GitHub Pages
       python3 build.py --dev      -> also dev/www/jizura.js + dev/www/test.html for test tools
       JIZURA_SITE_URL=https://example.github.io/JIZURA python3 build.py
                                    -> set canonical / social URLs for this fork
The root is Traditional Chinese; Japanese is published at /ja/."""
import glob, os, sys
from app import i18n
ROOT = os.path.dirname(os.path.abspath(__file__))
os.chdir(ROOT)
read = lambda p: open(p, encoding='utf-8').read()
sources = sorted(glob.glob('src/*.js'))
js = '\n'.join(read(f) for f in sources)
mux = '/*! mp4-muxer v5.2.2 | MIT License | (c) 2023 Vanilagy | see THIRD_PARTY_NOTICES.md */\n' + read('vendor/mp4-muxer.min.js')
def build(lang):
    local = lang in i18n.MODULES
    m = i18n.module(lang) if local else None
    title = m.TITLE if local else 'JIZURA 字面'
    description = m.DESCRIPTION if local else '歌詞を入れると文字PV（リリックモーション）を自動で組み立てて MP4 に書き出すブラウザアプリ'
    folder = dict((c, f) for c, f, _, _ in i18n.EDITIONS)[lang]
    canonical = i18n.BASE + (folder + '/' if folder else '')
    body = read('app/body.html')
    if local: body = i18n.localize_body(lang, body)
    if local: script = '\n'.join(i18n.localize_js(lang, read(f), f) for f in sources)
    else: script = js
    if local:
        marker = '/* ============================================================\n   JIZURA — editor UI'
        if marker not in script: raise ValueError('Could not find browser UI entry point')
        inject = i18n.labels_js(lang)
        script = script.replace(marker, inject + '\n' + marker, 1)
    alternates = '\n'.join(f'<link rel="alternate" hreflang="{hl}" href="{i18n.BASE}{f + "/" if f else ""}">' for c, f, hl, _ in i18n.EDITIONS)
    html_lang = dict((c, hl) for c, _, hl, _ in i18n.EDITIONS)[lang]
    html = f'''<!doctype html>
<html lang="{html_lang}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>{title}</title>
<meta name="description" content="{description}">
<link rel="canonical" href="{canonical}">
{alternates}
<meta property="og:type" content="website">
<meta property="og:title" content="{title}">
<meta property="og:description" content="{description}">
<meta property="og:url" content="{canonical}">
<meta name="twitter:card" content="summary">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<style>
{read('app/style.css')}
</style>
</head>
<body>
{body}
<script>
{mux}
</script>
<script>
{script}
</script>
</body>
</html>
'''
    target = (folder + '/' if folder else '') + 'index.html'
    os.makedirs(os.path.dirname(target) or '.', exist_ok=True)
    open(target, 'w', encoding='utf-8').write(html)
    print(target, len(html), 'bytes')
for code, _, _, _ in i18n.EDITIONS:
    if code in i18n.MODULES and not i18n.has_module(code):
        print('skip', code, '(no translation module yet)'); continue
    build(code)
if '--dev' in sys.argv:
    os.makedirs('dev/www', exist_ok=True)
    open('dev/www/jizura.js', 'w', encoding='utf-8').write(js)
    open('dev/www/test.html', 'w', encoding='utf-8').write(read('dev/test.html'))
    print('dev/www ready: cd dev/www && python3 -m http.server 8765')
