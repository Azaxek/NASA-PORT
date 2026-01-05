
import React from 'react';

const Contact: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 py-16 px-6 mt-20">
      <div className="container mx-auto max-w-5xl text-center">
        <h2 className="text-3xl font-bold text-white mb-8">Get In Touch</h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 text-slate-400">
          <a href="mailto:janessa.toy@nasa.gov" className="flex items-center gap-3 hover:text-blue-400 transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            janessa.toy@nasa.gov
          </a>
          <div className="flex items-center gap-3">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            +1 (512) 555-4821
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-slate-900 text-slate-600 text-sm">
          &copy; 2025 Janessa Toy. Managed with Data Excellence.
        </div>
      </div>
    </footer>
  );
};

export default Contact;
