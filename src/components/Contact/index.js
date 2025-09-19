import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaPaperPlane } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import { Bio } from '../../data/constants';

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const form = useRef();
  
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);
    
    // Basic validation
    const formData = new FormData(form.current);
    const email = formData.get('from_email');
    const name = formData.get('from_name');
    const subject = formData.get('subject');
    const message = formData.get('message');
    
    if (!email || !name || !subject || !message) {
      setError('Please fill in all fields');
      setLoading(false);
      return;
    }
    
    if (!email.includes('@')) {
      setError('Please enter a valid email address');
      setLoading(false);
      return;
    }

    emailjs.sendForm('service_tox7kqs', 'template_nv7k7mj', form.current, 'SybVGsYS52j2TfLbi')
      .then((result) => {
        setSuccess(true);
        form.current.reset();
        setLoading(false);
        setTimeout(() => setSuccess(false), 5000);
      }, (error) => {
        console.log(error.text);
        setError('Failed to send email. Please try again.');
        setLoading(false);
      });
  };

  const contactInfo = [
    {
      icon: FaEnvelope,
      label: 'Email',
      value: 'ashishsurya2005@gmail.com',
      href: 'mailto:ashishsurya2005@gmail.com'
    },
    {
      icon: FaPhone,
      label: 'Phone',
      value: '+91 9423696746',
      href: 'tel:+919423696746'
    },
    {
      icon: FaMapMarkerAlt,
      label: 'Location',
      value: 'Pune, Maharashtra, India',
      href: '#'
    }
  ];

  return (
    <section id="contact" className="section-padding bg-dark-800">
      <motion.div
        ref={ref}
        className="container-custom px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {/* Section Header */}
        <motion.div className="text-center mb-12 sm:mb-16" variants={itemVariants}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-400 max-w-3xl mx-auto px-4">
            Feel free to reach out to me for any questions, opportunities, or just to say hello!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Contact Information */}
          <motion.div className="space-y-6 lg:space-y-8" variants={itemVariants}>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Let's Connect</h3>
              <p className="text-sm sm:text-base text-gray-400 mb-6 sm:mb-8">
                I'm always interested in new opportunities and collaborations. 
                Whether you have a project in mind or just want to chat about technology, 
                I'd love to hear from you!
              </p>
            </div>

            {/* Contact Info Cards */}
            <div className="space-y-3 sm:space-y-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.href}
                  className="card p-4 sm:p-6 flex items-center space-x-3 sm:space-x-4 hover:border-primary-500/50 transition-all duration-300 group"
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, x: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary-500/20 rounded-lg flex items-center justify-center group-hover:bg-primary-500/30 transition-colors">
                    <info.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary-400" />
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm text-gray-400">{info.label}</div>
                    <div className="text-white font-medium text-sm sm:text-base">{info.value}</div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <motion.div className="space-y-3 sm:space-y-4" variants={itemVariants}>
              <h4 className="text-base sm:text-lg font-semibold text-white">Follow Me</h4>
              <div className="flex space-x-3 sm:space-x-4">
                <motion.a
                  href={Bio.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-dark-700 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary-500/20 transition-all duration-300"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaGithub className="w-5 h-5 sm:w-6 sm:h-6" />
                </motion.a>
                <motion.a
                  href={Bio.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-dark-700 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary-500/20 transition-all duration-300"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaLinkedin className="w-5 h-5 sm:w-6 sm:h-6" />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={itemVariants}>
            <div className="card p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Send Message</h3>
              
              <form ref={form} onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <motion.div
                    className="relative"
                    whileFocus={{ scale: 1.02 }}
                  >
                    <input
                      type="text"
                      name="from_name"
                      placeholder="Your Name"
                      required
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-dark-700 border border-dark-600 rounded-lg text-white placeholder-gray-400 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all duration-300 focus:outline-none text-sm sm:text-base"
                    />
                  </motion.div>
                  
                  <motion.div
                    className="relative"
                    whileFocus={{ scale: 1.02 }}
                  >
                    <input
                      type="email"
                      name="from_email"
                      placeholder="Your Email"
                      required
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-dark-700 border border-dark-600 rounded-lg text-white placeholder-gray-400 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all duration-300 focus:outline-none text-sm sm:text-base"
                    />
                  </motion.div>
                </div>

                <motion.div
                  className="relative"
                  whileFocus={{ scale: 1.02 }}
                >
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-dark-700 border border-dark-600 rounded-lg text-white placeholder-gray-400 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all duration-300 focus:outline-none text-sm sm:text-base"
                  />
                </motion.div>

                <motion.div
                  className="relative"
                  whileFocus={{ scale: 1.02 }}
                >
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    required
                    rows={4}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-dark-700 border border-dark-600 rounded-lg text-white placeholder-gray-400 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all duration-300 focus:outline-none resize-none text-sm sm:text-base"
                  />
                </motion.div>

                {error && (
                  <motion.div
                    className="text-red-400 text-xs sm:text-sm text-center p-3 bg-red-500/10 rounded-lg"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    {error}
                  </motion.div>
                )}

                {success && (
                  <motion.div
                    className="text-green-400 text-xs sm:text-sm text-center p-3 bg-green-500/10 rounded-lg"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    Message sent successfully! I'll get back to you soon.
                  </motion.div>
                )}

                <motion.button
                  type="submit"
                  disabled={loading}
                  className="w-full btn-primary flex items-center justify-center gap-2 py-3 sm:py-4 text-base sm:text-lg font-semibold"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  animate={loading ? { scale: [1, 1.02, 1] } : {}}
                  transition={{ duration: 0.5, repeat: loading ? Infinity : 0 }}
                >
                  {loading ? (
                    <>
                      <motion.div
                        className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white border-t-transparent rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      />
                      Sending...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane className="w-4 h-4 sm:w-5 sm:h-5" />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;