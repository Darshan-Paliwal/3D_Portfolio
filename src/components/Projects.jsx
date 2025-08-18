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
    <section id="projects" className="min-h-screen flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto p-8"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">My Projects</h2>
        <div className="flex overflow-x-auto space-x-6 pb-4 snap-x snap-mandatory">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="min-w-[300px] bg-gray-800 rounded-lg p-6 snap-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-md mb-4" />
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <ul className="flex flex-wrap gap-2">
                {project.skills.map((skill) => (
                  <li key={skill} className="bg-primary px-3 py-1 rounded-full text-sm">
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Projects;
