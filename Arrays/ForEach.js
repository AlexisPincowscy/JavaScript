// FroEach serve para percorrer os itens e fazer ações necessárias
// forEach é um método já fetio que aceita uma função com 3 parâmetro
// (item, index, array) que original,
// Ela serve para passar de item em item pegando o item ou a posição ou o array todo

let frutas = ['banana', 'maça','laranja']
frutas.forEach(lisaFrutas)//aqui vou criar a função que o forEach vai rodar

function lisaFrutas(item, index, arr){
    console.log('A ordem das frutas é '+index+'-'+item)
    // console.log(`A lista é composta das seguintes frutas: ${item}`)
}

// podemos passar a função dentro do forEach

frutas.forEach(item => console.log('As frutas são: '+item))

