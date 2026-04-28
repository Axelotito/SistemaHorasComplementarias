import React from 'react';

const ProgressBar = ({ progress = 75, registered = 180, total = 240, pending = 30, rejected = 10 }) => {
  const remaining = total - registered;

  return (
    <div className="flex gap-6">
      {/* Columna Izquierda: Gráfica y Mini Tarjetas */}
      <div className="flex-1 flex flex-col gap-4">
        
        {/* Panel principal del Círculo */}
        <div className="bg-surface text-white p-6 rounded-xl flex items-center gap-8 shadow-sm">
          <div className="relative w-32 h-32 flex items-center justify-center">
            <svg className="w-full h-full transform -rotate-90">
              <circle cx="64" cy="64" r="56" stroke="currentColor" strokeWidth="12" fill="transparent" className="text-gray-700" />
              <circle 
                cx="64" cy="64" r="56" stroke="currentColor" strokeWidth="12" fill="transparent" 
                strokeDasharray={351} 
                strokeDashoffset={351 - (351 * progress) / 100}
                className="text-unam-gold transition-all duration-1000 ease-in-out" 
                strokeLinecap="round"
              />
            </svg>
            <span className="absolute text-3xl font-bold">{progress}%</span>
          </div>
          
          {/* Textos del círculo */}
          <div className="text-left flex-1 border-l border-gray-600 pl-8">
            <h3 className="text-white text-sm font-bold mb-4 tracking-wide">Tracking Panel</h3>
            <div className="flex gap-12">
              <div>
                <p className="text-3xl font-bold text-white">{registered}<span className="text-lg text-gray-400">/{total}</span></p>
                <p className="text-sm text-gray-400 mt-1">Horas Registradas</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-unam-gold">{remaining}</p>
                <p className="text-sm text-gray-400 mt-1">Horas Restantes</p>
              </div>
            </div>
          </div>
        </div>

        {/* Las 3 Tarjetas de estado inferiores */}
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-surface py-4 rounded-xl text-center shadow-sm">
            <p className="text-gray-400 text-sm font-semibold mb-1">Aprobadas</p>
            <p className="text-unam-gold text-xl font-bold">({registered}h)</p>
          </div>
          <div className="bg-surface py-4 rounded-xl text-center shadow-sm">
            <p className="text-gray-400 text-sm font-semibold mb-1">Pendientes</p>
            <p className="text-unam-gold text-xl font-bold">({pending}h)</p>
          </div>
          <div className="bg-surface py-4 rounded-xl text-center shadow-sm">
            <p className="text-gray-400 text-sm font-semibold mb-1">Rechazadas</p>
            <p className="text-unam-gold text-xl font-bold">({rejected}h)</p>
          </div>
        </div>

      </div>

      {/* Columna Derecha: Botón de Nueva Carga */}
      <div className="bg-card-blue border border-unam-gold w-64 rounded-xl flex flex-col items-center justify-center p-8 shadow-sm hover:scale-[1.02] transition-transform cursor-pointer group">
        <div className="bg-white/10 p-4 rounded-xl mb-6">
          <span className="text-white text-4xl">📄</span>
        </div>
        <span className="text-base font-bold uppercase text-center text-white mb-8 leading-snug tracking-wider">Nueva Carga<br/>de Evidencias</span>
        <button className="bg-unam-gold w-full py-2 rounded-lg flex justify-center items-center group-hover:bg-yellow-500 transition-colors">
          <span className="text-sidebar font-bold text-xl">➔</span>
        </button>
      </div>
    </div>
  );
};

export default ProgressBar;