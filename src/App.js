import './App.css';
import Bar from './components/Navbar'; 
import Home from './pages/Inicio';
import About from './pages/Equipo';


function App() {
  return (
    <div className="App">
      
  <Bar />
  <Home />
  <About />
    </div>
  );
}

export default App;
