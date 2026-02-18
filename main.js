const express = require("express");
const app = express();

async function getCharacters() {
    const response = await fetch("https://rickandmortyapi.com/api/character");
    const data = await response.json();
    return data.results;
}

function fiter_by_status(characters, status) {
  return characters.filter(chara => chara.status === status);
}

function replace_spaces(characters) {
    return characters.map(chara => ({
        id: chara.id,
        name: chara.name.replace(/ /g, "_"),
        status: chara.status,
        gender: chara.gender
  }));
}

app.get("/characters", async (request, response) => {
  try {
    const characters = await getCharacters();
    const alive = fiter_by_status(characters, "Alive");
    const modifiedNames = { modifiedNames: replace_spaces(alive) };
    response.json(modifiedNames);
  } catch (error) {
    response.status(500).json({ error: "Error datils: ", detalle: error.message });
  }
});

app.listen(3000, () => {
  console.log("Servidor corriendo en http://localhost:3000");
});