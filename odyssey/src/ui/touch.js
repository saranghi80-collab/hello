// On-screen controls for touch devices: left stick, camera drag, action buttons.
export class TouchControls {
  constructor(ui, input) {
    this.ui = ui;
    this.input = input;
    const el = (this.el = document.createElement('div'));
    el.className = 'touch';
    el.hidden = true;
    el.innerHTML = `
      <div class="t-stick"><div class="t-knob"></div></div>
      <button class="t-b t-jump" data-b="jump" aria-label="Jump">A</button>
      <button class="t-b t-throw" data-b="throw" aria-label="Throw Cappy">Y</button>
      <button class="t-b t-crouch" data-b="crouch" aria-label="Crouch">ZL</button>
      <button class="t-b t-interact" data-b="interact" aria-label="Talk" hidden>✋</button>
      <button class="t-b t-pause" data-b="pause" aria-label="Pause">❚❚</button>`;
    ui.root.appendChild(el);
    this.stick = el.querySelector('.t-stick');
    this.knob = el.querySelector('.t-knob');
    this.stickId = null; this.camId = null;
    this.origin = { x: 0, y: 0 };
    this.lastCam = { x: 0, y: 0 };
    const T = input.touch;
    for (const b of el.querySelectorAll('.t-b')) {
      const name = b.dataset.b;
      b.addEventListener('touchstart', (e) => {
        e.preventDefault();
        T.buttons[name] = true; T.latch[name] = true;
        if (name === 'interact' || name === 'pause' || name === 'jump') ui._tapAdvance = true;
        ui.game.audio.init();
      }, { passive: false });
      const up = (e) => { e.preventDefault(); T.buttons[name] = false; };
      b.addEventListener('touchend', up, { passive: false });
      b.addEventListener('touchcancel', up, { passive: false });
    }
    const surface = ui.game.renderer.domElement;
    surface.addEventListener('touchstart', (e) => this.start(e), { passive: false });
    surface.addEventListener('touchmove', (e) => this.move(e), { passive: false });
    surface.addEventListener('touchend', (e) => this.end(e), { passive: false });
    surface.addEventListener('touchcancel', (e) => this.end(e), { passive: false });
    this.stick.addEventListener('touchstart', (e) => this.start(e, true), { passive: false });
    this.stick.addEventListener('touchmove', (e) => this.move(e), { passive: false });
    this.stick.addEventListener('touchend', (e) => this.end(e), { passive: false });
  }
  show(on) { this.el.hidden = !on; }
  setInteract(on) { this.el.querySelector('.t-interact').hidden = !on; }
  start(e, onStick = false) {
    e.preventDefault();
    for (const t of e.changedTouches) {
      const left = t.clientX < window.innerWidth * 0.45;
      if ((left || onStick) && this.stickId === null) {
        this.stickId = t.identifier;
        const r = this.stick.getBoundingClientRect();
        this.origin.x = r.left + r.width / 2; this.origin.y = r.top + r.height / 2;
        this.moveStick(t);
      } else if (this.camId === null) {
        this.camId = t.identifier;
        this.lastCam.x = t.clientX; this.lastCam.y = t.clientY;
      }
    }
    this.ui.game.audio.init();
  }
  move(e) {
    e.preventDefault();
    for (const t of e.changedTouches) {
      if (t.identifier === this.stickId) this.moveStick(t);
      else if (t.identifier === this.camId) {
        this.input.touch.cdx += t.clientX - this.lastCam.x;
        this.input.touch.cdy += t.clientY - this.lastCam.y;
        this.lastCam.x = t.clientX; this.lastCam.y = t.clientY;
      }
    }
  }
  end(e) {
    for (const t of e.changedTouches) {
      if (t.identifier === this.stickId) {
        this.stickId = null;
        this.input.touch.mx = 0; this.input.touch.my = 0;
        this.knob.style.transform = '';
      } else if (t.identifier === this.camId) this.camId = null;
    }
  }
  moveStick(t) {
    const R = 52;
    let dx = t.clientX - this.origin.x, dy = t.clientY - this.origin.y;
    const d = Math.hypot(dx, dy);
    if (d > R) { dx *= R / d; dy *= R / d; }
    this.knob.style.transform = `translate(${dx}px, ${dy}px)`;
    this.input.touch.mx = dx / R;
    this.input.touch.my = -dy / R;
  }
  update() {}
}
