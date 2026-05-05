import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, CalendarClock, CheckCircle2, GitBranch, Globe, Link2, Mail, MapPin, Phone, Send } from 'lucide-react';

const SERVICES = ['SEO Campaign', 'WordPress Site', 'React App', 'Technical Audit', 'Content Strategy', 'Other'];
const TIMELINES = ['ASAP', '1-2 Weeks', 'This Month', 'Flexible'];

const initialForm = {
  name: '',
  email: '',
  budget: '',
  timeline: '',
  message: '',
};

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [selectedService, setSelectedService] = useState('');
  const [form, setForm] = useState(initialForm);

  const handleChange = (field) => (event) => {
    setForm((current) => ({ ...current, [field]: event.target.value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const subject = `Project Inquiry from ${form.name || 'Website Visitor'}`;
    const body = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Service: ${selectedService || 'Not specified'}`,
      `Budget: ${form.budget || 'Not specified'}`,
      `Timeline: ${form.timeline || 'Not specified'}`,
      '',
      'Project details:',
      form.message,
    ].join('\n');

    window.location.href = `mailto:umair@ititans.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <section id="contact" style={{ background: 'linear-gradient(180deg, #09121c, var(--bg))', position: 'relative', overflow: 'hidden' }}>
      <div className="orb orb-cyan" style={{ width: '500px', height: '500px', top: '-10%', left: '-10%', opacity: 0.5 }} />
      <div className="orb orb-purple" style={{ width: '400px', height: '400px', bottom: '-5%', right: '-5%', opacity: 0.5 }} />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <span className="section-label">Get In Touch</span>
          <h2 style={{ fontSize: 'clamp(2.5rem,5vw,4rem)', fontWeight: 900 }}>
            Let's Build Something <span className="gradient-text">Great</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', maxWidth: '560px', margin: '1.25rem auto 0', lineHeight: 1.8 }}>
            If you need stronger rankings, a cleaner portfolio site, or a custom build that actually supports growth, this is the right place to start.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.35fr', gap: '4rem', alignItems: 'start' }} className="contact-grid">
          <div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '2rem' }}>
              Contact <span className="gradient-text">Info</span>
            </h3>

            {[
              { Icon: Mail, label: 'Email', val: 'umair@ititans.com', href: 'mailto:umair@ititans.com', color: '#38bdf8' },
              { Icon: Phone, label: 'Phone', val: '+92 300 0000000', href: 'tel:+923000000000', color: '#22c55e' },
              { Icon: MapPin, label: 'Location', val: 'Rawalpindi, Pakistan', href: '#', color: '#14b8a6' },
              { Icon: Globe, label: 'Website', val: 'zapexweb.com', href: 'https://zapexweb.com', color: '#0ea5e9' },
            ].map(({ Icon, label, val, href, color }) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1.25rem',
                  padding: '1.25rem',
                  borderRadius: '1rem',
                  background: 'rgba(15,23,35,0.8)',
                  border: '1px solid rgba(148,163,184,0.12)',
                  marginBottom: '1rem',
                  textDecoration: 'none',
                  color: 'inherit',
                  transition: 'all 0.3s',
                }}
              >
                <div
                  style={{
                    width: 46,
                    height: 46,
                    borderRadius: '0.8rem',
                    flexShrink: 0,
                    background: `${color}1f`,
                    border: `1px solid ${color}40`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color,
                  }}
                >
                  <Icon size={20} />
                </div>
                <div>
                  <div style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-dim)', marginBottom: '0.2rem' }}>
                    {label}
                  </div>
                  <div style={{ fontWeight: 600, fontSize: '0.95rem' }}>{val}</div>
                </div>
                <ArrowUpRight size={16} style={{ marginLeft: 'auto', color: 'var(--text-dim)' }} />
              </motion.a>
            ))}

            <div style={{ marginTop: '2rem' }}>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: 700, marginBottom: '1rem' }}>
                Find me on
              </p>
              <div style={{ display: 'flex', gap: '0.75rem' }}>
                {[
                  { Icon: Link2, href: '#', color: '#0077b5', label: 'LinkedIn' },
                  { Icon: GitBranch, href: '#', color: 'var(--text-muted)', label: 'GitHub' },
                  { Icon: Globe, href: 'https://zapexweb.com', color: 'var(--primary)', label: 'Portfolio' },
                ].map(({ Icon, href, color, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={label}
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: '0.9rem',
                      background: 'rgba(15,23,35,0.82)',
                      border: '1px solid rgba(148,163,184,0.14)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--text-muted)',
                      textDecoration: 'none',
                    }}
                    onMouseEnter={(event) => {
                      event.currentTarget.style.color = color;
                      event.currentTarget.style.borderColor = 'rgba(56,189,248,0.25)';
                      event.currentTarget.style.transform = 'translateY(-3px)';
                    }}
                    onMouseLeave={(event) => {
                      event.currentTarget.style.color = 'var(--text-muted)';
                      event.currentTarget.style.borderColor = 'rgba(148,163,184,0.14)';
                      event.currentTarget.style.transform = '';
                    }}
                  >
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>

            <div
              className="availability-card"
              style={{
                marginTop: '2.5rem',
                padding: '1.5rem',
                borderRadius: '1.25rem',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.6rem' }}>
                <div style={{ width: 10, height: 10, borderRadius: '50%', background: 'var(--success)', boxShadow: '0 0 10px rgba(34,197,94,0.8)' }} />
                <span style={{ fontWeight: 700, color: '#86efac', fontSize: '0.9rem' }}>Currently Available</span>
              </div>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: 1.7 }}>
                Open to freelance projects, SEO retainers, and product-focused redesigns. Typical response time is within 24 hours.
              </p>
            </div>
          </div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <div
              style={{
                background: 'rgba(15,23,35,0.84)',
                border: '1px solid rgba(148,163,184,0.12)',
                borderRadius: '2rem',
                padding: '2.5rem',
                position: 'relative',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-strong)',
              }}
            >
              <div style={{ position: 'absolute', top: 0, right: 0, width: '220px', height: '220px', background: 'radial-gradient(circle, rgba(56,189,248,0.08), transparent 70%)', pointerEvents: 'none' }} />

              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.5rem' }}>Send a Message</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '2rem' }}>
                This form now prepares a ready-to-send email draft so your inquiry is immediately usable.
              </p>

              {sent ? (
                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} style={{ textAlign: 'center', padding: '3rem 1rem' }}>
                  <CheckCircle2 size={56} style={{ color: 'var(--success)', margin: '0 auto 1rem' }} />
                  <h4 style={{ fontSize: '1.3rem', fontWeight: 800, marginBottom: '0.5rem' }}>Email Draft Opened</h4>
                  <p style={{ color: 'var(--text-muted)', lineHeight: 1.7 }}>
                    Your default mail app should open with the project details already filled in. If it did not, you can still email directly at <strong style={{ color: 'var(--text)' }}>umair@ititans.com</strong>.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }} className="form-row">
                    <div>
                      <label style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-dim)', display: 'block', marginBottom: '0.5rem' }}>
                        Full Name *
                      </label>
                      <input required type="text" value={form.name} onChange={handleChange('name')} placeholder="Muhammad Ali" className="contact-input" />
                    </div>
                    <div>
                      <label style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-dim)', display: 'block', marginBottom: '0.5rem' }}>
                        Email *
                      </label>
                      <input required type="email" value={form.email} onChange={handleChange('email')} placeholder="ali@example.com" className="contact-input" />
                    </div>
                  </div>

                  <div>
                    <label style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-dim)', display: 'block', marginBottom: '0.5rem' }}>
                      Service Needed
                    </label>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                      {SERVICES.map((service) => (
                        <button
                          key={service}
                          type="button"
                          onClick={() => setSelectedService(service === selectedService ? '' : service)}
                          style={{
                            padding: '0.45rem 1rem',
                            borderRadius: '999px',
                            cursor: 'pointer',
                            fontSize: '0.8rem',
                            fontWeight: 600,
                            border: '1px solid',
                            transition: 'all 0.2s',
                            borderColor: selectedService === service ? 'var(--primary)' : 'rgba(148,163,184,0.16)',
                            background: selectedService === service ? 'rgba(56,189,248,0.1)' : 'transparent',
                            color: selectedService === service ? 'var(--primary)' : 'var(--text-muted)',
                          }}
                        >
                          {service}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }} className="form-row">
                    <div>
                      <label style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-dim)', display: 'block', marginBottom: '0.5rem' }}>
                        Budget Range
                      </label>
                      <select className="contact-input" value={form.budget} onChange={handleChange('budget')} style={{ cursor: 'pointer' }}>
                        <option value="">Select budget range</option>
                        <option>Under $500</option>
                        <option>$500 - $1,500</option>
                        <option>$1,500 - $5,000</option>
                        <option>$5,000+</option>
                      </select>
                    </div>
                    <div>
                      <label style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-dim)', display: 'block', marginBottom: '0.5rem' }}>
                        Timeline
                      </label>
                      <div style={{ position: 'relative' }}>
                        <CalendarClock size={16} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-dim)' }} />
                        <select className="contact-input" value={form.timeline} onChange={handleChange('timeline')} style={{ cursor: 'pointer', paddingLeft: '2.8rem' }}>
                          <option value="">Select timeline</option>
                          {TIMELINES.map((timeline) => (
                            <option key={timeline}>{timeline}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-dim)', display: 'block', marginBottom: '0.5rem' }}>
                      Message *
                    </label>
                    <textarea
                      required
                      rows={6}
                      value={form.message}
                      onChange={handleChange('message')}
                      placeholder="Tell me about your project goals, what you need improved, and any timeline constraints..."
                      className="contact-input"
                      style={{ resize: 'none' }}
                    />
                  </div>

                  <p className="footer-note">Submitting opens your mail app with a formatted draft so the inquiry is easy to send.</p>

                  <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '1.1rem' }}>
                    <Send size={18} />
                    Prepare My Email
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      <div style={{ borderTop: '1px solid rgba(148,163,184,0.08)', marginTop: '6rem', paddingTop: '2.5rem', paddingBottom: '2rem' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <div style={{ fontWeight: 800, fontSize: '1.2rem' }}>
            UMAIR<span className="gradient-text">.</span>
          </div>
          <p className="footer-note">© 2026 Muhammad Umair. Crafted with care in Pakistan.</p>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            {['Home', 'About', 'Projects', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                style={{ color: 'var(--text-dim)', textDecoration: 'none', fontSize: '0.85rem', fontWeight: 600, transition: 'color 0.2s' }}
                onMouseEnter={(event) => {
                  event.currentTarget.style.color = 'var(--primary)';
                }}
                onMouseLeave={(event) => {
                  event.currentTarget.style.color = 'var(--text-dim)';
                }}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .contact-grid { grid-template-columns: 1fr !important; }
          .form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
