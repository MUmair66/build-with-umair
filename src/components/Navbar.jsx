import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState('Home');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sections = NAV_LINKS.map((link) => document.getElementById(link.href.replace('#', '')));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const link = NAV_LINKS.find((item) => item.href === `#${entry.target.id}`);
            if (link) setActive(link.name);
          }
        });
      },
      { rootMargin: '-30% 0px -60% 0px' },
    );

    sections.forEach((section) => section && observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          zIndex: 100,
          transition: 'all 0.4s cubic-bezier(0.4,0,0.2,1)',
          padding: scrolled ? '0.3rem 0' : '0.55rem 0',
          background: scrolled ? 'rgba(7,17,26,0.82)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(148,163,184,0.08)' : 'none',
        }}
      >
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <a href="#home" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
            <img
              src="/umairlogoportfolio.png"
              alt="Umair Portfolio Logo"
              style={{
                height: '88px',
                width: 'auto',
                objectFit: 'contain',
                filter: 'drop-shadow(0 0 10px rgba(56,189,248,0.3))',
                transition: 'filter 0.3s ease',
              }}
              onMouseEnter={(event) => {
                event.currentTarget.style.filter = 'drop-shadow(0 0 16px rgba(56,189,248,0.55))';
              }}
              onMouseLeave={(event) => {
                event.currentTarget.style.filter = 'drop-shadow(0 0 10px rgba(56,189,248,0.3))';
              }}
            />
          </a>

          <div className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                style={{
                  padding: '0.55rem 1rem',
                  borderRadius: '999px',
                  fontSize: '0.9rem',
                  fontWeight: active === link.name ? 700 : 500,
                  color: active === link.name ? 'var(--text)' : 'var(--text-muted)',
                  background: active === link.name ? 'rgba(56,189,248,0.1)' : 'transparent',
                  border: active === link.name ? '1px solid rgba(56,189,248,0.18)' : '1px solid transparent',
                  textDecoration: 'none',
                  transition: 'all 0.25s',
                  position: 'relative',
                }}
                onMouseEnter={(event) => {
                  if (active !== link.name) {
                    event.currentTarget.style.color = 'var(--text)';
                    event.currentTarget.style.background = 'rgba(148,163,184,0.08)';
                  }
                }}
                onMouseLeave={(event) => {
                  if (active !== link.name) {
                    event.currentTarget.style.color = 'var(--text-muted)';
                    event.currentTarget.style.background = 'transparent';
                  }
                }}
              >
                {link.name}
                {active === link.name && (
                  <motion.span
                    layoutId="nav-indicator"
                    style={{
                      position: 'absolute',
                      bottom: -2,
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: 4,
                      height: 4,
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, var(--primary), var(--secondary))',
                      boxShadow: '0 0 6px rgba(56,189,248,0.8)',
                    }}
                  />
                )}
              </a>
            ))}
          </div>

          <div className="desktop-cta" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <a href="#contact" className="btn btn-primary" style={{ padding: '0.65rem 1.5rem', fontSize: '0.875rem' }}>
              Hire Me <ArrowUpRight size={16} />
            </a>
          </div>

          <button
            onClick={() => setIsOpen((value) => !value)}
            className="mobile-burger"
            style={{
              background: 'rgba(15,23,35,0.8)',
              border: '1px solid rgba(148,163,184,0.14)',
              borderRadius: '0.8rem',
              width: 42,
              height: 42,
              display: 'none',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: 'var(--text)',
            }}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              style={{
                overflow: 'hidden',
                borderTop: '1px solid rgba(148,163,184,0.08)',
                background: 'rgba(7,17,26,0.96)',
                backdropFilter: 'blur(20px)',
              }}
            >
              <div className="container" style={{ padding: '1.5rem 2rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    style={{
                      padding: '0.9rem 1rem',
                      borderRadius: '0.85rem',
                      fontSize: '1rem',
                      fontWeight: 600,
                      color: active === link.name ? 'var(--primary)' : 'var(--text-muted)',
                      background: active === link.name ? 'rgba(56,189,248,0.08)' : 'transparent',
                      textDecoration: 'none',
                      border: '1px solid',
                      borderColor: active === link.name ? 'rgba(56,189,248,0.2)' : 'transparent',
                      transition: 'all 0.2s',
                    }}
                  >
                    {link.name}
                  </a>
                ))}
                <a href="#contact" onClick={() => setIsOpen(false)} className="btn btn-primary" style={{ justifyContent: 'center', marginTop: '0.5rem' }}>
                  Hire Me
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .desktop-cta { display: none !important; }
          .mobile-burger { display: flex !important; }
        }
      `}</style>
    </>
  );
}
