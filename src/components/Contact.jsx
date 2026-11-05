import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, CheckCircle2, GitBranch, Globe, Link2, Mail, MapPin, Phone, Send } from 'lucide-react';
import { EASE, Reveal, SectionHead, fadeUp, stagger } from './ui';
import { Brand } from './Navbar';

const SERVICES = ['SEO Campaign', 'WordPress Site', 'React App', 'Technical Audit', 'Content Strategy', 'Other'];
const BUDGETS = ['Under $500', '$500 - $1,500', '$1,500 - $5,000', '$5,000+'];
const TIMELINES = ['ASAP', '1-2 Weeks', 'This Month', 'Flexible'];

const EMAIL = 'umairyaqoob265@gmail.com';
const PHONE_DISPLAY = '0326 5307599';
const PHONE_TEL = 'tel:+923265307599';
const LINKEDIN = 'https://www.linkedin.com/in/muhammad-umair006/';

const CONTACT_INFO = [
  { Icon: Mail, label: 'Email', val: EMAIL, href: `mailto:${EMAIL}` },
  { Icon: Phone, label: 'Phone', val: PHONE_DISPLAY, href: PHONE_TEL },
  { Icon: Link2, label: 'LinkedIn', val: 'in/muhammad-umair006', href: LINKEDIN },
  { Icon: MapPin, label: 'Location', val: 'Lahore, Pakistan', href: null },
];

const SOCIALS = [
  { Icon: Link2, href: LINKEDIN, label: 'LinkedIn' },
  { Icon: GitBranch, href: 'https://github.com/MUmair66', label: 'GitHub' },
  { Icon: Globe, href: 'https://zapexweb.com', label: 'Portfolio' },
];

const initialForm = { name: '', email: '', phone: '', budget: '', timeline: '', message: '' };

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [service, setService] = useState('');
  const [form, setForm] = useState(initialForm);

  const set = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = `Project Inquiry from ${form.name || 'Website Visitor'}`;
    const body = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone || 'Not provided'}`,
      `Service: ${service || 'Not specified'}`,
      `Budget: ${form.budget || 'Not specified'}`,
      `Timeline: ${form.timeline || 'Not specified'}`,
      '',
      'Project details:',
      form.message,
    ].join('\n');
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <SectionHead
          eyebrow="Get In Touch"
          title="Let's build something great"
          sub="If you need stronger rankings, a cleaner portfolio site, or a custom build that actually supports growth, this is the right place to start."
        />

        <div className="contact-grid">
          <div>
            <motion.div className="info-list" variants={stagger(0.08)} initial="hidden" whileInView="show" viewport={{ once: true }}>
              {CONTACT_INFO.map(({ Icon, label, val, href }) => {
                const Tag = href ? motion.a : motion.div;
                return (
                  <Tag
                    key={label}
                    variants={fadeUp}
                    className="info-item"
                    href={href || undefined}
                    target={href?.startsWith('http') ? '_blank' : undefined}
                    rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    <span className="icon-box"><Icon size={19} /></span>
                    <div>
                      <small>{label}</small>
                      <b>{val}</b>
                    </div>
                    {href && <ArrowUpRight size={17} className="arrow-ico" />}
                  </Tag>
                );
              })}
            </motion.div>

            <Reveal delay={0.2}>
              <div className="socials">
                {SOCIALS.map(({ Icon, href, label }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer" title={label} aria-label={label} className="social">
                    <Icon size={19} />
                  </a>
                ))}
              </div>

              <div className="avail">
                <div className="avail-head">
                  <span className="pulse-dot" /> Currently available
                </div>
                <p>Open to freelance projects, SEO retainers, and product-focused redesigns. Typical response time is within 24 hours.</p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1} y={40}>
            <div className="form-card">
              <AnimatePresence mode="wait">
                {sent ? (
                  <motion.div
                    key="sent"
                    className="sent"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, ease: EASE }}
                  >
                    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', stiffness: 300, damping: 15, delay: 0.1 }}>
                      <CheckCircle2 size={60} style={{ color: 'var(--success)', margin: '0 auto' }} />
                    </motion.div>
                    <h4>Email draft opened</h4>
                    <p>
                      Your mail app should open with the project details already filled in. If it did not, email directly at{' '}
                      <a href={`mailto:${EMAIL}`} style={{ color: 'var(--ink)', fontWeight: 700 }}>{EMAIL}</a> or call{' '}
                      <a href={PHONE_TEL} style={{ color: 'var(--ink)', fontWeight: 700 }}>{PHONE_DISPLAY}</a>.
                    </p>
                    <button className="btn btn-outline" style={{ marginTop: 22 }} onClick={() => setSent(false)}>
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <motion.div key="form" exit={{ opacity: 0, y: -10 }}>
                    <h3>Send a message</h3>
                    <p>Tell me a bit about your project and I&apos;ll get back to you within 24 hours.</p>

                    <form onSubmit={handleSubmit} className="form">
                      <div className="form-row">
                        <div className="field">
                          <label htmlFor="c-name">Full name *</label>
                          <input id="c-name" required type="text" value={form.name} onChange={set('name')} placeholder="Muhammad Ali" className="input" />
                        </div>
                        <div className="field">
                          <label htmlFor="c-email">Email *</label>
                          <input id="c-email" required type="email" value={form.email} onChange={set('email')} placeholder="ali@example.com" className="input" />
                        </div>
                      </div>

                      <div className="field">
                        <label htmlFor="c-phone">Phone (optional)</label>
                        <input id="c-phone" type="tel" value={form.phone} onChange={set('phone')} placeholder="03XX XXXXXXX" className="input" />
                      </div>

                      <div className="field">
                        <label>Service needed</label>
                        <div className="chips">
                          {SERVICES.map((s) => (
                            <motion.button
                              key={s}
                              type="button"
                              whileTap={{ scale: 0.94 }}
                              className={`chip ${service === s ? 'on' : ''}`}
                              aria-pressed={service === s}
                              onClick={() => setService(service === s ? '' : s)}
                            >
                              {s}
                            </motion.button>
                          ))}
                        </div>
                      </div>

                      <div className="form-row">
                        <div className="field">
                          <label htmlFor="c-budget">Budget range</label>
                          <select id="c-budget" className="input" value={form.budget} onChange={set('budget')}>
                            <option value="">Select budget range</option>
                            {BUDGETS.map((b) => <option key={b}>{b}</option>)}
                          </select>
                        </div>
                        <div className="field">
                          <label htmlFor="c-timeline">Timeline</label>
                          <select id="c-timeline" className="input" value={form.timeline} onChange={set('timeline')}>
                            <option value="">Select timeline</option>
                            {TIMELINES.map((t) => <option key={t}>{t}</option>)}
                          </select>
                        </div>
                      </div>

                      <div className="field">
                        <label htmlFor="c-msg">Message *</label>
                        <textarea
                          id="c-msg"
                          required
                          rows={5}
                          value={form.message}
                          onChange={set('message')}
                          placeholder="Tell me about your project goals, what you need improved, and any timeline constraints…"
                          className="input"
                        />
                      </div>

                      <p className="form-note">Submitting opens your mail app with a formatted draft so the inquiry is easy to send.</p>

                      <motion.button type="submit" className="btn btn-primary btn-block" whileTap={{ scale: 0.98 }} style={{ padding: '15px 22px' }}>
                        <Send size={17} /> Send Message
                      </motion.button>

                      <div className="direct">
                        <span>Or reach me directly:</span>
                        <a href={`mailto:${EMAIL}`}><Mail size={15} /> {EMAIL}</a>
                        <a href={PHONE_TEL}><Phone size={15} /> {PHONE_DISPLAY}</a>
                      </div>
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </Reveal>
        </div>
      </div>

      <footer className="footer">
        <div className="container footer-inner">
          <Brand />
          <p>© {new Date().getFullYear()} Muhammad Umair. Crafted with care in Pakistan.</p>
          <nav className="footer-links">
            {['Home', 'About', 'Projects', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`}>{item}</a>
            ))}
          </nav>
        </div>
      </footer>
    </section>
  );
}
