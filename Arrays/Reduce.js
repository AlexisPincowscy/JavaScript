// Reduce serve para acumular valores
// exemplo 1 - números mais simpeles

const numeros = [1,2,3,4]
// os parâmetros são o acumulador, o valor atual e o indice
// o valor padrão do acumulador é 0 o quef az com que ele pule a primiera interação
const funcaoReduce = function(acumulador, atual, indice){
    console.log('i: '+ indice)
    console.log('atual: '+atual)
    console.log('acumulador: '+acumulador)
    console.log('---')
    return acumulador+atual
}
// na hora de chamar, depois de colocarmos a função, podemos definir o valor
// inicial do acumulador (funcao,varloacumulador)
console.log(numeros.reduce(funcaoReduce))
// serve para imprimir a soma, valor do acumulador com o da posição atual
// vai para a próxima posição e faz o novo acumulador e soma com o atual e por ai vai


// Exemplo 2
// ver se tem ou não promoção
const produtos = [
    {nome: 'TV', promo: false},
    {nome: 'Celular', promo: false},
    {nome: 'Cama', promo: true},
    {nome: 'PCs', promo: false},
]
// a ideia vai ser se existe algum produto em promo
const arrayPromo = produtos.map(
    produtos => produtos.promo
)
console.log(arrayPromo)
// usamos o map para separar só os que estão em promoção
// usamos a função para ver se tem algum valor que seja true, ou seja, tenha promoção
// aqui não faz diferença o primereiro valor, ele pode ser treu ou false, o que iremos verificar e se 
// existe algum valor true passando produto por produto
const funcaoPromo = function(acumulador, valorAtual){
    //fazemos a comparação se o valor que está no acumulador ou no atual for true, então tem alguma promoção
    return acumulador || valorAtual //isso é um if embutido, padrão normal é false
}

// const temPromo = arrayPromo.reduce(funcaoPromo)

if (arrayPromo.reduce(funcaoPromo)){//pegamos o valor retornado e verificamos se tem ou não alguma promoção
    console.log('Tem promoção no site')
} else {
    console.log('Não tem promoção no site')
}