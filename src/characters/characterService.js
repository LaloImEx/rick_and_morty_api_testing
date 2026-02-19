const express = require("express");
const app = express();

async function getCharacters() {  
    const response = await fetch("https://rickandmortyapi.com/api/character");
    const data = await response.json();
    return data.results;
}

async function getCharactersByPage(num_page) {  
    const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${num_page}`);
    const data = await response.json();
    return data.results;
}

function filter_by_status(characters, status) {
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

module.exports = {getCharacters, filter_by_status, replace_spaces, getCharactersByPage}