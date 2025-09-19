import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { experiences } from '../../data/constants';

const Experience = () => {
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

  return (
    <section id="experience" className="section-padding bg-dark-800">
      <motion.div
        ref={ref}
        className="container-custom"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {/* Section Header */}
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            My <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            My leadership experience and involvement in various organizational roles and projects.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-accent-500"></div>

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.id}
                className="relative flex items-start"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 w-4 h-4 bg-primary-500 rounded-full border-4 border-dark-800 z-10"></div>

                {/* Content Card */}
                <div className="ml-16 flex-1">
                  <motion.div
                    className="card p-8"
                    whileHover={{ 
                      borderColor: 'rgba(14, 165, 233, 0.5)',
                      boxShadow: '0 20px 40px rgba(14, 165, 233, 0.1)'
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Header */}
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-white mb-2">
                          {experience.role}
                        </h3>
                        <div className="flex items-center gap-2 text-primary-400 font-medium mb-2">
                          <FaBriefcase className="w-4 h-4" />
                          {experience.organization}
                        </div>
                        <div className="flex items-center gap-2 text-gray-400">
                          <FaCalendarAlt className="w-4 h-4" />
                          {experience.duration}
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {experience.description}
                    </p>

                    {/* Skills */}
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Key Skills</h4>
                      <div className="flex flex-wrap gap-2">
                        {experience.skills.map((skill, skillIndex) => (
                          <motion.span
                            key={skillIndex}
                            className="px-3 py-1 bg-primary-500/20 text-primary-400 rounded-full text-sm font-medium border border-primary-500/30"
                            initial={{ opacity: 0, scale: 0 }}
                            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                            transition={{ 
                              delay: (index * 0.2) + (skillIndex * 0.1),
                              duration: 0.3 
                            }}
                            whileHover={{ 
                              scale: 1.1, 
                              backgroundColor: 'rgba(14, 165, 233, 0.3)',
                              color: 'white'
                            }}
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          variants={itemVariants}
        >
          <motion.div
            className="card p-8 max-w-2xl mx-auto"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Work Together?
            </h3>
            <p className="text-gray-400 mb-6">
              I'm always looking for new opportunities to apply my skills and contribute to meaningful projects.
            </p>
            <motion.a
              href="#contact"
              className="btn-primary inline-flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaBriefcase className="w-4 h-4" />
              Let's Connect
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Experience;