import { motion } from "framer-motion";
import Typed from "react-typed";

export default function Hero() {
  return (
    <section className="flex items-center justify-center h-screen bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center"
      >
        <h1 className="text-5xl font-bold mb-4">Hi, I'm Darshan 👋</h1>
        <Typed
          strings={[
            "A Web Developer",
            "A React Enthusiast",
            "A Freelancer"
          ]}
          typeSpeed={50}
          backSpeed={30}
          loop
          className="text-2xl"
        />
      </motion.div>
    </section>
  );
}
