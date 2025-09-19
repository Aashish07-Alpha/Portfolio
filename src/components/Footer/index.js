import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa';
import { Bio } from '../../data/constants';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navItems = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#education', label: 'Education' },
    { href: '#contact', label: 'Contact' },
  ];

  const socialLinks = [
    { href: Bio.github, icon: FaGithub, label: 'GitHub' },
    { href: Bio.linkedin, icon: FaLinkedin, label: 'LinkedIn' },
    { href: 'mailto:ashishsurya2005@gmail.com', icon: FaEnvelope, label: 'Email' },
  ];

  return (
    <footer className="bg-dark-900 border-t border-dark-700">
      <div className="container-custom py-12">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Logo and Name */}
          <motion.div
            className="mb-8"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">AS</span>
              </div>
              <h3 className="text-2xl font-bold text-white">Aashish Suryawanshi</h3>
            </div>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Full Stack Developer passionate about creating innovative solutions and 
              bringing ideas to life through technology.
            </p>
          </motion.div>

          {/* Navigation */}
          <motion.nav
            className="flex flex-wrap justify-center gap-6 mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {navItems.map((item, index) => (
              <motion.a
                key={item.href}
                href={item.href}
                className="text-gray-400 hover:text-primary-400 transition-colors duration-300 font-medium"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {item.label}
              </motion.a>
            ))}
          </motion.nav>

          {/* Social Links */}
          <motion.div
            className="flex justify-center gap-6 mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-dark-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary-500/20 transition-all duration-300"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </motion.div>

          {/* Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-dark-700 to-transparent mb-8"></div>

          {/* Copyright */}
          <motion.div
            className="text-gray-500 text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="flex items-center justify-center gap-2">
              &copy; {currentYear} Aashish Suryawanshi. Made with{' '}
              <motion.span
                className="text-red-500"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <FaHeart className="w-4 h-4" />
              </motion.span>{' '}
              and lots of ☕
            </p>
            <p className="mt-2 text-xs text-gray-600">
              Built with React, Tailwind CSS, and Framer Motion
            </p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;