import React from 'react';

const ProgressBar = ({ progress = 75, registered = 180, total = 240 }) => {
  const remaining = total - registered;

  return (
    <div className="bg-[#1e293b] text-white p-6 rounded-xl shadow-lg flex items-center gap-8 border border-gray-700">
      {/* Gráfico Circular Simplificado */}
      <div className="relative w-32 h-32 flex items-center justify-center">
        <svg className="w-full h-full transform -rotate-90">
          <circle cx="64" cy="64" r="58" stroke="currentColor" strokeWidth="8" fill="transparent" className="text-gray-700" />
          <circle 
            cx="64" cy="64" r="58" stroke="currentColor" strokeWidth="8" fill="transparent" 
            strokeDasharray={364.4} 
            strokeDashoffset={364.4 - (364.4 * progress) / 100}
            className="text-yellow-500 transition-all duration-1000 ease-in-out" 
          />
        </svg>
        <span className="absolute text-2xl font-bold">{progress}%</span>
      </div>
      
      {/* Textos de información */}
      <div className="text-left flex-1">
        <h3 className="text-gray-400 text-sm uppercase tracking-wider font-semibold">Tracking Panel</h3>
        <div className="mt-2">
          <p className="text-3xl font-bold">{registered}/{total}</p>
          <p className="text-sm text-gray-400">Horas Registradas</p>
        </div>
        <div className="mt-4">
          <p className="text-xl font-semibold text-yellow-500">{remaining}</p>
          <p className="text-xs text-gray-400 font-medium">Horas Restantes</p>
        </div>
      </div>

      {/* Botón de Nueva Carga */}
      <button className="bg-blue-900/20 border border-blue-500 text-blue-400 p-4 rounded-lg flex flex-col items-center hover:bg-blue-600 hover:text-white transition-all group w-40">
        <span className="text-xs font-bold uppercase mb-2 text-center">Nueva Carga de Evidencias</span>
        <div className="bg-blue-500 text-white rounded-full p-2 group-hover:bg-white group-hover:text-blue-600 transition-colors">➔</div>
      </button>
    </div>
  );
};

export default ProgressBar;