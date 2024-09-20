import './App.css';
import Nav from './components/Navbar';
import Inicio from './pages/Inicio';
import Equipo from './pages/Equipo';
import { Routes, Route } from 'react-router-dom';
import { Servicios } from './pages/Servicios';
import Header from './pages/Header';
import Footer from './components/Footer'
import Polarizado from './pages/Polarizado';
import Detallado from './pages/Detallado';
import Descontaminacion from './pages/Descontaminacion';
import Cilicio from './pages/Cilicio';
import Grafeno from './pages/Grafeno';
import Audio from './pages/Audio';


function App() {
  return (
    <div className="body">
      <Nav />
      <Header />
      <Routes>
        <Route exact path="/" element={<Inicio />} />,
        <Route path="/equipo" element={<Equipo />} />,
        <Route path="/servicios" element={<Servicios />} />,
        <Route path="/polarizado" element={<Polarizado />} />,
        <Route path="/detallado" element={<Detallado />} />,
        <Route path="/descontaminacion" element={<Descontaminacion />} />,
        <Route path="/cilicio" element={<Cilicio />} />,
        <Route path="/grafeno" element={<Grafeno />} />, 
        <Route path="/audio" element={<Audio />} /> 
      </Routes>
      <br />
      <Footer />
    </div>
  );
}

export default App;
