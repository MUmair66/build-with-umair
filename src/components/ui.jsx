/* eslint-disable react-refresh/only-export-components */
import { useEffect, useRef, useState } from 'react';
import { animate, motion, useInView } from 'framer-motion';

export const EASE = [0.22, 1, 0.36, 1];
export const EMAIL = 'umairyaqoob265@gmail.com';

/** Fades + slides children in when they enter the viewport. */
export function Reveal({ children, delay = 0, y = 28, className, style, as = 'div' }) {
  const Comp = motion[as];
  return (
    <Comp
      className={className}
      style={style}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.75, delay, ease: EASE }}
    >
      {children}
    </Comp>
  );
}

/** Stagger container + item variants for lists. */
export const stagger = (gap = 0.08, delayChildren = 0) => ({
  hidden: {},
  show: { transition: { staggerChildren: gap, delayChildren } },
});
export const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

/** Counts up the numeric part of values like "300%", "18+", "1M+", "5.0/5". */
export function Counter({ value, duration = 1.6 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const match = String(value).match(/^([^\d]*)(\d+(?:\.\d+)?)(.*)$/);
  const [display, setDisplay] = useState(match ? `${match[1]}0${match[3]}` : value);

  useEffect(() => {
    if (!inView || !match) return undefined;
    const [, prefix, num, suffix] = match;
    const decimals = num.includes('.') ? num.split('.')[1].length : 0;
    const controls = animate(0, parseFloat(num), {
      duration,
      ease: EASE,
      onUpdate: (v) => setDisplay(`${prefix}${v.toFixed(decimals)}${suffix}`),
    });
    return () => controls.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  return <span ref={ref}>{match ? display : value}</span>;
}

/** Sets --mx / --my CSS vars so .spotlight cards get a cursor-following glow. */
export const spotlightMove = (event) => {
  const rect = event.currentTarget.getBoundingClientRect();
  event.currentTarget.style.setProperty('--mx', `${event.clientX - rect.left}px`);
  event.currentTarget.style.setProperty('--my', `${event.clientY - rect.top}px`);
};

export function SectionHead({ eyebrow, title, sub, align }) {
  return (
    <motion.div
      className={`section-head ${align === 'left' ? 'left' : ''}`}
      variants={stagger(0.1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-60px' }}
    >
      <motion.span variants={fadeUp} className="eyebrow">{eyebrow}</motion.span>
      <motion.h2 variants={fadeUp} className="section-title">{title}</motion.h2>
      {sub && <motion.p variants={fadeUp} className="section-sub">{sub}</motion.p>}
    </motion.div>
  );
}
