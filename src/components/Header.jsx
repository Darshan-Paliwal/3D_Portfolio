import { motion } from 'framer-motion';

function Header() {
  const scrollToSection = (id) => {
    console.log(`Scrolling to ${id}`); // Debug log
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.log(`Element with id ${id} not found`);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 w-full glass z-50 p-4"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center flex-wrap">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          onClick={() => scrollToSection('hero')}
          className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary cursor-pointer text-shadow-[0_0_15px_rgba(0,255,255,0.5)]" // Slightly reduced glow
        >
          Portfolio
        </motion.h1>
        <ul className="flex space-x-4 md:space-x-6 mt-2 md:mt-0">
          {['hero', 'about', 'projects', 'contact'].map((section) => (
            <li key={section}>
              <button
                onClick={() => scrollToSection(section)}
                className="text-sm md:text-base hover:bg-gradient-to-r hover:from-primary hover:to-secondary hover:bg-clip-text hover:text-transparent transition-all duration-300 text-shadow-[0_0_15px_rgba(0,255,255,0.5)]" // Slightly reduced glow
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
}

export default Header;