import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Phone, MapPin, MessageCircle } from 'lucide-react';

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

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
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }

    setTimeout(() => setStatus('idle'), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 bg-gray-900 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(147,51,234,0.1),transparent_70%)]" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl font-bold text-center mb-16"
        >
          <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            Let's Work Together
          </span>
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Get In Touch</h3>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                I'm always interested in new opportunities and exciting projects. 
                Whether you have a question or just want to say hi, feel free to reach out!
              </p>
            </div>

            <div className="space-y-6">
              <ContactInfo 
                icon={<Mail className="w-6 h-6" />}
                title="Email"
                value="sudhanshukumarbihar74@gmail.com"
                href="mailto:sudhanshukumarbihar74@gmail.com"
              />
              <ContactInfo 
                icon={<Phone className="w-6 h-6" />}
                title="Phone"
                value="+91 8252228793"
                href="tel:+918252228793"
              />
              <ContactInfo 
                icon={<MapPin className="w-6 h-6" />}
                title="Location"
                value="Bhubaneswar, India"
              />
            </div>

            <div className="pt-8">
              <h4 className="text-lg font-semibold text-white mb-4">Available for:</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3" />
                  Full-time opportunities
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3" />
                  Freelance projects
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3" />
                  Open source collaboration
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3" />
                  Technical consulting
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gray-800/50 rounded-xl p-8 border border-purple-500/20"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input 
                  label="Name" 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name" 
                  required 
                />
                <Input 
                  label="Email" 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com" 
                  required 
                />
              </div>
              
              <Input 
                label="Subject" 
                type="text" 
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="What's this about?" 
                required 
              />

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  required
                  className="w-full px-4 py-3 bg-gray-700/50 border border-purple-500/20 rounded-lg focus:border-purple-500/60 focus:ring-2 focus:ring-purple-500/20 text-white placeholder-gray-500 transition-all resize-none"
                  placeholder="Tell me about your project or just say hello..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={status === 'sending'}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center px-6 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'sending' ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2"
                    />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </>
                )}
              </motion.button>

              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-green-500/20 border border-green-500/30 rounded-lg text-green-400 text-center"
                >
                  <MessageCircle className="w-5 h-5 inline mr-2" />
                  Message sent successfully! I'll get back to you soon.
                </motion.div>
              )}
              
              {status === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-red-500/20 border border-red-500/30 rounded-lg text-red-400 text-center"
                >
                  Failed to send message. Please try again or contact me directly.
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

const Input = ({ 
  label, 
  type, 
  name,
  value,
  onChange,
  placeholder,
  required 
}: { 
  label: string; 
  type: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
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
      value={value}
      onChange={onChange}
      required={required}
      className="w-full px-4 py-3 bg-gray-700/50 border border-purple-500/20 rounded-lg focus:border-purple-500/60 focus:ring-2 focus:ring-purple-500/20 text-white placeholder-gray-500 transition-all"
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
  <motion.div
    whileHover={{ x: 10 }}
    className="flex items-center space-x-4 p-4 rounded-lg bg-gray-800/30 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300"
  >
    <div className="text-purple-400">{icon}</div>
    <div>
      <h4 className="text-white font-medium">{title}</h4>
      {href ? (
        <a href={href} className="text-gray-400 hover:text-purple-400 transition-colors">
          {value}
        </a>
      ) : (
        <p className="text-gray-400">{value}</p>
      )}
    </div>
  </motion.div>
);