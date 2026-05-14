import React, { useState } from 'react';

const LoginView = ({ onLogin }) => {
  const [numeroCuenta, setNumeroCuenta] = useState('');
  const [password, setPassword] = useState('');

  const manejarIngreso = (e) => {
    e.preventDefault();
    // Simulamos que verifica los datos
    if (numeroCuenta && password) {
      onLogin(); // Llama a la función que nos cambia al Dashboard
    } else {
      alert("Por favor ingresa tu número de cuenta y contraseña.");
    }
  };

  return (
    <div className="min-h-screen bg-base-bg flex items-center justify-center p-4">
      {/* Tarjeta de Login */}
      <div className="bg-surface border border-white/10 rounded-2xl shadow-2xl w-full max-w-md overflow-hidden animate-fade-in">
        
        {/* Cabecera de la tarjeta */}
        <div className="bg-sidebar-blue p-8 flex flex-col items-center border-b border-unam-gold">
          <div className="flex gap-4 items-center mb-4 bg-white/5 p-3 rounded-xl">
            <img src="/assets/logo-unam.png" alt="UNAM" className="w-12 h-12 object-contain" />
            <div className="w-px h-10 bg-unam-gold/50"></div>
            <img src="/assets/logo-fes.png" alt="FES" className="w-12 h-12 object-contain" />
          </div>
          <h1 className="text-white text-xl font-bold uppercase tracking-widest text-center">
            Horas Complementarias
          </h1>
          <p className="text-unam-gold text-sm mt-1 font-medium">Ingeniería en Computación</p>
        </div>

        {/* Formulario */}
        <div className="p-8">
          <form onSubmit={manejarIngreso} className="flex flex-col gap-5">
            <div>
              <label className="text-sm font-bold text-gray-300 mb-2 block">Número de Cuenta / Trabajador</label>
              <div className="relative">
                <span className="absolute left-4 top-3 text-gray-500">👤</span>
                <input 
                  type="text" 
                  value={numeroCuenta}
                  onChange={(e) => setNumeroCuenta(e.target.value)}
                  placeholder="Ej. 318000000" 
                  className="w-full bg-[#0f172a] border border-white/10 rounded-lg py-3 pl-10 pr-4 text-white focus:border-unam-gold focus:outline-none transition-colors" 
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-bold text-gray-300 mb-2 block">Contraseña</label>
              <div className="relative">
                <span className="absolute left-4 top-3 text-gray-500">🔒</span>
                <input 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••" 
                  className="w-full bg-[#0f172a] border border-white/10 rounded-lg py-3 pl-10 pr-4 text-white focus:border-unam-gold focus:outline-none transition-colors" 
                />
              </div>
            </div>

            <div className="flex justify-between items-center text-xs mt-2 mb-4">
              <label className="flex items-center gap-2 text-gray-400 cursor-pointer hover:text-white">
                <input type="checkbox" className="accent-unam-gold" /> Recordarme
              </label>
              <a href="#" className="text-unam-gold hover:text-yellow-400 transition-colors">¿Olvidaste tu contraseña?</a>
            </div>

            <button 
              type="submit" 
              className="w-full bg-unam-gold text-sidebar-blue font-black uppercase tracking-wider py-4 rounded-lg hover:bg-yellow-500 transition-transform hover:scale-[1.02] shadow-lg"
            >
              Ingresar al Sistema
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default LoginView;