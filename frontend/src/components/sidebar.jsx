import React from 'react';

const Sidebar = () => {
  return (
    <aside className="w-64 bg-sidebar p-6 flex flex-col min-h-screen">
      {/* Logos Institucionales */}
      <div className="flex justify-center items-center gap-4 mb-10 mt-2">
        <img src="/assets/logo-unam.png" alt="Logo UNAM" className="w-16 h-16 object-contain" />
        <div className="w-px h-12 bg-gray-500/50"></div> {/* Línea separadora */}
        <img src="/assets/logo-fes.png" alt="Logo FES Aragón" className="w-16 h-16 object-contain" />
      </div>
      
      {/* Menú de Navegación */}
      <nav className="flex flex-col gap-3 w-full">
        {/* Pestaña Activa (Dorado sólido) */}
        <button className="bg-unam-gold text-sidebar p-3 rounded-lg text-left font-bold flex items-center gap-3">
          <span>🏠</span> Inicio
        </button>
        
        {/* Pestañas Inactivas */}
        <button className="text-gray-300 p-3 rounded-lg text-left hover:bg-white/10 transition-colors flex items-center gap-3 font-medium">
          <span>📅</span> Registro Horas
        </button>
        <button className="text-gray-300 p-3 rounded-lg text-left hover:bg-white/10 transition-colors flex items-center gap-3 font-medium">
          <span>📤</span> Carga Evidencias
        </button>
        <button className="text-gray-300 p-3 rounded-lg text-left hover:bg-white/10 transition-colors flex items-center gap-3 font-medium">
          <span>📄</span> Reportes
        </button>
        <button className="text-gray-300 p-3 rounded-lg text-left hover:bg-white/10 transition-colors flex items-center gap-3 font-medium">
          <span>👤</span> Perfil
        </button>
      </nav>

      <button className="mt-auto text-gray-400 p-3 rounded-lg text-left hover:bg-red-900/30 hover:text-red-400 transition-colors flex items-center gap-3 font-medium">
        <span>🚪</span> Cerrar Sesión
      </button>
    </aside>
  );
};

export default Sidebar;