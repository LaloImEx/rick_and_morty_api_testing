const { getCharacters, getCharactersByPage, filter_by_status, replace_spaces } = require("./characterService");

async function getAliveCharacters(request, response) {
  try {
    const characters = await getCharacters();
    const alive = filter_by_status(characters, "Alive");
    const modifiedNames = { results: replace_spaces(alive) };
    response.json(modifiedNames);
  } catch (error) {
    response.status(500).json({ error: "Error details: ", detalle: error.message });
  }
}

async function getAliveCharactersByPage(request,response) {
  try {
    const {page} = request.params;
    const characters = await getCharactersByPage(page);
    const alive = filter_by_status(characters, "Alive");
    const modifiedNames = { results: replace_spaces(alive) };
    response.json(modifiedNames);
  } catch (error) {
    response.status(500).json({ error: "Error details: ", detalle: error.message });
  }
}

module.exports = { getAliveCharacters, getAliveCharactersByPage };