import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPaperPlane, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [focusedField, setFocusedField] = useState(null);
  const [emailCopied, setEmailCopied] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add form submission logic here
    console.log('Form submitted:', formState);
  };

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('samarthshinde4033@gmail.com');
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  const socialLinks = [
    {
      name: 'Email',
      icon: HiMail,
      href: 'mailto:samarthshinde4033@gmail.com',
      action: handleCopyEmail,
      color: 'hover:text-primary'
    },
    {
      name: 'GitHub',
      icon: FaGithub,
      href: 'https://github.com/Samarth40',
      color: 'hover:text-[#2ea44f]'
    },
    {
      name: 'LinkedIn',
      icon: FaLinkedin,
      href: 'https://www.linkedin.com/in/samarth-shinde-b44200245/',
      color: 'hover:text-[#0a66c2]'
    },
    {
      name: 'Twitter',
      icon: FaTwitter,
      href: 'https://x.com/Samarth4033',
      color: 'hover:text-[#1da1f2]'
    }
  ];

  return (
    <section id="contact" className="relative min-h-screen w-full py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-background">
        <div className="absolute w-full h-full">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        </div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-primary font-mono text-2xl mb-4">Get In Touch</h2>
          <h3 className="text-5xl md:text-6xl font-bold mb-8">Let's Connect</h3>
          <p className="text-lg md:text-xl text-secondary/80 max-w-2xl mx-auto">
            Have a question or want to work together? Drop me a message!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Input */}
              <div className="relative">
                <motion.input
                  type="text"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('name')}
                  onBlur={() => setFocusedField(null)}
                  required
                  className="w-full bg-surface/30 backdrop-blur-sm border-2 border-primary/20 rounded-lg px-6 py-4 text-lg
                           focus:border-primary outline-none transition-colors duration-300"
                  placeholder="Your Name"
                />
                <motion.div
                  className="absolute bottom-0 left-0 h-0.5 bg-primary"
                  initial={{ width: '0%' }}
                  animate={{ width: focusedField === 'name' ? '100%' : '0%' }}
                  transition={{ duration: 0.3 }}
                />
              </div>

              {/* Email Input */}
              <div className="relative">
                <motion.input
                  type="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                  required
                  className="w-full bg-surface/30 backdrop-blur-sm border-2 border-primary/20 rounded-lg px-6 py-4 text-lg
                           focus:border-primary outline-none transition-colors duration-300"
                  placeholder="Your Email"
                />
                <motion.div
                  className="absolute bottom-0 left-0 h-0.5 bg-primary"
                  initial={{ width: '0%' }}
                  animate={{ width: focusedField === 'email' ? '100%' : '0%' }}
                  transition={{ duration: 0.3 }}
                />
              </div>

              {/* Message Input */}
              <div className="relative">
                <motion.textarea
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  required
                  rows="6"
                  className="w-full bg-surface/30 backdrop-blur-sm border-2 border-primary/20 rounded-lg px-6 py-4 text-lg
                           focus:border-primary outline-none transition-colors duration-300 resize-none"
                  placeholder="Your Message"
                />
                <motion.div
                  className="absolute bottom-0 left-0 h-0.5 bg-primary"
                  initial={{ width: '0%' }}
                  animate={{ width: focusedField === 'message' ? '100%' : '0%' }}
                  transition={{ duration: 0.3 }}
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                className="w-full bg-primary text-background rounded-lg px-8 py-4 text-lg font-medium
                         hover:bg-primary/90 transition-colors duration-300 flex items-center justify-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
                <FaPaperPlane className="text-sm" />
              </motion.button>
            </form>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <div className="bg-surface/30 backdrop-blur-sm border-2 border-primary/20 rounded-lg p-8">
              <h4 className="text-2xl font-bold mb-6">Connect With Me</h4>
              <div className="space-y-6">
                {socialLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-4"
                  >
                    <motion.a
                      href={link.href}
                      target={link.name !== 'Email' ? '_blank' : undefined}
                      rel="noopener noreferrer"
                      onClick={link.action}
                      className={`flex items-center gap-4 text-lg ${link.color} transition-colors duration-300`}
                      whileHover={{ x: 10 }}
                    >
                      <link.icon className="text-2xl" />
                      <span>{link.name === 'Email' ? 'samarthshinde4033@gmail.com' : link.name}</span>
                    </motion.a>
                    {link.name === 'Email' && (
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: emailCopied ? 1 : 0 }}
                        className="text-primary text-sm"
                      >
                        Copied!
                      </motion.span>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
