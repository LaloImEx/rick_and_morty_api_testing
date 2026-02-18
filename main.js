async function filterCharacters() {
    
    //Request
    try{
        response = await fetch("https://rickandmortyapi.com/api/character");
        data = await response.json();
    }catch(error){
        console.log("Error inesperado: ", error);
    }
    
    //Filter
    const characters = data.results;
    const alive = characters.filter(ch => ch.status === "Alive");
    alive.forEach(ch => console.log(ch.name));

    //Replace spaces
    const result = {
        results: alive.map(ch => ({
        id: ch.id,
        name: ch.name.replace(/ /g, "_"),
        status: ch.status,
        gender: ch.gender
        }))
    };

    //Print modified names
    console.log(JSON.stringify(result, null, 2));
}

filterCharacters();