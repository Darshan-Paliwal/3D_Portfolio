import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useEffect } from 'react';

function Projects() {
  const containerRef = useRef(null);
  const { scrollXProgress } = useScroll({ container: containerRef });
  const opacityTransform = useTransform(scrollXProgress, [0, 0.2, 0.8, 1], [0.7, 1, 1, 0.7]);

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
      const scrollAmount = direction === 'left' ? -400 : 400;
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    const handleScroll = () => {
      const cards = container.querySelectorAll('.project-card');
      cards.forEach((card, index) => {
        const rect = card.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();
        const center = (containerRect.width - card.offsetWidth) / 2 + container.scrollLeft;
        if (Math.abs(rect.left - center) < 100) {
          card.classList.add('active');
          card.classList.remove('inactive');
        } else {
          card.classList.remove('active');
          card.classList.add('inactive');
        }
      });
    };

    container.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

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
      <div className="w-full">
        <motion.div
          ref={containerRef}
          className="project-container flex space-x-4 md:space-x-6 pb-4"
          style={{ width: '100vw', opacity: opacityTransform }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card glass p-6 rounded-lg flex flex-col justify-between"
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
        </motion.div>
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