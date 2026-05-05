import React, { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  BarChart2,
  CheckCircle,
  Code2,
  Eye,
  Globe,
  Search,
  Sparkles,
  Star,
  TrendingUp,
} from 'lucide-react';

const PROJECTS = [
  {
    num: '01',
    title: 'globalsmarthands.co.uk',
    category: 'SEO',
    description: 'International SEO campaign for a global services brand with technical audits, content direction, and authority-building execution.',
    tags: ['Technical SEO', 'On-Page', 'Off-Page', 'GSC'],
    result: '+300% Organic Growth',
    resultIcon: TrendingUp,
    stat1: { label: 'Organic Growth', value: '+300%' },
    stat2: { label: 'Ranking Keywords', value: '100+' },
    highlights: ['Multilingual SEO setup', 'Crawlability optimization', 'Backlink building'],
    featured: true,
    accent: '#14b8a6',
  },
  {
    num: '02',
    title: 'pac.edu.pk',
    category: 'WordPress',
    description: 'Developed and optimized the official PAC Group website with improved structure, stronger UX, and SEO-focused performance tuning.',
    tags: ['WordPress', 'Custom Theme', 'Speed Opt.', 'SEO'],
    result: '#1 Education Portal in Region',
    resultIcon: Star,
    stat1: { label: 'Load Speed', value: '<1.5s' },
    stat2: { label: 'SEO Score', value: '98/100' },
    highlights: ['Custom layout design', 'SEO-friendly structure', 'Plugin management'],
    featured: true,
    accent: '#22c55e',
  },
  {
    num: '03',
    title: 'zapexweb.com',
    category: 'Custom',
    description: 'React-based company website created to present services with a modern feel, high speed, and polished responsive behavior.',
    tags: ['React.js', 'Vite', 'Modern UI', 'Responsive'],
    result: '100/100 UI Experience',
    resultIcon: CheckCircle,
    stat1: { label: 'Performance', value: '99' },
    stat2: { label: 'UX Rating', value: '10/10' },
    highlights: ['High-speed React build', 'Smooth animations', 'Modern design'],
    featured: true,
    accent: '#38bdf8',
  },
  {
    num: '04',
    title: 'Hospital Management',
    category: 'Custom',
    description: 'A full-stack hospital management system with role-based access, secure authentication, and dashboard-driven workflows.',
    tags: ['MERN Stack', 'Node.js', 'Express', 'MongoDB'],
    result: 'Secure & Scalable System',
    resultIcon: CheckCircle,
    stat1: { label: 'Roles', value: '4' },
    stat2: { label: 'Security', value: 'JWT' },
    highlights: ['Role-based access', 'Secure authentication', 'Dynamic dashboard'],
    accent: '#0ea5e9',
  },
  {
    num: '05',
    title: 'ititansdigital.com',
    category: 'SEO',
    description: 'Complete SEO strategy focused on indexing, crawlability, schema implementation, and site-speed improvements.',
    tags: ['SEO Strategy', 'Indexing', 'Schema', 'Speed'],
    result: '+250% Search Visibility',
    resultIcon: TrendingUp,
    stat1: { label: 'Search Visibility', value: '+250%' },
    stat2: { label: 'Crawl Rate', value: '+180%' },
    highlights: ['Schema implementation', 'Indexing fix', 'Performance audit'],
    accent: '#14b8a6',
  },
  {
    num: '06',
    title: 'Ecommerce with Zain',
    category: 'Custom',
    description: 'Custom React storefront with cart flows, product browsing, and a mobile-first interface tailored for conversion.',
    tags: ['React.js', 'Ecommerce', 'Cart System', 'UI/UX'],
    result: 'Fully Functional Store',
    resultIcon: Star,
    stat1: { label: 'Products', value: '500+' },
    stat2: { label: 'Responsive', value: '100%' },
    highlights: ['Dynamic cart system', 'Product filtering', 'Mobile-first design'],
    accent: '#38bdf8',
  },
  {
    num: '07',
    title: 'khub.biz',
    category: 'SEO',
    description: 'SEO auditing and authority growth with a focus on on-page optimization, reporting, and backlink strategy.',
    tags: ['On-Page SEO', 'Audit', 'Backlinks', 'Authority'],
    result: 'Page 1 Rankings',
    resultIcon: TrendingUp,
    stat1: { label: 'Rankings', value: 'Top 10' },
    stat2: { label: 'DA Growth', value: '+15' },
    highlights: ['Keyword optimization', 'SEO audit reports', 'Backlink strategy'],
    accent: '#14b8a6',
  },
  {
    num: '08',
    title: 'ititans.com',
    category: 'SEO',
    description: 'Technical SEO and UX performance work with strong attention to GSC monitoring, mobile usability, and faster page loads.',
    tags: ['Technical SEO', 'GSC', 'Performance', 'UX'],
    result: 'Sub-2s Page Load',
    resultIcon: Star,
    stat1: { label: 'GSC Health', value: '100%' },
    stat2: { label: 'Mobile Score', value: '95+' },
    highlights: ['GSC monitoring', 'Mobile optimization', 'Site speed fix'],
    accent: '#14b8a6',
  },
];

const FILTERS = ['All', 'SEO', 'WordPress', 'Custom'];

const catIcon = (category) => {
  if (category === 'SEO') return <Search size={18} />;
  if (category === 'WordPress') return <Globe size={18} />;
  return <Code2 size={18} />;
};

const catBadge = (category) => {
  if (category === 'SEO') return 'project-badge badge-seo';
  if (category === 'WordPress') return 'project-badge badge-wp';
  return 'project-badge badge-custom';
};

const ProjectCard = ({ project, index }) => {
  const [hovered, setHovered] = useState(false);
  const Icon = project.resultIcon || TrendingUp;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.45, delay: index * 0.06 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderRadius: '1.5rem',
        background: hovered
          ? `linear-gradient(135deg, ${project.accent}18, rgba(8,17,26,0.2))`
          : 'rgba(15,23,35,0.82)',
        border: `1px solid ${hovered ? `${project.accent}55` : 'rgba(148,163,184,0.12)'}`,
        overflow: 'hidden',
        transition: 'all 0.4s cubic-bezier(0.4,0,0.2,1)',
        transform: hovered ? 'translateY(-6px)' : 'translateY(0)',
        boxShadow: hovered ? '0 28px 60px -24px rgba(2,6,23,0.75)' : 'none',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '2px',
          background: `linear-gradient(90deg, transparent, ${project.accent}, transparent)`,
          opacity: hovered ? 1 : 0.35,
          transition: 'opacity 0.4s',
        }}
      />

      <div
        style={{
          position: 'absolute',
          top: '1rem',
          right: '1.35rem',
          fontSize: '3.5rem',
          fontWeight: 900,
          lineHeight: 1,
          color: project.accent,
          opacity: hovered ? 0.14 : 0.08,
          transition: 'opacity 0.4s',
          pointerEvents: 'none',
          fontFamily: 'Space Grotesk, sans-serif',
        }}
      >
        {project.num}
      </div>

      <div style={{ padding: '1.75rem 1.75rem 0', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div
          style={{
            width: 48,
            height: 48,
            borderRadius: '0.95rem',
            background: `${project.accent}1f`,
            border: `1px solid ${project.accent}40`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: project.accent,
            boxShadow: hovered ? `0 0 18px ${project.accent}33` : 'none',
            transition: 'all 0.3s',
          }}
        >
          {catIcon(project.category)}
        </div>
        <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'flex-end' }}>
          {project.featured && (
            <span
              style={{
                fontSize: '0.62rem',
                fontWeight: 700,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                padding: '0.2rem 0.55rem',
                borderRadius: '999px',
                background: 'rgba(56,189,248,0.1)',
                color: 'var(--primary)',
                border: '1px solid rgba(56,189,248,0.22)',
              }}
            >
              Featured
            </span>
          )}
          <span className={catBadge(project.category)}>{project.category}</span>
        </div>
      </div>

      <div style={{ padding: '1rem 1.75rem 1.75rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <h3
          style={{
            fontSize: '1.25rem',
            fontWeight: 800,
            marginBottom: '0.6rem',
            color: hovered ? project.accent : 'var(--text)',
            transition: 'color 0.3s',
          }}
        >
          {project.title}
        </h3>

        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.75, marginBottom: '1.15rem' }}>
          {project.description}
        </p>

        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              style={{ marginBottom: '1.15rem', overflow: 'hidden' }}
            >
              {project.highlights.map((highlight) => (
                <div key={highlight} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.45rem' }}>
                  <CheckCircle size={12} style={{ color: project.accent, flexShrink: 0 }} />
                  <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>{highlight}</span>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.65rem', marginBottom: '1.25rem' }}>
          {[project.stat1, project.stat2].map((stat) => (
            <div
              key={stat.label}
              style={{
                background: 'rgba(8,17,26,0.4)',
                border: `1px solid ${hovered ? `${project.accent}40` : 'rgba(148,163,184,0.12)'}`,
                borderRadius: '0.8rem',
                padding: '0.7rem 0.75rem',
                textAlign: 'center',
                transition: 'border-color 0.3s',
              }}
            >
              <div style={{ fontSize: '1rem', fontWeight: 800, color: project.accent }}>{stat.value}</div>
              <div style={{ fontSize: '0.62rem', color: 'var(--text-dim)', marginTop: '0.1rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.15rem' }}>
          {project.tags.map((tag) => (
            <span key={tag} className="tech-tag">
              {tag}
            </span>
          ))}
        </div>

        <div
          style={{
            marginTop: 'auto',
            paddingTop: '1rem',
            borderTop: `1px solid ${hovered ? `${project.accent}30` : 'rgba(148,163,184,0.12)'}`,
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            fontSize: '0.82rem',
            color: project.accent,
            fontWeight: 700,
          }}
        >
          <Icon size={14} />
          {project.result}
        </div>
      </div>
    </motion.div>
  );
};

export default function Projects() {
  const [active, setActive] = useState('All');
  const [query, setQuery] = useState('');

  const counts = FILTERS.reduce((accumulator, filter) => {
    accumulator[filter] = filter === 'All' ? PROJECTS.length : PROJECTS.filter((project) => project.category === filter).length;
    return accumulator;
  }, {});

  const filtered = useMemo(() => {
    const categoryFiltered = active === 'All' ? PROJECTS : PROJECTS.filter((project) => project.category === active);
    const normalized = query.trim().toLowerCase();

    if (!normalized) {
      return categoryFiltered;
    }

    return categoryFiltered.filter((project) =>
      [project.title, project.description, ...project.tags, ...project.highlights].some((item) => item.toLowerCase().includes(normalized)),
    );
  }, [active, query]);

  const featuredCount = filtered.filter((project) => project.featured).length;

  return (
    <section id="projects" style={{ background: 'linear-gradient(180deg, var(--bg-soft), var(--bg))', position: 'relative', overflow: 'hidden' }}>
      <div className="orb orb-blue" style={{ width: '500px', height: '500px', top: '-5%', right: '5%' }} />
      <div className="orb orb-purple" style={{ width: '400px', height: '400px', bottom: '-5%', left: '10%' }} />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span className="section-label">Featured Work</span>
          <h2 style={{ fontSize: 'clamp(2.5rem,5vw,4rem)', fontWeight: 900, marginBottom: '1rem' }}>
            Selected <span className="gradient-text">Projects</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', maxWidth: '620px', margin: '0 auto 2.5rem', lineHeight: 1.8 }}>
            A mix of SEO campaigns, custom interfaces, and WordPress builds where design quality and measurable outcomes had to work together.
          </p>

          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            {FILTERS.map((filter) => (
              <button key={filter} className={`filter-btn ${active === filter ? 'active' : ''}`} onClick={() => setActive(filter)}>
                {filter}
                <span style={{ marginLeft: '0.4rem', opacity: 0.7 }}>({counts[filter]})</span>
              </button>
            ))}
          </div>
        </div>

        <div className="project-toolbar">
          <div className="search-shell">
            <Search size={18} />
            <input
              className="search-input"
              type="text"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search by project, tag, or highlight"
              aria-label="Search projects"
            />
          </div>
          <div
            className="metric-panel"
            style={{
              borderRadius: '1rem',
              padding: '0.95rem 1rem',
              minWidth: '240px',
              display: 'flex',
              alignItems: 'center',
              gap: '0.8rem',
            }}
          >
            <Sparkles size={18} style={{ color: 'var(--primary)' }} />
            <div>
              <div style={{ fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-dim)' }}>Visible now</div>
              <div style={{ fontWeight: 700, color: 'var(--text)' }}>{filtered.length} projects, {featuredCount} featured</div>
            </div>
          </div>
        </div>

        {filtered.length ? (
          <motion.div
            layout
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
              gap: '1.5rem',
            }}
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((project, index) => (
                <ProjectCard key={project.title} project={project} index={index} />
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          <div className="project-empty">
            <div style={{ fontWeight: 800, fontSize: '1.1rem', marginBottom: '0.45rem' }}>No matching project found</div>
            <p style={{ lineHeight: 1.7 }}>Try a different keyword or switch the category filter to explore more work.</p>
          </div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
            gap: '1rem',
            marginTop: '4.5rem',
          }}
        >
          {[
            { icon: BarChart2, color: 'var(--primary)', val: '8+', label: 'Total Projects' },
            { icon: TrendingUp, color: 'var(--accent)', val: '300%', label: 'SEO Growth' },
            { icon: Star, color: 'var(--accent-2)', val: '4', label: 'Featured Builds' },
            { icon: Eye, color: 'var(--secondary)', val: '1M+', label: 'Impressions Impacted' },
          ].map(({ icon: Icon, color, val, label }) => (
            <div
              key={label}
              className="metric-panel"
              style={{
                padding: '1.5rem',
                borderRadius: '1.25rem',
                textAlign: 'center',
              }}
            >
              <Icon size={20} style={{ color, display: 'block', margin: '0 auto 0.5rem' }} />
              <div
                style={{
                  fontSize: '1.8rem',
                  fontWeight: 900,
                  background: `linear-gradient(135deg, ${color}, rgba(255,255,255,0.7))`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                {val}
              </div>
              <div style={{ fontSize: '0.7rem', color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: '0.25rem' }}>
                {label}
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginTop: '4rem' }}
        >
          <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
            Need a website, SEO roadmap, or a cleaner redesign with stronger conversions?
          </p>
          <a href="#contact" className="btn btn-primary" style={{ fontSize: '1rem' }}>
            Start a Conversation
          </a>
        </motion.div>
      </div>
    </section>
  );
}
