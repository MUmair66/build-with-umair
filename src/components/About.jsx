import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, CheckCircle, Code2, Globe, Layers, Search, Star, Target, TrendingUp, Users, Zap } from 'lucide-react';

const skills = [
  { name: 'Full Stack Development', level: 95, color: '#38bdf8' },
  { name: 'SEO Strategy & Optimization', level: 95, color: '#14b8a6' },
  { name: 'React.js & Node.js', level: 90, color: '#22c55e' },
  { name: 'WordPress Development', level: 92, color: '#0ea5e9' },
  { name: 'Technical SEO Audits', level: 94, color: '#38bdf8' },
  { name: 'Business Growth Systems', level: 88, color: '#14b8a6' },
];

const tools = [
  'React',
  'Node.js',
  'Express',
  'MongoDB',
  'WordPress',
  'Elementor',
  'Screaming Frog',
  'Moz',
  'SEMrush',
  'Ahrefs',
  'Google Search Console',
  'Google Analytics',
  'Bootstrap',
  'JavaScript',
  'HTML5',
  'CSS3',
];

const services = [
  {
    icon: <Code2 size={26} />,
    color: '#38bdf8',
    gradient: 'linear-gradient(135deg, rgba(56,189,248,0.16), rgba(56,189,248,0.05))',
    border: 'rgba(56,189,248,0.2)',
    title: 'Full Stack Web Development',
    desc: 'Fast, scalable websites and apps built with modern tooling and a close eye on usability.',
    points: ['Custom React applications', 'Node.js backend solutions', 'MongoDB integration', 'Responsive UI systems'],
  },
  {
    icon: <Search size={26} />,
    color: '#14b8a6',
    gradient: 'linear-gradient(135deg, rgba(20,184,166,0.16), rgba(20,184,166,0.05))',
    border: 'rgba(20,184,166,0.2)',
    title: 'SEO Optimization & Strategy',
    desc: 'Practical SEO execution across technical audits, content direction, and search visibility improvements.',
    points: ['Technical SEO audits', 'Keyword research', 'Backlink strategy', 'Competitor analysis'],
  },
  {
    icon: <Globe size={26} />,
    color: '#22c55e',
    gradient: 'linear-gradient(135deg, rgba(34,197,94,0.16), rgba(34,197,94,0.05))',
    border: 'rgba(34,197,94,0.2)',
    title: 'WordPress Development',
    desc: 'Custom WordPress builds and improvements that are easier to manage, faster to load, and better to rank.',
    points: ['Custom theme development', 'Performance optimization', 'Plugin management', 'Security and maintenance'],
  },
  {
    icon: <TrendingUp size={26} />,
    color: '#0ea5e9',
    gradient: 'linear-gradient(135deg, rgba(14,165,233,0.16), rgba(14,165,233,0.05))',
    border: 'rgba(14,165,233,0.2)',
    title: 'Business Website Solutions',
    desc: 'Web solutions focused on cleaner structure, stronger presentation, and better digital credibility.',
    points: ['Business website revamps', 'Service page structure', 'Lead-focused layouts', 'Performance optimization'],
  },
];

const experience = [
  {
    year: '2024 - Now',
    title: 'Full Stack Developer & SEO Specialist',
    company: 'iTitans',
    desc: 'Leading development and SEO strategies for varied digital projects with a focus on speed, visibility, and scalable implementation.',
    color: '#38bdf8',
  },
  {
    year: '2023 - 2024',
    title: 'WordPress & Custom Web Developer',
    company: 'ZapexWeb',
    desc: 'Built and refined professional websites with an emphasis on clean UX, better performance, and stronger responsiveness.',
    color: '#14b8a6',
  },
  {
    year: '2019 - 2023',
    title: 'IT Graduate (WordPress & Dev)',
    company: 'PAC.edu.pk',
    desc: 'Developed and managed PAC.edu.pk, improving layouts, SEO structure, and overall website quality.',
    color: '#22c55e',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (index) => ({ opacity: 1, y: 0, transition: { delay: index * 0.1, duration: 0.6 } }),
};

export default function About() {
  return (
    <section id="about" style={{ background: 'linear-gradient(180deg, var(--bg), #0a1420, var(--bg))', position: 'relative', overflow: 'hidden' }}>
      <div className="orb orb-cyan" style={{ width: '500px', height: '500px', top: '5%', right: '-10%' }} />
      <div className="orb orb-purple" style={{ width: '400px', height: '400px', bottom: '5%', left: '-8%' }} />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <span className="section-label">Who I Am</span>
          <h2 style={{ fontSize: 'clamp(2.5rem,5vw,4rem)', fontWeight: 900 }}>
            The Mind Behind <span className="gradient-text">the Work</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', maxWidth: '620px', margin: '1.25rem auto 0', lineHeight: 1.85 }}>
            I work at the overlap of development, UX polish, and SEO strategy. That means the websites I build are not only visually strong, but also structured to perform better after launch.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '5rem', alignItems: 'start', marginBottom: '7rem' }} className="about-grid">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '2.5rem' }}>
              Journey & <span className="gradient-text">Experience</span>
            </h3>
            <div className="timeline">
              {experience.map((item, index) => (
                <motion.div
                  key={item.title}
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={cardVariants}
                  className="timeline-item"
                  style={{ '--dot-color': item.color }}
                >
                  <div className="timeline-year" style={{ color: item.color }}>{item.year}</div>
                  <div className="timeline-title">{item.title}</div>
                  <div style={{ fontSize: '0.8rem', color: item.color, fontWeight: 600, marginBottom: '0.4rem' }}>{item.company}</div>
                  <div className="timeline-desc">{item.desc}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '2.5rem' }}>
              Skills & <span className="gradient-text">Expertise</span>
            </h3>

            <div style={{ marginBottom: '3rem' }}>
              {skills.map((skill, index) => (
                <div key={skill.name} className="skill-bar-wrap">
                  <div className="skill-bar-header">
                    <span className="skill-bar-name">{skill.name}</span>
                    <span className="skill-bar-pct" style={{ color: skill.color }}>{skill.level}%</span>
                  </div>
                  <div className="skill-bar-track">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: index * 0.1, ease: 'easeOut' }}
                      className="skill-bar-fill"
                      style={{ background: `linear-gradient(90deg, ${skill.color}, rgba(255,255,255,0.75))`, color: skill.color }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <h4 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--text-muted)' }}>Tools I Use Daily</h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {tools.map((tool) => (
                <span key={tool} className="tech-tag">{tool}</span>
              ))}
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '2.5rem' }}>
              {[
                { icon: Briefcase, val: '5+', lbl: 'Years Experience', color: '#38bdf8' },
                { icon: Star, val: '18+', lbl: 'Projects Delivered', color: '#22c55e' },
                { icon: TrendingUp, val: '300%', lbl: 'Traffic Growth', color: '#14b8a6' },
                { icon: Users, val: '20+', lbl: 'Happy Clients', color: '#0ea5e9' },
              ].map(({ icon: Icon, val, lbl, color }) => (
                <div key={lbl} className="stat-card" style={{ textAlign: 'center' }}>
                  <Icon size={22} style={{ color, margin: '0 auto 0.5rem', display: 'block' }} />
                  <div
                    className="stat-num"
                    style={{
                      fontSize: '1.8rem',
                      background: `linear-gradient(135deg, ${color}, rgba(255,255,255,0.78))`,
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    {val}
                  </div>
                  <div className="stat-label">{lbl}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <span className="section-label">What I Do</span>
          <h3 style={{ fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 900 }}>
            Services I <span className="gradient-text">Deliver</span>
          </h3>
          <p style={{ color: 'var(--text-muted)', maxWidth: '500px', margin: '1rem auto 0', lineHeight: 1.8 }}>
            From search visibility to full custom builds, I cover the digital stack with strategy and execution together.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '5rem' }}>
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              className="service-card"
              style={{ '--card-color': service.color }}
            >
              <div
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: '1.25rem',
                  marginBottom: '1.5rem',
                  background: service.gradient,
                  border: `1px solid ${service.border}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: service.color,
                }}
              >
                {service.icon}
              </div>
              <h4 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: '0.75rem', color: 'var(--text)' }}>{service.title}</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.75, marginBottom: '1.5rem' }}>{service.desc}</p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {service.points.map((point) => (
                  <div key={point} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <CheckCircle size={13} style={{ color: service.color, flexShrink: 0 }} />
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{point}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            background: 'linear-gradient(135deg, rgba(56,189,248,0.06), rgba(20,184,166,0.06))',
            border: '1px solid rgba(148,163,184,0.12)',
            borderRadius: '2rem',
            padding: '3rem',
            textAlign: 'center',
            boxShadow: 'var(--shadow-strong)',
          }}
        >
          <span className="section-label">Why Choose Me</span>
          <h3 style={{ fontSize: 'clamp(1.8rem,3.5vw,2.5rem)', fontWeight: 900, marginBottom: '1rem' }}>
            Results-Driven. <span className="gradient-text">Data-Backed.</span>
          </h3>
          <p style={{ color: 'var(--text-muted)', maxWidth: '620px', margin: '0 auto 3rem', lineHeight: 1.8 }}>
            I do not treat launches like the finish line. The goal is to create a foundation that is easier to grow, easier to market, and easier to trust.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
            {[
              { icon: Target, color: '#38bdf8', title: 'Goal-Oriented', desc: 'Decisions stay aligned with business goals and practical KPIs.' },
              { icon: Zap, color: '#14b8a6', title: 'Fast Delivery', desc: 'Efficient workflows keep projects moving without chaos.' },
              { icon: Layers, color: '#22c55e', title: 'Full-Stack View', desc: 'SEO and dev work together instead of competing with each other.' },
              { icon: CheckCircle, color: 'var(--success)', title: 'Proven Results', desc: 'Traffic growth and cleaner user experience show up across multiple projects.' },
            ].map(({ icon: Icon, color, title, desc }) => (
              <div key={title} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem' }}>
                <div
                  style={{
                    width: 52,
                    height: 52,
                    borderRadius: '1rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: `${color}1f`,
                    border: `1px solid ${color}38`,
                    color,
                  }}
                >
                  <Icon size={22} />
                </div>
                <div style={{ fontWeight: 700, fontSize: '1rem' }}>{title}</div>
                <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: 1.6 }}>{desc}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .about-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
