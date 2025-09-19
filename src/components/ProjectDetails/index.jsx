import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaGithub, FaExternalLinkAlt, FaCalendarAlt, FaCode, FaRocket, FaUsers, FaStar } from 'react-icons/fa';

const ProjectDetails = ({ openModal, setOpenModal }) => {
  const project = openModal?.project;

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: 50,
      transition: {
        duration: 0.3,
        ease: "easeIn"
      }
    }
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
  };

  if (!openModal.state || !project) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        variants={overlayVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        onClick={() => setOpenModal({ state: false, project: null })}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/90 backdrop-blur-md" />
        
        {/* Modal Content */}
        <motion.div
          className="relative bg-dark-800 rounded-3xl max-w-5xl w-full max-h-[95vh] overflow-y-auto shadow-2xl border border-dark-700"
          variants={modalVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <motion.button
            className="absolute top-6 right-6 z-20 w-12 h-12 bg-dark-700/80 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-red-500/20 transition-all duration-300 border border-dark-600"
            onClick={() => setOpenModal({ state: false, project: null })}
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaTimes className="w-6 h-6" />
          </motion.button>

          {/* Project Image with Enhanced Styling */}
          <div className="relative overflow-hidden">
            <motion.img
              src={project.image}
              alt={project.title}
              className="w-full h-72 md:h-96 object-cover"
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            />
            {/* Enhanced Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            
            {/* Project Category Badge */}
            <motion.div
              className="absolute top-6 left-6 px-4 py-2 bg-primary-500/90 backdrop-blur-sm rounded-full text-white text-sm font-semibold flex items-center gap-2"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <FaRocket className="w-4 h-4" />
              {project.category}
            </motion.div>

            {/* Project Title Overlay */}
            <div className="absolute bottom-6 left-6 right-6">
              <motion.h1
                className="text-4xl md:text-5xl font-bold text-white mb-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                {project.title}
              </motion.h1>
              <motion.div
                className="flex items-center gap-4 text-gray-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <div className="flex items-center gap-2">
                  <FaCalendarAlt className="w-4 h-4 text-primary-400" />
                  <span className="text-sm font-medium">{project.date}</span>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Enhanced Content */}
          <div className="p-8 md:p-10">
            {/* Project Stats */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <div className="bg-dark-700/50 rounded-xl p-6 text-center border border-dark-600">
                <FaCode className="w-8 h-8 text-primary-400 mx-auto mb-3" />
                <div className="text-2xl font-bold text-white mb-1">{project.tags.length}</div>
                <div className="text-gray-400 text-sm">Technologies</div>
              </div>
              <div className="bg-dark-700/50 rounded-xl p-6 text-center border border-dark-600">
                <FaRocket className="w-8 h-8 text-accent-400 mx-auto mb-3" />
                <div className="text-2xl font-bold text-white mb-1">Live</div>
                <div className="text-gray-400 text-sm">Deployment</div>
              </div>
              <div className="bg-dark-700/50 rounded-xl p-6 text-center border border-dark-600">
                <FaStar className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
                <div className="text-2xl font-bold text-white mb-1">Featured</div>
                <div className="text-gray-400 text-sm">Project</div>
              </div>
            </motion.div>

            {/* Enhanced Description */}
            <motion.div
              className="mb-8"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <div className="w-1 h-8 bg-gradient-to-b from-primary-500 to-accent-500 rounded-full"></div>
                Project Overview
              </h3>
              <div className="bg-dark-700/30 rounded-xl p-6 border border-dark-600">
                <p className="text-gray-300 leading-relaxed text-lg">
                  {project.description}
                </p>
              </div>
            </motion.div>

            {/* Enhanced Technologies */}
            <motion.div
              className="mb-8"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.9 }}
            >
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <div className="w-1 h-8 bg-gradient-to-b from-primary-500 to-accent-500 rounded-full"></div>
                Tech Stack
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {project.tags.map((tag, index) => (
                  <motion.div
                    key={index}
                    className="bg-gradient-to-r from-primary-500/10 to-accent-500/10 border border-primary-500/20 rounded-lg p-3 text-center hover:border-primary-500/40 transition-all duration-300"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.0 + index * 0.05 }}
                    whileHover={{ scale: 1.05, backgroundColor: 'rgba(14, 165, 233, 0.1)' }}
                  >
                    <span className="text-primary-400 font-medium text-sm">{tag}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Enhanced Action Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.1 }}
            >
              {project.github && (
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 btn-secondary flex items-center justify-center gap-3 py-4 text-lg font-semibold rounded-xl"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <FaGithub className="w-6 h-6" />
                  View Source Code
                </motion.a>
              )}
              {project.webapp && (
                <motion.a
                  href={project.webapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 btn-primary flex items-center justify-center gap-3 py-4 text-lg font-semibold rounded-xl"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <FaExternalLinkAlt className="w-6 h-6" />
                  Launch Live Demo
                </motion.a>
              )}
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectDetails;