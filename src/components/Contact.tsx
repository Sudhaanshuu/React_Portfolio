import React, { useState } from 'react';
import { Send, Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch('https://formspree.io/f/xlddonad', {
        method: 'POST',
        body: new FormData(e.currentTarget),
        headers: {
          Accept: 'application/json'
        }
      });

      if (response.ok) {
        setStatus('success');
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-20 bg-black relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(0,200,255,0.1),transparent_50%)]" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
            Get In Touch
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-white mb-6">Contact Information</h3>
            <div className="space-y-4">
              <ContactInfo 
                icon={<Mail />}
                title="Email"
                value="sudhanshukumarbihar74@gmail.com"
                href="mailto:sudhanshukumarbihar74@gmail.com"
              />
              <ContactInfo 
                icon={<Phone />}
                title="Phone"
                value="+91 8252228793"
                href="tel:+918252228793"
              />
              <ContactInfo 
                icon={<MapPin />}
                title="Location"
                value="Bhubaneswar, India"
              />
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <Input 
              label="Name" 
              type="text" 
              name="name"
              placeholder="Your Name" 
              required 
            />
            <Input 
              label="Email" 
              type="email" 
              name="email"
              placeholder="Your Correct mail" 
              required 
            />
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Message
              </label>
              <textarea
                name="message"
                rows={6}
                required
                className="w-full px-4 py-3 bg-black/50 border border-cyan-500/20 rounded-lg focus:border-cyan-500/40 focus:ring-1 focus:ring-cyan-500/40 text-white placeholder-gray-500 transition-colors resize-none"
                placeholder="Your message here..."
              />
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full inline-flex items-center justify-center px-6 py-3 border border-cyan-500 text-cyan-500 rounded-lg hover:bg-cyan-500/10 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === 'sending' ? (
                'Sending...'
              ) : (
                <>
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </>
              )}
            </button>

            {status === 'success' && (
              <p className="#06b6d4 text-center">Message sent successfully!</p>
            )}
            {status === 'error' && (
              <p className="text-red-500 text-center">Failed to send message. Please try again.</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

const Input = ({ 
  label, 
  type, 
  name,
  placeholder,
  required 
}: { 
  label: string; 
  type: string;
  name: string;
  placeholder: string;
  required?: boolean;
}) => (
  <div>
    <label className="block text-sm font-medium text-gray-300 mb-2">
      {label}
    </label>
    <input
      type={type}
      name={name}
      required={required}
      className="w-full px-4 py-3 bg-black/50 border border-cyan-500/20 rounded-lg focus:border-cyan-500/40 focus:ring-1 focus:ring-cyan-500/40 text-white placeholder-gray-500 transition-colors"
      placeholder={placeholder}
    />
  </div>
);

const ContactInfo = ({ 
  icon, 
  title, 
  value, 
  href 
}: { 
  icon: React.ReactNode; 
  title: string; 
  value: string; 
  href?: string;
}) => (
  <div className="flex items-start space-x-4">
    <div className="text-cyan-500">{icon}</div>
    <div>
      <h4 className="text-gray-300 font-medium">{title}</h4>
      {href ? (
        <a href={href} className="text-gray-400 hover:text-cyan-500 transition-colors">
          {value}
        </a>
      ) : (
        <p className="text-gray-400">{value}</p>
      )}
    </div>
  </div>
);