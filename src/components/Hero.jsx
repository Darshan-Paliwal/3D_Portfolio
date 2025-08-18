import { motion } from 'framer-motion';

function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 p-8"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Hi, I'm Your Name</h1>
          <p className="text-lg md:text-xl mb-6">
            I'm a passionate freelance web developer specializing in modern web technologies like React, Tailwind, and Node.js.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="md:w-1/2 p-8"
        >
          <div className="w-64 h-64 bg-gray-700 rounded-full flex items-center justify-center">
            <span className="text-gray-400">Your Image</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
