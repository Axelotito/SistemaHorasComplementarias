import React, { useState } from 'react';
import Sidebar from '../../components/sidebar';
import ProgressBar from '../../components/progressBar';

const StudentDashboard = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [vistaActual, setVistaActual] = useState('Inicio');
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 1. Convertimos el historial en un "Estado" para poder modificarlo
  const [historial, setHistorial] = useState([
    { id: '#3451', nombre: 'Taller de IA', fecha: '2023-10-15', tipo: 'Curso', horas: '40h', estado: 'Aprobado' },
    { id: '#3452', nombre: 'Conferencia UX', fecha: '2023-11-01', tipo: 'Evento', horas: '10h', estado: 'Pendiente' },
  ]);

  // 2. Estados temporales para los inputs del formulario
  const [nuevoNombre, setNuevoNombre] = useState('');
  const [nuevoTipo, setNuevoTipo] = useState('Curso/Taller');

  // 3. Función que simula el envío al backend
  const manejarEnvio = () => {
    if (!nuevoNombre) {
      alert("Por favor, ingresa el nombre de la actividad.");
      return;
    }

    const nuevaActividad = {
      id: `#${Math.floor(Math.random() * 9000) + 1000}`, // ID aleatorio
      nombre: nuevoNombre,
      fecha: new Date().toISOString().split('T')[0], // Fecha de hoy
      tipo: nuevoTipo,
      horas: 'Pendiente...',
      estado: 'Pendiente'
    };

    // Agregamos la nueva actividad al inicio de la tabla
    setHistorial([nuevaActividad, ...historial]);
    
    // Limpiamos y cerramos
    setNuevoNombre('');
    setIsModalOpen(false);
    alert("¡Evidencia enviada a validación exitosamente!");
  };

  return (
    <div className="flex h-screen bg-base-bg overflow-hidden font-sans relative">
      <Sidebar 
        isOpen={isMenuOpen} 
        onClose={() => setIsMenuOpen(false)} 
        vistaActual={vistaActual}
        setVistaActual={setVistaActual}
      />
      
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

        {/* --- VISTA: INICIO --- */}
        {vistaActual === 'Inicio' && (
          <div className="animate-fade-in">
            <section className="mb-10">
              <h2 className="text-white text-xl font-bold mb-6">Seguimiento Académico</h2>
              <ProgressBar progress={75} registered={180} total={240} onNuevaCarga={() => setIsModalOpen(true)} />
            </section>

            <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              <div className="bg-surface p-6 rounded-xl border border-white/5 text-center shadow-lg"><p className="text-gray-400 text-xs uppercase font-bold mb-2">Aprobadas</p><p className="text-3xl font-bold text-green-500">180h</p></div>
              <div className="bg-surface p-6 rounded-xl border border-white/5 text-center shadow-lg"><p className="text-gray-400 text-xs uppercase font-bold mb-2">Pendientes</p><p className="text-3xl font-bold text-yellow-500">30h</p></div>
              <div className="bg-surface p-6 rounded-xl border border-white/5 text-center shadow-lg"><p className="text-gray-400 text-xs uppercase font-bold mb-2">Rechazadas</p><p className="text-3xl font-bold text-red-500">10h</p></div>
            </section>

            <section>
              <h2 className="text-white text-xl font-bold mb-6 text-left">Historial de Actividades</h2>
              <div className="bg-surface rounded-xl border border-white/10 overflow-hidden shadow-2xl">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm text-gray-300">
                    <thead className="text-xs text-white uppercase bg-[#2a3241] border-b border-white/10">
                      <tr><th className="px-6 py-4">ID</th><th className="px-6 py-4">Actividad</th><th className="px-6 py-4">Fecha</th><th className="px-6 py-4">Estado</th></tr>
                    </thead>
                    <tbody>
                      {historial.map((act, i) => (
                        <tr key={i} className="border-b border-white/5">
                          <td className="px-6 py-4 text-gray-500 font-mono">{act.id}</td>
                          <td className="px-6 py-4 text-white font-medium">{act.nombre}</td>
                          <td className="px-6 py-4">{act.fecha}</td>
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
          </div>
        )}

        {/* --- OTRAS VISTAS --- */}
        {vistaActual !== 'Inicio' && (
          <div className="flex flex-col items-center justify-center h-64 text-center animate-fade-in">
            <span className="text-6xl mb-4">🚧</span>
            <h2 className="text-2xl font-bold text-white mb-2">Módulo de {vistaActual}</h2>
            <p className="text-gray-400">Esta sección está en desarrollo para la siguiente fase.</p>
          </div>
        )}
      </main>

      {/* --- MODAL FLOTANTE DE CARGA --- */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="bg-surface border border-white/10 rounded-2xl w-full max-w-lg p-8 shadow-2xl relative">
            <button onClick={() => setIsModalOpen(false)} className="absolute top-6 right-6 text-gray-400 hover:text-white text-xl">✕</button>
            <h2 className="text-2xl font-bold text-white mb-6">Subir Nueva Evidencia</h2>
            
            <form className="flex flex-col gap-5">
              <div>
                <label className="text-sm font-bold text-gray-300 mb-2 block">Tipo de Actividad</label>
                <select 
                  value={nuevoTipo}
                  onChange={(e) => setNuevoTipo(e.target.value)}
                  className="w-full bg-[#0f172a] border border-white/10 rounded-lg p-3 text-white focus:border-unam-gold focus:outline-none"
                >
                  <option>Curso/Taller</option>
                  <option>Conferencia/Seminario</option>
                  <option>Proyecto de Software</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-bold text-gray-300 mb-2 block">Nombre de la Actividad</label>
                <input 
                  type="text" 
                  value={nuevoNombre}
                  onChange={(e) => setNuevoNombre(e.target.value)}
                  placeholder="Ej. Curso de Python Avanzado" 
                  className="w-full bg-[#0f172a] border border-white/10 rounded-lg p-3 text-white focus:border-unam-gold focus:outline-none" 
                />
              </div>
              <div>
                <label className="text-sm font-bold text-gray-300 mb-2 block">Archivo de Evidencia (PDF/JPG)</label>
                <input type="file" className="w-full text-sm text-gray-400 file:mr-4 file:py-3 file:px-4 file:rounded-lg file:border-0 file:bg-sidebar-blue file:text-unam-gold hover:file:bg-blue-900 cursor-pointer" />
              </div>
              
              <button 
                type="button" 
                onClick={manejarEnvio} 
                className="bg-unam-gold text-sidebar-blue font-black uppercase tracking-wider py-4 rounded-lg mt-4 hover:bg-yellow-500 transition-colors shadow-lg"
              >
                Enviar a Validación
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default StudentDashboard;