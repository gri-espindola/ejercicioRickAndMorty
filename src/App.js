import "./App.css";
import BarraDeNavegacion from "./components/BarraDeNavegacion";
import SeccionPrincipal from "./components/SeccionPrincipal";
import InputBusqueda from "./components/inputBusqueda";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="App">
      <BarraDeNavegacion />
      <section className="input-app">
        <InputBusqueda />
      </section>
      <SeccionPrincipal />
      <Footer />
    </div>
  );
};

export default App;
