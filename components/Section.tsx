
import React from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, children }) => {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="py-24 first:pt-32"
    >
      <div className="flex items-center gap-6 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white whitespace-nowrap tracking-tight">
          {title}
        </h2>
        <div className="h-[1px] flex-grow bg-gradient-to-r from-slate-800 to-transparent"></div>
      </div>
      {children}
    </motion.section>
  );
};

export default Section;
