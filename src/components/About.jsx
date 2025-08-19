import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

function About({ scrollToContact }) {
  const handleDownloadCV = () => {
    console.log('Download CV triggered');
    const link = document.createElement('a');
    link.href = 'https://drive.google.com/uc?export=download&id=11cDUwjShauIh7djwseQWYNUog_MkxK6M';
    link.download = 'Darshan_Paliwal_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    // Fallback with delay
    setTimeout(() => {
      if (!link.downloaded) {
        console.log('Download fallback triggered');
        window.open('https://drive.google.com/file/d/11cDUwjShauIh7djwseQWYNUog_MkxK6M/view?usp=drivesdk', '_blank');
      }
    }, 2000);
  };

  return (
    <div className="max-w-7xl mx-auto p-4 md:p-8 text-center glass">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-2xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary text-shadow-[0_0_15px_rgba(0,255,255,0.5)]"
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
          <h3 className="text-lg md:text-xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-400 text-shadow-[0_0_12px_rgba(0,255,255,0.4)]">
            Connect with Me
          </h3>

          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button
              onClick={(e) => {
                e.preventDefault();
                console.log('Connect Now triggered');
                scrollToContact();
              }}
              className="bg-gradient-to-r from-primary to-secondary text-white px-6 py-2 rounded-full hover:shadow-lg transition-all text-shadow-[0_0_8px_rgba(0,255,255,0.3)]"
            >
              Connect Now
            </button>

            <button
              onClick={handleDownloadCV}
              className="bg-gradient-to-r from-secondary to-primary text-white px-6 py-2 rounded-full hover:shadow-lg transition-all text-shadow-[0_0_8px_rgba(0,255,255,0.3)]"
            >
              Download CV
            </button>
          </div>

          <div className="flex justify-center space-x-6 mt-6">
            {[
              { Icon: FaGithub, url: 'https://github.com/Darshan-Paliwal/' },
              { Icon: FaLinkedin, url: 'https://www.linkedin.com/in/darshan-paliwal/' },
              { Icon: FaTwitter, url: 'https://x.com/DARVIANT_' },
            ].map(({ Icon, url }, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.2, rotate: 5 }}
                className="text-2xl"
              >
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition relative z-50 text-shadow-[0_0_8px_rgba(0,255,255,0.3)]"
                >
                  <Icon />
                </a>
              </motion.div>
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
          <h3 className="text-lg md:text-xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-teal-400 text-shadow-[0_0_12px_rgba(0,255,255,0.4)]">
            Skills
          </h3>

          <ul className="flex flex-wrap gap-3 justify-center">
            {['React', 'Tailwind CSS', 'Node.js', 'Framer Motion', 'JavaScript', 'Git'].map((skill) => (
              <motion.li
                key={skill}
                className="bg-gradient-to-r from-primary to-secondary px-4 py-2 rounded-full text-sm text-shadow-[0_0-6px_rgba(0,255,255,0.2)]"
                whileHover={{ scale: 1.1, textShadow: '0 0 10px rgba(0,255,255,0.3)' }}
              >
                {skill}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  );
}

export default About;