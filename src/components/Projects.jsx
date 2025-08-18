import { motion } from 'framer-motion';
import { useRef } from 'react';

function Projects() {
  const containerRef = useRef(null);

  const projects = [
    {
      title: 'Project 1',
      description: 'A modern web app built with React and Tailwind CSS.',
      skills: ['React', 'Tailwind', 'JavaScript'],
      image: 'https://via.placeholder.com/300x200',
    },
    {
      title: 'Project 2',
      description: 'A Node.js backend with RESTful API.',
      skills: ['Node.js', 'Express', 'MongoDB'],
      image: 'https://via.placeholder.com/300x200',
    },
    {
      title: 'Project 3',
      description: 'An animated portfolio using Framer Motion.',
      skills: ['React', 'Framer Motion', 'Tailwind'],
      image: 'https://via.placeholder.com/300x200',
    },
  ];

  const scroll = (direction) => {
    const container = containerRef.current;
    if (container) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <div className="max-w-7xl mx-auto p-4 md:p-8 w-full h-full flex flex-col justify-center relative">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-2xl md:text-4xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"
      >
        My Projects
      </motion.h2>
      <div className="relative">
        <div className="fade-edge fade-left h-full"></div>
        <div className="fade-edge fade-right h-full"></div>
        <div
          ref={containerRef}
          className="project-container flex overflow-x-auto space-x-4 md:space-x-6 pb-4 scrollbar-hide snap-x snap-mandatory"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="min-w-[90vw] md:min-w-[40vw] lg:min-w-[30vw] glass p-6 rounded-lg project-card flex flex-col justify-between"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
              whileHover={{ scale: 1.05, boxShadow: '0 12px 24px rgba(0, 0, 0, 0.3)' }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-40 md:h-48 object-cover rounded-md mb-4 shadow-md"
              />
              <h3 className="text-lg md:text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-300 text-sm md:text-base mb-4 flex-grow">{project.description}</p>
              <ul className="flex flex-wrap gap-2">
                {project.skills.map((skill) => (
                  <li
                    key={skill}
                    className="bg-gradient-to-r from-primary to-secondary px-3 py-1 rounded-full text-sm shadow-sm"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-4 gap-4 hidden md:flex">
        <button
          onClick={() => scroll('left')}
          className="bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 rounded-full hover:shadow-lg transition-all"
        >
          ←
        </button>
        <button
          onClick={() => scroll('right')}
          className="bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 rounded-full hover:shadow-lg transition-all"
        >
          →
        </button>
      </div>
    </div>
  );
}

export default Projects;