import React from 'react';

const ProgressBar = ({ progress = 75, registered = 180, total = 240 }) => {
  const remaining = total - registered;

  return (
    <div className="flex gap-6">
      {/* Panel Izquierdo: Gráfica y Datos */}
      <div className="bg-[#1e293b] text-white p-6 rounded-xl shadow-lg flex-1 flex items-center gap-8 border border-gray-700">
        
        {/* Gráfico Circular con tono Dorado */}
        <div className="relative w-36 h-36 flex items-center justify-center">
          <svg className="w-full h-full transform -rotate-90 drop-shadow-md">
            <circle cx="72" cy="72" r="64" stroke="currentColor" strokeWidth="10" fill="transparent" className="text-gray-700" />
            <circle 
              cx="72" cy="72" r="64" stroke="currentColor" strokeWidth="10" fill="transparent" 
              strokeDasharray={402} 
              strokeDashoffset={402 - (402 * progress) / 100}
              className="text-[#cda434] transition-all duration-1000 ease-in-out" 
              strokeLinecap="round"
            />
          </svg>
          <span className="absolute text-3xl font-bold">{progress}%</span>
        </div>
        
        {/* Textos de información */}
        <div className="text-left flex-1 border-l border-gray-700 pl-8">
          <h3 className="text-gray-400 text-sm uppercase tracking-widest font-bold mb-4">Tracking Panel</h3>
          
          <div className="flex gap-12">
            <div>
              <p className="text-4xl font-extrabold text-white">{registered}<span className="text-xl text-gray-500">/{total}</span></p>
              <p className="text-sm text-gray-400 mt-1">Horas Registradas</p>
            </div>
            <div>
              <p className="text-4xl font-extrabold text-[#cda434]">{remaining}</p>
              <p className="text-sm text-gray-400 mt-1">Horas Restantes</p>
            </div>
          </div>
        </div>
      </div>

      {/* Tarjeta Derecha: Botón de Nueva Carga (Estilo FES) */}
      <button className="bg-[#1e3a8a] border border-[#cda434] w-48 rounded-xl shadow-lg flex flex-col overflow-hidden hover:scale-105 transition-transform duration-200 group">
        <div className="p-6 flex-1 flex flex-col items-center justify-center gap-4">
          <span className="text-[#cda434] text-4xl">📄</span>
          <span className="text-sm font-bold uppercase text-center text-white leading-tight">Nueva Carga<br/>de Evidencias</span>
        </div>
        {/* Base dorada del botón */}
        <div className="bg-[#cda434] w-full py-3 flex justify-center items-center group-hover:bg-yellow-500 transition-colors">
          <span className="text-black font-bold text-xl">➔</span>
        </div>
      </button>
    </div>
  );
};

export default ProgressBar;