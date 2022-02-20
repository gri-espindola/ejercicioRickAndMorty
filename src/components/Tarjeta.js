import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Grid from "@mui/material/Grid";

const Tarjeta = ({ personaje }) => {
  console.log(personaje);

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card sx={{ maxWidth: 250 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="auto"
            image={personaje.image}
            alt={personaje.name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              <label>Nombre: {personaje.name}</label>
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <label>Especie: {personaje.species}</label>
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <label>Género: {personaje.gender}</label>
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <label>Estado: {personaje.status}</label>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default Tarjeta;
