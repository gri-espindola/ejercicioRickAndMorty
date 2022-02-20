import "./App.css";
import BarraDeNavegacion from "./components/BarraDeNavegacion";
import SeccionPrincipal from "./components/SeccionPrincipal";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="App">
      <BarraDeNavegacion />

      <SeccionPrincipal />
      <Footer />
    </div>
  );
};

export default App;
