
import React from 'react';

const Hero: React.FC = () => {
  const scrollToWork = () => {
    const element = document.getElementById('work');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center gradient-hero overflow-hidden px-6">
      {/* Decorative NASA-inspired grid effect */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px'}}></div>
      
      <div className="relative z-10 text-center fade-in">
        <div className="mb-6 inline-block px-4 py-1.5 border border-slate-700 rounded-full bg-slate-900/50 backdrop-blur-sm">
          <span className="text-xs md:text-sm font-medium tracking-widest uppercase text-blue-400">Mission Critical Systems</span>
        </div>
        <h1 className="text-5xl md:text-8xl font-bold tracking-tight text-white mb-6">
          Janessa Toy
        </h1>
        <h2 className="text-xl md:text-2xl text-slate-300 font-light mb-4">
          Data Analyst | Space & Earth Systems | Scientific Data Infrastructure
        </h2>
        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Turning complex scientific data into actionable insight for space, Earth, and mission-critical systems.
        </p>
        <button 
          onClick={scrollToWork}
          className="group relative inline-flex items-center px-8 py-4 font-semibold text-white bg-blue-600 rounded-full overflow-hidden transition-all hover:bg-blue-500 active:scale-95 shadow-lg shadow-blue-900/20"
        >
          <span className="relative">View Work</span>
          <svg className="w-5 h-5 ml-2 transition-transform group-hover:translate-y-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-20">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7-7-7m14-8l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
