const { getCharacters, getCharactersByPage, filter_by_status, replace_spaces } = require("./characterService");

async function getAliveCharacters(request, response) {
  try {
    const {page} = request.params;
    const characters = page 
    ? await getCharactersByPage(page)
    : await getCharacters();
    const alive = filter_by_status(characters, "Alive");
    const modifiedNames = { results: replace_spaces(alive) };
    response.json(modifiedNames);
  } catch (error) {
    if(error.message.includes(`404`)){
      return response.status(404).json({ error: `Page ${page} not found`});
    }
    response.status(500).json({ error: "Error details: ", detalle: error.message });
  }
}

module.exports = { getAliveCharacters };