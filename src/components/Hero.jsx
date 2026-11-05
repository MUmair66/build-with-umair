import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useMotionValue, useScroll, useSpring, useTransform } from 'framer-motion';
import {
  ArrowRight,
  BarChart3,
  Clock3,
  Code2,
  Download,
  Gauge,
  Globe,
  LayoutTemplate,
  LineChart,
  MapPin,
  Search,
  ShieldCheck,
  Sparkles,
  TrendingUp,
} from 'lucide-react';
import { Counter, EASE } from './ui';

const ROLES = ['Full Stack Developer', 'SEO Strategist', 'WordPress Specialist', 'Growth-Focused Builder'];

const HERO_POINTS = [
  { icon: ShieldCheck, label: 'Strategy-led delivery' },
  { icon: Globe, label: 'Remote worldwide' },
  { icon: Clock3, label: 'Replies within 24 hours' },
];

const HERO_STATS = [
  ['5+', 'Years building'],
  ['18+', 'Projects shipped'],
  ['300%', 'SEO growth'],
  ['95%', 'Client retention'],
];

const CARD_SKILLS = [
  ['Technical SEO', 95],
  ['React + Frontend', 90],
  ['WordPress', 92],
  ['Growth Strategy', 88],
];

const MARQUEE = [
  { icon: Search, label: 'SEO Optimization' },
  { icon: TrendingUp, label: 'Conversion-Focused Websites' },
  { icon: LayoutTemplate, label: 'WordPress Systems' },
  { icon: ShieldCheck, label: 'Technical Audits' },
  { icon: Code2, label: 'React Interfaces' },
  { icon: Gauge, label: 'Performance Tuning' },
  { icon: BarChart3, label: 'Analytics & Reporting' },
  { icon: LineChart, label: 'Business Growth' },
];

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
  const lines = [
    [{ w: 'Muhammad' }],
    [{ w: 'Umair', grad: true }, { w: 'Yaqoob', grad: true }],
  ];
  let i = 0;
  return (
    <h1 className="hero-title">
      {lines.map((line, li) => (
        <span key={li} style={{ display: 'block' }}>
          {line.map(({ w, grad }) => {
            const delay = 0.2 + i++ * 0.1;
            return (
              <span key={w} className="word-mask">
                <motion.span
                  className={`word ${grad ? 'grad' : ''}`}
                  initial={{ y: '105%' }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.9, delay, ease: EASE }}
                >
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

function ProfileCard() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [6, -6]), { stiffness: 150, damping: 18 });
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-8, 8]), { stiffness: 150, damping: 18 });

  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };
  const onLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <motion.div
      className="profile-wrap"
      initial={{ opacity: 0, y: 40, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 1, delay: 0.35, ease: EASE }}
      style={{ perspective: 1000 }}
    >
      <motion.div onMouseMove={onMove} onMouseLeave={onLeave} style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}>
        <div className="profile-card">
          <div className="profile-top">
            <div className="avatar">
              MU
              <span className="online" />
            </div>
            <div className="profile-name">Umair Yaqoob</div>
            <div className="profile-role">Developer · SEO Specialist · Digital Partner</div>
            <div className="profile-loc">
              <MapPin size={13} /> Pakistan based, serving clients globally
            </div>
          </div>

          {CARD_SKILLS.map(([name, pct], i) => (
            <div key={name} className="mini-skill">
              <div className="mini-skill-head">
                <span>{name}</span>
                <span>{pct}%</span>
              </div>
              <div className="bar-track">
                <motion.div
                  className="bar-fill"
                  initial={{ width: 0 }}
                  animate={{ width: `${pct}%` }}
                  transition={{ delay: 1 + i * 0.12, duration: 1.3, ease: EASE }}
                />
              </div>
            </div>
          ))}

          <div className="profile-foot">
            <span className="pulse-dot" />
            Open for selected freelance projects
            <small>Lahore, PK</small>
          </div>
        </div>

        <motion.div
          className="float-badge b1"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0, y: [0, -8, 0] }}
          transition={{ opacity: { delay: 1.3 }, x: { delay: 1.3, duration: 0.6 }, y: { duration: 4, repeat: Infinity, ease: 'easeInOut' } }}
          style={{ translateZ: 40 }}
        >
          <span className="ico"><TrendingUp size={16} /></span>
          +300% Organic Growth
        </motion.div>
        <motion.div
          className="float-badge b2"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0, y: [0, 8, 0] }}
          transition={{ opacity: { delay: 1.5 }, x: { delay: 1.5, duration: 0.6 }, y: { duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 } }}
          style={{ translateZ: 40 }}
        >
          <span className="ico"><ShieldCheck size={16} /></span>
          Clean build + measurable results
        </motion.div>
      </motion.div>
    </motion.div>
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
        <div className="hero-grid-lines" />
        <motion.div className="blob blob-1" style={{ y: blobY1 }} />
        <motion.div className="blob blob-2" style={{ y: blobY2 }} />
      </div>

      <div className="container">
        <div className="hero-layout">
          <div>
            <motion.div className="status-chip" {...fade(0.05)}>
              <span className="pulse-dot" />
              Available for new projects
              <Sparkles size={14} style={{ color: 'var(--primary)' }} />
            </motion.div>

            <AnimatedHeading />

            <motion.div className="role-line" {...fade(0.55)}>
              <span>I&apos;m a</span>
              <RoleRotator />
            </motion.div>

            <motion.p className="hero-copy" {...fade(0.65)}>
              I design and build high-performing websites that look polished, load fast, and turn traffic into real
              business opportunities. My edge is combining clean development with practical SEO strategy from day one.
            </motion.p>

            <motion.div className="hero-ctas" {...fade(0.75)}>
              <a href="#projects" className="btn btn-primary">
                View My Work <ArrowRight size={17} className="arrow" />
              </a>
              <a href="#contact" className="btn btn-outline">Book a Call</a>
              <a href="#contact" className="btn btn-ghost">
                <Download size={16} /> Request Resume
              </a>
            </motion.div>

            <motion.div className="hero-points" {...fade(0.85)}>
              {HERO_POINTS.map(({ icon: Icon, label }) => (
                <span key={label} className="hero-point">
                  <Icon size={16} /> {label}
                </span>
              ))}
            </motion.div>

            <motion.div className="hero-stats" {...fade(0.95)}>
              {HERO_STATS.map(([value, label]) => (
                <div key={label}>
                  <div className="stat-value"><Counter value={value} /></div>
                  <div className="stat-label">{label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          <ProfileCard />
        </div>
      </div>

      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          {[0, 1].map((n) =>
            MARQUEE.map(({ icon: Icon, label }) => (
              <span key={`${n}-${label}`} className="marquee-item">
                <Icon size={18} /> {label}
              </span>
            )),
          )}
        </div>
      </div>
    </section>
  );
}
