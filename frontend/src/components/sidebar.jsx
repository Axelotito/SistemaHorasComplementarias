import React from 'react';

// Añadimos las props 'isOpen' y 'onClose' para controlarlo desde el móvil
const Sidebar = ({ isOpen, onClose }) => {
  return (
    <>
      {/* Overlay: Fondo oscuro cuando el menú está abierto en móvil */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden" 
          onClick={onClose}
        />
      )}

      <aside className={`
        fixed inset-y-0 left-0 z-50 w-64 bg-sidebar-blue p-6 flex flex-col shadow-2xl transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'} 
        lg:static lg:translate-x-0 lg:flex
      `}>
        {/* Botón para cerrar en móvil */}
        <button onClick={onClose} className="lg:hidden absolute top-4 right-4 text-white text-2xl">✕</button>

        <div className="flex justify-center items-center gap-4 mb-10 mt-2">
          <img src="/assets/logo-unam.png" alt="Logo UNAM" className="w-14 h-14 object-contain" />
          <div className="w-px h-10 bg-gray-500/50"></div>
          <img src="/assets/logo-fes.png" alt="Logo FES Aragón" className="w-14 h-14 object-contain" />
        </div>
        
        <nav className="flex flex-col gap-3 w-full">
          <button className="bg-unam-gold text-[#0a2353] p-3 rounded-lg text-left font-bold flex items-center gap-3 shadow-lg">
            🏠 Inicio
          </button>
          {['Registro Horas', 'Carga Evidencias', 'Reportes', 'Perfil'].map((item) => (
            <button key={item} className="text-gray-300 p-3 rounded-lg text-left hover:bg-white/10 transition-all flex items-center gap-3 font-medium">
              📁 {item}
            </button>
          ))}
        </nav>

        <button className="mt-auto text-gray-400 p-3 rounded-lg text-left hover:bg-red-900/30 hover:text-red-400 transition-colors flex items-center gap-3 font-medium">
          🚪 Cerrar Sesión
        </button>
      </aside>
    </>
  );
};

export default Sidebar;