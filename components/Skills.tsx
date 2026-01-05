
import React from 'react';
import Section from './Section';

const SkillGroup: React.FC<{ title: string; skills: string[] }> = ({ title, skills }) => (
  <div className="mb-8 last:mb-0">
    <h4 className="text-slate-500 text-sm font-semibold uppercase tracking-wider mb-4">{title}</h4>
    <div className="flex flex-wrap gap-3">
      {skills.map((skill, idx) => (
        <div 
          key={idx}
          className="px-4 py-2 bg-slate-900 border border-slate-800 rounded-lg text-slate-300 hover:border-blue-500/50 hover:text-white transition-all cursor-default shadow-sm"
        >
          {skill}
        </div>
      ))}
    </div>
  </div>
);

const Skills: React.FC = () => {
  return (
    <Section title="Technical Skills & Expertise">
      <div className="bg-slate-900/20 border border-slate-800 rounded-3xl p-8 md:p-12">
        <div className="grid md:grid-cols-2 gap-12">
          <SkillGroup 
            title="Technical Proficiencies"
            skills={["Data Analysis", "Satellite Data Processing", "ETL", "Data Cleaning & Validation", "SQL", "Python", "Dashboards"]}
          />
          <SkillGroup 
            title="Strategic Domains"
            skills={["Space Systems", "Earth Observation", "Scientific Research Data", "Mission Support Analytics"]}
          />
        </div>
      </div>
    </Section>
  );
};

export default Skills;
