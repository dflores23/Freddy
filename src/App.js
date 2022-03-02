import './App.css';
import Bar from './components/Navbar';
import Inicio from './pages/Inicio';
import Equipo from './pages/Equipo';
import {Routes, Route } from 'react-router-dom';
import { Servicios } from './pages/Servicios';
import Contacto from './pages/Contacto';


function App() {
  return (
    <div>
      <Bar />
      <Routes>
        <Route path="/" element={<Inicio />} />,
        <Route path="/equipo" element={<Equipo />} />,
        <Route path="/servicios" element={<Servicios />} />,
        <Route path="/contacto" element={<Contacto />} />,
      </Routes>
    </div>
  );
}

export default App;
