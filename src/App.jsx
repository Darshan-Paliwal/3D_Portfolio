import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  const contactRef = useRef(null);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ container: containerRef });

  const opacityTransform = (start, end) => useTransform(scrollYProgress, [start - 0.2, start, end, end + 0.2], [0, 1, 1, 0]);

  const scrollToContact = () => {
    contactRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div ref={containerRef} className="snap-container min-h-screen">
      <Header />
      <motion.section
        id="hero"
        className="section"
        style={{ opacity: opacityTransform(0, 0.25) }}
      >
        <Hero />
      </motion.section>
      <motion.section
        id="about"
        className="section"
        style={{ opacity: opacityTransform(0.25, 0.5) }}
      >
        <About scrollToContact={scrollToContact} />
      </motion.section>
      <motion.section
        id="projects"
        className="section"
        style={{ opacity: opacityTransform(0.5, 0.75) }}
      >
        <Projects />
      </motion.section>
      <motion.section
        id="contact"
        className="section"
        style={{ opacity: opacityTransform(0.75, 1) }}
        ref={contactRef}
      >
        <Contact />
      </motion.section>
    </div>
  );
}

export default App;