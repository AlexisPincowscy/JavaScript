// map() funciona como o forEach, funçãoq q recebe outra
// mas aqui ele retorna um valor, não podendo fazer ações
// muito útil para transformar um array, ou outro conjunto de dados, em outro tipo

const pessoas = ['Dani','João','Alberta','Alex']

// os parâmetros são os mesmos (item,index,arr)
function transformaArray(item,index,arr){
    return {nome: item, numero: index}//aqui ele criaria um objeto com cada item do array
}

const novoObjeto = pessoas.map(transformaArray)
console.log(novoObjeto)//virou um array de objetos

// transformar a moeda de dolar $ em reais R$ e fazer a conversão de valor
// 1 dolar = 3 reais

const produtosDolar = [
    {produto: 'Notebook', preco: 1200, moeda: '$'},
    {produto: 'Celular', preco: 800, moeda: '$'},
]

function transformaReal (item){
    return {produto:item.produto, preco:(item.preco*3), moeda:item.moeda='R$'}
}

const produtoReal = produtosDolar.map(transformaReal)
console.log(produtoReal)