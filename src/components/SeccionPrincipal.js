import Tarjeta from "./Tarjeta";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { useState, useEffect } from "react";
import InputBusqueda from "./InputBusqueda";

const SeccionPrincipal = () => {
  const [personajes, setPersonajes] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        setPersonajes(data.results);
      });
  }, []);

  return (
    <Box>
      <section className="input-app">
        <InputBusqueda setPersonajes={setPersonajes} />
      </section>
      <Grid container spacing={4} justifyContent="center" sx={{ m: 2 }}>
        {personajes.map((personaje) => (
          <Tarjeta personaje={personaje} />
        ))}
      </Grid>
    </Box>
  );
};
export default SeccionPrincipal;
