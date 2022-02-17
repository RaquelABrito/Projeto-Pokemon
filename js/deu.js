function pegarNomeJogador() {
    var nome;

    var idanomeJogadorde = prompt("Digite seu nome:");

    if (nomeJogador != null) {

    }
}
/*
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
            dados = xhttp.response;
            dados = JSON.parse(dados);
            console.log(xhttp);
            console.log(dados);

        }
    };

    // Path para a requisição AJAX.
    var url = "https://pokeapi.co/api/v2/pokemon/";
    switch (type) {
        case 1:
            url = "https://pokeapi.co/api/v2/pokemon/?limit=151/"
            break;
        case 2:
            url += "id"
            break;
    }
    xhttp.open("GET", url, true);
    xhttp.send();
}


//var listaUsuarios
function pokemonsRequiscao(pokemons) {
    var listaPokemons = JSON.parse(pokemons);
    let lista = document.getElementById("card");
    //var option = document.createElement("option");
    for (i = 0; i < listaPokemons.length; i++) {
        console.log(listaPokemons[i].name);
        var img = document.createElement("img");
        img.src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg";

        //option.innerHTML = listaPokemons[i].name;
        lista.appendChild(img);

    }
}

xhttpAssincrono(pokemonsRequiscao, 1, " ");

