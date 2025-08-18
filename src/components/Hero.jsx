import React from "react";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center px-10"
    >
      {/* Left */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex-1 text-center md:text-left"
      >
        <h1 className="text-4xl md:text-6xl font-bold">Hi, I’m John Doe</h1>
        <p className="mt-4 text-lg text-gray-600">
          A freelance web developer creating modern and scalable web apps.
        </p>
        <a
          href="#contact"
          className="mt-6 inline-block px-6 py-3 bg-blue-600 text-white rounded-2xl shadow hover:bg-blue-700 transition"
        >
          Connect Now
        </a>
      </motion.div>

      {/* Right - Image */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex-1 flex justify-center mt-10 md:mt-0"
      >
        <img
          src="https://via.placeholder.com/300"
          alt="Profile"
          className="rounded-full shadow-2xl w-64 h-64 object-cover"
        />
      </motion.div>
    </section>
  );
}

export default Hero;
