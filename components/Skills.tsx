
import React from 'react';
import Section from './Section';
import { motion } from 'framer-motion';

const SkillGroup: React.FC<{ title: string; skills: string[] }> = ({ title, skills }) => (
  <div className="mb-10 last:mb-0">
    <h4 className="text-slate-500 text-xs font-bold uppercase tracking-[0.2em] mb-6">{title}</h4>
    <div className="flex flex-wrap gap-3">
      {skills.map((skill, idx) => (
        <motion.div 
          key={idx}
          whileHover={{ y: -2, backgroundColor: 'rgba(59, 130, 246, 0.1)', borderColor: 'rgba(59, 130, 246, 0.4)' }}
          className="px-5 py-2.5 bg-slate-900/50 border border-slate-800 rounded-xl text-slate-300 text-sm font-medium transition-colors cursor-default shadow-lg"
        >
          {skill}
        </motion.div>
      ))}
    </div>
  </div>
);

const Skills: React.FC = () => {
  return (
    <Section title="Technical Expertise">
      <div className="glass rounded-[2.5rem] p-8 md:p-14 border border-slate-800/50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
        <div className="grid lg:grid-cols-2 gap-16">
          <SkillGroup 
            title="Core Data Science"
            skills={["Data Analysis", "Satellite Data Processing", "ETL Architecture", "Data Validation", "SQL Mastery", "Python Ecosystem", "Interactive Dashboards"]}
          />
          <SkillGroup 
            title="Mission Domains"
            skills={["Space Systems", "Earth Observation", "Scientific Research Data", "Mission Support Analytics", "Orbital Mechanics Data", "Climate Research"]}
          />
        </div>
      </div>
    </Section>
  );
};

export default Skills;
