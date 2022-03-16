import './App.css';
import Bar from './components/Navbar';
import Inicio from './pages/Inicio';
import Equipo from './pages/Equipo';
import { Routes, Route } from 'react-router-dom';
import { Servicios } from './pages/Servicios';
import Header from './pages/Header';
import Footer from './components/Footer'
import Polarizado from './pages/Polarizado';
import Detallado from './pages/Detallado';


function App() {
  return (
    <div className="body">
      <Bar />
      <Header />
      <Routes>
        <Route exact path="/" element={<Inicio />} />,
        <Route path="/equipo" element={<Equipo />} />,
        <Route path="/servicios" element={<Servicios />} />,
        <Route path="/polarizado" element={<Polarizado />} />,
        <Route path="/detallado" element={<Detallado />} />,
      </Routes>
      <br />
      <Footer />
    </div>
  );
}

export default App;
