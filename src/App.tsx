// src/App.tsx
import React, {useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexto/AuthContext'; // Importa AuthProvider
import LoginPage from './pages/LoginPage'; // Páginas de Login, grabación, dashboard e historial
import RecordingPage from './pages/RecordingPage'; 
import DashboardPage from './pages/DashboardPage';
import HistorialPage from './pages/HistorialPage';

const App: React.FC = () => {

  // Accede a la URL del backend desde la variable de entorno
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

  // Realizar solicitud al backend
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
      <AuthProvider> {/* Envuelve toda la aplicación con AuthProvider */}
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/login" element={<LoginPage />} /> {/**/}
          <Route path="/recording" element={<RecordingPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/Historial" element={<HistorialPage />} />
          {/**/}
        </Routes>
      </AuthProvider>
    </Router>
  );
  
};

export default App; // exporta App.tsx como un componente llamado App 
