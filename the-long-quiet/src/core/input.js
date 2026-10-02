// Keyboard and mouse. Mouse movement while the pointer is locked steers the ship like a
// virtual stick that slowly re-centres.

export class Input {
  constructor(canvas) {
    this.canvas = canvas;
    this.keys = new Set();
    this.pressed = new Set();
    this.stick = { x: 0, y: 0 };
    this.mouseDelta = { x: 0, y: 0 };
    this.wheel = 0;
    this.buttons = 0;
    this.locked = false;
    this.invertY = false;
    this.sensitivity = 1;
    this.enabled = true;
    window.addEventListener('keydown', (e) => {
      if (e.target && (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA')) return;
      if (['Tab', 'Space', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.code)) e.preventDefault();
      if (!this.keys.has(e.code)) this.pressed.add(e.code);
      this.keys.add(e.code);
    });
    window.addEventListener('keyup', (e) => this.keys.delete(e.code));
    window.addEventListener('blur', () => { this.keys.clear(); this.buttons = 0; });
    document.addEventListener('pointerlockchange', () => {
      this.locked = document.pointerLockElement === canvas;
      if (!this.locked) { this.stick.x = 0; this.stick.y = 0; }
    });
    window.addEventListener('mousemove', (e) => {
      if (this.locked) {
        this.mouseDelta.x += e.movementX;
        this.mouseDelta.y += e.movementY;
      } else if (this.buttons & 3) {
        // without pointer lock (some embeds refuse it), dragging steers instead
        this.mouseDelta.x += e.movementX;
        this.mouseDelta.y += e.movementY;
      }
    });
    canvas.addEventListener('mousedown', (e) => {
      this.buttons |= 1 << e.button;
      if (e.button === 0 && !this.locked && this.enabled) this.requestLock();
    });
    window.addEventListener('mouseup', (e) => { this.buttons &= ~(1 << e.button); });
    canvas.addEventListener('contextmenu', (e) => e.preventDefault());
    canvas.addEventListener('wheel', (e) => { this.wheel += Math.sign(e.deltaY); e.preventDefault(); }, { passive: false });
  }

  requestLock() {
    try {
      const p = this.canvas.requestPointerLock?.();
      if (p && p.catch) p.catch(() => {});
    } catch (e) { /* not available here */ }
  }

  releaseLock() {
    if (document.pointerLockElement) document.exitPointerLock();
  }

  down(code) { return this.enabled && this.keys.has(code); }
  hit(code) { return this.enabled && this.pressed.has(code); }

  // Mouse moves a virtual stick; returns stick deflection in [-1, 1].
  updateStick(dt, freeLook) {
    const k = 0.0045 * this.sensitivity;
    if (!freeLook) {
      this.stick.x += this.mouseDelta.x * k;
      this.stick.y += this.mouseDelta.y * k * (this.invertY ? -1 : 1);
    }
    const len = Math.hypot(this.stick.x, this.stick.y);
    if (len > 1) { this.stick.x /= len; this.stick.y /= len; }
    // gentle re-centring so the ship does not keep turning forever
    const decay = Math.exp(-dt * 1.6);
    this.stick.x *= decay;
    this.stick.y *= decay;
    return this.stick;
  }

  endFrame() {
    this.pressed.clear();
    this.mouseDelta.x = 0;
    this.mouseDelta.y = 0;
    this.wheel = 0;
  }
}
