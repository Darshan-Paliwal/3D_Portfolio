import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

function About({ scrollToContact }) {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto p-8 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2">
            <h3 className="text-xl font-semibold mb-4">Connect with Me</h3>
            <button
              onClick={scrollToContact}
              className="bg-primary text-white px-6 py-2 rounded-full hover:bg-blue-700 transition"
            >
              Connect Now
            </button>
            <a
              href="/path-to-your-cv.pdf"
              download
              className="ml-4 bg-secondary text-white px-6 py-2 rounded-full hover:bg-green-700 transition"
            >
              Download CV
            </a>
            <div className="flex justify-center space-x-4 mt-6">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <FaGithub className="text-2xl hover:text-primary" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-2xl hover:text-primary" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="text-2xl hover:text-primary" />
              </a>
            </div>
          </div>
          <div className="md:w-1/2">
            <h3 className="text-xl font-semibold mb-4">Skills</h3>
            <ul className="flex flex-wrap gap-4 justify-center">
              {['React', 'Tailwind CSS', 'Node.js', 'Framer Motion', 'JavaScript', 'Git'].map((skill) => (
                <li key={skill} className="bg-gray-800 px-4 py-2 rounded-full">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default About;
