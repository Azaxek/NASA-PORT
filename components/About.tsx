
import React from 'react';
import Section from './Section';

const About: React.FC = () => {
  return (
    <Section title="About Janessa">
      <div className="grid md:grid-cols-12 gap-12 items-start">
        <div className="md:col-span-8 space-y-6 text-slate-300 text-lg leading-relaxed">
          <p>
            Janessa Toy specializes in large-scale scientific and satellite datasets, supporting space missions, 
            Earth observation research, and data-driven decision-making across government and industry.
          </p>
          <p>
            Currently at <span className="text-white font-medium">NASA</span> (Jan 2021 – Present), she builds and maintains data pipelines, 
            validates complex observational data, and creates dashboards for stakeholders.
          </p>
          <p>
            She also served as a Teaching Assistant at <span className="text-white font-medium">Del Mar College</span> (Feb 2022 – Jan 2025), 
            supporting students in space systems and satellite data research.
          </p>
          <p>
            Previously, she worked as a Data Analyst Intern at <span className="text-white font-medium">Microsoft</span> (Jul 2018 – Jul 2020), 
            analyzing datasets, building dashboards, and translating data into actionable insights.
          </p>
        </div>
        <div className="md:col-span-4">
            <div className="p-1 rounded-2xl bg-gradient-to-br from-blue-500/20 to-transparent">
                <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800 shadow-xl">
                    <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Quick Stats</h4>
                    <div className="space-y-4">
                        <div>
                            <div className="text-blue-400 text-2xl font-bold">4+ Years</div>
                            <div className="text-slate-500 text-xs">at NASA</div>
                        </div>
                        <div>
                            <div className="text-blue-400 text-2xl font-bold">Scientific</div>
                            <div className="text-slate-500 text-xs">Data Focus</div>
                        </div>
                        <div>
                            <div className="text-blue-400 text-2xl font-bold">UC Berkeley</div>
                            <div className="text-slate-500 text-xs">Alumni</div>
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
