import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { 
  Mail, Phone, MapPin, Send, Copy, Check, 
  Sparkles, MessageSquare, Clock, ArrowRight 
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function Contact() {
  const [copiedField, setCopiedField] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleCopy = (text, fieldName) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);
      confetti({
        particleCount: 90,
        spread: 60,
        origin: { y: 0.6 }
      });
    }, 600);
  };

  const handleMailtoDirect = () => {
    const subject = encodeURIComponent(formData.subject || `Message from ${formData.name}`);
    const body = encodeURIComponent(`Hi Dharshini,\n\n${formData.message}\n\nFrom: ${formData.name} (${formData.email})`);
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">
            <Mail size={14} />
            <span>Connect & Collaborate</span>
          </span>
          <h2 className="section-title">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="section-subtitle">
            Whether you are looking for an enthusiastic software engineering intern, GenAI collaborator, or have an exciting opportunity, my inbox is always open!
          </p>
        </div>

        <div className="contact-grid">
          {/* Left Column: Direct Info Cards */}
          <div className="contact-info-col">
            <div className="contact-hero-card glass-card">
              <div className="contact-card-badge">
                <span className="live-status-dot"></span>
                <span>Actively Seeking Opportunities</span>
              </div>
              <h3 className="contact-card-headline">Let's build something extraordinary together</h3>
              <p className="contact-card-desc">
                Currently available for engineering internships, technical collaborations, and collegiate hackathon teams. Feel free to reach out directly via email or phone!
              </p>
            </div>

            {/* Email Card */}
            <div className="contact-method-card glass-card">
              <div className="method-icon-box email-box">
                <Mail size={22} />
              </div>
              <div className="method-details">
                <span className="method-label">Email Address</span>
                <a href={`mailto:${personalInfo.email}`} className="method-value">
                  {personalInfo.email}
                </a>
              </div>
              <button
                type="button"
                className="btn-copy-action"
                onClick={() => handleCopy(personalInfo.email, 'email')}
                title="Copy email to clipboard"
              >
                {copiedField === 'email' ? <Check size={16} className="text-emerald" /> : <Copy size={16} />}
                <span className="copy-tooltip">{copiedField === 'email' ? 'Copied!' : 'Copy'}</span>
              </button>
            </div>

            {/* Phone Card */}
            <div className="contact-method-card glass-card">
              <div className="method-icon-box phone-box">
                <Phone size={22} />
              </div>
              <div className="method-details">
                <span className="method-label">Phone / WhatsApp</span>
                <a href={`tel:${personalInfo.phone}`} className="method-value">
                  {personalInfo.phone}
                </a>
              </div>
              <button
                type="button"
                className="btn-copy-action"
                onClick={() => handleCopy(personalInfo.phone, 'phone')}
                title="Copy phone to clipboard"
              >
                {copiedField === 'phone' ? <Check size={16} className="text-emerald" /> : <Copy size={16} />}
                <span className="copy-tooltip">{copiedField === 'phone' ? 'Copied!' : 'Copy'}</span>
              </button>
            </div>

            {/* Location Card */}
            <div className="contact-method-card glass-card">
              <div className="method-icon-box map-box">
                <MapPin size={22} />
              </div>
              <div className="method-details">
                <span className="method-label">Current Base</span>
                <span className="method-value text-normal">
                  Trichy, Tamil Nadu, India
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="contact-form-col glass-card">
            {isSubmitted ? (
              <div className="contact-success-box">
                <div className="success-icon-wrap">
                  <Sparkles size={36} />
                </div>
                <h3 className="success-title">Message Received!</h3>
                <p className="success-desc">
                  Thank you, <strong>{formData.name}</strong>. Your note has been logged. You can also open your default mail client to dispatch this message directly to Dharshini.
                </p>
                <div className="success-actions">
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={handleMailtoDirect}
                  >
                    <Send size={16} />
                    <span>Send via Email Client</span>
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ name: '', email: '', subject: '', message: '' });
                    }}
                  >
                    Send Another Note
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <h3 className="form-heading">
                  <MessageSquare size={20} className="form-heading-icon" />
                  <span>Send a Quick Note</span>
                </h3>

                <div className="form-group-row">
                  <div className="form-group">
                    <label htmlFor="contact-name" className="form-label">Your Name</label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      placeholder="e.g. Alex Johnson"
                      className="form-input"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="contact-email" className="form-label">Your Email</label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      placeholder="e.g. alex@example.com"
                      className="form-input"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="contact-subject" className="form-label">Subject</label>
                  <input
                    id="contact-subject"
                    name="subject"
                    type="text"
                    placeholder="e.g. Internship Opportunity / Technical Collaboration"
                    className="form-input"
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="contact-message" className="form-label">Message</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    required
                    placeholder="Write your note or question here..."
                    className="form-textarea"
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <div className="form-actions-row">
                  <button
                    type="submit"
                    className="btn btn-primary btn-glow w-full"
                    disabled={loading}
                  >
                    {loading ? (
                      <span>Sending...</span>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send size={16} />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
