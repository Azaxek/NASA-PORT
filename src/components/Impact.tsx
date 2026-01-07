
import React from 'react';
import Section from './Section';

const Impact: React.FC = () => {
  return (
    <Section title="What Drives My Work">
      <div className="relative py-12 px-8 rounded-3xl bg-slate-900/50 border border-slate-800 text-center overflow-hidden">
        {/* Background Subtle Accent */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 blur-[100px] -z-10"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/5 blur-[100px] -z-10"></div>

        <p className="text-2xl md:text-3xl font-light text-slate-200 leading-relaxed max-w-4xl mx-auto italic">
          "I focus on making complex scientific data usable,
          creating reliable and accessible infrastructure,
          and mentoring future STEM researchers."
        </p>

        <div className="mt-12 flex justify-center gap-12 grayscale opacity-40">
          <div className="flex flex-col items-center">
            <svg className="w-8 h-8 mb-2" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z" /></svg>
            <span className="text-[10px] uppercase tracking-tighter">Space</span>
          </div>
          <div className="flex flex-col items-center">
            <svg className="w-8 h-8 mb-2" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm0 18a8 8 0 118-8 8 8 0 01-8 8z" /></svg>
            <span className="text-[10px] uppercase tracking-tighter">Earth</span>
          </div>
          <div className="flex flex-col items-center">
            <svg className="w-8 h-8 mb-2" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-9l6 4.5-6 4.5z" /></svg>
            <span className="text-[10px] uppercase tracking-tighter">Mission</span>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Impact;
