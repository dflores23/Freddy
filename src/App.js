import './App.css';
import Nav from './components/Navbar';
import Home from './pages/Home';
import Drinks from './pages/Drinks';
import { Routes, Route } from 'react-router-dom';
import Food from './pages/Food';
import Header from './pages/Header';
import Footer from './components/Footer'



function App() {
  return (
    <div className="body">
      <Nav />
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />,
        <Route path="/drinks" element={<Drinks />} />,
        <Route path="/food" element={<Food />} />,
        
      </Routes>
      <br />
      <Footer />
    </div>
  );
}

export default App;
