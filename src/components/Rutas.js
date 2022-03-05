import { BrowserRouter, Routes, Route } from "react-router-dom";
import SeccionPrincipal from "./SeccionPrincipal";
import Episodios from "./Episodios";
import Ubicaciones from "./Ubicaciones";

const Rutas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SeccionPrincipal />} />
        <Route path="/episodios" element={<Episodios />} />
        <Route path="/ubicaciones" element={<Ubicaciones />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Rutas;
