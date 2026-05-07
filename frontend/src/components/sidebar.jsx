import React from 'react';

// Agregamos vistaActual y setVistaActual
const Sidebar = ({ isOpen, onClose, vistaActual, setVistaActual }) => {
  
  const menuItems = [
    { nombre: 'Inicio', icono: '🏠' },
    { nombre: 'Registro Horas', icono: '📅' },
    { nombre: 'Carga Evidencias', icono: '📤' },
    { nombre: 'Reportes', icono: '📄' },
    { nombre: 'Perfil', icono: '👤' }
  ];

  return (
    <>
      {isOpen && <div className="fixed inset-0 bg-black/60 z-40 lg:hidden" onClick={onClose} />}

      <aside className={`fixed inset-y-0 left-0 z-50 w-64 bg-sidebar-blue border-r border-white/10 p-6 flex flex-col shadow-2xl transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:relative lg:translate-x-0 lg:flex`}>
        <button onClick={onClose} className="lg:hidden absolute top-4 right-4 text-white text-2xl">✕</button>

        <div className="flex justify-center items-center gap-4 mb-10 mt-2">
          <img src="/assets/logo-unam.png" alt="Logo UNAM" className="w-14 h-14 object-contain" />
          <div className="w-px h-10 bg-gray-500/50"></div>
          <img src="/assets/logo-fes.png" alt="Logo FES Aragón" className="w-14 h-14 object-contain" />
        </div>
        
        <nav className="flex flex-col gap-3 w-full">
          {/* Generamos los botones dinámicamente */}
          {menuItems.map((item) => {
            const isActive = vistaActual === item.nombre;
            return (
              <button 
                key={item.nombre}
                onClick={() => {
                  setVistaActual(item.nombre);
                  onClose(); // Cierra el menú en móviles al seleccionar
                }}
                className={`p-3 rounded-lg text-left font-bold flex items-center gap-3 transition-all ${
                  isActive 
                    ? 'bg-unam-gold text-sidebar-blue shadow-lg' 
                    : 'text-gray-300 hover:bg-white/10 font-medium'
                }`}
              >
                <span className={isActive ? '' : 'opacity-60'}>{item.icono}</span> {item.nombre}
              </button>
            )
          })}
        </nav>

        <button className="mt-auto text-gray-400 p-3 rounded-lg text-left hover:bg-red-900/30 hover:text-red-400 transition-colors flex items-center gap-3 font-medium">
          🚪 Cerrar Sesión
        </button>
      </aside>
    </>
  );
};

export default Sidebar;