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

        {/* Experience Grid */}
        <div className="responsive-grid-2">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              className="relative"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Content Card */}
              <motion.div
                className="card p-6 sm:p-8 h-full"
                whileHover={{ 
                  borderColor: 'rgba(14, 165, 233, 0.5)',
                  boxShadow: '0 20px 40px rgba(14, 165, 233, 0.1)'
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Header */}
                <div className="flex flex-col mb-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center">
                      <FaBriefcase className="w-6 h-6 text-primary-400" />
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
                        {experience.role}
                      </h3>
                      <div className="flex items-center gap-2 text-primary-400 font-medium text-sm sm:text-base">
                        {experience.organization}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 text-gray-400 text-sm sm:text-base">
                    <FaCalendarAlt className="w-4 h-4" />
                    {experience.duration}
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 mb-6 leading-relaxed text-sm sm:text-base">
                  {experience.description}
                </p>

                {/* Skills */}
                <div>
                  <h4 className="text-base sm:text-lg font-semibold text-white mb-3">Key Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {experience.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skillIndex}
                        className="px-2 sm:px-3 py-1 bg-primary-500/20 text-primary-400 rounded-full text-xs sm:text-sm font-medium border border-primary-500/30"
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
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-12 sm:mt-16"
          variants={itemVariants}
        >
          <motion.div
            className="card p-6 sm:p-8 max-w-2xl mx-auto"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
              Ready to Work Together?
            </h3>
            <p className="text-sm sm:text-base text-gray-400 mb-4 sm:mb-6">
              I'm always looking for new opportunities to apply my skills and contribute to meaningful projects.
            </p>
            <motion.a
              href="#contact"
              className="btn-primary inline-flex items-center gap-2 w-full sm:w-auto justify-center"
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