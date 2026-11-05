import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  ArrowUpRight,
  BarChart2,
  CheckCircle,
  Code2,
  Eye,
  Globe,
  Search,
  Share2,
  Star,
  TrendingUp,
  X,
} from 'lucide-react';
import { Counter, EASE, Reveal, SectionHead, spotlightMove } from './ui';

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
  {
    num: '09',
    title: 'elitemoversmuscat.com',
    category: 'SEO',
    description: 'Targeted SEO campaigns and local optimization to boost visibility for moving services in Muscat.',
    tags: ['Local SEO', 'Keyword Targeting', 'GMB', 'Traffic Growth'],
    result: 'Top Local Rankings',
    resultIcon: TrendingUp,
    stat1: { label: 'Local Search', value: '+200%' },
    stat2: { label: 'Leads', value: '+150%' },
    highlights: ['GMB Optimization', 'Local Citations', 'Service Page SEO'],
    accent: '#14b8a6',
  },
  {
    num: '10',
    title: 'Letsfixx.com',
    category: 'WordPress',
    description: 'WordPress design and development for a service portal, focusing on user experience and lead generation.',
    tags: ['WordPress', 'UI/UX', 'Service Portal', 'Lead Gen'],
    result: 'High Conversion Rate',
    resultIcon: Star,
    stat1: { label: 'Conversion', value: '+45%' },
    stat2: { label: 'Load Time', value: '<2s' },
    highlights: ['Custom Design', 'Lead Capture', 'Fast Performance'],
    accent: '#22c55e',
  },
  {
    num: '11',
    title: 'techmateconstruction.com',
    category: 'WordPress',
    description: 'Professional WordPress website built for a construction firm to showcase their portfolio and services.',
    tags: ['WordPress', 'Portfolio', 'Corporate', 'Responsive'],
    result: 'Premium Brand Image',
    resultIcon: CheckCircle,
    stat1: { label: 'Uptime', value: '99.9%' },
    stat2: { label: 'Mobile Score', value: '98/100' },
    highlights: ['Portfolio Showcase', 'Mobile Responsive', 'SEO Ready'],
    accent: '#22c55e',
  },
  {
    num: '12',
    title: 'actroofingok.com',
    category: 'WordPress',
    description: 'Responsive and robust WordPress site designed for a roofing company to capture leads and present services effectively.',
    tags: ['WordPress', 'Local Business', 'Responsive', 'Speed'],
    result: 'Enhanced Local Presence',
    resultIcon: Star,
    stat1: { label: 'Bounce Rate', value: '-30%' },
    stat2: { label: 'Leads', value: '+50%' },
    highlights: ['Local SEO Ready', 'Fast Loading', 'Clear CTA'],
    accent: '#22c55e',
  },
  {
    num: '13',
    title: 'qodeclicks.com',
    category: 'Custom',
    description: 'Modern and blazing fast website built using Next.js to deliver top-tier performance and SEO benefits.',
    tags: ['Next.js', 'React', 'Tailwind', 'Performance'],
    result: 'Next-Gen Performance',
    resultIcon: CheckCircle,
    stat1: { label: 'Lighthouse', value: '100' },
    stat2: { label: 'SEO', value: '100' },
    highlights: ['Next.js App Router', 'Server Components', 'Optimized Images'],
    accent: '#38bdf8',
  },
  {
    num: '14',
    title: 'toolsonline.pk',
    category: 'Custom',
    description: 'Custom ecommerce store for a Lahore-based power tools and machinery retailer, with category browsing, cash on delivery, and WhatsApp support.',
    tags: ['Custom Build', 'Ecommerce', 'Product Catalog', 'Responsive'],
    result: 'Full Online Storefront',
    resultIcon: CheckCircle,
    stat1: { label: 'Type', value: 'Ecommerce' },
    stat2: { label: 'Market', value: 'Pakistan' },
    highlights: ['Category-based catalog', 'COD & card checkout', 'Mobile-first design'],
    accent: '#38bdf8',
  },
  {
    num: '15',
    title: 'propertyexam.com',
    category: 'WordPress',
    description: 'WordPress website for a commercial property inspection firm in the Portland Metro area, presenting inspections, condition assessments, and expert witness services.',
    tags: ['WordPress', 'Commercial', 'Inspections', 'Lead Gen'],
    result: 'Professional Service Site',
    resultIcon: CheckCircle,
    stat1: { label: 'Industry', value: 'Inspection' },
    stat2: { label: 'Location', value: 'Oregon' },
    highlights: ['Service pages', 'Proposal requests', 'Trust-focused layout'],
    accent: '#22c55e',
  },
  {
    num: '16',
    title: 'asierservicesllc.com',
    category: 'WordPress',
    description: 'WordPress website for a Dallas-Fort Worth remodeling and construction contractor covering residential and commercial services.',
    tags: ['WordPress', 'Construction', 'Local Business', 'Responsive'],
    result: 'Lead-Ready Contractor Site',
    resultIcon: Star,
    stat1: { label: 'Industry', value: 'Remodeling' },
    stat2: { label: 'Location', value: 'Dallas, TX' },
    highlights: ['Service showcase', 'Free estimate CTA', 'Mobile responsive'],
    accent: '#22c55e',
  },
  {
    num: '17',
    title: 'atxroofing.com',
    category: 'WordPress',
    description: 'WordPress website for an Austin roofing and general contracting company, covering roof replacement, repair, and storm damage claims.',
    tags: ['WordPress', 'Roofing', 'Local Business', 'Lead Gen'],
    result: 'Strong Local Presence',
    resultIcon: Star,
    stat1: { label: 'Industry', value: 'Roofing' },
    stat2: { label: 'Location', value: 'Austin, TX' },
    highlights: ['Service area pages', 'Clear CTAs', 'Local SEO ready'],
    accent: '#22c55e',
  },
  {
    num: '18',
    title: 'gearupmmaapp.com',
    category: 'WordPress',
    description: 'WordPress website for an on-demand combat sports platform that connects users with local boxing, Muay Thai, and kickboxing gyms.',
    tags: ['WordPress', 'Fitness', 'Booking', 'Responsive'],
    result: 'Modern Platform Site',
    resultIcon: CheckCircle,
    stat1: { label: 'Industry', value: 'Fitness' },
    stat2: { label: 'Model', value: 'Pay per class' },
    highlights: ['Gym discovery', 'Class booking flow', 'Mobile-first design'],
    accent: '#22c55e',
  },
];

const FILTERS = ['All', 'SEO', 'WordPress', 'Custom'];

const CATEGORY = {
  SEO: { icon: Search, color: '#ff6b1a', bg: 'rgba(0,0,0,.35)' },
  WordPress: { icon: Globe, color: '#ff6b1a', bg: 'rgba(0,0,0,.35)' },
  Custom: { icon: Code2, color: '#ff6b1a', bg: 'rgba(0,0,0,.35)' },
  'Social Media': { icon: Share2, color: '#ff6b1a', bg: 'rgba(0,0,0,.35)' },
};

const siteUrl = (title) => (/^[\w-]+(\.[\w-]+)+$/.test(title) ? `https://${title.toLowerCase()}` : null);

function ProjectCard({ project }) {
  const cat = CATEGORY[project.category] || CATEGORY.Custom;
  const CatIcon = cat.icon;
  const ResultIcon = project.resultIcon || TrendingUp;
  const url = siteUrl(project.title);

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 24, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96, transition: { duration: 0.2 } }}
      transition={{ duration: 0.55, ease: EASE }}
      className="card card-hover spotlight project"
      onMouseMove={spotlightMove}
    >
      <div className="project-top">
        <span className="icon-box" style={{ background: cat.bg, color: cat.color }}>
          <CatIcon size={20} />
        </span>
        <div className="badges">
          {project.featured && <span className="badge badge-featured">Featured</span>}
          <span className="badge" style={{ background: cat.bg, color: cat.color }}>{project.category}</span>
          <span className="project-num">{project.num}</span>
        </div>
      </div>

      <h3>
        {url ? (
          <a href={url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8 }}>
            {project.title}
            <ArrowUpRight size={17} className="go" />
          </a>
        ) : (
          project.title
        )}
      </h3>
      <p>{project.description}</p>

      <div className="project-stats">
        {[project.stat1, project.stat2].map((stat) => (
          <div key={stat.label} className="project-stat">
            <b>{stat.value}</b>
            <small>{stat.label}</small>
          </div>
        ))}
      </div>

      <div className="project-tags">
        {project.tags.map((tag) => (
          <span key={tag} className="tag">{tag}</span>
        ))}
      </div>

      <div className="project-foot" style={{ color: cat.color }}>
        <ResultIcon size={15} />
        {project.result}
        <span style={{ marginLeft: 'auto', display: 'flex', gap: 4 }}>
          {project.highlights.slice(0, 3).map((h) => (
            <CheckCircle key={h} size={13} aria-label={h} style={{ opacity: 0.55 }} />
          ))}
        </span>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const [active, setActive] = useState('All');
  const [query, setQuery] = useState('');

  const counts = useMemo(
    () =>
      FILTERS.reduce((acc, f) => {
        acc[f] = f === 'All' ? PROJECTS.length : PROJECTS.filter((p) => p.category === f).length;
        return acc;
      }, {}),
    [],
  );

  const filtered = useMemo(() => {
    const byCat = active === 'All' ? PROJECTS : PROJECTS.filter((p) => p.category === active);
    const q = query.trim().toLowerCase();
    if (!q) return byCat;
    return byCat.filter((p) => [p.title, p.description, ...p.tags, ...p.highlights].some((s) => s.toLowerCase().includes(q)));
  }, [active, query]);

  const featuredTotal = PROJECTS.filter((p) => p.featured).length;

  return (
    <section id="projects">
      <div className="container">
        <SectionHead
          eyebrow="Featured Work"
          title={<>Selected <span className="accent">projects</span></>}
          sub="A mix of SEO campaigns, custom interfaces, and WordPress builds where design quality and measurable outcomes had to work together."
        />

        <Reveal className="toolbar">
          <div className="filters" role="tablist" aria-label="Filter projects">
            {FILTERS.map((f) => (
              <button
                key={f}
                role="tab"
                aria-selected={active === f}
                className={`filter ${active === f ? 'active' : ''}`}
                onClick={() => setActive(f)}
              >
                {active === f && (
                  <motion.span layoutId="filter-pill" className="filter-pill" transition={{ type: 'spring', stiffness: 400, damping: 34 }} />
                )}
                {f}
                <span className="count">{counts[f]}</span>
              </button>
            ))}
          </div>

          <label className="search">
            <Search size={17} />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search projects, tags, highlights…"
              aria-label="Search projects"
            />
            {query && (
              <button onClick={() => setQuery('')} aria-label="Clear search" style={{ border: 'none', background: 'none', cursor: 'pointer', color: 'var(--dim)', display: 'grid' }}>
                <X size={16} />
              </button>
            )}
          </label>
        </Reveal>

        {filtered.length ? (
          <motion.div layout className="projects-grid">
            <AnimatePresence mode="popLayout">
              {filtered.map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          <motion.div className="empty" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <div style={{ fontWeight: 800, fontSize: '1.1rem', color: 'var(--ink)', marginBottom: 6 }}>No matching project found</div>
            <p>Try a different keyword or switch the category filter to explore more work.</p>
          </motion.div>
        )}

        <Reveal className="card summary">
          {[
            { icon: BarChart2, val: `${PROJECTS.length}`, label: 'Total Projects' },
            { icon: TrendingUp, val: '300%', label: 'SEO Growth' },
            { icon: Star, val: `${featuredTotal}`, label: 'Featured Builds' },
            { icon: Eye, val: '1M+', label: 'Impressions Impacted' },
          ].map(({ icon: Icon, val, label }) => (
            <div key={label}>
              <Icon size={20} style={{ color: 'var(--primary)', marginBottom: 12 }} />
              <div className="stat-value"><Counter value={val} /></div>
              <div className="stat-label">{label}</div>
            </div>
          ))}
        </Reveal>

        <Reveal className="card cta-strip" delay={0.1}>
          <p>Need a website, SEO roadmap, or a cleaner redesign with stronger conversions?</p>
          <a href="#contact" className="btn btn-primary">
            Start a Conversation <ArrowRight size={17} className="arrow" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
