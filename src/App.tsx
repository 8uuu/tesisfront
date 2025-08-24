// src/App.tsx (Ejemplo)
import React, {useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexto/AuthContext'; // Importa tu AuthProvider
import LoginPage from './pages/LoginPage';
import RecordingPage from './pages/RecordingPage'; // Tu página de grabación
import DashboardPage from './pages/DashboardPage';
import HistorialPage from './pages/HistorialPage';

// Importa otros componentes/páginas según sea necesario

const App: React.FC = () => {
  // Acceder a la URL del backend desde la variable de entorno
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

  // Efecto para hacer alguna solicitud al backend
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${BACKEND_URL}`);
        if (!response.ok) {
          throw new Error('Error al obtener datos');
        }
        const result = await response.json();
        console.log('Datos del backend:', result);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData(); // Llamada a la API al montar el componente
  }, [BACKEND_URL]);

  return (
    <Router>
      <AuthProvider> {/* Envuelve toda tu aplicación con AuthProvider */}
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/login" element={<LoginPage />} /> {/* Puedes tener /login también */}
          <Route path="/recording" element={<RecordingPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/Historial" element={<HistorialPage />} />
          {/* Agrega otras rutas aquí */}
        </Routes>
      </AuthProvider>
    </Router>
  );
  
};

export default App;
