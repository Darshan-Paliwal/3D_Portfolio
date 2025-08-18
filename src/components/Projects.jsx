import { motion } from 'framer-motion';

function Projects() {
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

  return (
    <div className="max-w-7xl mx-auto p-4 md:p-8">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-2xl md:text-4xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"
      >
        My Projects
      </motion.h2>
      <motion.div
        className="flex overflow-x-auto space-x-4 md:space-x-6 pb-4 snap-x snap-mandatory"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="min-w-[280px] md:min-w-[320px] glass p-6 rounded-lg snap-center"
            whileHover={{ scale: 1.05, boxShadow: '0 12px 24px rgba(0, 0, 0, 0.3)' }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-40 md:h-48 object-cover rounded-md mb-4 shadow-md"
            />
            <h3 className="text-lg md:text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-300 text-sm md:text-base mb-4">{project.description}</p>
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
  );
}

export default Projects;