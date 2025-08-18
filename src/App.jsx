import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  const contactRef = useRef(null);

  const { scrollYProgress } = useScroll();
  const opacity1 = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], [1, 0.5, 0.3, 0.2, 0.1]);
  const opacity2 = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], [0.1, 1, 0.5, 0.3, 0.2]);
  const opacity3 = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], [0.1, 0.2, 1, 0.5, 0.3]);
  const opacity4 = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], [0.1, 0.2, 0.3, 1, 0.5]);

  const scrollToContact = () => {
    contactRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      <motion.div style={{ opacity: opacity1 }} className="min-h-screen">
        <Hero />
      </motion.div>
      <motion.div style={{ opacity: opacity2 }} className="min-h-screen">
        <About scrollToContact={scrollToContact} />
      </motion.div>
      <motion.div style={{ opacity: opacity3 }} className="min-h-screen">
        <Projects />
      </motion.div>
      <motion.div ref={contactRef} style={{ opacity: opacity4 }} className="min-h-screen">
        <Contact />
      </motion.div>
    </div>
  );
}

export default App;
