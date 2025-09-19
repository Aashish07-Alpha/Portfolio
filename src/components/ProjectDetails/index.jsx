import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaGithub, FaLinkedin, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectDetails = ({ openModal, setOpenModal }) => {
  const project = openModal?.project;

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
  };

  const modalVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8,
      y: 50
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    },
    exit: { 
      opacity: 0, 
      scale: 0.8,
      y: 50,
      transition: {
        duration: 0.2
      }
    }
  };

  const handleClose = () => {
    setOpenModal({ state: false, project: null });
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  return (
    <AnimatePresence>
      {openModal?.state && (
        <motion.div
          className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/80 backdrop-blur-sm"
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={handleBackdropClick}
        >
          <motion.div
            className="relative w-full max-w-4xl mx-4 my-8 sm:my-12 lg:my-16"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Modal Content */}
            <div className="card p-4 sm:p-6 lg:p-8 max-h-[90vh] overflow-y-auto">
              {/* Close Button */}
              <motion.button
                className="absolute top-4 right-4 z-10 w-8 h-8 sm:w-10 sm:h-10 bg-dark-700 hover:bg-dark-600 rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300"
                onClick={handleClose}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaTimes className="w-4 h-4 sm:w-5 sm:h-5" />
              </motion.button>

              {/* Project Image */}
              <motion.img
                src={project?.image}
                alt={project?.title}
                className="w-full h-48 sm:h-64 lg:h-80 object-cover rounded-xl shadow-2xl mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              />

              {/* Project Title */}
              <motion.h2
                className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2"
                style={{ fontSize: 'clamp(1.5rem, 3vw + 0.5rem, 2.5rem)' }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                {project?.title}
              </motion.h2>

              {/* Project Date */}
              <motion.div
                className="text-sm sm:text-base text-primary-400 font-medium mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                {project?.date}
              </motion.div>

              {/* Project Tags */}
              <motion.div
                className="flex flex-wrap gap-2 mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                {project?.tags?.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-primary-500/20 text-primary-400 rounded-full text-xs sm:text-sm font-medium border border-primary-500/30"
                  >
                    {tag}
                  </span>
                ))}
              </motion.div>

              {/* Project Description */}
              <motion.div
                className="text-base sm:text-lg text-gray-300 leading-relaxed mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                {project?.description}
              </motion.div>

              {/* Team Members */}
              {project?.member && (
                <motion.div
                  className="mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-4">Team Members</h3>
                  <div className="space-y-3">
                    {project?.member?.map((member, index) => (
                      <motion.div
                        key={index}
                        className="flex items-center gap-3 sm:gap-4 p-3 bg-dark-700/50 rounded-lg"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.7 + index * 0.1 }}
                      >
                        <img
                          src={member.img}
                          alt={member.name}
                          className="w-10 h-10 sm:w-12 sm:h-12 object-cover rounded-full border-2 border-primary-500/30"
                        />
                        <div className="flex-1">
                          <div className="text-white font-medium text-sm sm:text-base">{member.name}</div>
                        </div>
                        <div className="flex gap-2">
                          {member.github && (
                            <motion.a
                              href={member.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-8 h-8 sm:w-10 sm:h-10 bg-dark-600 hover:bg-primary-500/20 rounded-lg flex items-center justify-center text-gray-400 hover:text-primary-400 transition-all duration-300"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                            >
                              <FaGithub className="w-4 h-4 sm:w-5 sm:h-5" />
                            </motion.a>
                          )}
                          {member.linkedin && (
                            <motion.a
                              href={member.linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-8 h-8 sm:w-10 sm:h-10 bg-dark-600 hover:bg-primary-500/20 rounded-lg flex items-center justify-center text-gray-400 hover:text-primary-400 transition-all duration-300"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                            >
                              <FaLinkedin className="w-4 h-4 sm:w-5 sm:h-5" />
                            </motion.a>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Action Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row gap-3 sm:gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                {project?.github && (
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary flex items-center justify-center gap-2 w-full sm:w-auto"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <FaGithub className="w-4 h-4" />
                    View Code
                  </motion.a>
                )}
                {project?.webapp && (
                  <motion.a
                    href={project.webapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary flex items-center justify-center gap-2 w-full sm:w-auto"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <FaExternalLinkAlt className="w-4 h-4" />
                    View Live App
                  </motion.a>
                )}
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectDetails;