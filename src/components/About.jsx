import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center px-10 bg-gray-100"
    >
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold"
      >
        About Me
      </motion.h2>

      <p className="mt-4 text-gray-600 max-w-2xl text-center">
        Passionate about building modern web solutions using the latest
        technologies. I love creating smooth UI/UX experiences.
      </p>

      <div className="flex gap-6 mt-6">
        <a
          href="/cv.pdf"
          download
          className="px-6 py-3 bg-green-600 text-white rounded-2xl hover:bg-green-700 transition"
        >
          Download CV
        </a>
        <a
          href="#contact"
          className="px-6 py-3 bg-blue-600 text-white rounded-2xl hover:bg-blue-700 transition"
        >
          Connect Now
        </a>
      </div>

      {/* Social */}
      <div className="flex gap-6 mt-8 text-2xl text-gray-700">
        <a href="https://github.com" target="_blank"><FaGithub /></a>
        <a href="https://linkedin.com" target="_blank"><FaLinkedin /></a>
        <a href="https://twitter.com" target="_blank"><FaTwitter /></a>
      </div>

      {/* Skills */}
      <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {["React", "Node.js", "Tailwind", "Framer Motion"].map((skill) => (
          <motion.div
            key={skill}
            whileHover={{ scale: 1.1 }}
            className="p-4 bg-white shadow rounded-xl"
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default About;
