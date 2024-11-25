import React from 'react';
import { motion } from 'framer-motion';
import { RiCodeBoxLine, RiTeamLine, RiRobot2Line, RiProjectorLine } from 'react-icons/ri';
import './Skills.css';

const Skills = () => {
  const skills = [
    {
      title: "No-Code Development",
      icon: <RiCodeBoxLine className="text-2xl" />,
      description: "Building powerful solutions without traditional coding",
      keywords: ["Automation", "Integration", "Workflow Design"]
    },
    {
      title: "Soft Skills",
      icon: <RiTeamLine className="text-2xl" />,
      description: "Communication, leadership, and emotional intelligence",
      keywords: ["Leadership", "Communication", "Teamwork"]
    },
    {
      title: "Automation",
      icon: <RiRobot2Line className="text-2xl" />,
      description: "Streamlining workflows and processes",
      keywords: ["Process Design", "Efficiency", "Integration"]
    },
    {
      title: "Project Management",
      icon: <RiProjectorLine className="text-2xl" />,
      description: "Leading teams and delivering results",
      keywords: ["Agile", "Strategy", "Delivery"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 inline-block">
            <span className="text-white">Core</span>{' '}
            <span className="text-[var(--primary)]">Skills</span>
          </h2>
          <p className="text-[var(--text)] text-lg max-w-2xl mx-auto">
            Transforming ideas into reality through modern solutions
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-wrap justify-between gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="skill-card group flex-1 min-w-[calc(50%-1.5rem)]"
            >
              <div className="p-6 relative z-10">
                <div className="flex items-start gap-4">
                  <div className="skill-icon-wrapper flex-shrink-0">
                    <div className="skill-icon">
                      {skill.icon}
                    </div>
                  </div>
                  <div className="flex-grow min-w-0">
                    <h3 className="text-lg font-bold text-white mb-2">
                      {skill.title}
                    </h3>
                    <p className="text-[var(--text)] mb-3 text-sm">
                      {skill.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {skill.keywords.map((keyword, kidx) => (
                        <span 
                          key={kidx}
                          className="text-xs px-2 py-0.5 rounded-full bg-[var(--surface)] text-[var(--primary)] border border-[var(--primary)] opacity-80"
                        >
                          {keyword}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-[var(--primary)] opacity-[0.015] rounded-full blur-3xl"></div>
        <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-[var(--primary)] opacity-[0.015] rounded-full blur-3xl"></div>
      </div>
    </section>
  );
};

export default Skills;
