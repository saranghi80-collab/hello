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
| Camera | C, mouse wheel to zoom, right-drag to look around |
| Time compression (landed) | , and . |
| Help / pause | H / Esc |

### Flying, briefly

Cruise drive speed scales with your distance to the nearest surface. Point at a world and the ship slows itself on approach, from a thousand times light speed in open space to a few kilometres per second near the ground. Drop to flight mode, lower the gear and descend slowly to land.

To refuel, skim close to a star or through a gas giant's upper atmosphere, and keep an eye on your heat. The drive is limited to 15 ly per jump; the galaxy map can plot a route through stars you can refuel at.

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
