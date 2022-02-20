import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import TextField from "@mui/material/TextField";
import { useState, useEffect } from "react";

const InputBusqueda = (props) => {
  const { setPersonajes } = props;
  const [busqueda, setBusqueda] = useState("");

  useEffect(() => {
    if (busqueda !== "") {
      fetch(`https://rickandmortyapi.com/api/character?name=${busqueda}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.error === "There is nothing here") {
            console.log(data.error);
            setPersonajes([]);
            return;
          }
          if (data) {
            console.log(data);
            setPersonajes(data.results);
          }
        });
    }
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
