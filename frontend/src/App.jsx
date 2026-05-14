import React, { useState } from 'react';
import StudentDashboard from './view/studentDashboard/studentDashboard';
import LoginView from './view/loginView/LoginView';
import ValidatorPanel from './view/validatorPanel/ValidatorPanel'; // Lo crearemos ahora

function App() {
  const [estaAutenticado, setEstaAutenticado] = useState(false);
  const [rol, setRol] = useState('estudiante'); // 'estudiante' o 'profesor'

  const iniciarSesion = (cuenta) => {
    // Simulación: si la cuenta empieza con 'profe', entra como validador
    if (cuenta.startsWith('profe')) {
      setRol('profesor');
    } else {
      setRol('estudiante');
    }
    setEstaAutenticado(true);
  };

  const cerrarSesion = () => {
    setEstaAutenticado(false);
  };

  return (
    <div className="App">
      {!estaAutenticado ? (
        <LoginView onLogin={iniciarSesion} />
      ) : (
        // Pasamos la función cerrarSesion a ambos portales
        rol === 'estudiante' ? (
          <StudentDashboard onLogout={cerrarSesion} />
        ) : (
          <ValidatorPanel onLogout={cerrarSesion} />
        )
      )}
    </div>
  );
}

export default App;