import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CardMedia from "@mui/material/CardMedia";
import "./containerOption.css";

const BarraDeNavegacion = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" height="150">
        <CardMedia
          component="img"
          height="360"
          image="https://webcache.elisaviihde.fi/images/elisa/8/6/33868/33868-1-cover-fi-1588027022.jpg"
          alt="Imagen de Rick y Morty"
        />
        <div className="container-option">
          <li>Personajes</li>
          <li>Episodios</li>
          <li>Estado</li>
        </div>
      </AppBar>
    </Box>
  );
};

export default BarraDeNavegacion;
