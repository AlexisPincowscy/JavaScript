// Classe Math serve para operações matemáticas

let numero = 280.5

// Math.PI = número pi mesmo
console.log(Math.PI)

// .ceil()-arredonda para cima
console.log(Math.ceil(numero))

// .floor()-arredonda para baixo
console.log(Math.floor(numero))

// .round arredonda de acordo com a matemática (de .5 para cima para cima, abaixo de .5 para baixo)
console.log(Math.round(numero))

// .random gera número aleatório entre 0 e 1 como padrão
numero = Math.random()*50//de 0 a 50
console.log(numero)
numero = Math.random()//entre 0 e 1
console.log(numero)

// .min e .max mostra o maior ou menor numero entre os parâmtros
console.log(Math.min(10,40,5))//5 é o menor entre eles
console.log(Math.max(10,40,5))//40 é o maior entre eles

// .pow para potência do primerio parâmetro elevado ao segundo
console.log(Math.pow(3,6))//3 elevado a 6

//.sqrt para raiz quadrada do parâmetro
console.log(Math.sqrt(20))
