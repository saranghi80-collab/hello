# The Long Quiet

A lonely, full-scale space exploration game for the browser. You are Surveyor Eleven of the Outer Survey Program, alone in a one-person ship called TERN, mapping stars nobody will ever visit after you.

**Play:** open `index.html` in a desktop browser with WebGL 2 (Chrome, Edge, Firefox or Safari 17+). It runs from the file system; nothing needs installing. Keyboard and mouse, headphones recommended.

## What is in it

- **A real-scale galaxy.** A four-arm spiral 100,000 light-years across, populated lazily in 10 ly sectors with a realistic mix of red dwarfs, white dwarfs, giants, brown dwarfs, and the occasional neutron star or black hole. Sol is where it belongs, 26,000 ly from the core.
- **Real-scale star systems.** Planets on Keplerian orbits, spinning on tilted axes, with tidally locked moons. Distances are true distances, in metres.
- **Seamless landings.** Rocky and icy worlds are cube-sphere quadtrees generated on worker threads in double precision. You can fly from orbit to the ground without a loading screen. Craters, ice lineae, dune fields, canyons, lava fissures, oceans.
- **Light done carefully.** HDR rendering with filmic tone mapping and physically based bloom. Exposure follows how far you are from the star. Atmospheres use single scattering, so you get blue skies, butterscotch Martian dust and red sunsets. There are cloud decks, ringed giants that cast and catch shadows, eclipses, and light reflected off nearby giants.
- **A Milky Way computed for where you are.** The sky is raymarched through the same density model the galaxy uses, and every star within 100 ly is drawn individually, so the sky shifts as you travel.
- **Relativistic jumps.** The drive doesn't go faster than light. It pushes the ship to within a hair of light speed, and the starfield crowds forward under aberration and Doppler shift. A few weeks pass aboard and decades pass at home.
- **Messages from home that travel at light speed.** Each one arrives only when light from Sol could have caught up with you. The farther out you go, the slower they come.
- **Ilse Marrow's beacons.** Surveyor Seven went out decades before you and left a trail of beacons. You can follow them to the end of her route, or ignore them.
- **What happens if you fly into things.** Air has real density, so drag and entry heating follow your speed: come in fast and a plasma sheath wraps the hull, too fast and you burn up. Gas giants have no surface; below the cloud tops it gets dark, hot and crushing, with lightning in the murk, until the hull gives way somewhere past 100 bar. Hitting the ground at speed releases the energy it should, and flying into a star ends the way you would expect.
- **Erebus, a black hole you can reach.** A 60,000 solar mass hole about 13 ly from the start, with a ray-traced accretion disk, gravitational lensing, Doppler beaming and a photon ring. Near it the tides pull, your clock runs slow against home, and no drive can hold you inside three Schwarzschild radii. You can cross the horizon if you want to.
- **J1407b, the super-Saturn.** The real J1407 system, placed where it actually is, 434 light-years away toward Centaurus. Its planet is about 20 times the mass of Jupiter and still glows faintly with the heat of its formation. Its rings reach 90 million km (0.6 AU), roughly 200 times the span of Saturn's, with dozens of separate rings and a broad gap where a moon orbits. When the rings passed in front of the star in 2007, they dimmed it for 56 days.
- **Things left behind.** Derelict probes, wrecks, and very occasionally a structure no human built.
- **Generative sound.** A slow ambient score, ship hum, wind on worlds that have air. All of it is synthesised in the browser.

Progress saves automatically in the browser (localStorage).

## Controls

| Action | Keys |
| --- | --- |
| Steer | Mouse (click the view to capture it; drag if capture is unavailable) |
| Throttle | W / S, X for zero |
| Roll | A / D |
| Strafe, climb, descend | Q / E, R / F |
| Cruise drive | Tab |
| Scan | Space (tap to pulse-scan the system, hold on a target to survey it) |
| Target ahead / autopilot to target | T / P |
| Landing gear / floodlight | G / L |
| Jump to plotted star | J |
| Galaxy map / system map / journal | M / N / K |
| Search stars and planets | / |
| Camera | C, mouse wheel to zoom, right-drag to look around |
| Time compression (landed) | , and . |
| Help / pause | H / Esc |
| Cheats menu / speed boost | ` or F2 / = and - |

### Flying, briefly

Cruise drive speed scales with your distance to the nearest surface. Point at a world and the ship slows itself on approach, from a thousand times light speed in open space to a few kilometres per second near the ground. Drop to flight mode, lower the gear and descend slowly to land.

Watch your speed in air: the cruise governor keeps you to a survivable entry, but flight mode will let you dive as hard as you like.

To refuel, skim close to a star or through a gas giant's upper atmosphere, and keep an eye on your heat. The drive is limited to 15 ly per jump; the galaxy map can plot a route through stars you can refuel at.

### Searching

Press **/**, or click the search box at the top of the map, and type a name: a star, a planet in the current system, or a known place such as Sol, Earth, Erebus or J1407b (also found as "rings" or "super saturn"). Arrow keys and Enter pick a result. Picking a star selects it as the jump target, or offers a route if it is out of range. Picking a planet in another system does the same, then targets that planet when you arrive. Long routes are fine: J1407 is about 36 jumps away, or one with the jump-anywhere cheat.

### Cheats

Press **`** (backquote) or **F2**, or pick Cheats from the pause menu. Cheat settings are saved with your other settings.

- **Speed boost**, ×10 up to ×100,000. Raises the cruise drive's ceiling from 2,400 c to as much as 240 million c, and gives flight mode enough thrust to reach a large fraction of light speed. Change it in flight with **=** and **-**. The drive still stops you short of any surface, but air at boosted speeds will burn you up.
- **Jump anywhere.** No 15 ly limit and no mass lock.
- **Fast jumps.** The jump sequence runs four times faster.
- **Infinite fuel.**
- **Invincible.** No heat, pressure, tidal or impact damage. The event horizon of a black hole still wins.

## Building

The playable `game.js` is committed, so building is only needed after changing `src/`.

```sh
npm install
npm run build      # writes game.js and dist/artifact.html
```

`src/` layout:

- `world/` galaxy model, star systems, story systems (Sol, the start, Marrow's route)
- `render/` renderer, post-processing, sky, star and planet renderers, terrain quadtree and generator, ship model
- `game/` flight model and reference frames, jump drive, game loop
- `ui/` HUD, maps, panels; `audio/` synthesised sound; `story/` all the text
