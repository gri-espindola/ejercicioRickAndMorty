import { useState, useEffect } from "react";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Grid from "@mui/material/Grid";

const Episodios = (episodios) => {
  console.log(episodios);
  const [Episodios, setEpisodios] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/episode")
      .then((res) => res.json())
      .then((data) => setEpisodios(data.result));
  }, []);

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card sx={{ maxWidth: 250 }}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              <label>Nombre: {episodios.name}</label>
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <label>Especie: {episodios.air_date}</label>
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <label>Género: {episodios.episode}</label>
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <label>Estado: {episodios.character}</label>
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <label>Estado: {episodios.created}</label>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default Episodios;
