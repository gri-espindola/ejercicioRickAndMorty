import { useState, useEffect } from "react";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Grid from "@mui/material/Grid";

const Ubicaciones = ({ ubicaciones }) => {
  console.log(ubicaciones);
  const [Ubicaciones, setUbicaciones] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/location")
      .then((res) => res.json())
      .then((data) => setUbicaciones(data.result));
  }, []);

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card sx={{ maxWidth: 250 }}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              <label>Nombre: {Ubicaciones.name}</label>
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <label>Especie: {Ubicaciones.type}</label>
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <label>Género: {Ubicaciones.dimension}</label>
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <label>Estado: {Ubicaciones.residents}</label>
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <label>Estado: {Ubicaciones.created}</label>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default Ubicaciones;
