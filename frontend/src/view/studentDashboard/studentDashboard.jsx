import React from 'react';
import Sidebar from '../../components/sidebar';
import ProgressBar from '../../components/progressBar';

const StudentDashboard = () => {
  return (
    <div className="flex min-h-screen bg-base-bg font-sans">
      <Sidebar />
      
      <main className="flex-1 p-10 overflow-y-auto">
        {/* Cabecera */}
        <header className="flex justify-between items-center mb-8 pb-4">
          <h1 className="text-white text-xl font-bold uppercase tracking-tight">
            Sistema de Horas Complementarias - Ingeniería en Computación
          </h1>
          <div className="flex gap-4 text-gray-400 text-xl cursor-pointer">🔔 👤</div>
        </header>

        {/* Sección Principal de Progreso */}
        <section className="mb-10">
          <h2 className="text-white text-xl font-bold mb-6 text-left">Seguimiento Académico</h2>
          <ProgressBar progress={75} registered={180} total={240} pending={30} rejected={10} />
        </section>

        {/* Tabla de Historial */}
        <section>
          <h2 className="text-white text-xl font-bold mb-6 text-left">Historial de Actividades</h2>
          <div className="bg-surface rounded-xl overflow-hidden shadow-sm">
            <table className="w-full text-left text-sm text-gray-300">
              <thead className="text-xs text-white uppercase bg-[#2a3241] border-b border-gray-700">
                <tr>
                  <th className="px-6 py-4 font-bold">ID</th>
                  <th className="px-6 py-4 font-bold">Actividad</th>
                  <th className="px-6 py-4 font-bold">Fecha</th>
                  <th className="px-6 py-4 font-bold">Tipo</th>
                  <th className="px-6 py-4 font-bold">Horas</th>
                  <th className="px-6 py-4 font-bold">Estado</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-700/50 hover:bg-[#1f2530] transition-colors">
                  <td className="px-6 py-4">#3451</td>
                  <td className="px-6 py-4 text-white font-medium">Taller de IA</td>
                  <td className="px-6 py-4">2023-10-15</td>
                  <td className="px-6 py-4">Curso</td>
                  <td className="px-6 py-4">40h</td>
                  <td className="px-6 py-4">
                    <span className="text-green-400 border border-green-500/50 px-3 py-1 rounded-full bg-green-900/20 text-xs font-semibold">Aprobado</span>
                  </td>
                </tr>
                <tr className="border-b border-gray-700/50 hover:bg-[#1f2530] transition-colors">
                  <td className="px-6 py-4">#3452</td>
                  <td className="px-6 py-4 text-white font-medium">Conferencia UX</td>
                  <td className="px-6 py-4">2023-11-01</td>
                  <td className="px-6 py-4">Evento</td>
                  <td className="px-6 py-4">10h</td>
                  <td className="px-6 py-4">
                    <span className="text-yellow-400 border border-yellow-500/50 px-3 py-1 rounded-full bg-yellow-900/20 text-xs font-semibold">Pendiente</span>
                  </td>
                </tr>
                <tr className="hover:bg-[#1f2530] transition-colors">
                  <td className="px-6 py-4">#3453</td>
                  <td className="px-6 py-4 text-white font-medium">Seminario Web</td>
                  <td className="px-6 py-4">2023-11-10</td>
                  <td className="px-6 py-4">Evento</td>
                  <td className="px-6 py-4">10h</td>
                  <td className="px-6 py-4">
                    <span className="text-yellow-400 border border-yellow-500/50 px-3 py-1 rounded-full bg-yellow-900/20 text-xs font-semibold">Pendiente</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
};

export default StudentDashboard;