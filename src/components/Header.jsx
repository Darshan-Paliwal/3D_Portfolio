import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useEffect } from 'react';

function Header() {
  const [isShrunk, setIsShrunk] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    const handleScrollOrClick = () => {
      if (window.innerWidth <= 768) { // Mobile breakpoint
        setIsShrunk(true);
      }
    };

    window.addEventListener('scroll', handleScrollOrClick);
    window.addEventListener('click', handleScrollOrClick);

    return () => {
      window.removeEventListener('scroll', handleScrollOrClick);
      window.removeEventListener('click', handleScrollOrClick);
    };
  }, []);

  return (
    <motion.header
      className="fixed top-0 left-0 w-full bg-gradient-to-b from-black/80 to-transparent z-50 glass p-4 flex justify-between items-center"
      initial={{ y: 0 }}
      animate={{ height: isShrunk ? '60px' : '80px' }} // Shrink height on mobile
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
    >
      <motion.h1
        className="text-xl md:text-2xl font-bold text-white"
        animate={{ fontSize: isShrunk ? '1rem' : '1.25rem' }}
        transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      >
        My Portfolio
      </motion.h1>
      <nav className="hidden md:flex space-x-4">
        <a href="#hero" className="text-white hover:text-primary transition">Home</a>
        <a href="#about" className="text-white hover:text-primary transition">About</a>
        <a href="#projects" className="text-white hover:text-primary transition">Projects</a>
        <a href="#contact" className="text-white hover:text-primary transition">Contact</a>
      </nav>
      <button className="md:hidden text-white text-2xl">☰</button> {/* Mobile menu toggle */}
    </motion.header>
  );
}

export default Header;