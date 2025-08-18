import { motion } from 'framer-motion';

function Hero() {
  return (
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between p-4 md:p-8">
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="md:w-1/2 p-4 md:p-8"
      >
        <h1 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary drop-shadow-lg">
          Hi, I'm Your Name
        </h1>
        <p className="text-base md:text-lg mb-6 text-gray-300">
          I'm a passionate freelance web developer specializing in modern web technologies like React, Tailwind, and Node.js.
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="md:w-1/2 p-4 md:p-8"
      >
        <div className="w-48 h-48 md:w-64 md:h-64 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center shadow-xl">
          <span className="text-gray-200 text-sm md:text-base">Your Image</span>
        </div>
      </motion.div>
    </div>
  );
}

export default Hero;