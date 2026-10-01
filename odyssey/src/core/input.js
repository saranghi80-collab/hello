// Unified input: keyboard + mouse (pointer lock), gamepad, and on-screen touch controls.
// Produces per-frame actions with down / pressed / released edges.

const KEYMAP = {
  jump: ['Space'],
  crouch: ['ShiftLeft', 'ShiftRight', 'KeyC'],
  throw: ['KeyF', 'KeyJ'],
  interact: ['KeyE'],
  camReset: ['KeyQ', 'KeyR'],
  pause: ['KeyP', 'Escape'],
  map: ['KeyM', 'Tab'],
};
const MOVE_KEYS = { KeyW: [0, 1], KeyS: [0, -1], KeyA: [-1, 0], KeyD: [1, 0] };
const CAM_KEYS = { ArrowLeft: [-1, 0], ArrowRight: [1, 0], ArrowUp: [0, -1], ArrowDown: [0, 1] };
const MENU_KEYS = {
  up: ['ArrowUp', 'KeyW'], down: ['ArrowDown', 'KeyS'], left: ['ArrowLeft', 'KeyA'], right: ['ArrowRight', 'KeyD'],
  confirm: ['Enter', 'Space', 'KeyE'], back: ['Escape', 'Backspace', 'KeyP'],
};

class Action {
  constructor() { this.down = false; this.pressed = false; this.released = false; this.latch = false; this.time = 0; }
  set(isDown, dt) {
    const was = this.down;
    this.down = isDown;
    this.pressed = (isDown && !was) || this.latch;
    this.released = !isDown && was;
    this.latch = false;
    this.time = isDown ? this.time + dt : 0;
  }
}

export class Input {
  constructor(target) {
    this.target = target;
    this.keys = new Set();
    this.keyLatch = new Set();
    this.mouse = { dx: 0, dy: 0, left: false, leftLatch: false, right: false, drag: false, wheel: 0 };
    this.pointerLocked = false;
    this.lockWanted = false;
    this.touch = { mx: 0, my: 0, cdx: 0, cdy: 0, buttons: {}, latch: {} };
    this.device = 'keyboard';
    this.move = { x: 0, y: 0, mag: 0 };
    this.cam = { x: 0, y: 0 };
    this.zoom = 0;
    this.actions = {};
    for (const k of Object.keys(KEYMAP)) this.actions[k] = new Action();
    this.menu = {};
    for (const k of Object.keys(MENU_KEYS)) this.menu[k] = new Action();
    this._menuRepeat = {};
    this.settings = { invertY: false, invertX: false, sensitivity: 1 };
    this.enabled = true;
    this.padConnected = false;
    this._bind();
  }

  _bind() {
    const t = this.target;
    window.addEventListener('keydown', (e) => {
      if (e.code === 'Tab' || e.code === 'Space' || e.code.startsWith('Arrow')) e.preventDefault();
      if (e.repeat) return;
      this.keys.add(e.code);
      this.keyLatch.add(e.code);
      this.device = 'keyboard';
    });
    window.addEventListener('keyup', (e) => { this.keys.delete(e.code); });
    window.addEventListener('blur', () => { this.keys.clear(); this.mouse.left = false; this.mouse.right = false; });
    t.addEventListener('mousedown', (e) => {
      if (e.button === 0) {
        if (this.pointerLocked) { this.mouse.left = true; this.mouse.leftLatch = true; }
        else this.mouse.drag = true;
      }
      if (e.button === 2) this.mouse.right = true;
      this.device = 'keyboard';
    });
    window.addEventListener('mouseup', (e) => {
      if (e.button === 0) { this.mouse.left = false; this.mouse.drag = false; }
      if (e.button === 2) this.mouse.right = false;
    });
    t.addEventListener('contextmenu', (e) => e.preventDefault());
    window.addEventListener('mousemove', (e) => {
      if (this.pointerLocked || this.mouse.drag) {
        // Ignore absurd spikes some browsers emit on lock.
        if (Math.abs(e.movementX) < 400 && Math.abs(e.movementY) < 400) {
          this.mouse.dx += e.movementX;
          this.mouse.dy += e.movementY;
        }
      }
    });
    t.addEventListener('wheel', (e) => { this.mouse.wheel += Math.sign(e.deltaY); e.preventDefault(); }, { passive: false });
    document.addEventListener('pointerlockchange', () => {
      this.pointerLocked = document.pointerLockElement === this.target;
      if (!this.pointerLocked) this.mouse.left = false;
      this.onPointerLockChange?.(this.pointerLocked);
    });
    window.addEventListener('gamepadconnected', () => { this.padConnected = true; });
  }

  requestLock() {
    if (this.pointerLocked || !this.target.requestPointerLock) return;
    try {
      const p = this.target.requestPointerLock({ unadjustedMovement: false });
      if (p && p.catch) p.catch(() => {});
    } catch (e) { /* not available (mobile, embedded views) */ }
  }
  releaseLock() {
    if (document.pointerLockElement) {
      try { document.exitPointerLock(); } catch (e) {}
    }
  }

  _pad() {
    if (!navigator.getGamepads) return null;
    const pads = navigator.getGamepads();
    for (const p of pads) if (p && p.connected && p.mapping === 'standard') return p;
    for (const p of pads) if (p && p.connected) return p;
    return null;
  }

  update(dt) {
    const k = this.keys, latch = this.keyLatch;
    const pad = this._pad();
    const pb = (i) => !!(pad && pad.buttons[i] && pad.buttons[i].pressed);
    const anyKey = (codes) => codes.some((c) => k.has(c));
    const anyLatch = (codes) => codes.some((c) => latch.has(c));
    const tb = this.touch.buttons, tl = this.touch.latch;

    // --- Movement ---
    let mx = 0, my = 0;
    for (const [code, v] of Object.entries(MOVE_KEYS)) if (k.has(code)) { mx += v[0]; my += v[1]; }
    let kb = Math.hypot(mx, my);
    if (kb > 0) { mx /= kb; my /= kb; }
    if (pad) {
      let ax = pad.axes[0] || 0, ay = -(pad.axes[1] || 0);
      const m = Math.hypot(ax, ay);
      if (m > 0.18) {
        const s = Math.min(1, (m - 0.18) / 0.72) / m;
        mx = ax * s; my = ay * s; this.device = 'gamepad';
      }
      if (pb(12)) my = 1; if (pb(13)) my = -1; if (pb(14)) mx = -1; if (pb(15)) mx = 1;
    }
    if (this.touch.mx || this.touch.my) { mx = this.touch.mx; my = this.touch.my; this.device = 'touch'; }
    const mm = Math.hypot(mx, my);
    if (mm > 1) { mx /= mm; my /= mm; }
    this.move.x = mx; this.move.y = my; this.move.mag = Math.min(1, mm);

    // --- Camera ---
    const sens = this.settings.sensitivity;
    let cx = this.mouse.dx * 0.0024 * sens, cy = this.mouse.dy * 0.0024 * sens;
    this.mouse.dx = 0; this.mouse.dy = 0;
    for (const [code, v] of Object.entries(CAM_KEYS)) if (k.has(code)) { cx += v[0] * 2.4 * dt * sens; cy += v[1] * 1.6 * dt * sens; }
    if (pad) {
      const ax = pad.axes[2] || 0, ay = pad.axes[3] || 0;
      const m = Math.hypot(ax, ay);
      if (m > 0.15) {
        const s = Math.min(1, (m - 0.15) / 0.75) / m;
        cx += ax * s * 3.2 * dt * sens; cy += ay * s * 2.2 * dt * sens;
      }
    }
    cx += this.touch.cdx * 0.006 * sens; cy += this.touch.cdy * 0.006 * sens;
    this.touch.cdx = 0; this.touch.cdy = 0;
    if (this.settings.invertX) cx = -cx;
    if (this.settings.invertY) cy = -cy;
    this.cam.x = cx; this.cam.y = cy;
    this.zoom = this.mouse.wheel; this.mouse.wheel = 0;

    // --- Buttons ---
    const A = this.actions;
    A.jump.latch = anyLatch(KEYMAP.jump) || !!tl.jump;
    A.jump.set(anyKey(KEYMAP.jump) || pb(0) || pb(1) || !!tb.jump, dt);
    A.crouch.latch = anyLatch(KEYMAP.crouch) || !!tl.crouch;
    A.crouch.set(anyKey(KEYMAP.crouch) || pb(6) || pb(7) || !!tb.crouch, dt);
    A.throw.latch = anyLatch(KEYMAP.throw) || this.mouse.leftLatch || !!tl.throw;
    A.throw.set(anyKey(KEYMAP.throw) || this.mouse.left || pb(2) || pb(3) || !!tb.throw, dt);
    A.interact.latch = anyLatch(KEYMAP.interact) || !!tl.interact;
    A.interact.set(anyKey(KEYMAP.interact) || pb(5) || !!tb.interact, dt);
    A.camReset.latch = anyLatch(KEYMAP.camReset);
    A.camReset.set(anyKey(KEYMAP.camReset) || pb(4), dt);
    A.pause.latch = anyLatch(KEYMAP.pause) || !!tl.pause;
    A.pause.set(anyKey(KEYMAP.pause) || pb(9) || !!tb.pause, dt);
    A.map.latch = anyLatch(KEYMAP.map);
    A.map.set(anyKey(KEYMAP.map) || pb(8), dt);
    if (pad && pad.buttons.some((b) => b.pressed)) this.device = 'gamepad';

    // --- Menu navigation (with key-repeat for held directions) ---
    const stickY = pad ? -(pad.axes[1] || 0) : 0, stickX = pad ? pad.axes[0] || 0 : 0;
    const menuDown = {
      up: anyKey(MENU_KEYS.up) || pb(12) || stickY > 0.6,
      down: anyKey(MENU_KEYS.down) || pb(13) || stickY < -0.6,
      left: anyKey(MENU_KEYS.left) || pb(14) || stickX < -0.6,
      right: anyKey(MENU_KEYS.right) || pb(15) || stickX > 0.6,
      confirm: anyKey(MENU_KEYS.confirm) || pb(0),
      back: anyKey(MENU_KEYS.back) || pb(1),
    };
    for (const name of Object.keys(this.menu)) {
      const act = this.menu[name];
      act.latch = anyLatch(MENU_KEYS[name]);
      act.set(menuDown[name], dt);
      if (['up', 'down', 'left', 'right'].includes(name)) {
        // auto-repeat
        const r = (this._menuRepeat[name] ??= { t: 0 });
        if (act.down) {
          r.t += dt;
          if (r.t > 0.38) { act.pressed = true; r.t -= 0.11; }
        } else r.t = 0;
      }
    }

    latch.clear();
    this.mouse.leftLatch = false;
    this.touch.latch = {};
  }

  // Swallow any pending presses (e.g. after closing a menu so the confirm press doesn't jump).
  flush() {
    for (const a of Object.values(this.actions)) { a.pressed = false; a.latch = false; }
    for (const a of Object.values(this.menu)) { a.pressed = false; a.latch = false; }
    this.keyLatch.clear();
    this.mouse.leftLatch = false;
  }
}
