import React from 'react';
import { 
  ResponsiveContainer, ScatterChart, Scatter, XAxis, YAxis, ZAxis, Tooltip, Legend,
  BarChart, Bar, CartesianGrid
} from 'recharts';
import { SCATTER_DATA, MOCK_CHART_DATA } from '../constants';
import { ViewState } from '../types';

interface DashboardPageProps {
    onBack: () => void;
}

export const DashboardPage: React.FC<DashboardPageProps> = ({ onBack }) => {
    return (
        <div className="min-h-screen bg-background-light dark:bg-background-dark text-slate-900 dark:text-white flex flex-col">
            <header className="bg-white dark:bg-paper-dark border-b border-gray-200 dark:border-gray-800 p-4">
                <div className="max-w-[1280px] mx-auto flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <button onClick={onBack} className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg">
                            <span className="material-symbols-outlined">arrow_back</span>
                        </button>
                        <h1 className="text-xl font-bold font-display">Dashboard de Resultados Interactivo</h1>
                    </div>
                    <div className="flex gap-2">
                        <button className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-bold shadow hover:bg-primary-dark transition">Exportar Datos</button>
                    </div>
                </div>
            </header>

            <main className="flex-1 p-6 overflow-y-auto">
                <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Scatter Plot */}
                    <div className="bg-white dark:bg-paper-dark p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800">
                        <h2 className="text-lg font-bold mb-4 font-display">Exploración del Espacio Latente</h2>
                        <div className="h-[300px] w-full">
                            <ResponsiveContainer width="100%" height="100%">
                                <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
                                    <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                                    <XAxis type="number" dataKey="x" name="PC1" stroke="#94a3b8" />
                                    <YAxis type="number" dataKey="y" name="PC2" stroke="#94a3b8" />
                                    <ZAxis type="number" dataKey="z" range={[60, 400]} name="Precisión" />
                                    <Tooltip cursor={{ strokeDasharray: '3 3' }} contentStyle={{ backgroundColor: '#1e293b', borderColor: '#334155', color: '#fff' }} />
                                    <Legend />
                                    <Scatter name="Arquitecturas" data={SCATTER_DATA} fill="#136dec" shape="circle" />
                                </ScatterChart>
                            </ResponsiveContainer>
                        </div>
                        <p className="text-sm text-gray-500 mt-4">Visualizando la proyección 2D de la variedad de arquitectura de alta dimensión. El tamaño indica el rendimiento.</p>
                    </div>

                    {/* Bar Chart */}
                    <div className="bg-white dark:bg-paper-dark p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800">
                        <h2 className="text-lg font-bold mb-4 font-display">Latencia vs Generación</h2>
                        <div className="h-[300px] w-full">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={MOCK_CHART_DATA}>
                                    <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} />
                                    <XAxis dataKey="name" stroke="#94a3b8" />
                                    <YAxis stroke="#94a3b8" />
                                    <Tooltip contentStyle={{ backgroundColor: '#1e293b', borderColor: '#334155', color: '#fff' }} />
                                    <Bar dataKey="latency" fill="#136dec" radius={[4, 4, 0, 0]} />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                         <p className="text-sm text-gray-500 mt-4">Latencia de inferencia promedio (ms) a través de diferentes generaciones de la búsqueda evolutiva.</p>
                    </div>

                    {/* Stats Grid */}
                    <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-primary/5 dark:bg-primary/10 p-6 rounded-xl border border-primary/20">
                            <h3 className="text-primary font-bold text-sm uppercase tracking-wider mb-2">Mejor Precisión</h3>
                            <div className="text-4xl font-display font-bold text-text-main dark:text-white">98.2%</div>
                            <div className="text-sm text-gray-500 mt-1">En prueba CIFAR-10</div>
                        </div>
                        <div className="bg-white dark:bg-paper-dark p-6 rounded-xl border border-gray-200 dark:border-gray-800">
                             <h3 className="text-gray-500 font-bold text-sm uppercase tracking-wider mb-2">Costo de Búsqueda</h3>
                            <div className="text-4xl font-display font-bold text-text-main dark:text-white">12 <span className="text-xl text-gray-400">Horas-GPU</span></div>
                            <div className="text-sm text-green-500 mt-1 font-bold">↓ 40% reducción</div>
                        </div>
                        <div className="bg-white dark:bg-paper-dark p-6 rounded-xl border border-gray-200 dark:border-gray-800">
                             <h3 className="text-gray-500 font-bold text-sm uppercase tracking-wider mb-2">Tamaño del Modelo</h3>
                            <div className="text-4xl font-display font-bold text-text-main dark:text-white">3.4M</div>
                            <div className="text-sm text-gray-500 mt-1">Parámetros</div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};