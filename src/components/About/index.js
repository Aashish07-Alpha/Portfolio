import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Bio } from '../../data/constants';
import { FaCode, FaRocket, FaLightbulb, FaUsers } from 'react-icons/fa';

const About = () => {
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

  const skillBars = [
    { name: 'Frontend Development', percentage: 90, color: 'from-blue-500 to-cyan-500' },
    { name: 'Backend Development', percentage: 85, color: 'from-green-500 to-emerald-500' },
    { name: 'Database Management', percentage: 80, color: 'from-purple-500 to-violet-500' },
    { name: 'Problem Solving', percentage: 95, color: 'from-orange-500 to-red-500' },
  ];

  const stats = [
    { icon: FaCode, label: 'Projects Completed', value: '10+' },
    { icon: FaRocket, label: 'Technologies', value: '15+' },
    { icon: FaLightbulb, label: 'Innovation', value: '100%' },
    { icon: FaUsers, label: 'Team Leadership', value: '2+ Years' },
  ];

  return (
    <section id="about" className="section-padding bg-dark-900">
      <motion.div
        ref={ref}
        className="container-custom"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div className="space-y-8" variants={itemVariants}>
            {/* Section Title */}
            <div className="space-y-4">
              <motion.h2
                className="text-4xl lg:text-5xl font-bold text-white"
                variants={itemVariants}
              >
                About <span className="gradient-text">Me</span>
              </motion.h2>
              <motion.div
                className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full"
                variants={itemVariants}
              />
            </div>

            {/* Bio Card */}
            <motion.div
              className="card p-8 space-y-6"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-lg text-gray-300 leading-relaxed">
                {Bio.description}
              </p>
              
              <div className="flex flex-wrap gap-4">
                <motion.a
                  href={Bio.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Resume
                </motion.a>
                <motion.a
                  href="#contact"
                  className="btn-secondary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get In Touch
                </motion.a>
              </div>
            </motion.div>

            {/* Stats Grid */}
            <motion.div
              className="grid grid-cols-2 gap-4"
              variants={itemVariants}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="card p-6 text-center"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  transition={{ duration: 0.3 }}
                >
                  <stat.icon className="w-8 h-8 text-primary-400 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Skills */}
          <motion.div className="space-y-8" variants={itemVariants}>
            <motion.h3
              className="text-3xl font-bold text-white text-center lg:text-left"
              variants={itemVariants}
            >
              My <span className="gradient-text">Skills</span>
            </motion.h3>

            {/* Skill Bars */}
            <div className="space-y-6">
              {skillBars.map((skill, index) => (
                <motion.div
                  key={index}
                  className="space-y-2"
                  variants={itemVariants}
                >
                  <div className="flex justify-between items-center">
                    <span className="text-white font-medium">{skill.name}</span>
                    <span className="text-primary-400 font-semibold">{skill.percentage}%</span>
                  </div>
                  <div className="w-full bg-dark-700 rounded-full h-3 overflow-hidden">
                    <motion.div
                      className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${skill.percentage}%` } : { width: 0 }}
                      transition={{ duration: 1.5, delay: index * 0.2, ease: "easeOut" }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Tech Stack */}
            <motion.div
              className="card p-6"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <h4 className="text-xl font-semibold text-white mb-4">Tech Stack</h4>
              <div className="flex flex-wrap gap-3">
                {['React', 'Node.js', 'MongoDB', 'Express', 'JavaScript', 'Python', 'MySQL', 'Git'].map((tech, index) => (
                  <motion.span
                    key={tech}
                    className="px-3 py-1 bg-primary-500/20 text-primary-400 rounded-full text-sm font-medium border border-primary-500/30"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                    whileHover={{ scale: 1.1, backgroundColor: 'rgba(14, 165, 233, 0.3)' }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;