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

        {/* Education Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-accent-500"></div>

          {/* Education Items */}
          <div className="space-y-12">
            {education.map((edu, index) => (
              <motion.div
                key={edu.id}
                className="relative flex items-start"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 w-4 h-4 bg-primary-500 rounded-full border-4 border-dark-900 z-10"></div>

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
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center">
                            <FaGraduationCap className="w-6 h-6 text-primary-400" />
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-white mb-1">
                              {edu.degree}
                            </h3>
                            <div className="flex items-center gap-2 text-primary-400 font-medium">
                              <FaMapMarkerAlt className="w-4 h-4" />
                              {edu.school}
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-2 text-gray-400 mb-4">
                          <FaCalendarAlt className="w-4 h-4" />
                          {edu.date}
                        </div>
                        
                        <div className="flex items-center gap-2 text-accent-400 font-semibold mb-4">
                          <FaAward className="w-4 h-4" />
                          Grade: {edu.grade}
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 leading-relaxed">
                      {edu.desc}
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <motion.div
          className="mt-16 text-center"
          variants={itemVariants}
        >
          <motion.div
            className="card p-8 max-w-4xl mx-auto"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">
              Academic Excellence
            </h3>
            <p className="text-gray-400 mb-6">
              Throughout my academic journey, I've maintained a strong focus on both theoretical knowledge 
              and practical application. My involvement in various leadership roles and extracurricular 
              activities has helped me develop a well-rounded skill set.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-400 mb-2">8.68</div>
                <div className="text-gray-400">Current CGPA</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-400 mb-2">4</div>
                <div className="text-gray-400">Semesters Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-400 mb-2">2+</div>
                <div className="text-gray-400">Leadership Roles</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Education;