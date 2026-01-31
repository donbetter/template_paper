import React, { useEffect, useState } from 'react';
import { PAPER_DATA } from '../constants';
import { ViewState } from '../types';

interface ReaderPageProps {
  onBack: () => void;
  isDarkMode: boolean;
}

export const ReaderPage: React.FC<ReaderPageProps> = ({ onBack }) => {
  const [activeSection, setActiveSection] = useState<string>('abstract');

  // Handle scroll spy to update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['abstract', ...PAPER_DATA.sections.map(s => s.id)];
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top >= 0 && rect.top <= 300) {
            setActiveSection(sectionId);
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="flex flex-col min-h-screen w-full bg-paper-light dark:bg-background-dark text-text-main dark:text-slate-100 font-body">
      {/* Sticky Reader Header */}
      <header className="sticky top-0 z-50 w-full bg-paper-light dark:bg-paper-dark border-b border-gray-200 dark:border-gray-800 shadow-sm transition-colors duration-200">
        <div className="px-4 md:px-6 lg:px-8 h-16 flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center gap-4 text-text-main dark:text-white">
            <button onClick={onBack} className="flex items-center gap-2 cursor-pointer hover:text-primary transition-colors">
              <span className="material-symbols-outlined text-2xl">arrow_back</span>
            </button>
            <div className="h-6 w-px bg-gray-300 dark:bg-gray-700 mx-2 hidden sm:block"></div>
            <h2 className="text-sm md:text-lg font-display font-bold leading-tight tracking-tight truncate max-w-[200px] sm:max-w-md md:max-w-lg lg:max-w-2xl">
              {PAPER_DATA.title}
            </h2>
          </div>
          <button className="flex items-center justify-center gap-2 rounded-lg h-9 px-4 bg-primary hover:bg-primary-dark text-white text-sm font-display font-bold transition-colors shadow-sm">
            <span className="material-symbols-outlined text-[18px]">download</span>
            <span className="hidden sm:inline">Descargar PDF</span>
          </button>
        </div>
        {/* Progress bar mock */}
        <div className="w-full bg-gray-200 dark:bg-gray-700 h-1 absolute bottom-0 left-0">
          <div className="bg-primary h-1 w-[35%]"></div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row min-h-screen pt-8 pb-20 px-4 md:px-8 gap-8 lg:gap-16">
        {/* Sidebar */}
        <aside className="hidden md:flex flex-col w-64 shrink-0 sticky top-24 h-[calc(100vh-8rem)]">
          <nav className="flex flex-col gap-6 overflow-y-auto no-scrollbar pr-4">
            <div className="flex flex-col gap-1">
              <h1 className="text-text-main dark:text-white text-base font-display font-bold">Contenido</h1>
              <p className="text-text-muted dark:text-gray-400 text-xs font-display">Ir a la sección</p>
            </div>
            
            <div className="flex flex-col gap-1 border-l-2 border-gray-200 dark:border-gray-800 pl-4 relative">
               {/* Simplified active indicator logic for demo */}
               <div 
                className="absolute left-[-2px] w-[2px] bg-primary transition-all duration-300 h-8"
                style={{
                  top: activeSection === 'abstract' ? 0 : 
                       activeSection === 'introduction' ? 40 :
                       activeSection === 'methodology' ? 80 :
                       activeSection === 'results' ? 120 :
                       activeSection === 'discussion' ? 160 :
                       activeSection === 'conclusion' ? 200 : 0
                }}
               />

               <a href="#abstract" onClick={() => setActiveSection('abstract')} className={`group flex items-center py-2 text-sm font-display font-medium transition-colors ${activeSection === 'abstract' ? 'text-primary font-bold' : 'text-text-muted hover:text-primary dark:text-gray-400'}`}>Resumen</a>
               {PAPER_DATA.sections.map((section) => (
                 <a key={section.id} href={`#${section.id}`} onClick={() => setActiveSection(section.id)} className={`group flex items-center py-2 text-sm font-display font-medium transition-colors ${activeSection === section.id ? 'text-primary font-bold' : 'text-text-muted hover:text-primary dark:text-gray-400'}`}>
                   {section.title}
                 </a>
               ))}
            </div>
            
            <div className="mt-auto p-4 rounded-xl bg-primary/10 dark:bg-primary/20 flex flex-col gap-3">
               <p className="text-xs font-display font-medium text-text-main dark:text-white">Paper relacionado disponible</p>
               <p className="text-xs font-serif text-text-muted dark:text-gray-300 line-clamp-2">"Zero-Shot NAS: Un estudio de métodos"</p>
               <button className="text-xs font-bold text-primary hover:underline text-left">Leer ahora →</button>
            </div>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 min-w-0 flex flex-col gap-10">
          <section className="flex flex-col gap-6 border-b border-gray-200 dark:border-gray-800 pb-8">
             <div className="flex gap-2 flex-wrap">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-display font-medium bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200">Aprendizaje Automático</span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-display font-medium bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200">Búsqueda de Arquitectura Neuronal</span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-display font-medium bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">Revisado por Pares</span>
             </div>
             <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold tracking-tight text-text-main dark:text-white leading-[1.1]">
                {PAPER_DATA.title}
             </h1>
             <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-display text-text-muted dark:text-gray-400">
                <div className="flex items-center gap-2">
                   <div className="h-8 w-8 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white font-bold text-xs">EV</div>
                   <span className="font-medium text-text-main dark:text-white">{PAPER_DATA.authors[0]}</span>
                </div>
                <div className="flex items-center gap-2">
                   <div className="h-8 w-8 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center text-white font-bold text-xs">JW</div>
                   <span className="font-medium text-text-main dark:text-white">{PAPER_DATA.authors[1]}</span>
                </div>
                <span className="hidden sm:inline text-gray-300 dark:text-gray-600">•</span>
                <span>Laboratorio de IA de Stanford</span>
                <span className="hidden sm:inline text-gray-300 dark:text-gray-600">•</span>
                <span>Publicado {PAPER_DATA.publicationDate}</span>
             </div>
          </section>

          {/* Abstract */}
          <section id="abstract" className="scroll-mt-32 p-6 md:p-8 bg-paper-light dark:bg-paper-dark border border-gray-200 dark:border-gray-800 rounded-xl shadow-sm">
             <h3 className="text-sm font-display font-bold uppercase tracking-wider text-text-muted mb-4 dark:text-gray-400">Resumen</h3>
             <p className="font-reader-serif text-lg leading-relaxed text-text-main dark:text-gray-200">
                {PAPER_DATA.abstract}
             </p>
          </section>

          {/* Sections */}
          {PAPER_DATA.sections.map((section) => (
             <section key={section.id} id={section.id} className="scroll-mt-32 flex flex-col gap-4">
                <h2 className="text-2xl md:text-3xl font-display font-bold text-text-main dark:text-white">{section.title}</h2>
                <div className="prose dark:prose-invert max-w-none font-reader-serif text-lg leading-loose text-gray-700 dark:text-gray-300 whitespace-pre-line">
                   {section.content}
                </div>
                
                {/* Inject a mock figure in Methodology */}
                {section.id === 'methodology' && (
                    <figure className="my-8 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900">
                        <div className="relative w-full h-64 bg-gray-100 dark:bg-gray-800 flex items-center justify-center overflow-hidden">
                             <div className="flex items-center gap-4 text-gray-400">
                                <div className="p-4 border-2 border-dashed border-gray-300 rounded-lg">Codificador (GNN)</div>
                                <span className="material-symbols-outlined">arrow_forward</span>
                                <div className="p-4 border-2 border-primary bg-primary/10 rounded-lg text-primary font-bold">Espacio Latente (z)</div>
                                <span className="material-symbols-outlined">arrow_forward</span>
                                <div className="p-4 border-2 border-dashed border-gray-300 rounded-lg">Decodificador (MLP)</div>
                             </div>
                        </div>
                        <figcaption className="p-4 bg-white dark:bg-paper-dark border-t border-gray-200 dark:border-gray-700 flex justify-between items-center">
                            <span className="text-sm font-display font-bold uppercase text-primary">Figura 1: Arquitectura GenNAS</span>
                            <span className="text-xs text-gray-500">Pipeline de optimización de topología basado en VAE.</span>
                        </figcaption>
                    </figure>
                )}
             </section>
          ))}
          
          {/* Reference List Mock */}
          <section className="scroll-mt-32 pt-10 border-t border-gray-200 dark:border-gray-800">
             <h3 className="text-lg font-display font-bold uppercase tracking-wider text-text-muted mb-6 dark:text-gray-400">Referencias</h3>
             <ul className="flex flex-col gap-4 text-sm font-serif text-gray-600 dark:text-gray-400">
                <li className="pl-4 border-l-2 border-gray-200 dark:border-gray-700">
                   <span className="font-bold text-text-main dark:text-gray-200">[1] H. Liu et al.,</span> "DARTS: Differentiable Architecture Search," ICLR, 2019.
                </li>
                <li className="pl-4 border-l-2 border-gray-200 dark:border-gray-700">
                   <span className="font-bold text-text-main dark:text-gray-200">[2] B. Zoph et al.,</span> "Neural Architecture Search with Reinforcement Learning," ICLR, 2017.
                </li>
             </ul>
          </section>

        </main>
        
        {/* Right Gutter */}
        <div className="hidden xl:block w-48 shrink-0">
            <div className="sticky top-24 flex flex-col gap-4">
                <button className="flex items-center gap-3 p-2 text-sm font-display text-text-muted hover:text-primary transition group">
                   <span className="material-symbols-outlined group-hover:scale-110 transition">format_quote</span>
                   Citar este artículo
                </button>
                <button className="flex items-center gap-3 p-2 text-sm font-display text-text-muted hover:text-primary transition group">
                   <span className="material-symbols-outlined group-hover:scale-110 transition">share</span>
                   Compartir
                </button>
            </div>
        </div>
      </div>
    </div>
  );
};