import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { skills } from '../../data/constants';

const Skills = () => {
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

  const skillVariants = {
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
    <section id="skills" className="section-padding bg-gradient-to-b from-dark-900 to-dark-800">
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
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Here are some of my skills on which I have been working for the past 2 years.
            I'm constantly learning and expanding my expertise in these areas.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="card p-8"
              variants={skillVariants}
              whileHover={{ 
                scale: 1.05, 
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
              transition={{ duration: 0.3 }}
            >
              {/* Skill Category Title */}
              <motion.h3
                className="text-2xl font-bold text-white mb-6 text-center"
                variants={itemVariants}
              >
                {skill.title}
              </motion.h3>

              {/* Skills List */}
              <div className="flex flex-wrap gap-3 justify-center">
                {skill.skills.map((item, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    className="flex items-center gap-2 px-4 py-2 bg-dark-700 rounded-full border border-dark-600 hover:border-primary-500/50 transition-all duration-300 group"
                    variants={itemVariants}
                    whileHover={{ 
                      scale: 1.1, 
                      backgroundColor: 'rgba(14, 165, 233, 0.1)',
                      borderColor: 'rgba(14, 165, 233, 0.5)'
                    }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                    transition={{ 
                      delay: (index * 0.1) + (skillIndex * 0.05),
                      duration: 0.3 
                    }}
                  >
                    <motion.img
                      src={item.image}
                      alt={item.name}
                      className="w-5 h-5 object-contain"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    />
                    <span className="text-gray-300 text-sm font-medium group-hover:text-white transition-colors">
                    {item.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Skills Section */}
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
              Continuous Learning
            </h3>
            <p className="text-gray-400 mb-6">
              I believe in continuous learning and staying updated with the latest technologies. 
              I'm always exploring new frameworks, tools, and best practices to improve my skills.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {['React', 'Node.js', 'TypeScript', 'AWS', 'Docker', 'Kubernetes', 'GraphQL', 'Next.js'].map((tech, index) => (
                <motion.span
                  key={tech}
                  className="px-4 py-2 bg-gradient-to-r from-primary-500/20 to-accent-500/20 text-primary-400 rounded-full text-sm font-medium border border-primary-500/30"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                  whileHover={{ 
                    scale: 1.1, 
                    backgroundColor: 'rgba(14, 165, 233, 0.3)',
                    color: 'white'
                  }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;