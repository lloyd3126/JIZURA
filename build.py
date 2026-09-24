"""Build Japanese, English and Traditional Chinese browser editions.
usage: python3 build.py            -> index.html, en/index.html, zh-TW/index.html
       python3 build.py --dev      -> also dev/www/jizura.js + dev/www/test.html for the test tools
       JIZURA_SITE_URL=https://example.github.io/JIZURA python3 build.py
                                    -> set canonical / social URLs for a fork"""
import glob, os, sys
from app.english import localize_body, localize_js
from app.zh_hant import localize_body as localize_zh_body, localize_js as localize_zh_js
ROOT = os.path.dirname(os.path.abspath(__file__))
os.chdir(ROOT)
SITE_URL = os.environ.get('JIZURA_SITE_URL', 'https://852wa.github.io/JIZURA').rstrip('/')
read = lambda p: open(p, encoding='utf-8').read()
sources = sorted(glob.glob('src/*.js'))
js = '\n'.join(read(f) for f in sources)
mux = '/*! mp4-muxer v5.2.2 | MIT License | (c) 2023 Vanilagy | see THIRD_PARTY_NOTICES.md */\n' + read('vendor/mp4-muxer.min.js')
def build(lang):
    english = lang == 'en'
    traditional = lang == 'zh-Hant'
    title = ('JIZURA — Lyric Motion Video Maker' if english else
             'JIZURA 字面｜繁體中文' if traditional else 'JIZURA 字面')
    description = ('Turn lyrics into animated lyric videos in your browser and export MP4.' if english else
                   '輸入歌詞，自動編排文字動態影片並匯出 MP4。所有處理都在瀏覽器中完成。' if traditional else
                   '歌詞を入れると文字PV（リリックモーション）を自動で組み立てて MP4 に書き出すブラウザアプリ')
    route = {'ja': '/', 'en': '/en/', 'zh-Hant': '/zh-TW/'}[lang]
    canonical = SITE_URL + route
    if english:
        language_nav = '<nav class="lang-switch" aria-label="Language"><a href="../" lang="ja">日本語</a><span aria-current="page">English</span><a href="../zh-TW/" lang="zh-Hant">繁體中文</a></nav>'
    elif traditional:
        language_nav = '<nav class="lang-switch" aria-label="語言"><a href="../" lang="ja">日文</a><a href="../en/" lang="en">英文</a><span aria-current="page">繁體中文</span></nav>'
    else:
        language_nav = '<nav class="lang-switch" aria-label="言語"><span aria-current="page">日本語</span><a href="en/" lang="en">English</a><a href="zh-TW/" lang="zh-Hant">繁體中文</a></nav>'
    body = read('app/body.html').replace('    <div class="acts">', '    ' + language_nav + '\n    <div class="acts">', 1)
    if english: body = localize_body(body)
    elif traditional: body = localize_zh_body(body)
    script = '\n'.join(localize_js(read(f), f) for f in sources) if english else (
        '\n'.join(localize_zh_js(read(f), f) for f in sources) if traditional else js)
    if english:
        marker = '/* ============================================================\n   JIZURA — editor UI'
        if marker not in script: raise ValueError('Could not find browser UI entry point')
        script = script.replace(marker, read('app/english.js') + '\n' + marker, 1)
    elif traditional:
        marker = '/* ============================================================\n   JIZURA — editor UI'
        if marker not in script: raise ValueError('Could not find browser UI entry point')
        script = script.replace(marker, read('app/zh_hant.js') + '\n' + marker, 1)
    html = f'''<!doctype html>
<html lang="{lang}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>{title}</title>
<meta name="description" content="{description}">
<link rel="canonical" href="{canonical}">
<link rel="alternate" hreflang="ja" href="{SITE_URL}/">
<link rel="alternate" hreflang="en" href="{SITE_URL}/en/">
<link rel="alternate" hreflang="zh-Hant" href="{SITE_URL}/zh-TW/">
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
    target = {'ja': 'index.html', 'en': 'en/index.html', 'zh-Hant': 'zh-TW/index.html'}[lang]
    os.makedirs(os.path.dirname(target) or '.', exist_ok=True)
    open(target, 'w', encoding='utf-8').write(html)
    print(target, len(html), 'bytes')
build('ja')
build('en')
build('zh-Hant')
if '--dev' in sys.argv:
    os.makedirs('dev/www', exist_ok=True)
    open('dev/www/jizura.js', 'w', encoding='utf-8').write(js)
    open('dev/www/test.html', 'w', encoding='utf-8').write(read('dev/test.html'))
    print('dev/www ready: cd dev/www && python3 -m http.server 8765')
