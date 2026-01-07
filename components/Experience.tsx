
import React from 'react';
import Section from './Section';
import { motion } from 'framer-motion';

const ExperienceItem: React.FC<{
  title: string;
  org: string;
  date: string;
  description?: string[];
  extra?: string;
}> = ({ title, org, date, description, extra }) => (
  <div className="relative pl-10 border-l-2 border-slate-800 pb-12 last:pb-0">
    <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-blue-600 border-4 border-slate-950"></div>
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="bg-slate-900/30 border border-slate-800/60 rounded-2xl p-8 hover:border-slate-700/80 transition-all hover:bg-slate-900/50 shadow-xl"
    >
      <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6 gap-4">
        <div>
          <h3 className="text-2xl font-bold text-white mb-1">{org}</h3>
          <p className="text-blue-400 font-semibold tracking-wide uppercase text-sm">{title}</p>
        </div>
        <span className="text-xs font-bold px-4 py-1.5 bg-slate-800/80 rounded-full text-slate-300 shrink-0 border border-slate-700/50">
          {date}
        </span>
      </div>
      {description && (
        <ul className="space-y-3 text-slate-400 font-light leading-relaxed">
          {description.map((item, idx) => (
            <li key={idx} className="flex gap-3">
              <span className="text-blue-500 shrink-0">▹</span>
              {item}
            </li>
          ))}
        </ul>
      )}
      {extra && (
        <div className="mt-8 pt-6 border-t border-slate-800/50">
          <p className="text-sm text-slate-500 leading-relaxed font-light">
            <strong className="text-slate-400 font-medium">Focus:</strong> {extra}
          </p>
        </div>
      )}
    </motion.div>
  </div>
);

const Experience: React.FC = () => {
  return (
    <Section title="Professional Narrative">
      <div className="max-w-4xl space-y-4">
        <ExperienceItem
          org="Del Mar College"
          title="Researcher (Space Systems)"
          date="Feb 2022 – Dec 2025"
          description={[
            "I led research initiatives in orbital mechanics and satellite data processing",
            "I orchestrated lab environments for Earth-observation data analysis",
            "I mentored undergraduate researchers in scientific methodology"
          ]}
        />
        <ExperienceItem
          org="NASA JSC Center (Houston)"
          title="Part-Time Researcher"
          date="Jan 2021 – Present"
          description={[
            "I process petabyte-scale scientific datasets for planetary observation",
            "I design robust ETL pipelines for mission-critical sensor telemetry",
            "I develop high-fidelity visualizations for cross-functional mission leads"
          ]}
        />
        <ExperienceItem
          org="Microsoft"
          title="Data Analyst Intern"
          date="Jul 2018 – Jul 2020"
          description={[
            "I optimized data retrieval systems using advanced SQL and Python modeling",
            "I built executive dashboards to translate telemetry into business insights"
          ]}
        />
        <ExperienceItem
          org="University of California, Berkeley"
          title="B.S. in Data Processing Technology"
          date="Aug 2014 – May 2018"
          extra="NASA Datanauts, NASA Space Apps, Women in Data @ NASA, Earth Science Working Group, UC Berkeley Data Science Society"
        />
      </div>
    </Section>
  );
};

export default Experience;
