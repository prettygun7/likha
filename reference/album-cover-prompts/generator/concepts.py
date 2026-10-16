# -*- coding: utf-8 -*-
"""125 album-cover / photobook concepts drawn from girl-group visual references."""

K = []
def add(key, group, climate, scene, light, level, stock):
    K.append(dict(key=key, group=group, climate=climate, scene=scene, light=light, level=level, stock=stock))

# ============================================================ 1. STUDIO (14)
add('seamless_white_beauty','studio','studio',
 "a seamless white studio cove with no horizon line and no visible floor join",
 "a 1.5 m octabox feathered from front-left as key with a large white V-flat returning fill on the right, and two strip boxes raking the background to clean white",
 'strobe','digital')
add('seamless_black_dramatic','studio','studio',
 "a seamless black studio backdrop with the subject pulled four metres clear of it so no spill reaches the paper",
 "a single gridded beauty dish directly above the lens axis as key with black flags on both sides so the shadow side falls away into pure black",
 'strobe','digital')
add('color_gel_duotone','studio','studio',
 "a smooth mid-grey studio wall carrying two overlapping pools of coloured light",
 "a magenta-gelled strip box from camera-left and a cyan-gelled strip box from camera-right crossing on the background, with a small neutral fill at the lens keeping the face true",
 'strobe','digital')
add('pastel_paper_backdrop','studio','studio',
 "a seamless pastel paper backdrop rolled down to the floor and curving under the feet",
 "a 2 m scrim overhead as a soft top key with a white floor bounce lifting the underside of the jaw, and the background lit a stop and a half under the subject",
 'strobe_open','digital')
add('infinity_cove_minimal','studio','studio',
 "a bright infinity cove with one plain geometric plinth and nothing else in frame",
 "a huge diffused source filling the whole left wall so the light wraps almost shadowlessly, with a single hard kicker from behind defining the shoulder line",
 'strobe_open','mf')
add('hard_flash_fashion','studio','studio',
 "a scuffed concrete studio wall left deliberately unretouched, with the power cables visible at the skirting",
 "a bare-bulb flash head on axis just above the lens with no modifier, throwing a hard-edged shadow halo on the wall behind and specular hot points on the skin",
 'strobe','digital')
add('ring_flash_beauty','studio','studio',
 "a flat mid-tone studio wall half a metre behind the subject",
 "a ring flash around the lens as the only source, producing an even shadowless face and a thin continuous shadow outline directly behind the body",
 'strobe','digital')
add('soft_butterfly_beauty','studio','studio',
 "a clean pale-grey studio background with a soft vignette falling toward the corners",
 "a beauty dish at 45 degrees above the lens axis with a silver reflector flat below the chin, placing a small butterfly shadow under the nose and a crisp double catchlight in each eye",
 'strobe','mf')
add('rim_light_silhouette','studio','studio',
 "a dark studio with the background in near-total shadow and a thin haze of atmosphere in the air",
 "two hard rim lights behind the subject at 135 degrees carving the edge of the hair and shoulders, with only a quarter-stop of frontal fill so most of the face stays in shadow",
 'strobe','bw')
add('mirror_floor_studio','studio','studio',
 "a studio floor laid with black acrylic sheet so a clean upside-down reflection sits beneath the subject",
 "a large softbox from high camera-right as key with the acrylic returning a secondary reflected source upward, and the background paper lit evenly to mid-grey",
 'strobe_open','digital')
add('chair_prop_studio','studio','studio',
 "a plain studio set with one simple wooden chair and a bare painted wall",
 "a 1.2 m softbox at 60 degrees camera-left with a black flag on the opposite side, the wall lit by a single bounced head so a soft gradient runs top to bottom",
 'strobe','digital')
add('fabric_drape_studio','studio','studio',
 "lengths of raw unbleached fabric hung in deep folds as a backdrop and pooling on the floor",
 "a large diffused source skimming across the fabric from camera-left so every fold reads in relief, with a bounce card opening the face by a stop",
 'strobe_open','mf')
add('strobe_motion_freeze','studio','studio',
 "a seamless studio wall with the subject caught mid-jump, feet clear of the floor",
 "a short-duration strobe pack firing at its fastest setting to freeze the hair and fabric mid-flight, with a second head on the background killing any motion shadow",
 'strobe','digital')
add('projector_light_pattern','studio','studio',
 "a dark studio where a projector casts an abstract pattern of light and shadow across the subject and the wall behind",
 "a single projector as the only key, its pattern falling across the face and body, with a quarter-stop of ambient bounce so the shadow areas keep detail",
 'stage','digital')

# ============================================================ 2. FILM / RETRO (13)
add('y2k_digicam_flash','retro','party',
 "a cluttered bedroom or house-party corner at night, shot the way an early-2000s compact camera saw it",
 "the camera's own tiny on-board flash as the only source, overexposing everything within a metre and letting the background fall three stops into darkness, with hard red-eye-adjacent catchlights",
 'flash_snap','superia')
add('90s_compact_film','retro','street',
 "a nondescript suburban street in flat afternoon light, framed slightly crooked as a point-and-shoot would",
 "flat overcast daylight with no modifier at all, the fill coming only from the pale pavement, giving the directionless look of an unassisted snapshot",
 'overcast','superia')
add('70s_kodachrome_warm','retro','retro',
 "a wood-panelled interior with mustard and brown furnishings and a heavy curtain half drawn",
 "late afternoon sun through the curtain as a warm hard key with deep unfilled shadows, and a single tungsten lamp adding a second warm pool",
 'golden','kodachrome')
add('80s_city_pop_neon','retro','night',
 "a rain-slicked city street at night with blocky neon glowing against glass towers",
 "warm neon signage as background colour, a soft tungsten key from camera-left on the face, and a hard cyan kicker behind the shoulder",
 'practical','cinestill')
add('polaroid_instant','retro','interior',
 "a plain domestic interior, framed loosely and a little off-centre the way an instant camera frames",
 "window daylight filling the room evenly with the instant film's own flash adding a weak frontal pop, blowing the nearest highlights",
 'window','polaroid')
add('disposable_camera_party','retro','party',
 "a crowded doorway or stairwell at a house party, other people only as blurred shapes at the frame edge",
 "a disposable camera's fixed flash as the sole source, flattening the face, catching dust in the air and leaving the room behind almost black",
 'flash_snap','superia')
add('vhs_camcorder_still','retro','retro',
 "a living room in front of a boxy television, the shot held slightly too long as a camcorder would",
 "a single on-camera video light plus the television's own glow, producing a flat frontal key and a cool secondary cast from the screen",
 'tungsten','vhs')
add('super8_grain','retro','nature',
 "a sunlit field photographed as a frame lifted from home-movie footage, the edges soft and slightly vignetted",
 "unmodified late-morning sun from behind the subject creating a heavy flare across the frame, with no fill at all on the shadow side",
 'bright_sun','kodachrome')
add('sepia_vintage_studio','retro','formal',
 "a formal portrait studio set with a painted canvas backdrop and a carved wooden chair",
 "a single large window-shaped source from camera-left in the manner of a plate-camera portrait, with a dark cloth absorbing all fill on the right",
 'window','bw')
add('retro_diner_booth','retro','retro',
 "a red vinyl diner booth with chrome trim, a formica table and a blank-fronted jukebox behind",
 "warm overhead diner practicals mixed with cool daylight through the plate glass, the chrome throwing hard specular streaks",
 'tungsten','cinestill')
add('retro_arcade','retro','party',
 "a dim arcade aisle where cabinet screens glow with abstract shapes and no readable graphics",
 "cabinet screens as magenta and blue edge accents from behind, with a warm-white soft LED at the camera as the frontal key so no colour cast lands on the face",
 'practical','cinestill')
add('vinyl_shop','retro','retro',
 "a cramped record shop with plywood browsing bins of blank abstract sleeves and wood-panelled walls",
 "warm tungsten shop practicals overhead crossing with cool daylight down the aisle from the front window, a bounce card lifting the face to match the practical",
 'tungsten','portra')
add('rollerdisco','retro','party',
 "a wooden rink floor under a mirror ball, the far side of the hall dissolving into darkness",
 "a mirror ball scattering small hard points across the floor and body, a magenta wash from above, and a soft frontal LED keeping the face readable",
 'stage','cinestill')

# ============================================================ 3. CITY / STREET (13)
add('crosswalk_daylight','city','street',
 "a wide city crosswalk with its painted stripes running off behind, traffic stopped out of focus at the far kerb",
 "high sun with a broad bounce off the pale asphalt and a 1.2 m silver reflector just out of frame opening the eye sockets",
 'bright_sun','digital')
add('alley_brick_shade','city','street',
 "a narrow brick alley in full shade, fire escape and conduit running up the wall, a bright slot of street visible at the far end",
 "open shade as the base with light bouncing between the two brick walls into a soft directional wrap, and the bright alley mouth behind acting as a natural rim",
 'open_shade','digital')
add('subway_car_interior','city','street',
 "the inside of a moving subway car, empty seats either side, the dark tunnel strobing past the windows",
 "hard fluorescent ceiling tubes as the base with a small soft LED at the camera filling the eye sockets, and the tunnel lights streaking through the glass behind",
 'practical','highiso')
add('subway_platform','city','street',
 "a nearly empty platform at blue hour with a train arriving and genuinely motion-blurred along the far edge, every sign blank",
 "cool platform fluorescents from above, warm tungsten spill from the arriving train windows as a moving accent, and a small frontal LED lifting the face",
 'blue_hour','highiso')
add('rooftop_city_day','city','street',
 "a flat city rooftop in daytime, ventilation ducts and a low parapet in the foreground, a hazy skyline behind",
 "unobstructed midday sun from high camera-left with a large white bounce on the right filling the shadow side to within a stop and a half",
 'bright_sun','digital')
add('rooftop_city_night','city','night',
 "a city rooftop at night, a field of out-of-focus building and street lights filling the background",
 "a single warm LED panel just off camera-left a metre from the face as key, city ambience giving a cool blue edge on the right, and no fill on the shadow side",
 'practical','highiso')
add('neon_signage_street','city','night',
 "a dense street of stacked neon signage reduced to abstract colour shapes, wet pavement doubling every light",
 "the signage itself as background colour, a soft tungsten-balanced LED as frontal key, and a hard magenta kicker from behind the shoulder",
 'practical','cinestill')
add('bus_window_seat','city','street',
 "a window seat on a city bus, the glass carrying a faint reflection, the street sliding past outside",
 "daylight through the window as a large soft side key with the bus interior two and a half stops down, and a small bounce from the seat back",
 'window','portra')
add('taxi_backseat_night','city','night',
 "the back seat of a taxi at night, the city sliding past as streaks of colour through the glass",
 "passing street lights sweeping across the face as a moving key, the dashboard glow as a weak warm fill, and everything else left dark",
 'deep_night','cinestill')
add('parking_garage_concrete','city','street',
 "a concrete parking deck with painted bay lines, square columns receding and a bright open edge beyond",
 "sodium ceiling practicals overhead mixed with daylight flooding in from the open edge, the concrete floor returning a hard grey bounce",
 'practical','digital')
add('phone_booth_red','city','street',
 "a red telephone box on a quiet street corner, its glass panes reflecting the buildings opposite",
 "overcast daylight as the base with the red-painted frame bouncing warm colour back onto the skin, and a bounce card neutralising the cast on the face",
 'overcast','portra')
add('escalator_mall','city','street',
 "a long escalator in a glass-roofed shopping atrium, handrails and balustrades converging behind",
 "diffused daylight through the glass roof as a broad top source with polished floor bounce from below, and warm retail practicals as small background accents",
 'window','digital')
add('convenience_store_night','city','night',
 "the inside of a brightly lit convenience store at night, shelves of unbranded packaging, the dark street through the window",
 "banks of cool ceiling fluorescents as an even flat source, the window behind going almost black, and a bounce card opening the eye sockets",
 'practical','cinestill')

# ============================================================ 4. NATURE / SEASON (15)
add('cherry_blossom','nature','nature',
 "a path under cherry trees in full bloom with petals genuinely falling and a drift of them collected on the ground",
 "bright overcast spring light diffused by high cloud, the blossom canopy adding a warm-pink bounce from above, and a reflector below giving clear catchlights",
 'overcast','portra')
add('canola_field','nature','nature',
 "a canola field in full yellow flower with a narrow trodden path and a low green ridge behind",
 "late-morning sun from high camera-right with the yellow flowers throwing a strong warm bounce upward onto the jaw and neck",
 'bright_sun','velvia')
add('tulip_field','nature','nature',
 "ruled rows of tulips in solid colour blocks running to a distant tree line, packed earth underfoot",
 "sun low behind the flowers so the petals glow with transmitted light, a large white bounce in front as the key, and a black flag keeping the shadow side from going flat",
 'golden','velvia')
add('sunflower_field','nature','nature',
 "a narrow track cut through a tall sunflower field, heads at shoulder height all turned the same way",
 "hard noon sun softened by a 3 m diffusion frame overhead so the face sits two stops under the open sun, the pale track returning fill from below",
 'bright_sun','velvia')
add('lavender_field','nature','nature',
 "a lavender field at sunset, neat purple rows converging on a low open horizon",
 "sun a few degrees above the horizon directly behind the rows giving a warm rim through the hair, with a gold-white bounce at 45 degrees front-left as key and controlled veiling flare",
 'golden','portra')
add('pampas_grass_autumn','nature','nature',
 "a stand of pampas grass taller than head height, plumes catching the wind against a pale autumn sky",
 "low backlight through the plumes turning them translucent, a white bounce in front as key, and real wind moving every stem",
 'golden','portra')
add('ginkgo_avenue','nature','nature',
 "an avenue of ginkgo trees in late autumn, the path carpeted in fallen yellow leaves, trunks receding in a straight line",
 "low afternoon sun behind the canopy so the leaves transmit light as a golden overhead source, with a white bounce in front as the key and dappled highlights landing on the path",
 'golden','portra')
add('maple_forest','nature','nature',
 "a maple wood at the height of autumn colour, red and orange leaf litter deep underfoot, trunks dark and wet",
 "overcast light filtering through the canopy and picking up its colour, with a bounce card neutralising the red cast on the face",
 'overcast','velvia')
add('pine_forest_mist','nature','nature',
 "a dense pine forest in low morning mist, trunks fading rank by rank into grey, needles damp underfoot",
 "flat mist light as the base with real aerial perspective compressing contrast rank by rank, and a small soft source at the camera keeping the face a stop above the background",
 'overcast','digital')
add('bamboo_grove','nature','nature',
 "a bamboo grove with tall ruled green stems and a narrow gravel path running through it",
 "sun broken into hard vertical slots by the stems, a translucent silk overhead keeping the face evenly lit while the path stays dappled",
 'open_shade','velvia')
add('snow_field_white','nature','winter',
 "an open snow field with wind-sculpted drifts and a single line of real boot tracks leading away",
 "heavy overcast as an enormous overhead softbox with the snow returning almost as much light upward, shadows nearly absent, exposure pushed a stop over so the snow reads white",
 'snow_bright','mf')
add('frozen_lake','nature','winter',
 "a frozen lake surface with pressure cracks under the ice and a low dark treeline on the far shore",
 "cold overcast light from above with strong upward bounce off the ice, and a warm bounce card at the camera keeping the skin from going blue",
 'snow_bright','digital')
add('mountain_ridge_cloud','nature','travel',
 "a high mountain ridge with cloud moving below the eyeline and bare rock and short grass underfoot",
 "clear high-altitude sun intermittently softened by passing cloud, the pale rock bouncing clean fill, and no haze at all in the near field",
 'bright_sun','velvia')
add('meadow_wildflower','nature','nature',
 "a summer meadow of knee-high grass and small wildflowers with insects genuinely in the air",
 "late-afternoon sun from behind at a shallow angle rim-lighting every grass head, with a large white bounce as the frontal key",
 'golden','portra')
add('reed_marsh_sunset','nature','nature',
 "a reed marsh at sunset, a boardwalk running out over still water, reeds taller than the subject on both sides",
 "the sunset sky as a huge soft source from behind camera-left with the water returning a second warm bounce from below",
 'golden','portra')

# ============================================================ 5. WATER (11)
add('ocean_shore_day','water','water',
 "an open shoreline at midday, turquoise shallows breaking into white foam behind, real footprints in the dry sand",
 "hard overhead sun as key with enormous bounce off the pale sand opening the underside of the jaw, and a silver reflector putting light back into the eye sockets",
 'bright_sun','digital')
add('ocean_sunset','water','water',
 "a beach at sunset with a long wet-sand reflection band and the sun sitting on the water",
 "sun on the horizon directly behind the subject as a hard warm rim, with a gold reflector front-left as key and deep cool skylight filling the shadows",
 'golden','portra')
add('tropical_turquoise','water','swim',
 "clear shallow tropical water over pale sand, visible ripple patterns on the bottom and moving caustic light",
 "high sun above and behind camera with the water surface acting as a second source throwing caustics onto the skin, a polariser cutting surface glare",
 'bright_sun','velvia')
add('rocky_coast_spray','water','travel',
 "a black volcanic rock shelf with swell breaking and throwing real spray into the air",
 "overcast coastal light as the base with the white spray acting as a moving bounce, and a hard shaft of sun breaking through cloud onto the water behind",
 'overcast','digital')
add('pool_daylight','water','swim',
 "a still blue pool with stone coping, the water surface a third of the way up the frame",
 "midday sun from high camera-right with dense caustic reflections kicking up onto the collarbone, and a silver reflector at the waterline lifting the shadow side",
 'bright_sun','digital')
add('pool_night_underlit','water','swim',
 "a pool at night lit entirely from beneath the water, the deck and sky around it almost black",
 "the submerged pool lights as the only real source, throwing cyan light upward across the face and ceiling-less dark above, with a quarter-stop frontal fill",
 'deep_night','highiso')
add('underwater_float','water','swim',
 "fully submerged in clear water with the surface visible overhead as a rippling silver ceiling and bubbles rising",
 "sun refracting through the moving surface into shifting bright bands across the body, with blue-green attenuation increasing with depth",
 'underwater','digital')
add('bathtub_petals','water','loungewear',
 "a white enamel tub of still water with loose flower petals floating on the surface, tiles behind",
 "a single window to camera-left as a soft side key with the water returning a weak upward bounce, the bathroom corner two stops down",
 'window','portra')
add('rain_wet_street','water','rain',
 "a city street in steady rain with wet asphalt holding coloured reflections and water running at the kerb",
 "flat overcast daylight as the base plus a small on-axis LED just above the lens giving a clean catchlight and picking the falling rain out as bright streaks",
 'blue_hour','cinestill')
add('waterfall_rock','water','travel',
 "a waterfall dropping into a rock pool with real mist in the air and wet black stone underfoot",
 "open shade with the white water acting as a large natural bounce, and a hard sunbeam striking the spray behind the subject",
 'open_shade','digital')
add('harbor_promenade','water','travel',
 "a harbour promenade at midday with moored masts across the water and worn stone paving in the foreground",
 "high sun with broad bounce off the pale stone plus thousands of specular points on the water rendering as circular background bokeh, a scrim dropping the key a stop",
 'bright_sun','digital')

# ============================================================ 6. INTERIOR / LIFESTYLE (13)
add('bedroom_morning_light','interior','loungewear',
 "an unmade bed with crumpled white linen beside a tall window, a sheer curtain half drawn",
 "a north-facing window a metre to camera-left as a large soft key with real falloff across the bed, a white wall returning a stop and a half of fill",
 'window','portra')
add('bedroom_night_lamp','interior','loungewear',
 "a bedroom at night with one bedside lamp lit and the rest of the room falling away into dark",
 "a single warm tungsten bedside lamp as the only key a half metre from the face, its falloff steep, with the far wall three stops down",
 'tungsten','highiso')
add('kitchen_breakfast','interior','interior',
 "a bright domestic kitchen with a tiled splashback, a wooden counter and unbranded jars on an open shelf",
 "a large window behind the counter as a soft backlight with a white bounce at the camera as the frontal key, and warm reflections off the wooden worktop",
 'window','portra')
add('living_room_sofa','interior','loungewear',
 "a low linen sofa in a pale room with a woven rug and a coffee table at the frame edge",
 "diffused daylight from a wide window camera-right wrapping across the sofa, the opposite wall returning soft fill, no artificial source at all",
 'window','digital')
add('bathroom_mirror','interior','loungewear',
 "a small tiled bathroom with a round mirror, the reflection carrying part of the subject and part of the room",
 "a vanity strip light above the mirror as a hard top key with the white tiles bouncing a strong fill, and a cooler daylight spill from the doorway",
 'window','digital')
add('closet_wardrobe','interior','studio',
 "an open wardrobe of hung garments in ordered colour, shoe boxes stacked and a full-length mirror to one side",
 "a soft overhead source plus a practical strip inside the wardrobe throwing a warm secondary glow across the hanging fabric",
 'tungsten','digital')
add('library_bookshelf','interior','formal',
 "a wood-panelled library of tall shelves whose spines read as blank or abstract, a long reading table and dust in the air",
 "a hard diagonal sunbeam through a high window forming a visible shaft, with a bounce card returning fill so the face sits a stop under the beam",
 'window','portra')
add('piano_room','interior','formal',
 "a bare room with a black grand piano, its lid raised, and a worn parquet floor",
 "a tall window behind the piano as a soft backlight catching the lacquer as a long specular streak, with a bounce card as the frontal key",
 'window','bw')
add('dance_practice_room','interior','dance',
 "a dance studio with a full mirrored wall, a wooden barre and marks on the sprung floor",
 "banks of even ceiling fluorescents as a flat shadowless base, the mirror doubling the light and returning a second source from behind the camera",
 'window','digital')
add('recording_booth','interior','street',
 "a small vocal booth with acoustic foam panels, a large-diaphragm microphone and a music stand",
 "a single warm practical above the microphone as a hard top key, the foam absorbing all bounce so the shadows fall away fast",
 'tungsten','highiso')
add('art_studio_paint','interior','interior',
 "a working painter's studio with stretched canvases, paint-marked boards and jars of brushes in cloudy water",
 "a large north window as a soft side key with the pale primed canvases returning clean fill, and the far corner two stops down",
 'window','portra')
add('pottery_studio','interior','interior',
 "a ceramics studio with wooden shelves of unfinished grey-brown pieces and a worktable filmed with dry clay dust",
 "a single large west window a metre to camera-left as key with visible falloff, warm bounce off the wood and raw clay",
 'window','mf')
add('laundromat','interior','street',
 "a spotless pastel laundromat with a row of circular machine doors, folded fabric stacks and blank control panels",
 "banks of warm-white fluorescent tubes overhead as a broad even source, a bounce board at waist height opening the eye sockets",
 'practical','digital')

# ============================================================ 7. CAFE / FOOD (8)
add('cafe_window_seat','cafe','cafe',
 "a window seat in a small cafe with a marble table, a steamed glass pane and the street beyond out of focus",
 "the window as a large soft side key with the cafe interior two stops down, and a warm bounce off the pale table top",
 'window','portra')
add('cafe_terrace','cafe','cafe',
 "an outdoor cafe terrace with a rattan chair, a small table and parasols blurred behind",
 "sun filtered through a cream canvas awning acting as a giant overhead softbox, warm bounce returning off the pale table, direct sun only on the far wall",
 'open_shade','portra')
add('bakery_morning','cafe','cafe',
 "the pavement outside a cream-painted bakery with plate glass, unbranded loaves on trays and a worn kerb",
 "low golden morning sun raking down the street from camera-left plus warm tungsten spill through the glass as a second key, the shopfront returning soft fill",
 'golden','portra')
add('ice_cream_parlor','cafe','cafe',
 "a pastel ice-cream parlour with a chrome counter, round stools and a blank menu board",
 "even cool ceiling light as the base with the pastel surfaces bouncing their own colour, and a neutral bounce card holding the skin true",
 'practical','digital')
add('ramen_counter_night','cafe','night',
 "a narrow ramen counter at night, steam rising, wooden stools and a cloth curtain at the entrance",
 "warm tungsten practicals directly overhead as a hard top key, real steam diffusing the light, and the street outside almost black",
 'tungsten','cinestill')
add('rooftop_picnic','cafe','cafe',
 "a city rooftop with a plain woven blanket, unmarked cups and a low uneven skyline behind",
 "sun barely above the skyline behind camera-right as a low peach key, cool open shade filling from the sky above, with genuine morning haze on the far buildings",
 'golden','portra')
add('flower_cafe','cafe','cafe',
 "a cafe interior packed with hanging dried flowers and potted greenery, a timber counter behind",
 "diffused daylight through a large front window filtered twice by the hanging stems, with a bounce card neutralising the warm cast on the face",
 'window','portra')
add('tea_house_traditional','cafe','traditional',
 "a traditional wooden tea house with paper screens, a low table and a tatami or timber floor",
 "soft daylight through the paper screens as an enormous even source with the dark timber absorbing most of the bounce, so contrast stays low but the shadows read deep",
 'window','mf')

# ============================================================ 8. HIGH FASHION EDITORIAL (13)
add('couture_marble_hall','fashion','couture',
 "a vast marble hall with veined stone walls, a polished floor and tall unadorned openings",
 "daylight falling from high clerestory windows as a steep top source, the pale marble returning an unusually clean fill from every direction",
 'window','mf')
add('baroque_palace_room','fashion','couture',
 "a baroque salon with gilded mouldings, a painted ceiling and heavy silk drapes drawn back from tall windows",
 "tall windows camera-left as the key with the gilding throwing warm specular accents, and a crystal chandelier above adding small hard points",
 'window','mf')
add('brutalist_concrete','fashion','couture',
 "a brutalist concrete structure of raw board-marked walls, deep recesses and hard geometric shadow",
 "hard direct sun cutting across the concrete into a sharp-edged graphic shadow, with a single bounce opening the face just enough to hold detail",
 'bright_sun','digital')
add('glass_skyscraper_lobby','fashion','couture',
 "a glass office lobby of mirrored columns, a polished stone floor and a revolving door behind",
 "daylight flooding through the full-height glazing with the mirrored columns multiplying it into several secondary sources, and the stone floor bouncing from below",
 'window','digital')
add('art_gallery_white','fashion','couture',
 "a minimalist gallery room with large abstract colour-field canvases and polished concrete underfoot",
 "ceiling track spots aimed at the canvases with a separate soft frontal source on the subject, and a large white wall returning even fill",
 'window','digital')
add('industrial_warehouse','fashion','street',
 "an empty warehouse with steel trusses, a dusty concrete floor and tall grimy windows down one side",
 "a row of high windows as a hard raking side light with real dust in the beams, the opposite wall too far away to return any fill",
 'window','bw')
add('scaffolding_construction','fashion','street',
 "a scaffolded facade of steel tube and timber boards with plastic sheeting moving in the wind",
 "direct sun broken into hard bars by the scaffold boards, with a bounce card keeping the face out of the slats and evenly lit",
 'bright_sun','digital')
add('runway_backstage','fashion','couture',
 "a backstage area of mirrors ringed with bulbs, garment rails and taped floor marks",
 "rings of warm tungsten mirror bulbs as a flat frontal key with cool worklights overhead as a second colour, and the room behind busy but dark",
 'tungsten','cinestill')
add('atelier_mirror','fashion','couture',
 "a tailoring atelier with a three-panel mirror, a dress form and bolts of cloth stacked behind",
 "a large north window as the key with the three mirror panels returning it as three distinct soft sources, giving unusually even wrap",
 'window','mf')
add('red_carpet_flash','fashion','formal',
 "a step-and-repeat position on a carpet with a plain unbranded backdrop wall behind",
 "a wall of press flashes firing at once from directly in front, flattening the face and throwing a hard multiple shadow onto the backdrop",
 'strobe','digital')
add('opera_box_velvet','fashion','formal',
 "a gilded opera box with deep red velvet, a brass rail and the dark auditorium falling away behind",
 "warm house lights as a low ambient base with a single soft key from the stage side, and the velvet absorbing almost all bounce",
 'tungsten','cinestill')
add('hotel_suite_luxury','fashion','couture',
 "a high hotel suite with floor-to-ceiling glass, pale furniture and the city laid out below",
 "the city-facing glazing as an enormous soft source with the pale interior bouncing fill, and warm recessed practicals as small background accents",
 'window','digital')
add('staircase_spiral_marble','fashion','couture',
 "a spiral marble staircase shot so the balustrade curves away in a continuous line",
 "a skylight far above throwing a soft vertical shaft down the stairwell, the marble carrying it down as a series of fading bounces",
 'window','mf')

# ============================================================ 9. NIGHT / MOOD (12)
add('noir_venetian_blinds','night','formal',
 "a bare room at night where venetian blinds throw hard horizontal bars across the wall and the subject",
 "a single hard source outside the window casting the blind pattern across the face and body, with no fill at all on the shadow side",
 'tungsten','bw')
add('candlelit_table','night','formal',
 "a dark dining table with a cluster of real candles and nothing else lit in the room",
 "the candle flames as the only source from below the eyeline, flickering and warm at about 1900K, with steep falloff into black a metre away",
 'deep_night','highiso')
add('car_headlight_beam','night','street',
 "an empty road at night with a car's headlights raking across the tarmac and real dust in the beams",
 "the headlights as a hard low key throwing a long shadow behind, with the tail lights adding a weak red rim and nothing else lit",
 'deep_night','cinestill')
add('streetlamp_fog','night','night',
 "a quiet street in genuine fog where each streetlamp becomes a visible cone of light",
 "a sodium streetlamp above and behind as a hard backlight making the fog volumetric, with a small soft LED at the camera filling the face by two stops",
 'deep_night','cinestill')
add('neon_alley_rain','night','rain',
 "a narrow alley in rain, neon reflections running in long verticals down the wet ground",
 "neon as background colour only, a soft tungsten-balanced key on the face from camera-left, and rain streaks picked out by a hard backlight",
 'practical','cinestill')
add('rooftop_moonlight','night','night',
 "a rooftop under a clear night sky with a pale moon low in frame and a dim skyline below",
 "cool moonlight as a soft top-back source at about 4100K with a single warm terrace lamp as a low accent, overall exposure kept genuinely dark",
 'deep_night','highiso')
add('observatory_stars','night','night',
 "an observatory terrace at night with a white dome behind and a realistic star field of varying magnitudes",
 "cool ambient starlight and a very soft LED at the camera lifting the face a stop and a half, with one warm terrace lamp from camera-left",
 'deep_night','highiso')
add('bonfire_beach_night','night','night',
 "a beach at night with a real driftwood fire, sparks rising and the sea invisible beyond",
 "the fire as the only key from below and camera-right, flickering at about 1800K, with the sky and sea left entirely black",
 'deep_night','highiso')
add('tunnel_sodium_light','night','street',
 "a road or pedestrian tunnel lined with sodium lamps receding in a straight line of repeating pools",
 "sodium lamps overhead as a repeating hard top key at about 2000K with the tiled walls bouncing orange, and a neutral bounce card holding the skin true",
 'practical','cinestill')
add('club_strobe','night','party',
 "a dark club floor with a haze of atmosphere in the air and the crowd only as silhouettes",
 "moving head lights cutting hard coloured beams through the haze with a short strobe pulse freezing the motion, and a soft frontal fill keeping the face readable",
 'stage','highiso')
add('karaoke_room_neon','night','party',
 "a small karaoke room with buttoned vinyl seating, a blank screen and LED strips along the ceiling line",
 "coloured LED strips as background wash with a warm soft LED at the camera as the frontal key, and the screen glow as a weak cool accent",
 'practical','cinestill')
add('hotel_window_cityglow','night','loungewear',
 "a dark hotel room with the curtains open and the city glowing beyond the glass",
 "the city itself as the only real source through the window, giving a soft low-level key from one side, with the room interior almost entirely dark",
 'deep_night','highiso')

# ============================================================ 10. CONCEPT / THEMATIC (13)
add('school_classroom','thematic','school',
 "an empty classroom in the afternoon with rows of wooden desks, a blank blackboard and chalk dust in the air",
 "low afternoon sun through a bank of windows camera-left throwing long desk shadows, with the pale wall opposite returning soft fill",
 'golden','portra')
add('school_rooftop','thematic','school',
 "a school rooftop behind a wire fence with a water tank and a hazy town below",
 "clear afternoon sun from high camera-right with the concrete deck bouncing a hard fill, and the wire fence throwing a faint diamond shadow",
 'bright_sun','superia')
add('sports_track_field','thematic','sport',
 "a red running track with painted lane lines curving away and empty stand seating behind",
 "flat bright overcast as an even source with the red track bouncing warm colour upward, and a bounce card neutralising the cast on the face",
 'overcast','digital')
add('tennis_court','thematic','sport',
 "a hard tennis court with a taut net, painted service lines and a green windbreak fence behind",
 "high midday sun with the pale court surface returning a strong flat bounce from below, and a scrim dropping the key a stop over the subject",
 'bright_sun','digital')
add('basketball_court_night','thematic','sport',
 "an outdoor basketball court at night with a chain net, painted key markings and the city dark beyond the fence",
 "two floodlights on poles as hard crossed keys throwing double shadows on the tarmac, with no fill and the background falling to black",
 'practical','highiso')
add('boxing_gym','thematic','sport',
 "a worn boxing gym with a canvas ring, hanging bags and chalk and tape marks on the floor",
 "high industrial practicals directly above the ring as a hard top key with real dust in the air, the gym beyond the ropes three stops down",
 'tungsten','bw')
add('ballet_studio_barre','thematic','dance',
 "a ballet studio with a wooden barre, a mirrored wall and rosin dust worked into the floor",
 "tall windows along one side as a soft raking key with the mirror returning it as a second source, and the sprung floor bouncing a pale fill",
 'window','mf')
add('equestrian_stable','thematic','travel',
 "a timber stable yard with swept cobbles, tack hung on hooks and straw in the corners",
 "daylight through the open stable doors as a hard directional shaft with the dark timber interior absorbing most of the bounce, dust visible in the beam",
 'window','portra')
add('sailing_yacht_deck','thematic','travel',
 "the teak deck of a yacht under sail with chrome rail, coiled rope and open sea behind",
 "full sun overhead with a strong secondary bounce off the white deck and the water, producing flickering reflected light along the jawline",
 'bright_sun','mf')
add('airport_departure','thematic','travel',
 "an airport departure hall with a wall of glazing, a polished floor and all signage blank",
 "daylight through the full-height glass as a broad soft source with the polished floor returning fill, and cool ceiling practicals as a weak second layer",
 'window','digital')
add('train_compartment_vintage','thematic','travel',
 "a vintage train compartment with buttoned upholstery, a brass luggage rack and landscape sliding past the window",
 "the window as a large moving soft key with the compartment two stops down, and a warm reading lamp adding a small accent",
 'window','portra')
add('amusement_park_ferris','thematic','party',
 "an amusement park at dusk with a ferris wheel lit behind and painted railings in the foreground",
 "the wheel's own bulbs as background points at about 2600K with a soft frontal LED as the key, and the last blue light in the sky as ambient fill",
 'blue_hour','cinestill')
add('carousel_night','thematic','party',
 "a carousel at night with mirrored panels, painted horses and warm bulbs ringing the canopy",
 "the carousel's own warm bulbs as a wrapping practical key with the mirrored panels multiplying them, and a long enough exposure for the ride behind to blur",
 'practical','cinestill')
