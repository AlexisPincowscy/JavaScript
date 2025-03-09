// Tratamento de erros com Try and Catch
const Produto = {
    nome: "notebok",
    preco: 1200
}

function contarQuantidadeLetras ( Produto ){
    try { //bloco que tenta executar o que precisar ser testado
        console.log(Produto.nome.length)//método .length pega o tamanho da string
        console.log('teste')
    } catch ( erro ){ //caso de errado, aparece algo
        console.log("Erro ao processar, 164")
    }
}

contarQuantidadeLetras(Produto)

// existe tbm o finally, mas pouco utilizado, ele fica após o catch