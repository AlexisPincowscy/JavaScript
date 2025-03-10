// Arrays são objetos, então tem um grupo de métodos já funcionais

const nomes = ['Alex', 'Amanda', 'Carlos']

// push acrescenta um item
nomes.push('Cauã')
console.log(nomes)

// sort serve para ordenar de ordem crescente
const numero = [7,8,1,2,4,5]
numero.sort()//se tiver doi digitos ele vem par frente, se tiver 3 vem para primeiro tb
console.log(numero)

console.log(nomes.sort())

// pop remove o último item do array
// shift remove o primeiro
// os dois removem mas retornam o valor tb
numero.pop()
nomes.shift()
console.log(nomes)
console.log(numero)

const estados = ['Df', 'SP', 'ES', 'RS']
// push adicona na última posição
// unshift adiciona na primeria posição
estados.push('AM')
estados.unshift('MG')
console.log(estados)

// splice ele retira um parte do array, retornando isso para uma variável, se quiser, e acrescenta novos valores tb
const novoEstados = estados.splice(2,2, 'BA', 'MS')//novoEstados vai receber dois itens removidos a partir da posição 2
// e estados vai receber os novos estados no lugar
console.log(novoEstados)
console.log(estados)

// não confundir com SLICE, que recorta um pedaçõ do array
// o parâmetro do silce é da posição que quer pegar até a pausa, mas a última não está incluída
// silce(0,4)-vai pegar os itens 0,1,2,3 o 4 é a pausa
let testeSlice = estados.slice(0,3) // ele só retorna a função, ele não altera o array
console.log(testeSlice)

// Join transforma o array em uma grande string
const usuario = ['A1','B2', 'C3', 'D4']
let arrayTexto = usuario.join() //= "A1,B2,C3,D4" uma string só
console.log(arrayTexto)

// Split transorma string em array com a sepraçaõq eu quiser
let arrayUsuario = arrayTexto.split(',')//vai separa a string em array de novo onde achar a ','
console.log(arrayUsuario)