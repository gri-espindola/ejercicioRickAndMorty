import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import TextField from "@mui/material/TextField";
import { useState, useEffect } from "react";

const InputBusqueda = () => {
  const [busqueda, setBusqueda] = useState("");
  const [personaje, setPersonaje] = useState([]);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character?name=${busqueda}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        setPersonaje(data.results);
      });
  }, [busqueda]);

  const handleChange = (e) => setBusqueda(e.target.value);

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "50ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <Box>
        <Box>
          <TextField
            id="outlined-search"
            label="Ingrese su búsqueda"
            type="search"
            onChange={handleChange}
          />
          <Button variant="contained" endIcon={<SendIcon />} heigth="6">
            Buscar
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default InputBusqueda;
