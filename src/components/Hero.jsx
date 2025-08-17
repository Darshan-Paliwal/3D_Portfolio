import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";

export default function Hero() {
  return (
    <section className="flex items-center justify-center h-screen bg-gray-900 text-white">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Hi, I am Darshan 👋
        </h1>

        <ReactTyped
          strings={["Web Developer", "Freelancer", "Tech Enthusiast"]}
          typeSpeed={50}
          backSpeed={30}
          loop
          className="text-xl md:text-3xl text-indigo-400"
        />
      </motion.div>
    </section>
  );
}