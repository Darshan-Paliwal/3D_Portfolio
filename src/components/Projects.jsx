import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Portfolio Website",
    desc: "A modern portfolio using React and Tailwind.",
    img: "https://via.placeholder.com/400x250",
    tech: ["React", "Tailwind", "Framer Motion"],
  },
  {
    title: "E-commerce App",
    desc: "Full-stack MERN store with authentication.",
    img: "https://via.placeholder.com/400x250",
    tech: ["MongoDB", "Express", "React", "Node"],
  },
  {
    title: "Chat Application",
    desc: "Real-time chat app using Socket.io.",
    img: "https://via.placeholder.com/400x250",
    tech: ["Node", "Socket.io", "React"],
  },
];

function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen px-10 py-20 bg-gray-50"
    >
      <h2 className="text-4xl font-bold text-center">Projects</h2>

      <motion.div
        className="flex overflow-x-scroll gap-10 mt-10 pb-5 scrollbar-hide"
        whileTap={{ cursor: "grabbing" }}
      >
        {projects.map((p, i) => (
          <motion.div
            key={i}
            className="min-w-[350px] bg-white rounded-2xl shadow-lg overflow-hidden"
            whileHover={{ scale: 1.05 }}
          >
            <img src={p.img} alt={p.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-2xl font-bold">{p.title}</h3>
              <p className="text-gray-600 mt-2">{p.desc}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 text-sm bg-gray-200 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default Projects;
