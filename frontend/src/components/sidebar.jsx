import React from 'react';

const Sidebar = () => {
  return (
    <aside className="w-64 bg-[#111827] border-r border-gray-800 p-6 flex flex-col gap-4 min-h-screen shadow-2xl">
      {/* Logos Institucionales */}
      <div className="flex justify-center items-center gap-6 mb-10 border-b border-gray-700 pb-8 mt-2">
        <img 
          src="/assets/logo-unam.png" 
          alt="Logo UNAM" 
          className="w-20 h-20 object-contain drop-shadow-[0_0_8px_rgba(255,255,255,0.1)]"
          onError={(e) => {e.target.style.display='none'; e.target.nextSibling.style.display='flex';}}
        />
        <div className="hidden w-20 h-20 bg-[#cda434] rounded-full text-sm font-bold items-center justify-center text-black">UNAM</div>
        
        <div className="w-px h-16 bg-gray-600 rounded-full"></div> {/* Línea separadora más alta */}

        <img 
          src="/assets/logo-fes.png" 
          alt="Logo FES Aragón" 
          className="w-20 h-20 object-contain drop-shadow-[0_0_8px_rgba(255,255,255,0.1)]"
          onError={(e) => {e.target.style.display='none'; e.target.nextSibling.style.display='flex';}}
        />
        <div className="hidden w-20 h-20 bg-blue-900 border-2 border-[#cda434] rounded-md text-xs font-bold items-center justify-center text-[#cda434]">FES</div>
      </div>
      
      {/* Menú de Navegación con detalle Dorado en la pestaña activa */}
      <nav className="flex flex-col gap-2 w-full">
        {/* Pestaña Activa (Dorada/Azul Institucional) */}
        <button className="bg-gradient-to-r from-[#1e3a8a] to-[#1e40af] border-l-4 border-[#cda434] text-white p-3 rounded-r-lg text-left font-bold shadow-md flex items-center gap-3">
          <span className="text-[#cda434]">🏠</span> Inicio
        </button>
        
        {/* Pestañas Inactivas */}
        <button className="text-gray-400 p-3 rounded-lg text-left hover:bg-gray-800 hover:text-white transition-colors flex items-center gap-3 font-medium">
          📅 Registro Horas
        </button>
        <button className="text-gray-400 p-3 rounded-lg text-left hover:bg-gray-800 hover:text-white transition-colors flex items-center gap-3 font-medium">
          📤 Carga Evidencias
        </button>
        <button className="text-gray-400 p-3 rounded-lg text-left hover:bg-gray-800 hover:text-white transition-colors flex items-center gap-3 font-medium">
          📄 Reportes
        </button>
        <button className="text-gray-400 p-3 rounded-lg text-left hover:bg-gray-800 hover:text-white transition-colors flex items-center gap-3 font-medium">
          👤 Perfil
        </button>
      </nav>

      <button className="mt-auto text-gray-500 p-3 rounded-lg text-left hover:bg-red-900/20 hover:text-red-400 transition-colors flex items-center gap-3 font-medium">
        🚪 Cerrar Sesión
      </button>
    </aside>
  );
};

export default Sidebar;