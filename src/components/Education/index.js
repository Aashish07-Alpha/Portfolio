import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt, FaAward } from 'react-icons/fa';
import { education } from '../../data/constants';

const Education = () => {
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
    <section id="education" className="section-padding bg-dark-900">
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
            My <span className="gradient-text">Education</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            My education has been a journey of self-discovery and growth. 
            Here are my educational milestones that have shaped my career.
          </p>
        </motion.div>

        {/* Education Grid */}
        <div className="responsive-grid-2">
          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
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
                      <FaGraduationCap className="w-6 h-6 text-primary-400" />
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
                        {edu.degree}
                      </h3>
                      <div className="flex items-center gap-2 text-primary-400 font-medium text-sm sm:text-base">
                        <FaMapMarkerAlt className="w-4 h-4" />
                        {edu.school}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 text-gray-400 text-sm sm:text-base mb-3">
                    <FaCalendarAlt className="w-4 h-4" />
                    {edu.date}
                  </div>
                  
                  <div className="flex items-center gap-2 text-accent-400 font-semibold text-sm sm:text-base">
                    <FaAward className="w-4 h-4" />
                    Grade: {edu.grade}
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                  {edu.desc}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          className="mt-12 sm:mt-16 text-center"
          variants={itemVariants}
        >
          <motion.div
            className="card p-6 sm:p-8 max-w-4xl mx-auto"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">
              Academic Excellence
            </h3>
            <p className="text-sm sm:text-base text-gray-400 mb-4 sm:mb-6">
              Throughout my academic journey, I've maintained a strong focus on both theoretical knowledge 
              and practical application. My involvement in various leadership roles and extracurricular 
              activities has helped me develop a well-rounded skill set.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-primary-400 mb-1 sm:mb-2">8.68</div>
                <div className="text-xs sm:text-sm text-gray-400">Current CGPA</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-primary-400 mb-1 sm:mb-2">4</div>
                <div className="text-xs sm:text-sm text-gray-400">Semesters Completed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-primary-400 mb-1 sm:mb-2">2+</div>
                <div className="text-xs sm:text-sm text-gray-400">Leadership Roles</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Education;