import React from 'react';

import StudentDashboard from './view/studentDashboard/studentDashboard';

function App() {
  return (
    <div className="App">
      {/* Por ahora, renderizamos directamente el dashboard del estudiante para la demostración */}
      <StudentDashboard />
    </div>
  );
}

export default App;