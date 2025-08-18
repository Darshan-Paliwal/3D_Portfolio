import { motion } from 'framer-variants';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

function About({ scrollToContact }) {
  return (
    <div className="max-w-7xl mx-auto p-4 md:p-8 text-center glass">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-2xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
      >
        About Me
      </motion.h2>
      <div className="flex flex-col md:flex-row gap-6 md:gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="md:w-1/2"
        >
          <h3 className="text-lg md:text-xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-600">
            Connect with Me
          </h3>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button
              onClick={scrollToContact}
              className="bg-gradient-to-r from-primary to-secondary text-white px-6 py-2 rounded-full hover:shadow-lg transition-all"
            >
              Connect Now
            </button>
            <a
              href="/path-to-your-cv.pdf"
              download
              className="bg-gradient-to-r from-secondary to-primary text-white px-6 py-2 rounded-full hover:shadow-lg transition-all"
            >
              Download CV
            </a>
          </div>
          <div className="flex justify-center space-x-4 mt-6">
            {[
              { Icon: FaGithub, url: 'https://github.com' },
              { Icon: FaLinkedin, url: 'https://linkedin.com' },
              { Icon: FaTwitter, url: 'https://twitter.com' },
            ].map(({ Icon, url }, index) => (
              <motion.a
                key={index}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                className="text-2xl hover:text-primary transition"
              >
                <Icon />
              </motion.a>
            ))}
          </div>
        </motion.div>
        <div className="separator md:hidden"></div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="md:w-1/2"
        >
          <h3 className="text-lg md:text-xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-teal-600">
            Skills
          </h3>
          <ul className="flex flex-wrap gap-3 justify-center">
            {['React', 'Tailwind CSS', 'Node.js', 'Framer Motion', 'JavaScript', 'Git'].map((skill, index) => (
              <motion.li
                key={skill}
                className="bg-gradient-to-r from-primary to-secondary px-4 py-2 rounded-full text-sm shadow-md"
                whileHover={{ scale: 1.1 }}
              >
                {skill}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
