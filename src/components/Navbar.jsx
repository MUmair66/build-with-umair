import { useEffect, useId, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { EASE } from './ui';

const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Contact', href: '#contact' },
];

export function LogoMark({ size = 38 }) {
  const id = useId().replace(/:/g, '');
  return (
    <svg className="brand-mark" width={size} height={size} viewBox="0 0 42 42" aria-hidden="true">
      <defs>
        <linearGradient id={`lg${id}`} x1="0" y1="0" x2="42" y2="42" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#ff8a3d" />
          <stop offset="1" stopColor="#e2530a" />
        </linearGradient>
      </defs>
      <rect width="42" height="42" rx="12" fill={`url(#lg${id})`} />
      <g fill="none" stroke="#fff" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round">
        <path className="brand-stroke" d="M8 29V13l6 8 6-8v16" />
        <path className="brand-stroke" d="M24 13v10a5 5 0 0 0 10 0V13" />
      </g>
    </svg>
  );
}

export function Brand() {
  return (
    <a href="#home" className="brand" aria-label="Umair Yaqoob — home">
      <LogoMark />
      <span className="brand-name">
        Umair <span>Yaqoob.</span>
      </span>
    </a>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState('Home');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sections = NAV_LINKS.map((link) => document.getElementById(link.href.slice(1)));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const link = NAV_LINKS.find((item) => item.href === `#${entry.target.id}`);
            if (link) setActive(link.name);
          }
        });
      },
      { rootMargin: '-40% 0px -55% 0px' },
    );
    sections.forEach((section) => section && observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <motion.nav
      className={`nav ${scrolled || isOpen ? 'scrolled' : ''}`}
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: EASE }}
    >
      <div className="container nav-inner">
        <Brand />

        <div className="nav-links">
          {NAV_LINKS.map((link) => (
            <a key={link.name} href={link.href} className={`nav-link ${active === link.name ? 'active' : ''}`}>
              {active === link.name && (
                <motion.span layoutId="nav-pill" className="nav-pill" transition={{ type: 'spring', stiffness: 380, damping: 32 }} />
              )}
              {link.name}
            </a>
          ))}
        </div>

        <a href="#contact" className="btn btn-primary btn-sm nav-cta">
          Hire Me <ArrowUpRight size={16} className="arrow" />
        </a>

        <button className="nav-burger" aria-label={isOpen ? 'Close menu' : 'Open menu'} aria-expanded={isOpen} onClick={() => setIsOpen((v) => !v)}>
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={isOpen ? 'x' : 'menu'}
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              style={{ display: 'grid' }}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </motion.span>
          </AnimatePresence>
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: EASE }}
          >
            <div className="mobile-menu-inner">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`mobile-link ${active === link.name ? 'active' : ''}`}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.35, ease: EASE }}
                >
                  {link.name}
                </motion.a>
              ))}
              <a href="#contact" onClick={() => setIsOpen(false)} className="btn btn-primary" style={{ marginTop: 8 }}>
                Hire Me <ArrowUpRight size={16} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
