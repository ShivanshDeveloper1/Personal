import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, Globe, MessageCircle, PhoneCall, Send, Lock, CheckCircle2 } from 'lucide-react';

const ContactSection = () => {
  // 1. Setup Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    url: '',
    details: ''
  });

  // 2. Setup Submission Status State
  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: ''
  });

  // Handle Input Changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 3. Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: '' });

    // Combine URL (if provided) and Details to match the 'message' field your API expects
    const combinedMessage = formData.url 
      ? `Website URL: ${formData.url}\n\nProject Details: ${formData.details}`
      : formData.details;

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: combinedMessage,
        }),
      });

      if (response.ok) {
        setStatus({ loading: false, success: true, error: '' });
        // Reset form
        setFormData({ name: '', email: '', url: '', details: '' });
        
        // Hide success message after 5 seconds
        setTimeout(() => {
          setStatus(prev => ({ ...prev, success: false }));
        }, 5000);
      } else {
        const data = await response.json();
        setStatus({ loading: false, success: false, error: data.message || 'Something went wrong.' });
      }
    } catch (error) {
      setStatus({ loading: false, success: false, error: 'Failed to send the message. Please try again later.' });
    }
  };

  // Framer motion variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    }
  };

  return (
    <section className="w-full py-16 px-4 md:px-12 font-inter flex justify-center">
      <motion.div 
        className="max-w-7xl w-full rounded-[2rem] p-6 md:p-12 lg:p-16 border-[0.5px] border-current/10"
        style={{ boxShadow: '0 4px 40px rgba(0,0,0,0.03)' }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          
          {/* LEFT COLUMN - Information (UNCHANGED) */}
          <motion.div variants={itemVariants} className="flex flex-col">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-semibold mb-8 w-max"
                 style={{ backgroundColor: 'rgba(139, 92, 246, 0.1)', color: '#6D28D9' }}>
              Get in Touch
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold font-jakarta mb-6 leading-[1.15] tracking-tight">
              Ready to Start Your Project?
            </h2>
            <p className="text-lg opacity-70 mb-10 leading-relaxed max-w-md">
              Let's discuss your project and find the best solution for your business. Whether you have a design ready or need a site built from scratch, I'm here to help.
            </p>
            <div className="space-y-5 mb-10">
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 opacity-80" />
                <span className="text-base">
                  <span className="font-bold">1 hour</span> <span className="opacity-60 ml-1">Average reply time</span>
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Globe className="w-5 h-5 opacity-80" />
                <span className="text-base">
                  <span className="font-bold">GMT+5:30</span> <span className="opacity-60 ml-1">Based in India</span>
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-4 max-w-sm">
              <button 
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold transition-transform hover:scale-[1.02] active:scale-[0.98]"
                style={{ backgroundColor: '#10B981', color: 'white' }}
              >
                <MessageCircle className="w-5 h-5" />
                Chat on WhatsApp Now
              </button>
              <button 
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold border border-current/15 transition-transform hover:scale-[1.02] active:scale-[0.98]"
              >
                <PhoneCall className="w-5 h-5" />
                (91) 7618550475
              </button>
            </div>
          </motion.div>

          {/* RIGHT COLUMN - Form Card */}
          <motion.div 
            variants={itemVariants}
            className="rounded-2xl p-6 md:p-8 border-[0.5px] border-current/15 relative overflow-hidden"
            style={{ boxShadow: '0 20px 40px rgba(0,0,0,0.04)' }}
          >
            <h3 className="text-2xl font-bold font-jakarta mb-2">Start a Conversation</h3>
            <p className="opacity-70 text-sm mb-8">
              Fill out this quick form and we will get back to you with a free consultation and project plan.
            </p>

            {/* FORM CONNECTED TO STATE */}
            <form onSubmit={handleSubmit} className="space-y-5">
              
              <div>
                <label className="block text-sm font-bold mb-2">
                  Name <span className="text-red-500">*</span>
                </label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe" 
                  className="w-full px-4 py-3 rounded-xl border border-current/20 outline-none focus:border-current/50 bg-transparent transition-colors text-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-bold mb-2">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@company.com" 
                  className="w-full px-4 py-3 rounded-xl border border-current/20 outline-none focus:border-current/50 bg-transparent transition-colors text-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-bold mb-2">
                  Current Website URL <span className="opacity-50 font-normal">(Optional)</span>
                </label>
                <input 
                  type="url" 
                  name="url"
                  value={formData.url}
                  onChange={handleChange}
                  placeholder="https://example.com" 
                  className="w-full px-4 py-3 rounded-xl border border-current/20 outline-none focus:border-current/50 bg-transparent transition-colors text-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-bold mb-2">
                  Project Details <span className="text-red-500">*</span>
                </label>
                <textarea 
                  rows={4}
                  name="details"
                  value={formData.details}
                  onChange={handleChange}
                  required
                  placeholder="Describe your website goals, pages required, Figma links, and deadline..." 
                  className="w-full px-4 py-3 rounded-xl border border-current/20 outline-none focus:border-current/50 bg-transparent transition-colors text-sm resize-y"
                />
              </div>

              {/* Error Message Display */}
              {status.error && (
                <p className="text-red-500 text-sm font-medium">{status.error}</p>
              )}

              {/* Success Message Display */}
              {status.success && (
                <div className="flex items-center gap-2 text-green-500 text-sm font-medium bg-green-500/10 p-3 rounded-xl">
                  <CheckCircle2 className="w-5 h-5" />
                  Your message has been sent successfully!
                </div>
              )}

              {/* Submit Button */}
              <button 
                type="submit"
                disabled={status.loading}
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold mt-4 transition-transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:hover:scale-100"
                style={{ backgroundColor: '#7C3AED', color: 'white' }}
              >
                {status.loading ? 'Sending...' : 'Send Project Brief'}
                {!status.loading && <Send className="w-4 h-4" />}
              </button>

              <div className="flex items-center justify-center gap-1.5 mt-5 opacity-60 text-xs">
                <Lock className="w-3.5 h-3.5" />
                <p>Your information is kept 100% confidential and is never shared.</p>
              </div>

            </form>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection;