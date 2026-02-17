async function filtrarPersonajes() {

    const response = await fetch("https://rickandmortyapi.com/api/character");
    const characters = await response.json();

    const alive = characters.results().filter(ch => ch.alive == "Alive");
    
}

obtenerUsuarios();