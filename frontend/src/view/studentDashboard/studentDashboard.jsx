import React, { useState } from 'react'; // Importamos useState
import Sidebar from '../../components/sidebar';
import ProgressBar from '../../components/progressBar';

const StudentDashboard = () => {
  // Estado para controlar si el menú lateral está abierto en móvil
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-base-bg font-sans">
      {/* Pasamos el estado y la función para cerrar al Sidebar */}
      <Sidebar isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      
      <main className="flex-1 p-4 lg:p-8 overflow-y-auto w-full">
        <header className="flex justify-between items-center mb-8 border-b border-gray-700 pb-4">
          <div className="flex items-center gap-4">
            {/* Botón de Hamburguesa: Solo visible en móviles */}
            <button 
              onClick={() => setIsMenuOpen(true)}
              className="lg:hidden text-white text-2xl p-2 hover:bg-gray-800 rounded"
            >
              ☰
            </button>
            <h1 className="text-white text-sm lg:text-xl font-bold uppercase tracking-tight">
              Sistema de Horas Complementarias
            </h1>
          </div>
          <div className="flex gap-4 text-gray-400 text-xl cursor-pointer">🔔 👤</div>
        </header>

        <section className="mb-8">
          <h2 className="text-white text-lg font-semibold mb-4 text-left">Seguimiento Académico</h2>
          {/* El ProgressBar ya es azul y responsivo con el cambio de antes */}
          <ProgressBar progress={75} registered={180} total={240} />
        </section>

        {/* Tarjetas de Resumen responsivas (grid-cols-1 en móvil, 3 en desktop) */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <StatusCard label="Aprobadas" value="180h" color="text-green-500" />
          <StatusCard label="Pendientes" value="30h" color="text-yellow-500" />
          <StatusCard label="Rechazadas" value="10h" color="text-red-500" />
        </section>

        {/* Tabla con scroll horizontal en móviles para que no se rompa el diseño */}
        <section>
          <h2 className="text-white text-lg font-semibold mb-4 text-left">Historial</h2>
          <div className="bg-surface rounded-xl border border-gray-700 overflow-x-auto">
            <table className="w-full text-left text-sm text-gray-400 min-w-[600px]">
              {/* Contenido de la tabla... */}
            </table>
          </div>
        </section>
      </main>
    </div>
  );
};

// Pequeño componente interno para las tarjetas
const StatusCard = ({ label, value, color }) => (
  <div className="bg-surface p-6 rounded-xl border border-gray-700 text-center shadow-md">
    <p className="text-gray-400 text-xs uppercase font-bold mb-2">{label}</p>
    <p className={`text-3xl font-bold ${color}`}>{value}</p>
  </div>
);

export default StudentDashboard;