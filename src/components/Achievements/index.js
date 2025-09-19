import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaTrophy, FaMedal, FaCalendarAlt, FaAward } from 'react-icons/fa';
import { achievements } from '../../data/constants';

const Achievements = () => {
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

  const cardVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="achievements" className="section-padding bg-gradient-to-b from-dark-900 to-dark-800">
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
            My <span className="gradient-text">Achievements</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Here are some of my notable achievements and recognitions in various competitions and hackathons.
          </p>
        </motion.div>

        {/* Achievements Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              className="group"
              variants={cardVariants}
              whileHover={{ 
                y: -8,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
            >
              <div className="card p-8 h-full flex flex-col relative overflow-hidden">
                {/* Category Badge */}
                <motion.div
                  className="absolute top-4 right-4 px-3 py-1 bg-accent-500 text-white text-xs font-medium rounded-full"
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : { scale: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                >
                  {achievement.category}
                </motion.div>

                {/* Achievement Icon */}
                <motion.div
                  className="w-16 h-16 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center mb-6"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <FaTrophy className="w-8 h-8 text-white" />
                </motion.div>

                {/* Achievement Title */}
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-primary-400 transition-colors">
                  {achievement.title}
                </h3>

                {/* Date */}
                <div className="flex items-center gap-2 text-gray-400 mb-4">
                  <FaCalendarAlt className="w-4 h-4" />
                  <span className="text-sm">{achievement.date}</span>
                </div>

                {/* Description */}
                <p className="text-gray-300 flex-1 leading-relaxed">
                  {achievement.description}
                </p>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500/5 to-accent-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="mt-16"
          variants={itemVariants}
        >
          <motion.div
            className="card p-8 max-w-4xl mx-auto"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-2xl font-bold text-white mb-8 text-center">
              Achievement Highlights
            </h3>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <motion.div
                  className="w-16 h-16 bg-primary-500/20 rounded-full flex items-center justify-center mx-auto mb-4"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <FaTrophy className="w-8 h-8 text-primary-400" />
                </motion.div>
                <div className="text-3xl font-bold text-white mb-2">3</div>
                <div className="text-gray-400">Hackathon Wins</div>
              </div>
              <div className="text-center">
                <motion.div
                  className="w-16 h-16 bg-accent-500/20 rounded-full flex items-center justify-center mx-auto mb-4"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <FaMedal className="w-8 h-8 text-accent-400" />
                </motion.div>
                <div className="text-3xl font-bold text-white mb-2">5+</div>
                <div className="text-gray-400">Competitions</div>
              </div>
              <div className="text-center">
                <motion.div
                  className="w-16 h-16 bg-primary-500/20 rounded-full flex items-center justify-center mx-auto mb-4"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <FaAward className="w-8 h-8 text-primary-400" />
                </motion.div>
                <div className="text-3xl font-bold text-white mb-2">2+</div>
                <div className="text-gray-400">Years Leadership</div>
              </div>
              <div className="text-center">
                <motion.div
                  className="w-16 h-16 bg-accent-500/20 rounded-full flex items-center justify-center mx-auto mb-4"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <FaTrophy className="w-8 h-8 text-accent-400" />
                </motion.div>
                <div className="text-3xl font-bold text-white mb-2">100%</div>
                <div className="text-gray-400">Success Rate</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Achievements;
