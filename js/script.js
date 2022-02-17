var  pokemonLista = [];
//pokemonLista.push(localStorage.getItem('lista_pokemons_favoritos'));


console.log(pokemonLista);

/*
*
* Função AJAX base do tipo assíncrona.
* type é o tipo de objeto que você quer recuperar.
* value é o valor do parâmetro para filtrar os resultados dos tipos 2, 3 e 4.
* [Importante!] Você não pode, em nenhuma hipótese, alterar a função xhttpAssincrono.
*/

function xhttpAssincrono(callBackFunction, type, value) {

var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            // Chama a função em callback e passa a resposta da requisição
            callBackFunction(this.responseText);
            console.log(xhttp);
        }
    };
    // Path para a requisição AJAX.
    var url = "https://pokeapi.co/api/v2/pokemon/";
    switch (type) {
        case 1:
            url += "?limit=151"
            break;
        case 2:
            url += value;
             break;
    }
    xhttp.open("GET", url, true);
    xhttp.send();
}


function pokemonsRequiscao(pokemons) {
    var listar = JSON.parse(pokemons);
    for (i = 0; i <= 150; i++) {
        var htmlCard =
         "<div class='card' id='card' style='width: 12rem; '>"+
            "<img src ='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/" + (i + 1) + ".svg'  class='card-img-top img-pokemon bg-image hover-zoom img-hover'>"+
                 "<div class='card-body' id='card-body'>"+
            "<h5 class='card-title'   >" + listar.results[i].name
                    +"</h5>"+
                    "<p class='card-text'>"+
                    "</p>"+
            "<a  class='btn btn-outline-danger btn-sm' id='pokemon-nome-" + listar.results[i].name +"' onClick='favoritarPokemon(this)' value='"+listar.results[i].name+"' >"+'Favoritar'+"</a>"+
                    "<a  class='btn btn-primary' data-toggle='modal' style='margin-top:0.5rem;'>" + 'Saber mais'
                   +"</a>" +
                "</div>"+
            "</div >";
        document.getElementById("cardPokemons").innerHTML += htmlCard;
    }
}

xhttpAssincrono(pokemonsRequiscao, 1, " ");

function mostrarPokemons() {
    //var namePokemons = JSON.parse(pokemonLista);
    let lista = document.getElementById("lista-pokemon");
    //JSON.parse(pokemonLista)
    for (var j = 0; j < pokemonLista; j++) {
        
        
        var li = document.createElement("li");
        //li.value = pokemonLista[j].id;
        li.className = "list-group-item";
        li.textContent= pokemonLista[j];
        lista.appendChild(li);
         
       
    }
}
///console.log(pokemonLista[1]);
mostrarPokemons();

function favoritarPokemon(obj) {
    var identificador = obj.id;

    var pokemon = document.getElementById(identificador).getAttribute('value');
   // pokemonLista.push("pokemon");
    pokemonLista.push(pokemon)
    localStorage.setItem('lista_pokemons_favoritos', JSON.stringify(pokemonLista));
}

//Armazena o nome digitado no localstorage
function getNomeJogador() {
    var nome = document.getElementById("nome-jogador").getAttribute('value');
   
    localStorage.setItem('nome_jogador', nome);
}

const pokemonDetalhe = [];
//Dados para criação do grafico
function getPokemonsDetalhesRequiscao(pokemonsDetalhes) {
    var listar = JSON.parse(pokemonsDetalhes);
    //console.log(listar)
    pokemonDetalhe.push(listar);
    //console.log(pokemonDetalhe);
}

for (i = 1; i <= 150; i++) {
    var id = i;
    xhttpAssincrono(getPokemonsDetalhesRequiscao, 2 , id);

}  

//console.log(pokemonDetalhe);