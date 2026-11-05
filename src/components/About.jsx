import { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Briefcase, CheckCircle2, Code2, Globe, Layers, Search, Star, Target, TrendingUp, Users, Zap } from 'lucide-react';
import { Counter, EASE, Reveal, SectionHead, fadeUp, spotlightMove, stagger } from './ui';

const skills = [
  { name: 'Full Stack Development', level: 95 },
  { name: 'SEO Strategy & Optimization', level: 95 },
  { name: 'React.js & Node.js', level: 90 },
  { name: 'WordPress Development', level: 92 },
  { name: 'Technical SEO Audits', level: 94 },
  { name: 'Business Growth Systems', level: 88 },
];

const tools = [
  'React', 'Node.js', 'Express', 'MongoDB', 'WordPress', 'Elementor', 'Screaming Frog', 'Moz',
  'SEMrush', 'Ahrefs', 'Google Search Console', 'Google Analytics', 'Bootstrap', 'JavaScript', 'HTML5', 'CSS3',
];

const services = [
  {
    icon: Code2,
    color: '#4f46e5',
    bg: '#eef0ff',
    title: 'Full Stack Web Development',
    desc: 'Fast, scalable websites and apps built with modern tooling and a close eye on usability.',
    points: ['Custom React applications', 'Node.js backend solutions', 'MongoDB integration', 'Responsive UI systems'],
  },
  {
    icon: Search,
    color: '#0d9488',
    bg: '#e6faf6',
    title: 'SEO Optimization & Strategy',
    desc: 'Practical SEO execution across technical audits, content direction, and search visibility improvements.',
    points: ['Technical SEO audits', 'Keyword research', 'Backlink strategy', 'Competitor analysis'],
  },
  {
    icon: Globe,
    color: '#2563eb',
    bg: '#eaf1ff',
    title: 'WordPress Development',
    desc: 'Custom WordPress builds and improvements that are easier to manage, faster to load, and better to rank.',
    points: ['Custom theme development', 'Performance optimization', 'Plugin management', 'Security and maintenance'],
  },
  {
    icon: TrendingUp,
    color: '#7c3aed',
    bg: '#f3edff',
    title: 'Business Website Solutions',
    desc: 'Web solutions focused on cleaner structure, stronger presentation, and better digital credibility.',
    points: ['Business website revamps', 'Service page structure', 'Lead-focused layouts', 'Performance optimization'],
  },
];

const experience = [
  {
    year: '2024 — Now',
    title: 'Full Stack Developer & SEO Specialist',
    company: 'iTitans',
    desc: 'Leading development and SEO strategies for varied digital projects with a focus on speed, visibility, and scalable implementation.',
  },
  {
    year: '2023 — 2024',
    title: 'WordPress & Custom Web Developer',
    company: 'ZapexWeb',
    desc: 'Built and refined professional websites with an emphasis on clean UX, better performance, and stronger responsiveness.',
  },
  {
    year: '2019 — 2023',
    title: 'IT Graduate (WordPress & Dev)',
    company: 'PAC.edu.pk',
    desc: 'Developed and managed PAC.edu.pk, improving layouts, SEO structure, and overall website quality.',
  },
];

const miniStats = [
  { icon: Briefcase, val: '5+', lbl: 'Years Experience' },
  { icon: Star, val: '18+', lbl: 'Projects Delivered' },
  { icon: TrendingUp, val: '300%', lbl: 'Traffic Growth' },
  { icon: Users, val: '20+', lbl: 'Happy Clients' },
];

const why = [
  { icon: Target, title: 'Goal-Oriented', desc: 'Decisions stay aligned with business goals and practical KPIs.' },
  { icon: Zap, title: 'Fast Delivery', desc: 'Efficient workflows keep projects moving without chaos.' },
  { icon: Layers, title: 'Full-Stack View', desc: 'SEO and dev work together instead of competing with each other.' },
  { icon: CheckCircle2, title: 'Proven Results', desc: 'Traffic growth and cleaner user experience show up across multiple projects.' },
];

function Timeline() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 75%', 'end 55%'] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 26 });

  return (
    <div className="timeline" ref={ref}>
      <div className="timeline-line-bg" />
      <motion.div className="timeline-line" style={{ scaleY }} />
      {experience.map((item, i) => (
        <motion.div
          key={item.title}
          className="tl-item"
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, delay: i * 0.12, ease: EASE }}
        >
          <motion.span
            className="tl-dot"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ type: 'spring', stiffness: 400, damping: 18, delay: i * 0.12 + 0.1 }}
          />
          <div className="tl-year">{item.year}</div>
          <div className="tl-title">{item.title}</div>
          <div className="tl-company">{item.company}</div>
          <p className="tl-desc">{item.desc}</p>
        </motion.div>
      ))}
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <SectionHead
          eyebrow="Who I Am"
          title={<>The mind behind <span className="accent">the work</span></>}
          sub="I work at the overlap of development, UX polish, and SEO strategy. That means the websites I build are not only visually strong, but also structured to perform better after launch."
        />

        <div className="about-grid">
          <Reveal>
            <h3 className="sub-title"><span className="num">01</span> Journey &amp; Experience</h3>
            <Timeline />
          </Reveal>

          <Reveal delay={0.1}>
            <h3 className="sub-title"><span className="num">02</span> Skills &amp; Expertise</h3>
            {skills.map((skill, i) => (
              <div key={skill.name} className="skill">
                <div className="skill-head">
                  <span>{skill.name}</span>
                  <span><Counter value={`${skill.level}%`} duration={1.4} /></span>
                </div>
                <div className="bar-track">
                  <motion.div
                    className="bar-fill"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.4, delay: i * 0.08, ease: EASE }}
                  />
                </div>
              </div>
            ))}

            <h4 style={{ fontSize: '0.95rem', margin: '30px 0 12px', color: 'var(--muted)' }}>Tools I use daily</h4>
            <motion.div className="tools" variants={stagger(0.03)} initial="hidden" whileInView="show" viewport={{ once: true }}>
              {tools.map((tool) => (
                <motion.span key={tool} className="tag" variants={fadeUp}>{tool}</motion.span>
              ))}
            </motion.div>

            <div className="mini-stats">
              {miniStats.map(({ icon: Icon, val, lbl }) => (
                <div key={lbl} className="mini-stat">
                  <span className="icon-box"><Icon size={19} /></span>
                  <div>
                    <div className="stat-value"><Counter value={val} /></div>
                    <div className="stat-label">{lbl}</div>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <SectionHead
          eyebrow="What I Do"
          title={<>Services I <span className="accent">deliver</span></>}
          sub="From search visibility to full custom builds, I cover the digital stack with strategy and execution together."
        />

        <motion.div className="services-grid" variants={stagger(0.1)} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-60px' }}>
          {services.map(({ icon: Icon, color, bg, title, desc, points }) => (
            <motion.article key={title} variants={fadeUp} className="card card-hover spotlight service" onMouseMove={spotlightMove}>
              <span className="icon-box" style={{ background: bg, color }}><Icon size={22} /></span>
              <h4>{title}</h4>
              <p>{desc}</p>
              <ul>
                {points.map((point) => (
                  <li key={point}><CheckCircle2 size={15} style={{ color }} /> {point}</li>
                ))}
              </ul>
            </motion.article>
          ))}
        </motion.div>

        <Reveal className="why">
          <div style={{ position: 'relative', maxWidth: 640 }}>
            <span className="eyebrow">Why Choose Me</span>
            <h3>Results-driven. Data-backed.</h3>
            <p className="section-sub">
              I do not treat launches like the finish line. The goal is to create a foundation that is easier to grow, easier to market, and easier to trust.
            </p>
          </div>
          <motion.div className="why-grid" variants={stagger(0.1, 0.2)} initial="hidden" whileInView="show" viewport={{ once: true }}>
            {why.map(({ icon: Icon, title, desc }) => (
              <motion.div key={title} className="why-item" variants={fadeUp}>
                <span className="icon-box"><Icon size={20} /></span>
                <h5>{title}</h5>
                <p>{desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}
