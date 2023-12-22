// App.js
import React, { useState, useEffect } from 'react';
import Loader from './components/Loader.jsx';
import Home from './components/Home.jsx';
import Navbar from './components/Navbar.jsx';
import './index.css';

function App() {
  console.log('App.js - Renderizado');

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simula una carga de recursos (puedes adaptarlo a tus necesidades)
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000); // Simula 2 segundos de carga

    // Limpia el timeout al desmontar el componente para evitar fugas de memoria
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    console.log('App.js - Loader unmounted');
    // Resto de tu lógica
  }, [loading]);

  return (
    <div className="App">
      {loading ? (
        <Loader />
      ) : (
        <>
          <Home />
          <Navbar />
          {/* Resto de tu contenido */}
        </>
      )}
    </div>
  );
}

export default App;
