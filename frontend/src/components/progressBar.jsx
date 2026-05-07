import React from 'react';

const ProgressBar = ({ progress = 75, registered = 180, total = 240 }) => {
  const remaining = total - registered;

  return (
    <div className="flex flex-col lg:flex-row gap-6">
      
      {/* Panel de Seguimiento */}
      <div className="bg-surface text-white p-6 rounded-xl flex-1 flex flex-col sm:flex-row items-center gap-8 shadow-inner border border-white/5">
        <div className="relative w-32 h-32 flex items-center justify-center">
          <svg className="w-full h-full transform -rotate-90">
            <circle cx="64" cy="64" r="56" stroke="currentColor" strokeWidth="10" fill="transparent" className="text-gray-700" />
            <circle 
              cx="64" cy="64" r="56" stroke="currentColor" strokeWidth="10" fill="transparent" 
              strokeDasharray={351} 
              strokeDashoffset={351 - (351 * progress) / 100}
              className="text-unam-gold transition-all duration-700" 
              strokeLinecap="round"
            />
          </svg>
          <span className="absolute text-2xl font-bold">{progress}%</span>
        </div>
        
        <div className="text-center sm:text-left flex-1 border-t sm:border-t-0 sm:border-l border-gray-600 pt-4 sm:pt-0 sm:pl-8">
          <h3 className="text-gray-400 text-xs uppercase font-bold tracking-widest mb-4">Tracking Panel</h3>
          <div className="flex flex-col sm:flex-row gap-8 justify-center sm:justify-start">
            <div>
              <p className="text-3xl font-black">{registered}<span className="text-sm text-gray-500">/{total}</span></p>
              <p className="text-xs text-gray-400">Horas Registradas</p>
            </div>
            <div>
              <p className="text-3xl font-black text-unam-gold">{remaining}</p>
              <p className="text-xs text-gray-400">Horas Restantes</p>
            </div>
          </div>
        </div>
      </div>

      {/* Botón de Carga Azul como en la imagen */}
      <div 
        onClick={onNuevaCarga} 
        className="bg-sidebar-blue border border-unam-gold lg:w-64 rounded-xl flex flex-col items-center justify-center p-8 shadow-xl hover:scale-105 transition-transform group cursor-pointer"
      >
        <div className="bg-white/10 p-4 rounded-xl mb-6">
          <span className="text-white text-4xl">📄</span>
        </div>
        <span className="text-base font-bold uppercase text-center text-white mb-8 tracking-wider">
          Nueva Carga<br/>de Evidencias
        </span>
        <button className="bg-unam-gold w-full py-2 rounded-lg group-hover:bg-yellow-500 transition-colors">
          <span className="text-[#0a2353] font-black text-xl">➔</span>
        </button>
      </div>
    </div>
  );
};

export default ProgressBar;