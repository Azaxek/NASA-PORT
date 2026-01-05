
import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Impact from './components/Impact';
import Contact from './components/Contact';

const App: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-blue-500/30">
      <Hero />
      <main className="container mx-auto px-4 md:px-8 max-w-5xl">
        <About />
        <div id="work">
          <Experience />
        </div>
        <Skills />
        <Impact />
      </main>
      <Contact />
    </div>
  );
};

export default App;
