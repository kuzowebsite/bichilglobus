'use client';
import { useEffect, useRef } from 'react';
import { ShieldCheck, Zap, Clock, FileText } from 'lucide-react';

// Data
const slidesData = [
  {
    icon: Zap,
    title: "Шуурхай шийдвэрлэлт",
    kicker: "Хурд",
    text: "Таны цаг алт. Бид таны материалыг хүлээж авснаас хойш 1-2 цагийн дотор шийдвэрлэж, данс руу тань шилжүүлнэ.",
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1966&auto=format&fit=crop"
  },
  {
    icon: ShieldCheck,
    title: "Найдвартай хадгалалт",
    kicker: "Аюулгүй",
    text: "Таны автомашиныг 24 цагийн харуул хамгаалалттай, камержуулсан дулаан гражид найдвартай хадгалах болно.",
    image: "https://images.unsplash.com/photo-1590674899484-d5640e854abe?q=80&w=2067&auto=format&fit=crop"
  },
  {
    icon: Clock,
    title: "Уян хатан нөхцөл",
    kicker: "Боломж",
    text: "Та өөрийн санхүүгийн боломжид тааруулан 60 хүртэлх сарын хугацаатай зээлийг сонгох боломжтой.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop"
  },
  {
    icon: FileText,
    title: "Хялбар бүрдүүлэлт",
    kicker: "Хялбар",
    text: "Олон бичиг баримт шаардахгүй. Зөвхөн иргэний үнэмлэх болон автомашины гэрчилгээтэйгээ ирэхэд л хангалттай.",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2070&auto=format&fit=crop"
  }
];

// --- CLASS DECLARATION MOVED OUTSIDE COMPONENT ---
class MzaCarousel {
  constructor(root, opts = {}) {
    this.root = root;
    this.viewport = root.querySelector(".mzaCarousel-viewport");
    this.slides = Array.from(root.querySelectorAll(".mzaCarousel-slide"));
    this.prevBtn = root.querySelector(".mzaCarousel-prev");
    this.nextBtn = root.querySelector(".mzaCarousel-next");
    this.progressBar = root.querySelector(".mzaCarousel-progressBar");
    this.n = this.slides.length;
    
    this.state = {
      index: 0,
      pos: 0,
      width: 0,
      gap: 20,
      dragging: false,
      pointerId: null,
      x0: 0,
      v: 0,
      t0: 0,
      animating: false,
      hovering: false,
      startTime: 0,
      pausedAt: 0,
      rafId: 0
    };

    this.opts = Object.assign({
      gap: 20,
      rotateY: 15,
      zDepth: 120,
      interval: 4000,
      transitionMs: 600,
    }, opts);

    this.init();
  }

  init() {
    this.bindEvents();
    this.measure();
    this.goTo(0, false);
    this.startCycle();
    this.loop();
  }

  bindEvents() {
    this.prevBtn.onclick = () => this.prev();
    this.nextBtn.onclick = () => this.next();
    
    const vp = this.viewport;
    vp.onpointerdown = (e) => this.onDragStart(e);
    vp.onpointermove = (e) => this.onDragMove(e);
    vp.onpointerup = (e) => this.onDragEnd(e);
    vp.onpointercancel = (e) => this.onDragEnd(e);

    this.root.onmouseenter = () => { this.state.hovering = true; this.state.pausedAt = performance.now(); };
    this.root.onmouseleave = () => {
      if (this.state.pausedAt) { this.state.startTime += performance.now() - this.state.pausedAt; this.state.pausedAt = 0; }
      this.state.hovering = false;
    };

    window.addEventListener('resize', () => this.measure());
    vp.addEventListener('mousemove', (e) => this.onTilt(e));
  }

  measure() {
    if (!this.viewport) return;
    const rect = this.viewport.getBoundingClientRect();
    this.state.width = rect.width;
    this.state.gap = this.opts.gap;
    this.slideW = Math.min(600, this.state.width * 0.85); 
    this.root.style.setProperty("--mzaC-slideW", `${this.slideW}px`);
  }

  onTilt(e) {
    const r = this.viewport.getBoundingClientRect();
    const mx = (e.clientX - r.left) / r.width - 0.5;
    const my = (e.clientY - r.top) / r.height - 0.5;
    this.root.style.setProperty("--mzaParBgX", `${mx * -40}px`);
    this.root.style.setProperty("--mzaParBgY", `${my * -40}px`);
  }

  onDragStart(e) {
    if (e.pointerType === 'mouse' && e.button !== 0) return;
    e.preventDefault();
    this.state.dragging = true;
    this.state.pointerId = e.pointerId;
    this.viewport.setPointerCapture(e.pointerId);
    this.state.x0 = e.clientX;
    this.state.t0 = performance.now();
    this.state.pausedAt = performance.now();
  }

  onDragMove(e) {
    if (!this.state.dragging || e.pointerId !== this.state.pointerId) return;
    const dx = e.clientX - this.state.x0;
    const slideSpan = this.slideW + this.state.gap;
    this.state.pos = this.mod(this.state.index - dx / slideSpan, this.n);
    this.render();
  }

  onDragEnd(e) {
    if (!this.state.dragging) return;
    this.state.dragging = false;
    try {
        this.viewport.releasePointerCapture(e.pointerId);
    } catch (err) {
        // Ignore pointer capture errors
    }
    
    if (this.state.pausedAt) { this.state.startTime += performance.now() - this.state.pausedAt; this.state.pausedAt = 0; }
    const target = Math.round(this.state.pos);
    this.goTo(this.mod(target, this.n));
  }

  startCycle() { this.state.startTime = performance.now(); }

  loop() {
    const step = (t) => {
      // Check if root is still in DOM
      if (!this.root.isConnected) return; 

      if (!this.state.dragging && !this.state.hovering && !this.state.animating) {
        const elapsed = t - this.state.startTime;
        const p = Math.min(1, elapsed / this.opts.interval);
        if (this.progressBar) this.progressBar.style.transform = `scaleX(${p})`;
        if (elapsed >= this.opts.interval) this.next();
      }
      this.state.rafId = requestAnimationFrame(step);
    };
    this.state.rafId = requestAnimationFrame(step);
  }

  prev() { this.goTo(this.mod(this.state.index - 1, this.n)); }
  next() { this.goTo(this.mod(this.state.index + 1, this.n)); }

  goTo(i, animate = true) {
    const start = this.state.pos;
    const end = this.nearest(start, i);
    const dur = animate ? this.opts.transitionMs : 0;
    const t0 = performance.now();
    this.state.animating = true;
    
    const animateStep = (now) => {
      const t = Math.min(1, (now - t0) / dur);
      const p = dur ? 1 - Math.pow(1 - t, 4) : 1;
      this.state.pos = start + (end - start) * p;
      this.render();
      if (t < 1) requestAnimationFrame(animateStep);
      else {
         this.state.index = this.mod(Math.round(this.state.pos), this.n);
         this.state.pos = this.state.index;
         this.state.animating = false;
         this.render(true);
         this.startCycle();
      }
    };
    requestAnimationFrame(animateStep);
  }

  nearest(from, target) {
    let d = target - Math.round(from);
    if (d > this.n / 2) d -= this.n;
    if (d < -this.n / 2) d += this.n;
    return Math.round(from) + d;
  }
  mod(i, n) { return ((i % n) + n) % n; }

  render(markActive = false) {
    const span = this.slideW + this.state.gap;
    for (let i = 0; i < this.n; i++) {
      let d = i - this.state.pos;
      if (d > this.n / 2) d -= this.n;
      if (d < -this.n / 2) d += this.n;
      
      const tx = d * span;
      const rot = -d * this.opts.rotateY;
      const depth = -Math.abs(d) * this.opts.zDepth;
      const scale = 1 - Math.min(Math.abs(d) * 0.1, 0.4);
      const z = Math.round(1000 - Math.abs(d) * 10);
      const opacity = 1 - Math.min(Math.abs(d) * 0.5, 0.6);

      const s = this.slides[i];
      if (s) {
          s.style.transform = `translate3d(${tx}px, -50%, ${depth}px) rotateY(${rot}deg) scale(${scale})`;
          s.style.zIndex = z;
          s.style.opacity = Math.round(this.state.index) === i ? 1 : opacity;
          if (markActive) s.dataset.state = Math.round(this.state.index) === i ? "active" : "rest";
      }
    }
  }
}

export default function AdvantageCarousel() {
  const carouselRef = useRef(null);
  const instanceRef = useRef(null);

  useEffect(() => {
    if (!carouselRef.current) return;

    // Instantiate class here
    instanceRef.current = new MzaCarousel(carouselRef.current, { interval: 4000 });

    return () => {
      if (instanceRef.current?.state?.rafId) {
        cancelAnimationFrame(instanceRef.current.state.rafId);
      }
    };
  }, []);

  return (
    <div className="mzaCarousel" ref={carouselRef}>
      <div className="mzaCarousel-viewport" tabIndex={0}>
        <div className="mzaCarousel-track">
          {slidesData.map((slide, idx) => (
            <article key={idx} className="mzaCarousel-slide">
              <div className="mzaCard" style={{ '--mzaCard-bg': `url('${slide.image}')` }}>
                <div className="mzaCard-overlay"></div>
                
                <div className="mzaCard-icon">
                  <slide.icon size={28} strokeWidth={2} />
                </div>

                <div className="mzaCard-content">
                  <p className="mzaCard-kicker">{slide.kicker}</p>
                  <h2 className="mzaCard-title">{slide.title}</h2>
                  <p className="mzaCard-text">{slide.text}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="mzaCarousel-controls">
        <button className="mzaCarousel-prev" type="button">‹</button>
        <button className="mzaCarousel-next" type="button">›</button>
      </div>
      
      <div className="mzaCarousel-progress">
        <span className="mzaCarousel-progressBar"></span>
      </div>
    </div>
  );
}