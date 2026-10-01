# Moon Odyssey

A fan-made, explorable 3D platformer inspired by *Super Mario Odyssey*, built with [three.js](https://threejs.org/). Run, flip and cap-throw through five kingdoms, capture enemies with Cappy, beat three bosses and collect Power Moons to fuel the Odyssey.

There are no image or audio files. Every model, texture, song and sound effect is generated in code.

## Play

Open [`odyssey/index.html`](odyssey/index.html) in a recent desktop or mobile browser (Chrome, Edge, Firefox or Safari). The game is a single self-contained file, so it runs straight from disk without a server. Progress saves automatically in the browser.

| Action | Keyboard & mouse | Gamepad | Touch |
| --- | --- | --- | --- |
| Move | W A S D | Left stick | Left stick |
| Camera | Mouse (click the game to lock it) or arrow keys; wheel zooms | Right stick | Drag the right side |
| Jump (hold for height) | Space | A / B | A |
| Throw Cappy (hold to keep him out) | Left click, F or J | X / Y | Y |
| Crouch, ground pound, release a capture | Shift or C | ZL / ZR | ZL |
| Talk, board the Odyssey | E | RB | ✋ |
| Center the camera | Q or R | LB | |
| Pause menu · Map | Esc or P · M or Tab | Start · Back | ❚❚ |

### Moves

- **Double and triple jump**: jump again just as you land while running.
- **Long jump**: run, crouch, then jump.
- **Backflip**: crouch while standing still, then jump.
- **Side flip**: reverse direction mid-run and jump during the skid.
- **Ground pound**: crouch in midair. Jump right after landing for a ground-pound jump.
- **Dive**: throw Cappy during a ground pound.
- **Cap jump**: throw Cappy in the air, then jump or dive into him to bounce.
- **Wall slide and wall jump**, **ledge grab**, **roll** (crouch and throw), **swimming**.
- **Capture**: throw Cappy at an enemy to take it over. Each creature has its own ability.

## What's in it

| Kingdom | Highlights | Boss or finale |
| --- | --- | --- |
| Meadow Kingdom | Waterfall plateau, Old Tower spiral, frog lake, ancient ruins, jump rope, sky garden course | King Goombo: knock off his helmet with Cappy, then stomp |
| Dune Kingdom | Great Pyramid, upside-down floating pyramid, oasis town, secret chamber, Bullet Bill flights | Sandstone Sentinel: capture its stuck fists and punch its face |
| Frost Kingdom | Shiverpeak hike, slippery ice, freezing water, snowman fetch quest, ice crystals, ice cave | Penguin race around the mountain |
| Cinder Keep | Bowser's lava fortress: Thwomp bridge, fire bars, lava-bubble swimming, volcano | Bowser, followed by the ending |
| Lunar Kingdom (post-game) | Low gravity, craters, moon spires, a sky course under the home planet | Grand celebration at 60 moons |

- **About 80 Power Moons** (multi moons count as three), plus regional coins, moon shards, hidden blocks, sparkling ground-pound spots, timer challenges and secret pipes.
- **Captures**: stackable Goomba towers, high-jumping Frogs, flyable Bullet Bills, charging Chain Chomps, lava-swimming Lava Bubbles and the golem's fists.
- **The Odyssey** travels between kingdoms once each one is powered with enough moons.
- **Map** of each kingdom with warps between activated checkpoint flags, plus a moon checklist and an outfit shop.
- **Original soundtrack** with a separate theme for each kingdom, made by a small Web Audio sequencer.
- Graphics quality adjusts automatically. Options include volume, camera sensitivity, axis inversion and quality.

## Development

```sh
cd odyssey
npm install
npm run build   # writes odyssey/index.html (single file, minified)
npm run dev     # rebuilds on every change (unminified)
```

The source is plain ES modules in `odyssey/src`:

- `core/`: input, Web Audio synthesis, music sequencer, save data, math
- `physics/`: colliders (boxes, ramps, cylinders, domes, heightfields), the spatial hash and the kinematic character body
- `actors/`: Mario's model, animation, moveset and camera, plus Cappy
- `entities/`: collectibles, blocks and props, enemies and captures, bosses, NPCs and minigames
- `gfx/`: sky, water and lava, grass, particles, materials and prop meshes
- `level/` and `kingdoms/`: the level builder and one file per kingdom
- `ui/`: HUD, menus, map, touch controls and styles

## New Donk Moon Run

The repository also contains the earlier [`index.html`](index.html): a short looping canvas animation of the Odyssey arriving in New Donk City, a coin run, a cap jump and a moon get under festival fireworks. It has controls for pause, replay, slow motion and sound, plus a beat timeline.

---

Unofficial, non-commercial fan tribute. Not affiliated with or endorsed by Nintendo.
