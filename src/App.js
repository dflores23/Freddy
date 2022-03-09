import './App.css';
import Bar from './components/Navbar';
import Inicio from './pages/Inicio';
import Equipo from './pages/Equipo';
import {Routes, Route } from 'react-router-dom';
import { Servicios } from './pages/Servicios';
import { Header } from './pages/Header';
import Footer from './components/Footer'


function App() {
  return (
    <div>
      <Bar />
      <Header />
      <Routes>
        <Route path="/" element={<Inicio />} />,
        <Route path="/equipo" element={<Equipo />} />,
        <Route path="/servicios" element={<Servicios />} />,
      </Routes>
      <br/>
      <Footer />
    </div>
  );
}

export default App;
