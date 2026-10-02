// Words. Messages from home travel at the speed of light, so they reach you only once the
// light from Sol catches up: a message sent N years after launch arrives when
// (years elapsed at home) - (your distance from Sol in ly) >= N.

export const DEPARTURE_YEAR = 2291;

export const INTRO = [
  'Outer Survey Program · Vessel TERN · Surveyor Eleven',
  'You left Sol in 2291.',
  'You slept while the ship crossed nine light-years. At home, almost ten years went by.',
  'This is the first star on your list. There will be many more.',
  'No one is coming. No one was ever meant to.',
];

export const HOME_MESSAGES = [
  { year: 0.05, from: 'Outer Survey Operations', text: 'TERN, this is Ops. Clean telemetry through the boost phase, and your sleep cycle started on schedule. Half the night shift stayed late to watch you go. Good luck, Eleven.' },
  { year: 0.4, from: 'Mara', text: "I keep writing these and deleting them. It's raining here. I walked past your old flat and somebody has put a red bicycle on the balcony. I hope it's cold and quiet where you are, the way you like it. I hope you sleep well." },
  { year: 1.5, from: 'Outer Survey Operations', text: 'Routine traffic. Surveyor Nine reports a completed route and a frozen water world worth a second look. Surveyor Seven, Marrow, is still silent. Her last relay reached us in 2240. We are keeping her channel open.' },
  { year: 4, from: 'Mara', text: "I had a daughter. Her name is June. She has your ears, which seems unfair to her. I told her you were out mapping stars, and she asked if you'd be back for her birthday. I said probably not this one." },
  { year: 9, from: 'Mara', text: "June is nine and has decided you keep a lighthouse somewhere very far away. I haven't corrected her. Dad died in the autumn. It was peaceful. He asked whether the signal had reached you yet. I said it would, eventually. So here it is, eventually." },
  { year: 16, from: 'Outer Survey Operations', text: "The funding review is over. The program continues with fewer staff. Some of us are new. We've read your file and all of your reports. We are still here." },
  { year: 24, from: 'June', text: "Hi. It's June. Mum says I'm old enough to write to you myself. I'm studying orbital mechanics, which she says is your fault. I don't know what to say to someone who might read this in fifty years. The sea is very blue today. That's what I wanted to tell you." },
  { year: 33, from: 'Outer Survey Operations', text: 'Notice: Outer Survey Operations moves to automated relay at the end of this fiscal year. Your data will still be received and archived. Thank you for everything you have sent us.' },
  { year: 41, from: 'June', text: "Mum died this spring. She kept your picture on the kitchen wall, the one from the launch where you're squinting. I've left it there. I hope the light where you are is kind. I hope you found something out there worth the trip." },
  { year: 58, from: 'OSP Automated Relay', text: 'OUTER SURVEY RELAY · AUTOMATED · NO OPERATOR ON DUTY. TELEMETRY RECEIVED AND ARCHIVED. NEXT SCHEDULED MAINTENANCE: NONE.' },
  { year: 77, from: 'June', text: "I'm older now than Mum ever got. I don't know if you're alive, or if you'll read these all at once. I read your survey reports sometimes. You write about planets as if they were people you'd met. I don't think you're lonely in the way we used to worry about. I hope that's true." },
  { year: 105, from: 'Sol Archive', text: "This is the Sol Archive, Long Memory Project. We found the Outer Survey records during a migration. Eleven surveyors, and one still transmitting: you. We don't know if this will reach you. We are listening on your frequency. Whatever you find, we would like to hear it." },
  { year: 160, from: 'Sol Archive', text: "The Archive again. Your reports from the outer beacons arrived. A class of students reads them aloud every year on the day you launched. They asked me to tell you the names they've given your planets. I'm not going to. You'll have your own." },
  { year: 260, from: 'OSP Automated Relay', text: 'CARRIER ONLY. NO MESSAGE.' },
];

// Surveyor Seven's beacons. {next} and {dist} are filled in from the route.
export const ILSE_LOGS = [
  "Surveyor Seven, Ilse Marrow, vessel PETREL. Year eleven of my route. If you can hear this, you came out here too, and you're probably on your own. I've started leaving these behind me. I don't really know why. Maybe so the route has a voice in it. The next one is at {next}, about {dist} light-years on. I'll leave the light on.",
  "The first year out I talked to the ship all the time. The second year, less. Now I mostly talk to the planets. The one here has a ring you could get lost in. I watched a shadow cross it for an hour, which is not survey work, and I don't care. Next beacon: {next}, {dist} light-years.",
  "I did the arithmetic today. Everyone I knew when I left is old now, or gone. That should feel like grief, and some days it does. Other days it feels like a door closing quietly behind me, and the room I'm standing in is enormous and full of light. On to {next}.",
  "The relay from home stopped reaching me three systems back. I'm moving faster than the news. It's strange to outrun your own people. The silence isn't empty, though. It hums. You'll know what I mean by now. {next} is next, {dist} light-years.",
  "I landed today and went nowhere. There's no airlock on these ships, so you sit in the cockpit and look. So I sat. The horizon was very close. The stars didn't twinkle. For six hours nothing moved except the light. It might have been the best day I've had in years. {next}, when you're ready.",
  "There's an old probe a few systems from here, one of the early automated ones, still tumbling. Somebody built it in a lab with windows and coffee and arguments. It came all this way to be the only made thing for light-years in any direction. I know how it feels. Keep heading for {next}.",
  "My scoop is running hot. The repairs are holding, mostly. I'm not frightened, which surprises me. I keep thinking someone will come after me. Maybe you. If you're reading this: hello. I'm glad it was you. {next} is {dist} light-years on. I'll try to make it.",
  "Last beacon before the end, I think. At {next} there's a moon around a ringed giant, with a hill on the near side where the planet never sets. I'm going to land there. If the drive holds, I'll keep going. If it doesn't, that's not a bad place to stop. Come and see the view.",
  "PETREL here. If you're reading this, you found me, and you came the whole long way. The drive didn't hold, and that's all right. I've had a lot of time to sit with the view, and here's what I learned, for what it's worth: it's a long quiet, but it isn't empty. You're part of what's out here now. Sit for a while. Look up. Then go on, or don't. Either is fine. — I. M.",
];

export const PROBE_LOGS = [
  'LANTERN-4 · AUTONOMOUS SURVEY PROBE · LAUNCHED 2187. POWER CRITICAL. FINAL CATALOGUE ENTRY: THREE PLANETS, NO BIOSIGNATURES. TRANSMITTER DEGRADED. TRANSMITTING ANYWAY.',
  'WAYFARER-11 · DEEP PROBE. ATTITUDE CONTROL LOST IN 2231. IMAGING CONTINUES. 41,207 IMAGES QUEUED FOR TRANSMISSION. NONE SENT.',
  "HERON-2 · RECORDED GREETING, PLAYING ON LOOP: 'Hello from the people of Earth. We made this to say we were here. We hope whoever finds it is well.'",
  'CORVID-6 · SPECTROMETER ONLINE · REPORTING TO NO ONE. ATMOSPHERE OF NEAREST BODY ANALYSED. ADDED TO CATALOGUE. CATALOGUE SIZE: 1,904 ENTRIES.',
  'PATHWARD-9 · AUTONOMY CORE NOTE: NO COMMAND RECEIVED IN 61 YEARS. SURVEY CONTINUED AS LAST INSTRUCTED. PLEASE ADVISE.',
  'LANTERN-12 · MICROMETEOROID DAMAGE, 2219. THREE OF FOUR SOLAR ARRAYS OFFLINE. TOO FAR FROM ITS STAR TO MAKE USEFUL POWER. STILL LISTENING.',
  'ARIADNE-3 · DATA RELAY. BUFFER FULL SINCE 2244. OLDEST STORED PACKET: A BIRTHDAY MESSAGE ADDRESSED TO A TECHNICIAN AT TSIOLKOVSKY STATION. UNDELIVERED.',
  'MERIDIAN-5 · CLOCK DRIFT 4.2 SECONDS. HAS COUNTED EVERY SECOND SINCE LAUNCH: 3,417,055,912. COUNTING.',
];

export const WRECK_LOGS = [
  "Flight recorder, vessel GANNET, Surveyor Three. Landing strut failed on contact. Cockpit intact. Air for nine months, food for longer. I'll keep surveying from here. It's a good view. ... Day 214. Still a good view.",
  "Vessel KESTREL, Surveyor Five. Reactor shutdown during descent. Last recorder entry: 'Funny. You spend twelve years alone and the last thing you want is company. I just wanted to say that to someone.'",
  'Colony tender BRIGHTWATER, uncrewed. Cargo manifest: seed vault, 40,000 species. Destination never reached. Vault temperature nominal. Seeds viable.',
  "Vessel TEAL, Surveyor Eight. Recorder: 'Decided to stop here. Nothing is broken. I just decided. The planet's shadow crosses the plain every eleven hours and I like to be awake for it.'",
  'Unregistered hull, pre-survey era. No recorder. Someone scratched a tally into the cockpit frame: 1,312 marks, grouped in fives. The last group has three.',
];

export const RUIN_LOGS = [
  'Structure is artificial. Material composition: unknown. Surface erosion suggests an age of four to six million years. No markings, no power, no signal. Nothing else in this system was made by anyone.',
  'Analysis: artificial, older than the human species. Whoever placed it here left nothing else, or nothing else survived. At local noon its shadow points straight at the star. It has done that every day for six million years.',
  'No signal. No inscriptions. Just the fact of it, standing in the dust, facing nothing. The ship cannot estimate its purpose. Neither can you.',
];

export const RING_LOGS = [
  'An arc of something enormous, thirty-eight kilometres in radius. The rest of the ring is missing, or was never finished. Spectra show refined metals pitted by millions of years of dust. It is cold all the way through. There is no one home.',
  'Megastructure fragment. Rotation stopped. Interior volume could hold a city. Thermal scan: ambient, everywhere, for a very long time.',
];

export const ARRIVAL_LINES = [
  'Instruments nominal. Nothing to report but light.',
  'No transmissions on any band.',
  'The hull ticks as it adjusts to a new star.',
  'Quiet on every frequency.',
  'Long-range scan: no artificial signals.',
  'The new sky settles into place.',
];

export const LANDING_LINES = {
  barren: ['Touchdown. No air, no sound, no weather. Your footprints would last a billion years, if you could make any.', 'Down. The regolith is fine as flour. The horizon is close.'],
  ice: ['Touchdown on ice. The surface creaks through the landing struts, then stops.', 'Down. Everything here is white, and very old.'],
  desert: ['Touchdown. Thin wind hisses across the hull.', 'Down. Dust settles slowly around the landing legs.'],
  lava: ['Touchdown. The ground is warm. The hull temperature climbs.', 'Down. Somewhere beneath you, the planet is still molten.'],
  venus: ['Touchdown. Crushing pressure, dim orange light. Hull stress rising.', 'Down. The air outside would dissolve you.'],
  titan: ['Touchdown. A slow orange haze, and the smell of nothing you will ever smell.', 'Down. Methane drizzle beads on the canopy.'],
  terran: ['Touchdown. Wind, and the sound of it. Somewhere, water.', 'Down. An atmosphere you could almost breathe.'],
};

export function surveyNote(b, star) {
  const g = (b.gravity / 9.81).toFixed(2);
  const T = Math.round(b.tempK);
  const lines = [];
  switch (b.type) {
    case 'barren': lines.push(`Airless rock. Surface gravity ${g} g, ${T} K. Cratered by four billion years of impacts and nothing else.`); break;
    case 'ice': lines.push(`Ice-shelled world, ${T} K. Fracture lines suggest liquid water far below. Nothing reaches the surface but light.`); break;
    case 'desert': lines.push(`Arid world under a thin, dusty sky, ${(b.pressure * 1000).toFixed(0)} millibar. ${g} g. Old riverbeds, long dry.`); break;
    case 'lava': lines.push(`Molten surface, ${T} K. The crust reforms and breaks every few hours. Tidal heating, or simply young.`); break;
    case 'venus': lines.push(`Runaway greenhouse. ${Math.round(b.pressure)} atmospheres at the surface, ${T} K. Sulphuric cloud deck. Not a place for anyone.`); break;
    case 'titan': lines.push(`Cold world under orange haze, ${T} K. Hydrocarbon lakes, dunes of organic sand. Chemistry, waiting.`); break;
    case 'terran':
      lines.push(b.life
        ? `Temperate world, ${T} K, ${b.pressure.toFixed(1)} atm. Biosignatures confirmed: photosynthetic pigments and a seasonal oxygen cycle. No animals, no cities, no radio. Just life, minding its own business.`
        : `Temperate world, ${T} K, ${b.pressure.toFixed(1)} atm. Liquid water. Everything life would need. No sign that it ever started.`);
      break;
    case 'gas': lines.push(`Gas giant, ${(b.mass / 1.898e27).toFixed(2)} Jupiter masses. Storm systems larger than Earth${b.rings ? '. A wide ring system of ice and rock' : ''}.`); break;
    case 'icegiant': lines.push(`Ice giant, methane-blue, ${T} K. Winds above two thousand kilometres an hour, and no one to feel them.`); break;
    default: lines.push('Surveyed.');
  }
  if (b.restingPlace) lines.push('A vessel transponder answers from the surface: PETREL.');
  return lines.join(' ');
}
