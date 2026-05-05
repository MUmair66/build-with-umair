import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote, ShieldCheck, Star, TrendingUp, Users } from 'lucide-react';

const TESTIMONIALS = [
  {
    name: 'Ahmed Raza',
    role: 'CEO, iTitans Digital',
    avatar: 'AR',
    color: '#38bdf8',
    rating: 5,
    text: 'Umair transformed our online presence completely. Within 6 months, our organic traffic grew by 280% and we started ranking on page 1 for our most competitive keywords.',
  },
  {
    name: 'Dr. Khalid Mahmood',
    role: 'Director, PAC University',
    avatar: 'KM',
    color: '#22c55e',
    rating: 5,
    text: 'The WordPress site Umair developed for PAC University is fast, beautiful, and reliable. The structure improved discoverability and the launch felt smooth from start to finish.',
  },
  {
    name: 'Zain ul Abideen',
    role: 'Entrepreneur, E-Commerce Store',
    avatar: 'ZA',
    color: '#14b8a6',
    rating: 5,
    text: 'Umair built our e-commerce platform from scratch with clear communication and thoughtful execution. The store feels premium and performs well on mobile too.',
  },
  {
    name: 'Sarah Khan',
    role: 'Marketing Head, Global Smart Hand',
    avatar: 'SK',
    color: '#0ea5e9',
    rating: 5,
    text: 'Our international SEO campaign was a huge success. Umair helped us enter new markets with a smarter technical foundation and a strategy we could actually trust.',
  },
];

const REVIEW_METRICS = [
  { icon: Star, label: 'Client Rating', value: '5.0/5', color: '#38bdf8' },
  { icon: TrendingUp, label: 'Growth Focus', value: '300%+', color: '#14b8a6' },
  { icon: ShieldCheck, label: 'Delivery Style', value: 'Clear & Reliable', color: '#22c55e' },
  { icon: Users, label: 'Partnerships', value: 'Long-Term', color: '#0ea5e9' },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    if (!autoPlay) return undefined;
    const timer = setInterval(() => setCurrent((value) => (value + 1) % TESTIMONIALS.length), 5000);
    return () => clearInterval(timer);
  }, [autoPlay]);

  const previous = () => {
    setAutoPlay(false);
    setCurrent((value) => (value - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const next = () => {
    setAutoPlay(false);
    setCurrent((value) => (value + 1) % TESTIMONIALS.length);
  };

  const activeTestimonial = TESTIMONIALS[current];

  return (
    <section id="testimonials" style={{ background: 'linear-gradient(180deg, var(--bg), #09121c)', position: 'relative', overflow: 'hidden' }}>
      <div className="orb orb-cyan" style={{ width: '400px', height: '400px', top: '0%', left: '-5%' }} />
      <div className="orb orb-purple" style={{ width: '350px', height: '350px', bottom: '0%', right: '-5%' }} />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{ textAlign: 'center', marginBottom: '3.2rem' }}>
          <span className="section-label">Client Feedback</span>
          <h2 style={{ fontSize: 'clamp(2.5rem,5vw,4rem)', fontWeight: 900 }}>
            What Clients <span className="gradient-text">Say</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', maxWidth: '560px', margin: '1rem auto 0', lineHeight: 1.8 }}>
            Thoughtful design is good. Thoughtful design that also moves rankings, leads, and user trust is better. These reviews reflect that balance.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1.2fr) minmax(260px, 0.8fr)',
            gap: '1.5rem',
            alignItems: 'stretch',
          }}
          className="testimonial-grid"
        >
          <div style={{ maxWidth: '100%', position: 'relative' }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.45 }}
                style={{
                  background: 'rgba(15,23,35,0.82)',
                  border: `1px solid ${activeTestimonial.color}3d`,
                  borderRadius: '2rem',
                  padding: '3rem',
                  position: 'relative',
                  overflow: 'hidden',
                  minHeight: '100%',
                  boxShadow: 'var(--shadow-strong)',
                }}
              >
                <div style={{ position: 'absolute', top: '2rem', right: '2rem', color: activeTestimonial.color, opacity: 0.15 }}>
                  <Quote size={60} />
                </div>

                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: '10%',
                    right: '10%',
                    height: '1px',
                    background: `linear-gradient(90deg, transparent, ${activeTestimonial.color}, transparent)`,
                  }}
                />

                <div style={{ display: 'flex', gap: '0.25rem', marginBottom: '1.5rem' }}>
                  {[...Array(activeTestimonial.rating)].map((_, index) => (
                    <Star key={index} size={18} style={{ color: 'var(--primary)', fill: 'var(--primary)' }} />
                  ))}
                </div>

                <p style={{ fontSize: 'clamp(1rem,2vw,1.15rem)', lineHeight: 1.9, color: '#dbe4ef', marginBottom: '2.5rem', fontStyle: 'italic' }}>
                  "{activeTestimonial.text}"
                </p>

                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div
                    style={{
                      width: 54,
                      height: 54,
                      borderRadius: '1rem',
                      background: `linear-gradient(135deg, ${activeTestimonial.color}, rgba(255,255,255,0.8))`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 900,
                      fontSize: '1rem',
                      color: '#08111a',
                      flexShrink: 0,
                    }}
                  >
                    {activeTestimonial.avatar}
                  </div>
                  <div>
                    <div style={{ fontWeight: 800, fontSize: '1rem' }}>{activeTestimonial.name}</div>
                    <div style={{ fontSize: '0.85rem', color: activeTestimonial.color, fontWeight: 600 }}>{activeTestimonial.role}</div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem', marginTop: '2rem' }}>
              <button
                onClick={previous}
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: '50%',
                  border: '1px solid rgba(148,163,184,0.18)',
                  background: 'rgba(15,23,35,0.8)',
                  color: 'var(--text)',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <ChevronLeft size={20} />
              </button>

              <div style={{ display: 'flex', gap: '0.5rem' }}>
                {TESTIMONIALS.map((testimonial, index) => (
                  <button
                    key={testimonial.name}
                    onClick={() => {
                      setAutoPlay(false);
                      setCurrent(index);
                    }}
                    style={{
                      width: index === current ? 24 : 8,
                      height: 8,
                      borderRadius: '999px',
                      background: index === current ? testimonial.color : 'rgba(148,163,184,0.24)',
                      border: 'none',
                      cursor: 'pointer',
                      transition: 'all 0.3s',
                      padding: 0,
                    }}
                  />
                ))}
              </div>

              <button
                onClick={next}
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: '50%',
                  border: '1px solid rgba(148,163,184,0.18)',
                  background: 'rgba(15,23,35,0.8)',
                  color: 'var(--text)',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          <div style={{ display: 'grid', gap: '1rem' }}>
            {REVIEW_METRICS.map(({ icon: Icon, label, value, color }) => (
              <div key={label} className="testimonial-metrics">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.55rem' }}>
                  <div
                    style={{
                      width: 42,
                      height: 42,
                      borderRadius: '0.9rem',
                      background: `${color}26`,
                      border: `1px solid ${color}42`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color,
                    }}
                  >
                    <Icon size={18} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-dim)' }}>{label}</div>
                    <div style={{ fontWeight: 800 }}>{value}</div>
                  </div>
                </div>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.84rem', lineHeight: 1.7 }}>
                  {label === 'Client Rating' && 'Clients consistently mention quality, clarity, and a smooth collaboration process.'}
                  {label === 'Growth Focus' && 'Projects are shaped around outcomes like visibility, speed, and stronger lead generation.'}
                  {label === 'Delivery Style' && 'Expect practical communication, transparent scope, and no unnecessary complexity.'}
                  {label === 'Partnerships' && 'Most work is built to support sustained improvement, not one-off vanity launches.'}
                </p>
              </div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginTop: '4.5rem' }}
        >
          <p style={{ color: 'var(--text-dim)', fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1.6rem' }}>
            Trusted by teams across Pakistan and beyond
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '1rem' }}>
            {['iTitans', 'Zapex Web', 'PAC University', 'Global Smart Hand', 'khub.biz'].map((brand) => (
              <div
                key={brand}
                style={{
                  padding: '0.6rem 1.35rem',
                  border: '1px solid rgba(148,163,184,0.14)',
                  borderRadius: '999px',
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  color: 'var(--text-muted)',
                  background: 'rgba(15,23,35,0.64)',
                }}
              >
                {brand}
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .testimonial-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
