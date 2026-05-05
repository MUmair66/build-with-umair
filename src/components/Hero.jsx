import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowDown,
  ChevronRight,
  Clock3,
  Download,
  Globe,
  Mail,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Zap,
} from 'lucide-react';

const ROLES = ['Full Stack Developer', 'SEO Strategist', 'WordPress Specialist', 'Growth-Focused Builder'];

const HERO_CHIPS = [
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
  ['Technical SEO', 95, 'var(--primary)'],
  ['React + Frontend', 90, 'var(--accent-2)'],
  ['WordPress', 92, 'var(--accent)'],
  ['Growth Strategy', 88, 'var(--secondary)'],
];

const TICKER_ITEMS = [
  'SEO Optimization',
  'Conversion-Focused Websites',
  'WordPress Systems',
  'Technical Audits',
  'React Interfaces',
  'Performance Tuning',
  'Analytics & Reporting',
  'Business Growth',
];

const TypingText = () => {
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);
  const [pause, setPause] = useState(false);

  useEffect(() => {
    if (pause) {
      const timer = setTimeout(() => setPause(false), 1400);
      return () => clearTimeout(timer);
    }

    const current = ROLES[index];
    const speed = deleting ? 45 : 75;

    const timer = setTimeout(() => {
      if (!deleting) {
        const next = current.slice(0, displayed.length + 1);
        setDisplayed(next);
        if (next === current) {
          setPause(true);
          setDeleting(true);
        }
      } else {
        const next = current.slice(0, displayed.length - 1);
        setDisplayed(next);
        if (!next) {
          setDeleting(false);
          setIndex((value) => (value + 1) % ROLES.length);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [displayed, deleting, index, pause]);

  return (
    <span className="gradient-text">
      {displayed}
      <span style={{ animation: 'blink 1s step-end infinite', color: 'var(--primary)' }}>|</span>
    </span>
  );
};

const FloatingOrb = ({ size, style, colorClass }) => (
  <div className={`orb ${colorClass}`} style={{ width: size, height: size, ...style }} />
);

const Particle = ({ style }) => (
  <div
    style={{
      position: 'absolute',
      width: '3px',
      height: '3px',
      borderRadius: '50%',
      background: 'var(--primary)',
      opacity: 0.35,
      ...style,
    }}
  />
);

export default function Hero() {
  const blobRef = useRef(null);

  useEffect(() => {
    const move = (event) => {
      if (blobRef.current) {
        blobRef.current.style.left = `${event.clientX}px`;
        blobRef.current.style.top = `${event.clientY}px`;
      }
    };

    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  return (
    <section
      id="home"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingTop: '90px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div ref={blobRef} id="cursor-blob" />
      <div className="grid-bg" />

      <FloatingOrb size="620px" colorClass="orb-purple" style={{ top: '-5%', left: '-15%' }} />
      <FloatingOrb size="420px" colorClass="orb-blue" style={{ top: '15%', right: '-6%' }} />
      <FloatingOrb size="360px" colorClass="orb-cyan" style={{ bottom: '12%', right: '20%' }} />
      <FloatingOrb size="280px" colorClass="orb-pink" style={{ top: '55%', left: '45%' }} />

      {[
        { top: '15%', left: '10%' },
        { top: '24%', left: '82%' },
        { top: '62%', left: '8%' },
        { top: '72%', left: '88%' },
        { top: '45%', left: '55%' },
        { top: '80%', left: '42%' },
        { top: '12%', left: '62%' },
        { top: '56%', left: '26%' },
      ].map((pos, index) => (
        <Particle key={index} style={pos} />
      ))}

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div
          className="hero-grid"
          style={{ display: 'grid', gridTemplateColumns: '1.05fr 0.95fr', gap: '5rem', alignItems: 'center' }}
        >
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="hero-chip"
              style={{ marginBottom: '1.2rem' }}
            >
              <Sparkles size={16} style={{ color: 'var(--primary)' }} />
              Modern websites with growth-first thinking
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              style={{ fontSize: 'clamp(3rem, 6vw, 5.6rem)', fontWeight: 900, marginBottom: '0.65rem', lineHeight: 1.03 }}
            >
              Muhammad <br />
              <span className="gradient-text-animated">Umair Yaqoob</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45 }}
              style={{
                fontSize: '1.35rem',
                fontWeight: 600,
                color: 'var(--text-muted)',
                marginBottom: '1.4rem',
                minHeight: '2.2rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
              }}
            >
              <Zap size={18} style={{ color: 'var(--accent)' }} />
              <TypingText />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              style={{ color: 'var(--text-muted)', maxWidth: '560px', lineHeight: 1.9, marginBottom: '1.5rem', fontSize: '1rem' }}
            >
              I design and build high-performing websites that look polished, load fast, and turn traffic into real
              business opportunities. My edge is combining clean development with practical SEO strategy from day one.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75 }}
              style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '2rem' }}
            >
              {HERO_CHIPS.map(({ icon: Icon, label }) => (
                <span key={label} className="info-pill">
                  <Icon size={15} style={{ color: 'var(--primary)' }} />
                  {label}
                </span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2.25rem' }}
            >
              <a href="#projects" className="btn btn-primary">
                View My Work <ChevronRight size={18} />
              </a>
              <a href="#contact" className="btn btn-outline">
                Book a Call <Mail size={16} />
              </a>
              <a href="#contact" className="btn btn-ghost" style={{ padding: '0.9rem 1.25rem', gap: '0.5rem', fontSize: '0.85rem' }}>
                <Download size={16} /> Request Resume
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.05 }}
              className="availability-card"
              style={{
                borderRadius: '1.5rem',
                padding: '1rem 1.15rem',
                marginBottom: '2.4rem',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
                gap: '0.9rem',
              }}
            >
              <div>
                <div style={{ color: 'var(--primary)', fontSize: '0.75rem', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.3rem' }}>
                  Current Focus
                </div>
                <div style={{ fontWeight: 700 }}>SEO + custom business sites</div>
              </div>
              <div>
                <div style={{ color: 'var(--accent)', fontSize: '0.75rem', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.3rem' }}>
                  Best Fit
                </div>
                <div style={{ fontWeight: 700 }}>Growth-driven brands</div>
              </div>
              <div>
                <div style={{ color: 'var(--accent-2)', fontSize: '0.75rem', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.3rem' }}>
                  Turnaround
                </div>
                <div style={{ fontWeight: 700 }}>Fast kickoff, clear milestones</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.15 }}
              style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}
            >
              {HERO_STATS.map(([value, label]) => (
                <div key={label} style={{ textAlign: 'left' }}>
                  <div
                    style={{
                      fontSize: '1.95rem',
                      fontWeight: 900,
                      background: 'linear-gradient(135deg, var(--primary), var(--secondary))',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    {value}
                  </div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.12em', marginTop: '0.15rem' }}>
                    {label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateY: 20 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
            className="perspective-container"
            style={{ display: 'flex', justifyContent: 'center' }}
          >
            <motion.div
              animate={{ rotateX: [0, 4, 0, -4, 0], rotateY: [0, 8, 0, -8, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
              className="preserve-3d"
              style={{ width: '100%', maxWidth: '430px', position: 'relative' }}
            >
              <div className="glass-card" style={{ borderRadius: '2rem', padding: '2.35rem', position: 'relative', overflow: 'hidden' }}>
                <div
                  style={{
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    height: '2px',
                    background: 'linear-gradient(90deg, transparent, rgba(56,189,248,0.65), transparent)',
                    animation: 'scanline 4s linear infinite',
                    pointerEvents: 'none',
                  }}
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(56,189,248,0.08), transparent 55%, rgba(20,184,166,0.05))', pointerEvents: 'none' }} />

                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '1.85rem' }}>
                  <div style={{ position: 'relative', marginBottom: '1rem' }}>
                    <div
                      style={{
                        width: '102px',
                        height: '102px',
                        borderRadius: '1.8rem',
                        background: 'linear-gradient(135deg, var(--primary), var(--secondary))',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '2.2rem',
                        fontWeight: 900,
                        color: '#08111a',
                        boxShadow: '0 20px 50px rgba(56,189,248,0.28)',
                        animation: 'pulse-glow 3s ease infinite',
                      }}
                    >
                      MU
                    </div>
                    <div
                      style={{
                        position: 'absolute',
                        bottom: -4,
                        right: -4,
                        width: '24px',
                        height: '24px',
                        borderRadius: '50%',
                        background: 'var(--success)',
                        border: '3px solid var(--bg)',
                        boxShadow: '0 0 12px rgba(34,197,94,0.7)',
                      }}
                    />
                  </div>
                  <div style={{ fontWeight: 800, fontSize: '1.3rem' }}>Umair Yaqoob</div>
                  <div style={{ color: 'var(--primary)', fontSize: '0.85rem', fontWeight: 600, marginTop: '0.25rem' }}>
                    Developer, SEO Specialist, Digital Partner
                  </div>
                  <div style={{ marginTop: '0.55rem', fontSize: '0.78rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <Globe size={12} /> Pakistan based, serving clients globally
                  </div>
                </div>

                {CARD_SKILLS.map(([name, percent, color]) => (
                  <div key={name} style={{ marginBottom: '0.95rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.35rem' }}>
                      <span style={{ fontSize: '0.82rem', fontWeight: 600 }}>{name}</span>
                      <span style={{ fontSize: '0.75rem', color, fontWeight: 700 }}>{percent}%</span>
                    </div>
                    <div style={{ height: '4px', background: 'rgba(148,163,184,0.12)', borderRadius: '100px', overflow: 'hidden' }}>
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${percent}%` }}
                        transition={{ delay: 1.2, duration: 1.4, ease: 'easeOut' }}
                        style={{ height: '100%', background: `linear-gradient(90deg, ${color}, rgba(255,255,255,0.75))`, borderRadius: '100px' }}
                      />
                    </div>
                  </div>
                ))}

                <div
                  style={{
                    marginTop: '1.45rem',
                    padding: '0.85rem 1rem',
                    background: 'rgba(34,197,94,0.08)',
                    border: '1px solid rgba(34,197,94,0.18)',
                    borderRadius: '0.9rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                  }}
                >
                  <div style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--success)', boxShadow: '0 0 8px rgba(34,197,94,0.8)', animation: 'pulse-glow 2s ease infinite' }} />
                  <span style={{ fontSize: '0.82rem', color: '#86efac', fontWeight: 700 }}>Open for selected freelance projects</span>
                  <span style={{ marginLeft: 'auto', fontSize: '0.72rem', color: 'var(--text-dim)' }}>Lahore, PK</span>
                </div>
              </div>

              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                style={{
                  position: 'absolute',
                  top: '-1.5rem',
                  right: '-1.4rem',
                  background: 'rgba(8,17,26,0.94)',
                  border: '1px solid rgba(56,189,248,0.28)',
                  borderRadius: '1rem',
                  padding: '0.8rem 1.15rem',
                  backdropFilter: 'blur(20px)',
                  boxShadow: 'var(--shadow-strong)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  whiteSpace: 'nowrap',
                }}
              >
                <TrendingUp size={16} style={{ color: 'var(--primary)' }} />
                <span style={{ fontSize: '0.8rem', fontWeight: 700 }}>+300% Organic Growth</span>
              </motion.div>

              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                style={{
                  position: 'absolute',
                  bottom: '-1.6rem',
                  left: '-1.4rem',
                  background: 'rgba(8,17,26,0.94)',
                  border: '1px solid rgba(20,184,166,0.3)',
                  borderRadius: '1rem',
                  padding: '0.8rem 1.15rem',
                  backdropFilter: 'blur(20px)',
                  boxShadow: 'var(--shadow-strong)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  whiteSpace: 'nowrap',
                }}
              >
                <ShieldCheck size={16} style={{ color: 'var(--accent)' }} />
                <span style={{ fontSize: '0.8rem', fontWeight: 700 }}>Clean build + measurable results</span>
              </motion.div>

              <motion.div
                animate={{ x: [0, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity, delay: 2 }}
                style={{
                  position: 'absolute',
                  top: '42%',
                  left: '-2.5rem',
                  background: 'rgba(8,17,26,0.94)',
                  border: '1px solid rgba(56,189,248,0.28)',
                  borderRadius: '0.85rem',
                  padding: '0.65rem 1rem',
                  backdropFilter: 'blur(20px)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  whiteSpace: 'nowrap',
                }}
              >
                <ArrowDown size={13} style={{ color: 'var(--accent-2)' }} />
                <span style={{ fontSize: '0.72rem', fontWeight: 700, color: 'var(--accent-2)' }}>Fast audits, clear next steps</span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0 }}>
        <div className="ticker-wrap">
          <div className="ticker-track">
            {[...Array(2)].map((_, outerIndex) =>
              TICKER_ITEMS.map((item) => (
                <div key={`${outerIndex}-${item}`} className="ticker-item">
                  <span className="dot" />
                  {item}
                </div>
              )),
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
          .hero-grid > div:last-child { display: none; }
        }
      `}</style>
    </section>
  );
}
