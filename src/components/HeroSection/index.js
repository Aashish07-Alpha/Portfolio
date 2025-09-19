import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Typewriter from 'typewriter-effect';
import { FaGithub, FaLinkedin, FaDownload } from 'react-icons/fa';
import { Bio } from '../../data/constants';
import HeroImg from '../../images/HeroImage.jpg';

const HeroSection = () => {
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

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="about" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        {/* Floating orbs */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary-500/20 rounded-full blur-xl animate-float"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-accent-500/20 rounded-full blur-xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-primary-500/10 rounded-full blur-2xl animate-float" style={{animationDelay: '4s'}}></div>
        <div className="absolute bottom-40 right-1/3 w-28 h-28 bg-accent-500/15 rounded-full blur-xl animate-float" style={{animationDelay: '1s'}}></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-12 grid-rows-12 h-full w-full">
            {Array.from({ length: 144 }).map((_, i) => (
              <div key={i} className="border border-primary-500/20"></div>
            ))}
          </div>
        </div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 via-transparent to-accent-500/10 z-10"></div>

      <motion.div
        ref={ref}
        className="container-custom relative z-20"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            className="space-y-8"
            variants={itemVariants}
          >
            {/* Greeting */}
            <motion.div
              className="text-lg text-primary-400 font-medium"
              variants={itemVariants}
            >
              👋 Hello, I'm
            </motion.div>

            {/* Name */}
            <motion.h1
              className="text-5xl lg:text-7xl font-bold text-white leading-tight"
              variants={itemVariants}
            >
              <span className="gradient-text">{Bio.name}</span>
            </motion.h1>

            {/* Typewriter Effect */}
            <motion.div
              className="text-2xl lg:text-4xl font-semibold text-gray-300"
              variants={itemVariants}
            >
              I am a{' '}
              <span className="text-primary-400">
                <Typewriter
                  options={{
                    strings: Bio.roles,
                    autoStart: true,
                    loop: true,
                    delay: 50,
                    deleteSpeed: 30,
                  }}
                />
              </span>
            </motion.div>

            {/* Description */}
            <motion.p
              className="text-lg text-gray-400 leading-relaxed max-w-2xl"
              variants={itemVariants}
            >
              {Bio.description}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              variants={itemVariants}
            >
              <motion.a
                href={Bio.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaDownload className="w-4 h-4" />
                Download Resume
              </motion.a>

              <motion.a
                href="#contact"
                className="btn-secondary inline-flex items-center gap-2 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex gap-6"
              variants={itemVariants}
            >
              <motion.a
                href={Bio.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-400 transition-colors duration-300"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaGithub className="w-6 h-6" />
              </motion.a>
              <motion.a
                href={Bio.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-400 transition-colors duration-300"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaLinkedin className="w-6 h-6" />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Content - Image */}
          <motion.div
            className="flex justify-center lg:justify-end"
            variants={imageVariants}
          >
            <motion.div
              className="relative"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-accent-500/20 rounded-full blur-3xl scale-110"></div>
              
              {/* Image Container */}
              <div className="relative z-10">
                <motion.img
                  src={HeroImg}
                  alt="Aashish Suryawanshi"
                  className="w-80 h-80 lg:w-96 lg:h-96 object-cover rounded-full border-4 border-primary-500/30 shadow-2xl"
                  whileHover={{ rotate: 5 }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Floating Elements */}
                <motion.div
                  className="absolute -top-4 -right-4 w-8 h-8 bg-primary-500 rounded-full"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <motion.div
                  className="absolute -bottom-4 -left-4 w-6 h-6 bg-accent-500 rounded-full"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-primary-500 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-primary-500 rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;