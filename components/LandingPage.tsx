import React from 'react';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import { PAPER_DATA, MOCK_CHART_DATA } from '../constants';
import { ViewState } from '../types';

interface LandingPageProps {
  onNavigate: (view: ViewState) => void;
  isDarkMode: boolean;
  toggleTheme: () => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({ onNavigate, isDarkMode, toggleTheme }) => {
  return (
    <div className="flex flex-col min-h-screen w-full font-display">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md">
        <div className="max-w-[1280px] w-full mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 flex items-center justify-center rounded-lg bg-primary/10 text-primary">
              <span className="material-symbols-outlined text-2xl">science</span>
            </div>
            <h2 className="text-slate-900 dark:text-white text-lg font-bold tracking-tight">Proyecto Neural-X</h2>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => onNavigate(ViewState.READER)}
              className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary text-sm font-medium transition-colors"
            >
              Leer Paper
            </button>
            <button 
              onClick={() => onNavigate(ViewState.DASHBOARD)}
              className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary text-sm font-medium transition-colors"
            >
              Dashboard Interactivo
            </button>
          </div>

          <div className="flex items-center gap-3">
            <button className="hidden sm:flex h-10 px-4 items-center gap-2 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-900 dark:text-white text-sm font-bold">
              <span className="material-symbols-outlined text-[20px]">download</span>
              <span className="hidden lg:inline">PDF</span>
            </button>
            <button 
              onClick={toggleTheme}
              className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-200 dark:bg-slate-800 text-slate-900 dark:text-slate-100 hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors"
            >
              <span className="material-symbols-outlined text-[20px]">
                {isDarkMode ? 'light_mode' : 'dark_mode'}
              </span>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="w-full max-w-[1280px] mx-auto px-6 lg:px-10 py-8 lg:py-12">
        <div className="relative w-full rounded-2xl overflow-hidden bg-slate-900 dark:bg-slate-950 min-h-[560px] flex flex-col items-center justify-center text-center p-8 lg:p-16 isolate shadow-2xl">
            {/* Background Image/Gradient */}
            <div className="absolute inset-0 -z-10">
                <img 
                    alt="Abstract visualization" 
                    className="h-full w-full object-cover opacity-40 mix-blend-overlay" 
                    src="https://picsum.photos/1920/1080?grayscale&blur=2" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/80 to-slate-900/40"></div>
                <div className="absolute inset-0 bg-primary/20 mix-blend-color"></div>
            </div>

            <div className="max-w-4xl flex flex-col items-center gap-6 z-10 animate-fade-in-up">
                <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 backdrop-blur-sm">
                    <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
                    <span className="text-xs font-semibold text-primary uppercase tracking-wider">Paper de Investigación</span>
                </div>
                
                <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] text-white tracking-tight">
                    {PAPER_DATA.title}
                </h1>
                
                <div className="flex flex-col gap-2 opacity-90">
                    <p className="text-lg md:text-xl text-slate-200 font-light max-w-2xl mx-auto">
                        {PAPER_DATA.subtitle}
                    </p>
                    <p className="text-sm md:text-base font-medium text-primary mt-2">
                        {PAPER_DATA.authors.join(', ')}
                    </p>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-4 mt-6">
                    <button 
                        onClick={() => onNavigate(ViewState.READER)}
                        className="flex h-12 px-6 items-center justify-center gap-2 rounded-lg bg-primary hover:bg-primary-dark text-white text-base font-bold shadow-lg shadow-primary/25 transition-all hover:scale-105 active:scale-95"
                    >
                        <span>Leer Paper Completo</span>
                        <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
                    </button>
                    <button 
                        onClick={() => onNavigate(ViewState.DASHBOARD)}
                        className="flex h-12 px-6 items-center justify-center gap-2 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md text-white text-base font-bold transition-all hover:scale-105 active:scale-95"
                    >
                        <span className="material-symbols-outlined text-[20px]">dashboard</span>
                        <span>Ver Dashboard Interactivo</span>
                    </button>
                </div>
            </div>
        </div>
      </section>

      {/* Stats Section */}
      <div className="w-full max-w-[960px] mx-auto px-6 lg:px-10 -mt-6 lg:-mt-10 mb-12 relative z-20">
        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-xl p-4 md:p-6 flex flex-wrap justify-center md:justify-around gap-4 md:gap-8 border border-slate-100 dark:border-slate-700">
            <div className="flex items-center gap-3 px-2">
                <div className="h-10 w-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400">
                    <span className="material-symbols-outlined">check_circle</span>
                </div>
                <div className="flex flex-col">
                    <span className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wide font-bold">Publicado</span>
                    <span className="text-sm md:text-base font-bold text-slate-900 dark:text-white">{PAPER_DATA.journal}</span>
                </div>
            </div>
            <div className="w-px h-10 bg-slate-200 dark:bg-slate-700 hidden md:block"></div>
            <div className="flex items-center gap-3 px-2">
                <div className="h-10 w-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined">format_quote</span>
                </div>
                <div className="flex flex-col">
                    <span className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wide font-bold">Citas</span>
                    <span className="text-sm md:text-base font-bold text-slate-900 dark:text-white">{PAPER_DATA.stats.citations} Citado por</span>
                </div>
            </div>
            <div className="w-px h-10 bg-slate-200 dark:bg-slate-700 hidden md:block"></div>
            <div className="flex items-center gap-3 px-2">
                <div className="h-10 w-10 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400">
                    <span className="material-symbols-outlined">dataset</span>
                </div>
                <div className="flex flex-col">
                    <span className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wide font-bold">Datos</span>
                    <span className="text-sm md:text-base font-bold text-slate-900 dark:text-white">{PAPER_DATA.stats.datasetPoints} Puntos</span>
                </div>
            </div>
        </div>
      </div>

      {/* Abstract Section */}
      <section id="abstract" className="w-full max-w-[960px] mx-auto px-6 lg:px-10 pb-16">
        <div className="flex flex-col gap-2 mb-6">
            <h2 className="text-slate-900 dark:text-white text-2xl md:text-3xl font-bold tracking-tight flex items-center gap-3">
                <span className="w-1.5 h-8 bg-primary rounded-full"></span>
                Resumen
            </h2>
        </div>
        <div className="prose prose-lg dark:prose-invert max-w-none text-slate-600 dark:text-slate-300 leading-relaxed text-justify">
            <p>{PAPER_DATA.abstract}</p>
        </div>

        {/* Key Findings Chart */}
        <div className="mt-8 p-6 bg-slate-100 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700">
            <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="flex-1">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Hallazgos Clave</h3>
                    <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                            <span className="material-symbols-outlined text-primary shrink-0 mt-0.5">check_small</span>
                            <span className="text-sm text-slate-600 dark:text-slate-300">Tiempo de búsqueda reducido en un 40% comparado con métodos evolutivos estándar.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="material-symbols-outlined text-primary shrink-0 mt-0.5">check_small</span>
                            <span className="text-sm text-slate-600 dark:text-slate-300">Se logró un 98.2% de precisión en el benchmark CIFAR-10.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="material-symbols-outlined text-primary shrink-0 mt-0.5">check_small</span>
                            <span className="text-sm text-slate-600 dark:text-slate-300">Escalable a conjuntos de datos grandes sin aumento lineal en cómputo.</span>
                        </li>
                    </ul>
                </div>
                
                <div className="flex-1 w-full h-48 rounded-lg overflow-hidden relative bg-slate-900 p-2">
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={MOCK_CHART_DATA}>
                            <defs>
                                <linearGradient id="colorAccuracy" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#136dec" stopOpacity={0.8}/>
                                    <stop offset="95%" stopColor="#136dec" stopOpacity={0}/>
                                </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} />
                            <XAxis dataKey="name" hide />
                            <YAxis hide domain={[80, 100]} />
                            <Tooltip 
                                contentStyle={{ backgroundColor: '#1e293b', borderColor: '#334155', color: '#fff' }}
                                itemStyle={{ color: '#fff' }}
                            />
                            <Area type="monotone" dataKey="accuracy" stroke="#136dec" strokeWidth={2} fillOpacity={1} fill="url(#colorAccuracy)" />
                        </AreaChart>
                    </ResponsiveContainer>
                    <div className="absolute top-2 left-2 text-xs font-bold text-white/50">Crecimiento de Rendimiento</div>
                </div>
            </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 py-12 px-6 lg:px-10 mt-auto">
        <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">school</span>
                    <span className="text-sm font-bold text-slate-900 dark:text-white">Laboratorio de IA de Stanford</span>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400">© 2023 Grupo de Investigación. Todos los derechos reservados.</p>
            </div>
            <div className="flex gap-6 text-slate-500">
                <a href="#" className="hover:text-primary transition-colors">Twitter</a>
                <a href="#" className="hover:text-primary transition-colors">GitHub</a>
                <a href="#" className="hover:text-primary transition-colors">LinkedIn</a>
            </div>
        </div>
      </footer>
    </div>
  );
};