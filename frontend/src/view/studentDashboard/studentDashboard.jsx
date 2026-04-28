import React from 'react';
import Sidebar from '../../components/sidebar';
import ProgressBar from '../../components/progressBar';

const StudentDashboard = () => {
  return (
    <div className="flex min-h-screen bg-[#0f172a] font-sans">
      <Sidebar />
      
      <main className="flex-1 p-8 overflow-y-auto">
        {/* Cabecera */}
        <header className="flex justify-between items-center mb-8 border-b border-gray-700 pb-4">
          <h1 className="text-white text-xl font-bold uppercase tracking-tight">
            Sistema de Horas Complementarias - Ingeniería en Computación
          </h1>
          <div className="flex gap-4 text-gray-400 text-xl cursor-pointer">🔔 👤</div>
        </header>

        {/* Sección Principal de Progreso */}
        <section className="mb-8">
          <h2 className="text-white text-lg font-semibold mb-4 text-left">Seguimiento Académico</h2>
          <ProgressBar progress={75} registered={180} total={240} />
        </section>

        {/* Tarjetas de Resumen de Horas */}
        <section className="grid grid-cols-3 gap-6 mb-8">
          <div className="bg-[#1e293b] p-6 rounded-xl border border-gray-700 text-center shadow-md">
            <p className="text-gray-400 text-sm uppercase font-bold mb-2">Aprobadas</p>
            <p className="text-3xl font-bold text-green-500">180h</p>
          </div>
          <div className="bg-[#1e293b] p-6 rounded-xl border border-gray-700 text-center shadow-md">
            <p className="text-gray-400 text-sm uppercase font-bold mb-2">Pendientes</p>
            <p className="text-3xl font-bold text-yellow-500">30h</p>
          </div>
          <div className="bg-[#1e293b] p-6 rounded-xl border border-gray-700 text-center shadow-md">
            <p className="text-gray-400 text-sm uppercase font-bold mb-2">Rechazadas</p>
            <p className="text-3xl font-bold text-red-500">10h</p>
          </div>
        </section>

        {/* Tabla de Historial Falsa */}
        <section>
          <h2 className="text-white text-lg font-semibold mb-4 text-left">Historial de Actividades</h2>
          <div className="bg-[#1e293b] rounded-xl border border-gray-700 overflow-hidden">
            <table className="w-full text-left text-sm text-gray-400">
              <thead className="text-xs text-gray-300 uppercase bg-gray-800 border-b border-gray-700">
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
                <tr className="border-b border-gray-700 hover:bg-gray-800 transition-colors">
                  <td className="px-6 py-4">#3451</td>
                  <td className="px-6 py-4 text-white font-medium">Taller de Inteligencia Artificial</td>
                  <td className="px-6 py-4">2026-03-15</td>
                  <td className="px-6 py-4">Curso</td>
                  <td className="px-6 py-4">40h</td>
                  <td className="px-6 py-4"><span className="text-green-500 border border-green-500 px-2 py-1 rounded bg-green-900/20 text-xs">Aprobado</span></td>
                </tr>
                <tr className="hover:bg-gray-800 transition-colors">
                  <td className="px-6 py-4">#3452</td>
                  <td className="px-6 py-4 text-white font-medium">Conferencia UX/UI</td>
                  <td className="px-6 py-4">2026-04-01</td>
                  <td className="px-6 py-4">Evento</td>
                  <td className="px-6 py-4">10h</td>
                  <td className="px-6 py-4"><span className="text-yellow-500 border border-yellow-500 px-2 py-1 rounded bg-yellow-900/20 text-xs">Pendiente</span></td>
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