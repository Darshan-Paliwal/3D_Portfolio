import { motion } from 'framer-motion';

function Contact() {
  return (
    <div id="contact-form" className="max-w-7xl mx-auto p-4 md:p-8 text-center glass">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-2xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary text-shadow-[0_0_15px_rgba(0,255,255,0.5)]"
      >
        Get in Touch
      </motion.h2>
      <motion.form
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex flex-col gap-4 max-w-lg mx-auto"
      >
        <input
          type="text"
          placeholder="Name"
          className="p-2 rounded border border-gray-600 bg-transparent text-white text-shadow-[0_0_8px_rgba(0,255,255,0.3)]"
        />
        <input
          type="email"
          placeholder="Email"
          className="p-2 rounded border border-gray-600 bg-transparent text-white text-shadow-[0_0_8px_rgba(0,255,255,0.3)]"
        />
        <input
          type="tel"
          placeholder="Contact Number"
          className="p-2 rounded border border-gray-600 bg-transparent text-white text-shadow-[0_0_8px_rgba(0,255,255,0.3)]"
        />
        <textarea
          placeholder="Message"
          className="p-2 rounded border border-gray-600 bg-transparent text-white text-shadow-[0_0_8px_rgba(0,255,255,0.3)]"
          rows="5"
        ></textarea>
        <button
          type="submit"
          className="bg-gradient-to-r from-primary to-secondary text-white px-6 py-2 rounded-full hover:shadow-lg transition-all text-shadow-[0_0_8px_rgba(0,255,255,0.3)]"
        >
          Send Message
        </button>
      </motion.form>
    </div>
  );
}

export default Contact;