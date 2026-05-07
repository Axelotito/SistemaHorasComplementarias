import React, { useState } from 'react';
import Sidebar from '../../components/sidebar';
import ProgressBar from '../../components/progressBar';

const StudentDashboard = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [vistaActual, setVistaActual] = useState('Inicio');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [historial, setHistorial] = useState([
    { id: '#3451', nombre: 'Taller de IA', fecha: '2023-10-15', tipo: 'Curso', horas: '40h', estado: 'Aprobado' },
    { id: '#3452', nombre: 'Conferencia UX', fecha: '2023-11-01', tipo: 'Evento', horas: '10h', estado: 'Pendiente' },
  ]);

  const [nuevoNombre, setNuevoNombre] = useState('');
  const [nuevoTipo, setNuevoTipo] = useState('Curso/Taller');

  const manejarEnvio = () => {
    if (!nuevoNombre) {
      alert("Por favor, ingresa el nombre de la actividad.");
      return;
    }
    const nuevaActividad = {
      id: `#${Math.floor(Math.random() * 9000) + 1000}`,
      nombre: nuevoNombre,
      fecha: new Date().toISOString().split('T')[0],
      tipo: nuevoTipo,
      horas: 'Pendiente...',
      estado: 'Pendiente'
    };
    setHistorial([nuevaActividad, ...historial]);
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
                        <tr key={i} className="border-b border-white/5 hover:bg-white/5">
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

        {/* --- VISTA: PERFIL --- */}
        {vistaActual === 'Perfil' && (
          <div className="animate-fade-in bg-surface rounded-xl border border-white/10 p-8 shadow-2xl">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8 border-b border-white/10 pb-8 mb-8">
              <div className="w-32 h-32 bg-sidebar-blue rounded-full border-4 border-unam-gold flex items-center justify-center text-5xl shadow-lg">
                👨‍💻
              </div>
              <div className="text-center md:text-left">
                <h2 className="text-3xl font-bold text-white mb-2">Axel Cruz</h2>
                <p className="text-unam-gold font-medium text-lg mb-1">Ingeniería en Computación</p>
                <div className="flex flex-wrap justify-center md:justify-start gap-4 text-gray-400 text-sm mt-4">
                  <span className="bg-[#0f172a] px-4 py-2 rounded-lg border border-white/5">No. Cuenta: 318XXXXXX</span>
                  <span className="bg-[#0f172a] px-4 py-2 rounded-lg border border-white/5">Semestre: 8vo</span>
                  <span className="bg-[#0f172a] px-4 py-2 rounded-lg border border-white/5">Sede: FES Aragón</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Información de Contacto</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-[#0f172a] p-4 rounded-lg border border-white/5">
                  <p className="text-xs text-gray-500 uppercase font-bold">Correo Institucional</p>
                  <p className="text-white">axel.cruz@aragon.unam.mx</p>
                </div>
                <div className="bg-[#0f172a] p-4 rounded-lg border border-white/5">
                  <p className="text-xs text-gray-500 uppercase font-bold">Tutor Asignado</p>
                  <p className="text-white">Ing. Imelda de la luz Flores Diaz</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* --- VISTA: REPORTES --- */}
        {vistaActual === 'Reportes' && (
          <div className="animate-fade-in">
            <h2 className="text-white text-xl font-bold mb-6">Reporte Estadístico de Horas</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Gráfica Falsa de Barras */}
              <div className="bg-surface rounded-xl border border-white/10 p-6 shadow-xl">
                <h3 className="text-gray-300 font-bold mb-6">Distribución por Categoría</h3>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between text-sm mb-2"><span className="text-white">Cursos y Talleres</span><span className="text-unam-gold font-bold">120h</span></div>
                    <div className="w-full bg-[#0f172a] rounded-full h-3"><div className="bg-blue-500 h-3 rounded-full" style={{ width: '65%' }}></div></div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2"><span className="text-white">Conferencias</span><span className="text-unam-gold font-bold">40h</span></div>
                    <div className="w-full bg-[#0f172a] rounded-full h-3"><div className="bg-purple-500 h-3 rounded-full" style={{ width: '25%' }}></div></div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2"><span className="text-white">Proyectos (Software)</span><span className="text-unam-gold font-bold">20h</span></div>
                    <div className="w-full bg-[#0f172a] rounded-full h-3"><div className="bg-green-500 h-3 rounded-full" style={{ width: '10%' }}></div></div>
                  </div>
                </div>
              </div>

              <div className="bg-sidebar-blue rounded-xl border border-unam-gold p-6 shadow-xl flex flex-col justify-center items-center text-center">
                <span className="text-5xl mb-4">📥</span>
                <h3 className="text-white font-bold text-lg mb-2">Descargar Constancia Global</h3>
                <p className="text-gray-400 text-sm mb-6">Genera un PDF oficial con el desglose de tus 180 horas aprobadas para trámites de titulación.</p>
                <button className="bg-unam-gold text-black font-bold py-3 px-6 rounded-lg hover:bg-yellow-500 transition-colors w-full">
                  Generar PDF
                </button>
              </div>

            </div>
          </div>
        )}

        {/* --- OTRAS VISTAS (En construcción) --- */}
        {vistaActual !== 'Inicio' && vistaActual !== 'Perfil' && vistaActual !== 'Reportes' && (
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