import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './componentes/Header';
import ComentarioLista from './componentes/ComentarioLista';
import ComentarioStats from './componentes/ComentarioStats';
import ComentarioForm from './componentes/ComentarioForm';
import About from './pages/About';
import AboutIconLink from './componentes/AboutIconLink';
import { ComentariosProvider } from './contexto/ComentariosContexto';

function App() {
  const [loading, setLoading] = useState(false); // Aquí definimos el estado 'loading'
  const titulo = "App de Comentarios";
  const autor = "David Vergara";
  const ficha = "2902093";
  const centro = "CGMLTI";

  return (
    <ComentariosProvider>
      <Router>
        <div className="container">
          <Header titulo={titulo} autor={autor} centro={centro} ficha={ficha} />
          {loading && <div>Cargando...</div>} {/* Esto se mostrará mientras 'loading' sea true */}
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <ComentarioForm />
                  <ComentarioStats />
                  <ComentarioLista />
                  <AboutIconLink />
                </>
              }
            />
            <Route
              path="/about"
              element={<About titulo={titulo} autor={autor} ficha={ficha} />}
            />
          </Routes>
        </div>
      </Router>
    </ComentariosProvider>
  );
}

export default App;
