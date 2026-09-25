"""Browser interface editions for this fork: Japanese (the source) and Traditional Chinese.
The Chinese edition uses the upstream glossary plus its community label script."""
import importlib, json, os

# code, output folder, html lang, native name
EDITIONS = [
    ('zh-Hant', '', 'zh-Hant', '繁體中文'),
    ('ja', 'ja', 'ja', '日本語'),
]
MODULES = {'zh-Hant': 'app.i18n_zh_hant'}
# The community Traditional Chinese glossary wins over the base module, which fills strings added later.
COMMUNITY = {'zh-Hant': ('app.chinese', 'app/chinese.js')}
BASE = os.environ.get('JIZURA_SITE_URL', 'https://lloyd3126.github.io/JIZURA').rstrip('/') + '/'


class _Merged:
    def __init__(self, base, over):
        for k in dir(base):
            if not k.startswith('_'): setattr(self, k, getattr(base, k))
        for sec in ('BODY', 'UI', 'EXPORT'):
            merged = dict(getattr(base, sec)); merged.update(getattr(over, sec, {}))
            setattr(self, sec, merged)


_cache = {}
def module(code):
    if code not in MODULES: return None
    if code not in _cache:
        base = importlib.import_module(MODULES[code])
        _cache[code] = _Merged(base, importlib.import_module(COMMUNITY[code][0])) if code in COMMUNITY else base
    return _cache[code]


def labels_js(code):
    """The edition's styles, moods, sample lyrics, and community labels."""
    out = names_js(code)
    if code in COMMUNITY: out += '\n' + open(COMMUNITY[code][1], encoding='utf-8').read()
    return out


def replace_copy(source, glossary):
    # longest first protects complete phrases from shorter label replacements
    for japanese, local in sorted(glossary.items(), key=lambda pair: -len(pair[0])):
        source = source.replace(japanese, local)
    return source


def localize_body(code, source):
    return replace_copy(source, module(code).BODY)


def localize_js(code, source, filename):
    m = module(code)
    if filename.endswith('12_ui.js'):
        return replace_copy(source, m.UI)
    if filename.endswith('11_export.js'):
        return replace_copy(source, m.EXPORT)
    return source


def names_js(code):
    """styles / moods / sample lyrics in the edition's language (after app/english.js, which names the parts)"""
    m = module(code)
    return ('(() => {\n  const S = ' + json.dumps({k: list(v) for k, v in m.STYLES.items()}, ensure_ascii=False) + ';\n'
            '  for (const [k, [n, d]] of Object.entries(S)) if (J.STYLES[k]) { J.STYLES[k].name = n; J.STYLES[k].desc = d; }\n'
            '  const M = ' + json.dumps(m.MOODS, ensure_ascii=False) + ';\n'
            '  for (const [k, n] of Object.entries(M)) if (J.MOODS[k]) J.MOODS[k].name = n;\n'
            '  J.SAMPLE_LYRICS = ' + json.dumps(m.SAMPLE, ensure_ascii=False) + ';\n'
            '})();\n')


def has_module(code):
    try:
        module(code); return True
    except ModuleNotFoundError:
        return False
