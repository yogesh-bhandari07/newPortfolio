import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Mail, Copy, Check } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
    if (errorMessage) setErrorMessage('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      setErrorMessage('Please enter your name.');
      return;
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }
    if (!formData.message.trim()) {
      setErrorMessage('Please enter your message.');
      return;
    }

    setIsSubmitting(true);
    setErrorMessage('');

    // Simulate sending message
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 900);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="neu-surface rounded-3xl p-8 sm:p-12 md:p-16 max-w-4xl mx-auto shadow-[6px_6px_14px_#d1d9e6,-6px_-6px_14px_#ffffff]">
        {/* Header */}
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#944a00] mb-4 tracking-tight">
            Get in Touch
          </h2>
          <p className="text-[#554337] text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </div>

        {/* Quick Email Direct Pill */}
        <div className="flex justify-center mb-8">
          <button
            onClick={copyEmail}
            className="neu-pressed px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold text-[#713700] hover:text-[#944a00] flex items-center gap-2 transition-all hover:scale-105"
            title="Click to copy email"
          >
            <Mail className="w-4 h-4 text-[#944a00]" />
            <span>{PERSONAL_INFO.email}</span>
            {copiedEmail ? (
              <Check className="w-3.5 h-3.5 text-emerald-600 ml-1" />
            ) : (
              <Copy className="w-3.5 h-3.5 opacity-60 ml-1" />
            )}
          </button>
        </div>

        {submitted ? (
          <div className="neu-pressed rounded-2xl p-8 md:p-10 text-center animate-in fade-in zoom-in-95 duration-300">
            <div className="w-16 h-16 rounded-full neu-surface flex items-center justify-center text-emerald-600 mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-[#191c1e] mb-2">Message Received!</h3>
            <p className="text-[#554337] max-w-md mx-auto mb-6 text-sm sm:text-base">
              Thank you, <strong className="text-[#944a00]">{formData.name}</strong>. Your message has been noted. I'll get back to you at <span className="underline">{formData.email}</span> shortly.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                setFormData({ name: '', email: '', message: '' });
              }}
              className="neu-surface neu-button px-6 py-2.5 rounded-xl text-sm font-bold text-[#713700]"
            >
              Send Another Note
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {errorMessage && (
              <div className="neu-pressed p-4 rounded-xl flex items-center gap-3 text-sm text-red-700 bg-red-50/50">
                <AlertCircle className="w-5 h-5 shrink-0 text-red-600" />
                <span>{errorMessage}</span>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name */}
              <div className="flex flex-col gap-2">
                <label className="text-xs uppercase font-bold tracking-wider text-[#554337] ml-4">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="contact-name-input"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                  className="w-full bg-transparent border-none neu-pressed rounded-xl px-6 py-4 focus:outline-none text-[#191c1e] placeholder-[#877367]/60 text-base"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col gap-2">
                <label className="text-xs uppercase font-bold tracking-wider text-[#554337] ml-4">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="contact-email-input"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  required
                  className="w-full bg-transparent border-none neu-pressed rounded-xl px-6 py-4 focus:outline-none text-[#191c1e] placeholder-[#877367]/60 text-base"
                />
              </div>
            </div>

            {/* Message */}
            <div className="flex flex-col gap-2">
              <label className="text-xs uppercase font-bold tracking-wider text-[#554337] ml-4">
                Message
              </label>
              <textarea
                name="message"
                id="contact-message-input"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                placeholder="Hello Yogesh, I'd like to discuss a project..."
                required
                className="w-full bg-transparent border-none neu-pressed rounded-xl px-6 py-4 focus:outline-none text-[#191c1e] placeholder-[#877367]/60 resize-none text-base"
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-center pt-4">
              <button
                type="submit"
                id="contact-submit-btn"
                disabled={isSubmitting}
                className="neu-button neu-surface text-[#713700] hover:text-[#944a00] font-bold px-12 py-4 rounded-xl flex items-center gap-3 floating-ambient disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <span className="w-4 h-4 border-2 border-[#944a00] border-t-transparent rounded-full animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="w-4 h-4 text-[#944a00]" />
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};
