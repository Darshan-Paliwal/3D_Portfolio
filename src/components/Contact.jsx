import { motion } from 'framer-variants';
import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="max-w-7xl mx-auto p-4 md:p-8 glass">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-2xl md:text-4xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"
      >
        Get in Touch
      </motion.h2>
      <motion.form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto space-y-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {['name', 'email', 'contact', 'message'].map((field) => (
          <div key={field}>
            <label htmlFor={field} className="block text-sm font-medium capitalize">
              {field}
            </label>
            {field === 'message' ? (
              <textarea
                id={field}
                name={field}
                value={formData[field]}
                onChange={handleChange}
                className="w-full p-3 bg-gray-800 bg-opacity-50 rounded-md text-white border border-gray-600 focus:border-primary focus:ring-2 focus:ring-primary transition"
                rows="5"
                required
              />
            ) : (
              <input
                type={field === 'email' ? 'email' : field === 'contact' ? 'tel' : 'text'}
                id={field}
                name={field}
                value={formData[field]}
                onChange={handleChange}
                className="w-full p-3 bg-gray-800 bg-opacity-50 rounded-md text-white border border-gray-600 focus:border-primary focus:ring-2 focus:ring-primary transition"
                required={field !== 'contact'}
              />
            )}
          </div>
        ))}
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-full hover:shadow-lg transition-all"
        >
          Send Message
        </button>
      </motion.form>
    </div>
  );
}

export default Contact;