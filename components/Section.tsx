
import React from 'react';

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, children }) => {
  return (
    <section className="py-24 first:pt-32">
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white whitespace-nowrap">
          {title}
        </h2>
        <div className="h-[1px] w-full bg-slate-800"></div>
      </div>
      {children}
    </section>
  );
};

export default Section;
