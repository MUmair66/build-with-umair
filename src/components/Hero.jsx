import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useMotionValue, useScroll, useSpring, useTransform } from 'framer-motion';
import { ArrowRight, Clock3, Code2, Download, Globe, Search, ShieldCheck, TrendingUp } from 'lucide-react';
import { EASE, EMAIL, fadeUp, stagger } from './ui';

const ROLES = ['Full Stack Developer', 'SEO Strategist', 'WordPress Specialist', 'Growth-Focused Builder'];

const HERO_POINTS = [
  { icon: ShieldCheck, label: 'Strategy-led delivery' },
  { icon: Globe, label: 'Remote worldwide' },
  { icon: Clock3, label: 'Replies within 24 hours' },
];

const OFFERS = [
  { icon: Search, l1: 'SEO &', l2: 'Growth' },
  { icon: Globe, l1: 'WordPress', l2: 'Websites' },
  { icon: Code2, l1: 'Custom', l2: 'Web Apps' },
];

/* ───────── isometric illustration helpers ───────── */
const pts = (arr) => arr.map((p) => p.join(',')).join(' ');

function Slab({ cx, cy, w, t, top, left, right, pages }) {
  const a = w / 2;
  const b = w / 4;
  const lines = pages
    ? Array.from({ length: 4 }, (_, k) => {
        const dy = ((k + 1) * t) / 5;
        return <line key={k} x1={cx} y1={cy + b + dy} x2={cx + a} y2={cy + dy} stroke="#9a9a9a" strokeWidth="1" />;
      })
    : null;
  return (
    <g>
      <polygon points={pts([[cx - a, cy], [cx, cy + b], [cx, cy + b + t], [cx - a, cy + t]])} fill={left} />
      <polygon points={pts([[cx, cy + b], [cx + a, cy], [cx + a, cy + t], [cx, cy + b + t]])} fill={right} />
      {lines}
      <polygon points={pts([[cx, cy - b], [cx + a, cy], [cx, cy + b], [cx - a, cy]])} fill={top} />
    </g>
  );
}

function HeroArt() {
  // laptop base on top of the book stack
  const L = { cx: 254, cy: 252, w: 170 };
  const a = L.w / 2;
  const b = L.w / 4;
  const P1 = [L.cx - a, L.cy];
  const P2 = [L.cx, L.cy - b];
  const UP = [-8, -112];
  const S = (u, v) => [P1[0] + u * (P2[0] - P1[0]) + v * UP[0], P1[1] + u * (P2[1] - P1[1]) + v * UP[1]];
  const codeLines = [
    [0.12, 0.8, 0.34, '#fff'],
    [0.12, 0.68, 0.55, 'rgba(255,255,255,.75)'],
    [0.2, 0.56, 0.42, 'rgba(255,255,255,.75)'],
    [0.2, 0.44, 0.6, '#1a1a1a'],
    [0.12, 0.32, 0.3, 'rgba(255,255,255,.75)'],
    [0.12, 0.2, 0.48, 'rgba(255,255,255,.55)'],
  ];

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(mx, [-0.5, 0.5], [-14, 14]), { stiffness: 80, damping: 18 });
  const ry = useSpring(useTransform(my, [-0.5, 0.5], [-10, 10]), { stiffness: 80, damping: 18 });

  return (
    <motion.div
      className="hero-art"
      initial={{ opacity: 0, y: 50, scale: 0.94 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 1.1, delay: 0.3, ease: EASE }}
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        mx.set((e.clientX - r.left) / r.width - 0.5);
        my.set((e.clientY - r.top) / r.height - 0.5);
      }}
      onMouseLeave={() => {
        mx.set(0);
        my.set(0);
      }}
    >
      <motion.svg className="art" viewBox="0 0 500 460" style={{ x: rx, y: ry }} aria-hidden="true">
        <defs>
          <linearGradient id="scr" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#ff8a3d" />
            <stop offset="1" stopColor="#e2530a" />
          </linearGradient>
          <radialGradient id="ball" cx="0.35" cy="0.3" r="0.7">
            <stop offset="0" stopColor="#ffb07a" />
            <stop offset="0.55" stopColor="#ff6b1a" />
            <stop offset="1" stopColor="#a63a00" />
          </radialGradient>
          <radialGradient id="shadow" cx="0.5" cy="0.5" r="0.5">
            <stop offset="0" stopColor="rgba(0,0,0,.65)" />
            <stop offset="1" stopColor="rgba(0,0,0,0)" />
          </radialGradient>
        </defs>

        <ellipse cx="252" cy="420" rx="200" ry="34" fill="url(#shadow)" />

        <motion.g animate={{ y: [0, -8, 0] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}>
          {/* book stack */}
          <Slab cx={250} cy={330} w={330} t={32} top="#262626" left="#141414" right="#dcdcdc" pages />
          <Slab cx={242} cy={296} w={300} t={28} top="#303030" left="#1b1b1b" right="#e6e6e6" pages />
          <polygon points={pts([[120, 300], [134, 307], [134, 352], [127, 345], [120, 350]])} fill="#ff6b1a" />
          <Slab cx={256} cy={266} w={262} t={22} top="#2a2a2a" left="#161616" right="#d0d0d0" pages />

          {/* laptop */}
          <Slab cx={L.cx} cy={L.cy} w={L.w} t={8} top="#3b3b3b" left="#232323" right="#4a4a4a" />
          <polygon points={pts([[L.cx - 40, L.cy + 8], [L.cx + 4, L.cy - 14], [L.cx + 42, L.cy + 5], [L.cx - 2, L.cy + 27]])} fill="#2a2a2a" />
          <polygon points={pts([P1, P2, [P2[0] + UP[0], P2[1] + UP[1]], [P1[0] + UP[0], P1[1] + UP[1]]])} fill="#1d1d1d" />
          <polygon points={pts([S(0.05, 0.06), S(0.95, 0.06), S(0.95, 0.94), S(0.05, 0.94)])} fill="url(#scr)" />
          {codeLines.map(([u, v, len, color], i) => {
            const [x1, y1] = S(u, v);
            const [x2, y2] = S(u + len, v);
            return (
              <motion.line
                key={i}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke={color}
                strokeWidth="5"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.7, delay: 1.1 + i * 0.18, ease: EASE }}
              />
            );
          })}
          <motion.circle
            cx={S(0.85, 0.2)[0]}
            cy={S(0.85, 0.2)[1]}
            r="4"
            fill="#fff"
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          />
        </motion.g>

        {/* floating orange sphere */}
        <motion.circle cx="420" cy="110" r="30" fill="url(#ball)" animate={{ y: [0, -16, 0] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }} />
        {/* floating cube */}
        <motion.g animate={{ y: [0, 12, 0], rotate: [0, 6, 0] }} transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }} style={{ originX: '70px', originY: '170px' }}>
          <Slab cx={70} cy={160} w={52} t={26} top="#ff8a3d" left="#c84a06" right="#ff6b1a" />
        </motion.g>
        {/* small ring */}
        <motion.circle cx="400" cy="250" r="12" fill="none" stroke="#ff6b1a" strokeWidth="5" animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }} />
      </motion.svg>

      <motion.div
        className="float-badge b1"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0, y: [0, -8, 0] }}
        transition={{ opacity: { delay: 1.4 }, x: { delay: 1.4, duration: 0.6 }, y: { duration: 4, repeat: Infinity, ease: 'easeInOut' } }}
      >
        <span className="ico"><TrendingUp size={16} /></span>
        +300% Organic Growth
      </motion.div>
      <motion.div
        className="float-badge b2"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0, y: [0, 8, 0] }}
        transition={{ opacity: { delay: 1.6 }, x: { delay: 1.6, duration: 0.6 }, y: { duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 } }}
      >
        <span className="ico"><ShieldCheck size={16} /></span>
        Clean build + measurable results
      </motion.div>
    </motion.div>
  );
}

function RoleRotator() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => setIndex((v) => (v + 1) % ROLES.length), 2600);
    return () => clearInterval(timer);
  }, []);
  return (
    <span className="role-rotator" aria-live="polite">
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={ROLES[index]}
          initial={{ y: '110%', opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: '-110%', opacity: 0 }}
          transition={{ duration: 0.55, ease: EASE }}
        >
          {ROLES[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

function AnimatedHeading() {
  const lines = [[{ w: 'I build websites' }], [{ w: 'that help you' }], [{ w: 'grow.', grad: true }]];
  let i = 0;
  return (
    <h1 className="hero-title">
      {lines.map((line, li) => (
        <span key={li} style={{ display: 'block' }}>
          {line.map(({ w, grad }) => {
            const delay = 0.2 + i++ * 0.12;
            return (
              <span key={w} className="word-mask">
                <motion.span className={`word ${grad ? 'grad' : ''}`} initial={{ y: '105%' }} animate={{ y: 0 }} transition={{ duration: 0.9, delay, ease: EASE }}>
                  {w}
                </motion.span>
              </span>
            );
          })}
        </span>
      ))}
    </h1>
  );
}

function HeroEmail() {
  const [email, setEmail] = useState('');
  const submit = (e) => {
    e.preventDefault();
    const body = `Hi Umair,\n\nI'd like to talk about a project.\n\nYou can reach me at: ${email}`;
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent("Let's talk about a project")}&body=${encodeURIComponent(body)}`;
  };
  return (
    <form className="hero-email" onSubmit={submit}>
      <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email here" aria-label="Your email" />
      <motion.button type="submit" className="btn btn-primary" whileTap={{ scale: 0.95 }}>
        Let&apos;s talk
      </motion.button>
    </form>
  );
}

const fade = (delay) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: EASE },
});

export default function Hero() {
  const { scrollY } = useScroll();
  const blobY1 = useTransform(scrollY, [0, 800], [0, 160]);
  const blobY2 = useTransform(scrollY, [0, 800], [0, -120]);

  return (
    <section id="home" className="hero">
      <div className="hero-bg" aria-hidden="true">
        <motion.div className="blob blob-1" style={{ y: blobY1 }} />
        <motion.div className="blob blob-2" style={{ y: blobY2 }} />
      </div>

      <div className="container">
        <div className="hero-layout">
          <div>
            <motion.div className="status-chip" {...fade(0.05)}>
              <span className="pulse-dot" />
              Muhammad Umair Yaqoob · Available for projects
            </motion.div>

            <AnimatedHeading />

            <motion.div className="role-line" {...fade(0.6)}>
              <span>I&apos;m a</span>
              <RoleRotator />
            </motion.div>

            <motion.p className="hero-copy" {...fade(0.7)}>
              I design and build high-performing websites that look polished, load fast, and turn traffic into real
              business opportunities, combining clean development with practical SEO strategy from day one.
            </motion.p>

            <motion.div {...fade(0.8)}>
              <HeroEmail />
            </motion.div>

            <motion.div className="hero-ctas" {...fade(0.9)}>
              <a href="#projects" className="btn btn-ghost">
                View my work <ArrowRight size={16} className="arrow" />
              </a>
              <a href="#contact" className="btn btn-ghost">
                <Download size={16} /> Request resume
              </a>
            </motion.div>

            <motion.div className="hero-points" {...fade(1)}>
              {HERO_POINTS.map(({ icon: Icon, label }) => (
                <span key={label} className="hero-point">
                  <Icon size={16} /> {label}
                </span>
              ))}
            </motion.div>
          </div>

          <HeroArt />
        </div>

        <div className="hero-intro">
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: EASE }}>
            I&apos;m a Lahore-based full stack developer and SEO specialist. What started with building and optimizing
            PAC.edu.pk grew into delivering websites, WordPress builds and SEO campaigns for brands across Pakistan, the
            UK, the US and the Middle East, with 5+ years of experience and 18+ projects shipped.
          </motion.p>

          <motion.h3 className="offer-title" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, ease: EASE }}>
            See what I do
          </motion.h3>

          <motion.div className="offer-row" variants={stagger(0.12)} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-40px' }}>
            {OFFERS.map(({ icon: Icon, l1, l2 }, i) => (
              <OfferItem key={l1} Icon={Icon} l1={l1} l2={l2} divider={i < OFFERS.length - 1} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function OfferItem({ Icon, l1, l2, divider }) {
  return (
    <>
      <motion.a href="#projects" variants={fadeUp} className="card card-hover offer">
        <span className="icon-box"><Icon size={26} /></span>
        <span>
          {l1}
          <br />
          {l2}
        </span>
      </motion.a>
      {divider && <span className="offer-divider" aria-hidden="true" />}
    </>
  );
}
