# MABOO:Hi — solo album cover / photobook prompts

`MABOOHi_solo_2000x3_albumcover_photobook.xlsx` — 6000 prompts for Higgsfield
Nano Banana Pro (2K), 1:1 square, 2000 cuts per member.

| sheet | rows |
|---|---|
| `ROA` | 2000 (`@ROA`) |
| `BINA` | 2000 (`@BN`) |
| `CHERRY` | 2000 (`@CHERRY`) |
| `CONCEPTS` | 125 |
| `SHOTS` | 16 |
| `README` | notes, in Korean |

**125 concepts × 16 shots = exactly 2000**, so no (concept, shot) pair repeats
within a member, and all 6000 prompts are textually unique.

Concept groups: nature 15, studio 14, retro/film 13, city/street 13, interior
13, high-fashion editorial 13, thematic 13, night/mood 12, water 11, cafe 8.

Shots: 6 album-cover framings, each naming a clean zone for typography, and 10
photobook framings composed as plates in a spread. Every shot carries its own
focal length, so one concept's 16 cuts read like a real contact sheet rather
than sixteen copies of one frame.

## How the prompts are built

The word "photorealistic" does not appear, and there is no
*plastic skin / porcelain / doll-like* negation list. Nano Banana Pro has no
negative channel, so those tokens land in the conditioning, and the assertion
itself biases toward the over-rendered look that dominates AI-captioned
training data. Each prompt describes a physical capture instead:

```
CAPTURE   body + lens + aperture + shutter + ISO + colour response
LIGHT     named source, direction, quality, colour temperature
SCENE     physical detail and depth layers
SUBJECT   aura, wardrobe, pose, plausibility clause
SKIN      unretouched frame, concrete texture
FRAME     shot size + clean zone for typography, or photobook plate
NO TYPE
```

The concept supplies body, light, exposure level and colour response; the shot
supplies focal length, framing and pose. Exposure triangles are derived from
the light level so they stay physically consistent: ISO 100 at 1/2500 s in open
sun, f/8 at 1/200 s on studio strobe, ISO 3200 at 1/60 s by moonlight, +1 EV on
snow. Fixed-lens bodies (Polaroid SX-70, camcorder) ignore the shot's focal
length and reach the framing by camera distance and a crop of the original.

Eleven colour responses are modelled, each with bodies matched to it: digital,
Portra 400, CineStill 800T, high-ISO digital, medium format, Kodachrome 64,
instant film, camcorder, Ilford HP5 mono, Velvia 50, Superia 400.

Wardrobe keeps the per-member palettes — ROA pastel and draped, BINA saturated
and tailored, CHERRY bright and cropped — composed from 20 scene climates ×
4 garment templates, named by fabric and with real creases.

Four poses need something to sit, lean or lie on, so they name the surfaces a
scene might offer; every prompt also carries a clause telling the model to keep
the pose plausible for that exact location.

Trio cuts are not in this file. The 200 trio prompts with the locked
`@ROA, @BN, @CHERRY` left / centre / right grammar were delivered separately.

## Regenerating

```sh
python3 generator/emit2.py MABOOHi_solo_2000x3_albumcover_photobook.xlsx
```

`concepts.py` holds the 125 concepts, `shots.py` the 16 shot templates and the
wardrobe system, `optics.py` the exposure levels, stocks and bodies,
`build2.py` the prompt template, `emit2.py` the driver and a dependency-free
xlsx writer. No third-party packages.
