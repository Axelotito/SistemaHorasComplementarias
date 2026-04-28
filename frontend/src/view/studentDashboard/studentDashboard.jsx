import React, { useState } from 'react';
import Sidebar from '../../components/sidebar';
import ProgressBar from '../../components/progressBar';

const StudentDashboard = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Ejemplos de actividades recuperados para el avance visual
  const historial = [
    { id: '#3451', nombre: 'Taller de IA', fecha: '2023-10-15', tipo: 'Curso', horas: '40h', estado: 'Aprobado' },
    { id: '#3452', nombre: 'Conferencia UX', fecha: '2023-11-01', tipo: 'Evento', horas: '10h', estado: 'Pendiente' },
    { id: '#3453', nombre: 'Seminario Redes', fecha: '2023-11-15', tipo: 'Curso', horas: '20h', estado: 'Pendiente' },
    { id: '#3454', nombre: 'Taller de IA', fecha: '2023-10-15', tipo: 'Curso', horas: '40h', estado: 'Aprobado' },
    { id: '#3455', nombre: 'Conferencia UX', fecha: '2023-11-01', tipo: 'Evento', horas: '10h', estado: 'Aprobado' },
  ];

  return (
    <div className="flex h-screen bg-base-bg overflow-hidden font-sans">
      {/* Sidebar: Ahora empuja el contenido en computadoras */}
      <Sidebar isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      
      {/* Main: Ocupa el resto del espacio sin encimarse */}
      <main className="flex-1 p-6 lg:p-10 overflow-y-auto">
        <header className="flex justify-between items-center mb-8 border-b border-white/5 pb-4">
          <div className="flex items-center gap-4">
            <button onClick={() => setIsMenuOpen(true)} className="lg:hidden text-white text-2xl">☰</button>
            <h1 className="text-white text-lg lg:text-xl font-bold uppercase tracking-tight">
              Sistema de Horas Complementarias - Computación
            </h1>
          </div>
          <div className="flex gap-4 text-gray-400 text-xl">🔔 👤</div>
        </header>

        <section className="mb-10">
          <h2 className="text-white text-xl font-bold mb-6">Seguimiento Académico</h2>
          <ProgressBar progress={75} registered={180} total={240} />
        </section>

        {/* Historial de Actividades con todos los ejemplos */}
        <section>
          <h2 className="text-white text-xl font-bold mb-6">Historial de Actividades</h2>
          <div className="bg-surface rounded-xl border border-white/10 overflow-hidden shadow-2xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm text-gray-300">
                <thead className="text-xs text-white uppercase bg-[#2a3241] border-b border-white/10">
                  <tr>
                    <th className="px-6 py-4">ID</th>
                    <th className="px-6 py-4">Actividad</th>
                    <th className="px-6 py-4">Fecha</th>
                    <th className="px-6 py-4">Tipo</th>
                    <th className="px-6 py-4">Horas</th>
                    <th className="px-6 py-4">Estado</th>
                  </tr>
                </thead>
                <tbody>
                  {historial.map((act, i) => (
                    <tr key={i} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                      <td className="px-6 py-4 font-mono text-gray-500">{act.id}</td>
                      <td className="px-6 py-4 text-white font-semibold">{act.nombre}</td>
                      <td className="px-6 py-4">{act.fecha}</td>
                      <td className="px-6 py-4">{act.tipo}</td>
                      <td className="px-6 py-4 font-bold">{act.horas}</td>
                      <td className="px-6 py-4">
                        <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase border ${
                          act.estado === 'Aprobado' ? 'text-green-400 border-green-500/30 bg-green-500/10' : 'text-yellow-400 border-yellow-500/30 bg-yellow-500/10'
                        }`}>
                          {act.estado}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default StudentDashboard;