import "./App.css";
import BarraDeNavegacion from "./components/BarraDeNavegacion";
import Rutas from "./components/Rutas";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="App">
      <BarraDeNavegacion />
      <Rutas />
      <Footer />
    </div>
  );
};

export default App;
