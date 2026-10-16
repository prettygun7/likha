# -*- coding: utf-8 -*-
"""Exposure levels, film/sensor stocks and camera bodies.

An exposure triangle is derived from the concept's light LEVEL so every prompt
is physically self-consistent: ISO 100 at 1/2500 s in open sun, ISO 3200 at
1/60 s by moonlight, f/8 at 1/200 s on studio strobe. This is the part the
previous prompt set was missing entirely.
"""

LEVELS = {
 'bright_sun':   ("f/2.0",  "1/2500 s", "ISO 100"),
 'open_shade':   ("f/1.8",  "1/640 s",  "ISO 200"),
 'overcast':     ("f/2.0",  "1/800 s",  "ISO 200"),
 'golden':       ("f/1.8",  "1/1000 s", "ISO 200"),
 'blue_hour':    ("f/1.6",  "1/160 s",  "ISO 800"),
 'window':       ("f/2.0",  "1/250 s",  "ISO 400"),
 'tungsten':     ("f/1.6",  "1/125 s",  "ISO 800"),
 'practical':    ("f/1.4",  "1/125 s",  "ISO 1600"),
 'deep_night':   ("f/1.4",  "1/60 s",   "ISO 3200"),
 'strobe':       ("f/8",    "1/200 s",  "ISO 100"),
 'strobe_open':  ("f/4",    "1/200 s",  "ISO 100"),
 'flash_snap':   ("f/5.6",  "1/60 s",   "ISO 400"),
 'snow_bright':  ("f/2.5",  "1/1000 s", "ISO 200"),
 'underwater':   ("f/4",    "1/500 s",  "ISO 400"),
 'stage':        ("f/2.0",  "1/250 s",  "ISO 1250"),
}

STOCKS = {
 'digital': ("straight-out-of-camera digital colour, highlights slightly cool and midtones slightly warm, "
             "faint sensor noise left in the shadow side"),
 'portra':  ("Kodak Portra 400 scanned on a Noritsu: creamy highlight roll-off, warm skin, visible fine grain "
             "through the midtones"),
 'cinestill': ("CineStill 800T tungsten-balanced colour: cool daylight shift, red halation blooming around every "
               "bright practical, pronounced grain"),
 'highiso': ("real high-ISO character, luminance grain visible in the shadows, slightly reduced shadow saturation, "
             "point lights rendered as clean circular bokeh with mild cat's-eye at the frame edges"),
 'mf':      ("medium-format tonality, very wide highlight roll-off, smooth tonal separation and fine even grain"),
 'kodachrome': ("Kodachrome 64 rendering: dense saturated reds, slightly cool shadows, high micro-contrast and "
                "almost no visible grain"),
 'polaroid': ("instant-film rendering: compressed tonal range, soft corners, a slight cyan-green cast in the "
              "shadows and blown-out specular highlights"),
 'vhs':      ("consumer camcorder colour: limited dynamic range, slight chroma bleed on saturated reds, soft "
              "resolution falling off toward the corners"),
 'bw':       ("black and white, Ilford HP5 pushed one stop: deep blacks, gritty mid-grain, bright separated "
              "highlights, no colour anywhere"),
 'velvia':   ("Fujifilm Velvia 50 rendering: very high saturation in greens and blues, dense shadows, extremely "
              "fine grain"),
 'superia':  ("Fujifilm Superia 400 rendering: cool green-leaning midtones, punchy contrast, obvious grain in "
              "flat areas"),
}

BODIES = {
 'digital':    ["Sony A7R V", "Canon EOS R5", "Nikon Z8", "Leica SL3", "Sony A7 IV"],
 'highiso':    ["Sony A7S III", "Nikon Z6 III", "Canon EOS R6 Mark II"],
 'mf':         ["Fujifilm GFX 100 II", "Phase One XF IQ4", "Hasselblad X2D"],
 'portra':     ["Contax 645", "Pentax 67", "Canon EOS-1V"],
 'cinestill':  ["Nikon F3", "Canon EOS-1N"],
 'kodachrome': ["Nikon F2", "Leica M4"],
 'polaroid':   ["Polaroid SX-70", "Mamiya Universal with an instant back"],
 'vhs':        ["Sony Handycam camcorder, frame grab"],
 'bw':         ["Leica M6", "Nikon FM2"],
 'velvia':     ["Pentax 67", "Mamiya RZ67"],
 'superia':    ["Nikon F100", "Canon EOS 5", "Pentax MZ-S"],
}

# stocks shot on a fixed-lens body: the shot's focal length does not apply, so
# the framing has to come from camera distance and a crop of the negative.
FIXED_LENS = {'polaroid': "116 mm fixed lens", 'vhs': "built-in zoom"}

def capture(stock, level, focal, i):
    body = BODIES[stock][i % len(BODIES[stock])]
    ap, sh, iso = LEVELS[level]
    if stock in FIXED_LENS:
        return ("%s and its %s, exposed at %s, %s, with the framing reached by camera distance and a crop of the "
                "original rather than by a longer lens" % (body, FIXED_LENS[stock], ap, sh))
    return "%s with a %s lens, shot at %s, %s, %s" % (body, focal, ap, sh, iso)
