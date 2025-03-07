let nomes = [
    "Alexis",
    "Jamilton",
    "Carlos",
    "Alexandre",
    "Pedro",
    "Maria",
    "Ana",
    "Mariana",
    "Alexis"
]

function pesquisarNome(){
    let nomePesquisa = document.getElementById("pesquisa").value
    let itensLista = ''
    for (indice in nomes){
       let nome = nomes[indice]
       if(nomePesquisa == nome){
            itensLista += `<li class="list-group-item">${nome}</li>`
       }
    }
    document.getElementById("lista").innerHTML = itensLista
}


function carregarNomes(){
    let itensLista = ''
    for (indice in nomes){
        let nome = nomes[indice]
        itensLista += `<li class="list-group-item">${nome}</li>`
        // alert(nome)
    }
    document.getElementById("lista").innerHTML = itensLista
}