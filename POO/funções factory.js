// É uma função que cria um obejto
// Ela retona o escopo do objeto

const ProdutoFactory = function(nome, preco){

    return {
        nome,
        preco,
        recuperarAvalicoes(){
            console.log(`Avaliações sobre ${this.nome}`)
        }
    }
}

const produto1 = ProdutoFactory("Carro", 150000)
const produto2 = ProdutoFactory("PC", 5000)
produto1.recuperarAvalicoes()
produto2.recuperarAvalicoes()