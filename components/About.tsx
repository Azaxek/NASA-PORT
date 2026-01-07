
import React from 'react';
import Section from './Section';

const About: React.FC = () => {
  return (
    <Section title="The Mission">
      <div className="grid lg:grid-cols-12 gap-16 items-start">
        <div className="lg:col-span-7 space-y-8 text-slate-300 text-xl leading-relaxed font-light">
          <p>
            I bridge the gap between raw scientific observation and human understanding.
            I specialize in <span className="text-white font-medium border-b border-blue-500/30">large-scale scientific datasets</span>,
            supporting deep-space missions and critical Earth observation research.
          </p>
          <p>
            Most recently, I was a Researcher at <span className="text-white font-bold">Del Mar College</span>, where I led initiatives in orbital mechanics and satellite data processing. I currently serve as a Part-Time Researcher at the <span className="text-white font-bold">NASA JSC Center</span> in Houston, contributing to the data infrastructure that powers our understanding of planetary systems.
          </p>
          <p>
            My tenure at <span className="text-white font-bold">Microsoft</span> and my academic
            mentorship reflect a commitment to both technical rigor and the development of the next generation of STEM researchers.
          </p>
        </div>
        <div className="lg:col-span-5">
          <div className="glass rounded-[2rem] p-10 border border-slate-800 shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 blur-3xl -z-10 group-hover:bg-blue-600/20 transition-colors"></div>
            <h4 className="text-blue-400 font-bold mb-8 text-xs uppercase tracking-[0.3em]">Technical Focus</h4>
            <div className="grid grid-cols-1 gap-8">
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-2xl bg-slate-800 flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
                </div>
                <div>
                  <div className="text-white text-lg font-bold">Infrastructure</div>
                  <div className="text-slate-500 text-sm font-light">Mission-grade pipelines</div>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-2xl bg-slate-800 flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                </div>
                <div>
                  <div className="text-white text-lg font-bold">Analytics</div>
                  <div className="text-slate-500 text-sm font-light">Advanced scientific modeling</div>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-2xl bg-slate-800 flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>
                </div>
                <div>
                  <div className="text-white text-lg font-bold">Observation</div>
                  <div className="text-slate-500 text-sm font-light">Satellite telemetry validation</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
