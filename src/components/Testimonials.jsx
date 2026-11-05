import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote, ShieldCheck, Star, TrendingUp, Users } from 'lucide-react';
import { EASE, Reveal, SectionHead, fadeUp, stagger } from './ui';

const TESTIMONIALS = [
  {
    name: 'Ahmed Raza',
    role: 'CEO, iTitans Digital',
    avatar: 'AR',
    color: '#4f46e5',
    rating: 5,
    text: 'Umair transformed our online presence completely. Within 6 months, our organic traffic grew by 280% and we started ranking on page 1 for our most competitive keywords.',
  },
  {
    name: 'Dr. Khalid Mahmood',
    role: 'Director, PAC University',
    avatar: 'KM',
    color: '#0d9488',
    rating: 5,
    text: 'The WordPress site Umair developed for PAC University is fast, beautiful, and reliable. The structure improved discoverability and the launch felt smooth from start to finish.',
  },
  {
    name: 'Zain ul Abideen',
    role: 'Entrepreneur, E-Commerce Store',
    avatar: 'ZA',
    color: '#2563eb',
    rating: 5,
    text: 'Umair built our e-commerce platform from scratch with clear communication and thoughtful execution. The store feels premium and performs well on mobile too.',
  },
  {
    name: 'Sarah Khan',
    role: 'Marketing Head, Global Smart Hand',
    avatar: 'SK',
    color: '#7c3aed',
    rating: 5,
    text: 'Our international SEO campaign was a huge success. Umair helped us enter new markets with a smarter technical foundation and a strategy we could actually trust.',
  },
];

const REVIEW_METRICS = [
  { icon: Star, label: 'Client Rating', value: '5.0 / 5', desc: 'Clients consistently mention quality, clarity, and a smooth collaboration process.' },
  { icon: TrendingUp, label: 'Growth Focus', value: '300%+', desc: 'Projects are shaped around outcomes like visibility, speed, and stronger lead generation.' },
  { icon: ShieldCheck, label: 'Delivery Style', value: 'Clear & Reliable', desc: 'Expect practical communication, transparent scope, and no unnecessary complexity.' },
  { icon: Users, label: 'Partnerships', value: 'Long-Term', desc: 'Most work is built to support sustained improvement, not one-off vanity launches.' },
];

const BRANDS = ['iTitans', 'Zapex Web', 'PAC University', 'Global Smart Hand', 'khub.biz'];
const INTERVAL = 6000;

export default function Testimonials() {
  const [[current, dir], setState] = useState([0, 1]);
  const [paused, setPaused] = useState(false);

  const go = (next, d) => setState([(next + TESTIMONIALS.length) % TESTIMONIALS.length, d]);

  useEffect(() => {
    if (paused) return undefined;
    const t = setTimeout(() => go(current + 1, 1), INTERVAL);
    return () => clearTimeout(t);
  }, [current, paused]);

  const t = TESTIMONIALS[current];

  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <SectionHead
          eyebrow="Client Feedback"
          title={<>What clients <span className="accent">say</span></>}
          sub="Thoughtful design is good. Thoughtful design that also moves rankings, leads, and user trust is better. These reviews reflect that balance."
        />

        <div className="t-layout">
          <Reveal>
            <div
              className="card t-card"
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
            >
              <Quote size={72} className="t-quote-ico" />
              <AnimatePresence mode="wait" custom={dir}>
                <motion.div
                  key={current}
                  custom={dir}
                  initial={{ opacity: 0, x: dir * 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: dir * -40 }}
                  transition={{ duration: 0.5, ease: EASE }}
                  style={{ display: 'flex', flexDirection: 'column', flex: 1 }}
                >
                  <div className="stars">
                    {[...Array(t.rating)].map((_, i) => (
                      <motion.span key={i} initial={{ scale: 0, rotate: -30 }} animate={{ scale: 1, rotate: 0 }} transition={{ delay: 0.15 + i * 0.06, type: 'spring', stiffness: 500, damping: 16 }}>
                        <Star size={18} fill="var(--star)" color="var(--star)" />
                      </motion.span>
                    ))}
                  </div>
                  <p className="t-text">“{t.text}”</p>
                  <div className="t-person">
                    <span className="t-avatar" style={{ background: t.color }}>{t.avatar}</span>
                    <div>
                      <div className="t-name">{t.name}</div>
                      <div className="t-role">{t.role}</div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="t-controls">
              <button className="round-btn" onClick={() => go(current - 1, -1)} aria-label="Previous testimonial">
                <ChevronLeft size={20} />
              </button>
              <div className="t-progress">
                {TESTIMONIALS.map((item, i) => (
                  <button key={item.name} onClick={() => go(i, i > current ? 1 : -1)} aria-label={`Show testimonial from ${item.name}`}>
                    {i < current && <span />}
                    {i === current && (
                      <motion.span
                        key={`${current}-${paused}`}
                        initial={{ scaleX: paused ? 1 : 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: paused ? 0 : INTERVAL / 1000, ease: 'linear' }}
                      />
                    )}
                  </button>
                ))}
              </div>
              <button className="round-btn" onClick={() => go(current + 1, 1)} aria-label="Next testimonial">
                <ChevronRight size={20} />
              </button>
            </div>
          </Reveal>

          <motion.div className="metrics" variants={stagger(0.1)} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-60px' }}>
            {REVIEW_METRICS.map(({ icon: Icon, label, value, desc }) => (
              <motion.div key={label} variants={fadeUp} className="card card-hover metric">
                <span className="icon-box"><Icon size={18} /></span>
                <div>
                  <small>{label}</small>
                  <b>{value}</b>
                  <p>{desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <Reveal className="brands">
          <p>Trusted by teams across Pakistan and beyond</p>
          <div className="brand-row">
            {BRANDS.map((b) => (
              <span key={b}>{b}</span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
