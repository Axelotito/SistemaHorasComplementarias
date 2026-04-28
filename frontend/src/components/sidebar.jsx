import React from 'react';

const Sidebar = () => {
  return (
    <aside className="w-64 bg-[#1e293b] border-r border-gray-700 p-6 flex flex-col gap-4 min-h-screen">
      {/* Logo y Título Institucional */}
      <div className="text-white font-bold text-lg mb-8 flex flex-col items-center gap-2 text-center">
        <div className="w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center border-2 border-yellow-500 mb-2">
          <span className="text-xs">LOGO UNAM</span>
        </div>
        <span className="text-blue-400">FES ARAGÓN</span>
      </div>
      
      {/* Menú de Navegación */}
      <nav className="flex flex-col gap-2 w-full">
        <button className="bg-blue-600 text-white p-3 rounded-lg text-left font-medium transition-colors">🏠 Inicio</button>
        <button className="text-gray-400 p-3 rounded-lg text-left hover:bg-gray-800 hover:text-white transition-colors">📅 Registro Horas</button>
        <button className="text-gray-400 p-3 rounded-lg text-left hover:bg-gray-800 hover:text-white transition-colors">📤 Carga Evidencias</button>
        <button className="text-gray-400 p-3 rounded-lg text-left hover:bg-gray-800 hover:text-white transition-colors">📄 Reportes</button>
        <button className="text-gray-400 p-3 rounded-lg text-left hover:bg-gray-800 hover:text-white transition-colors">👤 Perfil</button>
      </nav>

      <button className="mt-auto text-gray-500 p-3 rounded-lg text-left hover:text-red-400 transition-colors flex items-center gap-2">
        <span>🚪</span> Cerrar Sesión
      </button>
    </aside>
  );
};

export default Sidebar;