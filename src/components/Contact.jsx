import React from "react";
import { motion } from "framer-motion";

function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center px-10 bg-gray-100"
    >
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold"
      >
        Contact Me
      </motion.h2>

      <form
        className="mt-8 w-full max-w-lg bg-white p-8 rounded-2xl shadow-lg"
      >
        <div className="grid gap-6">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-3 border rounded-lg"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-3 border rounded-lg"
          />
          <input
            type="text"
            placeholder="Contact Number"
            className="w-full px-4 py-3 border rounded-lg"
          />
          <textarea
            placeholder="Your message..."
            className="w-full px-4 py-3 border rounded-lg"
            rows="5"
          ></textarea>
        </div>
        <button
          type="submit"
          className="mt-6 w-full bg-blue-600 text-white py-3 rounded-2xl hover:bg-blue-700 transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}

export default Contact;
