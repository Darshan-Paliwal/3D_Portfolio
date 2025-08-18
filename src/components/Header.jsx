import { motion } from 'framer-motion';

function Header() {
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 w-full bg-gray-800 bg-opacity-90 p-4 z-50"
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-primary">Portfolio</h1>
        <ul className="flex space-x-6">
          <li>
            <button onClick={() => scrollToSection('hero')} className="hover:text-primary transition">
              Home
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection('about')} className="hover:text-primary transition">
              About
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection('projects')} className="hover:text-primary transition">
              Projects
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection('contact')} className="hover:text-primary transition">
              Contact
            </button>
          </li>
        </ul>
      </div>
    </motion.nav>
  );
}

export default Header;
