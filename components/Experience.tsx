
import React from 'react';
import Section from './Section';

const ExperienceItem: React.FC<{
  title: string;
  org: string;
  date: string;
  description?: string[];
  extra?: string;
}> = ({ title, org, date, description, extra }) => (
  <div className="relative pl-8 border-l border-slate-800 pb-12 last:pb-0">
    <div className="absolute left-[-5px] top-0 w-[10px] h-[10px] rounded-full bg-blue-500 ring-4 ring-slate-950"></div>
    <div className="bg-slate-900/40 border border-slate-800 rounded-xl p-6 hover:border-slate-700 transition-colors shadow-sm">
      <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4 gap-2">
        <div>
          <h3 className="text-xl font-bold text-white">{org}</h3>
          <p className="text-blue-400 font-medium">{title}</p>
        </div>
        <span className="text-sm font-medium px-3 py-1 bg-slate-800 rounded-full text-slate-400 shrink-0">
          {date}
        </span>
      </div>
      {description && (
        <ul className="space-y-2 text-slate-400 list-disc list-inside">
          {description.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      )}
      {extra && <p className="mt-4 text-sm text-slate-500 italic">{extra}</p>}
    </div>
  </div>
);

const Experience: React.FC = () => {
  return (
    <Section title="Experience & Education">
      <div className="space-y-2">
        <ExperienceItem 
          org="NASA – National Aeronautics and Space Administration"
          title="Data Analyst"
          date="Jan 2021 – Present"
          description={[
            "Large-scale dataset analysis",
            "Data pipeline creation and maintenance",
            "Dashboard and visualization development"
          ]}
        />
        <ExperienceItem 
          org="Del Mar College"
          title="Teaching Assistant (Part-Time)"
          date="Feb 2022 – Jan 2025"
          description={[
            "Support labs and student research in orbital and Earth-observation data"
          ]}
        />
        <ExperienceItem 
          org="Microsoft"
          title="Data Analyst Intern"
          date="Jul 2018 – Jul 2020"
          description={[
            "Analyze large datasets using SQL/Python",
            "Build dashboards and translate data into actionable insights"
          ]}
        />
        <ExperienceItem 
          org="University of California, Berkeley"
          title="Bachelor’s Degree — Data Processing & Data Processing Technology"
          date="Aug 2014 – May 2018"
          extra="Activities: NASA Datanauts Program, NASA Space Apps Challenge, Women in Data @ NASA, Earth Science Working Group, UC Berkeley Data Science Society"
        />
      </div>
    </Section>
  );
};

export default Experience;
