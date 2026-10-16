# -*- coding: utf-8 -*-
import os, sys, re
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from concepts import K
from shots import SHOTS, outfit, AURA
from optics import capture

REF = {'ROA': '@ROA', 'BINA': '@BN', 'CHERRY': '@CHERRY'}

def article(t):
    t = re.sub(r'\ban (?=[bcdfgjklmnpqrstvwxyzBCDFGJKLMNPQRSTVWXYZ])', 'a ', t)
    t = re.sub(r'\ba (?=[aeiouAEIOU])', 'an ', t)
    # "an 85 mm" / "an 18 mm": 8 and 11 open on a vowel sound
    t = re.sub(r'\ba (?=(?:8|11|18)\b)', 'an ', t)
    return t

def cap(t):
    t = t.strip()
    return t[:1].upper() + t[1:] if t else t

SKIN = ("This is the unretouched frame; only exposure and white balance have been corrected. Pores read across the "
  "cheeks and the bridge of the nose, there is faint sebum shine on the forehead and nose tip, the fine vellus hair "
  "along the jaw picks up the light, natural under-eye tone is left in, a few flyaway hairs sit out of place, the lip "
  "surface has an uneven gloss line, and each eye carries a real catchlight in the shape of the light source "
  "described above. Fabric shows its weave and the creases it picked up from being worn. Hands relaxed, five fingers "
  "each, short natural nails.")

NOTYPE = ("Nothing readable anywhere in the image: no letters, numbers, logos, signage, labels, plate characters, "
  "menu text, poster text or watermarks. Every sign, board, screen, book spine, package and vehicle marking stays "
  "blank or abstract.")

CLOSE = ("Do not smooth the skin, do not even out the tone, do not add a beauty-filter glow or a CGI sheen. "
  "Leave it exactly as the sensor recorded it.")

def build(member, ci, si, i):
    c = K[ci]; sh = SHOTS[si]
    key, usage, title, focal, framing, pose, space = sh
    ref = REF[member]
    cap_line = capture(c['stock'], c['level'], focal, i)
    from optics import STOCKS
    if usage == 'album_cover':
        frame = ("FRAME — %s. 1:1 square. Keep the %s of the frame clean and uncluttered so cover typography could "
                 "sit there later." % (cap(framing), space))
    else:
        frame = ("FRAME — %s. 1:1 square, composed as one plate in an editorial photobook spread rather than as a "
                 "cover, so the scene is allowed to crowd the subject." % cap(framing))
    return article(
f"""{ref}.

A single frame from a real photo shoot, cropped square.

CAPTURE — {cap_line}. {cap(STOCKS[c['stock']])}.

LIGHT — {cap(c['light'])}.

SCENE — {cap(c['scene'])}.

SUBJECT — {ref} is the only person in the frame. {cap(AURA[member])}. She wears {outfit(member, c['climate'], i)}. {cap(pose)}. Keep the pose physically plausible and safe-looking for this exact location; where the scene cannot support it, use the nearest natural equivalent rather than floating her.

SKIN — {SKIN}

{frame}

NO TYPE — {NOTYPE}

{CLOSE}""")
