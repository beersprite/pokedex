const pokeNome = document.getElementById("pokeNome");
const pokeImagem = document.getElementById("pokeImagem");
const pokeAltura = document.getElementById("pokeAltura");
const pokePeso = document.getElementById("pokePeso");

const escondeDados = () => {
    pokeNome.classList.toggle("esconder");
    pokeImagem.classList.toggle("esconder");
    pokeAltura.classList.toggle("esconder");
    pokePeso.classList.toggle("esconder");
}
//console.log(pokeNome)

var carregaPagina = (titulo) => {
    if (titulo.textContent === "Nome") {
        pokeNome.style.display = "none";
        pokeImagem.style.display = "none";
        pokeAltura.style.display = "none";
        pokePeso.style.display = "none";
    }
    else {
        pokeNome.style.display = "block";
        pokeImagem.style.display = "block";
        pokeAltura.style.display = "block";
        pokePeso.style.display = "block";
    }
};

  window.onload = carregaPagina(pokeNome);

const pegaPokemon = () => {

    const pokeNome = document.getElementById("pokeNome").textContent;
    const pokeNumero = document.getElementById("pokeNumero").value;

    //console.log(pokeNumero);
    //console.log(pokeNome);
    //console.log(pokeNome.textContent);
    
    const resposta = fetch(`https://pokeapi.co/api/v2/pokemon/${pokeNumero}`)
    .then( response => response.json() )
    .then(pokemon => {

        window.onload = carregaPagina(pokeNome);

        if ( typeof pokemon.name === "undefined" ) {
            pokeImagem.src = "./style/pokeball.png"
            escondeDados();
        }       
        else
            dadosPokemon(pokemon);  
    })
}

const dadosPokemon = (pokemon) => {
    pokeNome.innerHTML = pokemon.name;
    pokeAltura.innerHTML = `Altura: ${(pokemon.height)/10} m`;
    pokePeso.innerHTML = `Peso: ${(pokemon.weight)/10} kg`;
    pokeImagem.src = pokemon.sprites.front_default;

    //console.log(pokemon);

}