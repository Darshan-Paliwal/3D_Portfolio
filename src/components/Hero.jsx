import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 text-white relative overflow-hidden">
      
      {/* Floating Background Elements */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-2xl animate-ping"></div>

      {/* Main Heading */}
      <motion.h1
        className="text-5xl md:text-7xl font-extrabold"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Hi, I’m <span className="text-yellow-300">Darshan</span> 👋
      </motion.h1>

      {/* Typing Animation */}
      <motion.div
        className="mt-6 text-lg md:text-2xl max-w-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
<ReactTyped
  strings={["Developer", "Designer", "Freelancer"]}
  typeSpeed={40}
  backSpeed={50}
  loop
/>
        <Typed
          strings={[
            "Web Developer 💻",
            "React Enthusiast ⚛️",
            "Freelancer 🚀",
          ]}
          typeSpeed={60}
          backSpeed={40}
          loop
        />
      </motion.div>

      {/* Buttons */}
      <motion.div
        className="mt-8 flex gap-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <a
          href="#projects"
          className="px-6 py-3 bg-yellow-300 text-gray-900 font-semibold rounded-xl shadow-lg hover:bg-yellow-400 transition"
        >
          View Projects
        </a>
        <a
          href="mailto:darshan@example.com"
          className="px-6 py-3 border border-white font-semibold rounded-xl hover:bg-white hover:text-gray-900 transition"
        >
          Hire Me
        </a>
      </motion.div>
    </section>
  );
}
