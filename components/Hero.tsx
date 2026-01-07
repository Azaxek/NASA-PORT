
import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const scrollToWork = () => {
    const element = document.getElementById('work');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center gradient-hero overflow-hidden px-6">
      <div className="absolute inset-0 nasa-grid pointer-events-none"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 text-center"
      >


        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-6 inline-block px-4 py-1.5 border border-blue-500/30 rounded-full bg-blue-500/10 backdrop-blur-md"
        >
          <span className="text-xs md:text-sm font-semibold tracking-[0.2em] uppercase text-blue-400">Mission Critical Data Systems</span>
        </motion.div>

        <h1 className="text-6xl md:text-9xl font-extrabold tracking-tighter text-white mb-6 drop-shadow-2xl">
          Janessa Toy
        </h1>

        <h2 className="text-xl md:text-2xl text-slate-300 font-light mb-4 tracking-wide">
          Part-Time @ NASA <span className="text-slate-600 mx-2">|</span> Former Researcher @ Del Mar College <span className="text-slate-600 mx-2">|</span> Scientific Data
        </h2>

        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed font-light">
          I translate complex scientific datasets into actionable intelligence for mission-critical aerospace and environmental systems.
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={scrollToWork}
          className="group relative inline-flex items-center px-10 py-4 font-bold text-white bg-blue-600 rounded-full overflow-hidden transition-all hover:bg-blue-500 shadow-2xl shadow-blue-900/40"
        >
          <span className="relative z-10">Explore Experience</span>
          <svg className="w-5 h-5 ml-3 transition-transform group-hover:translate-y-1 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </motion.button>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 opacity-30 cursor-pointer"
        onClick={scrollToWork}
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7-7-7" />
        </svg>
      </motion.div>
    </section>
  );
};

export default Hero;
