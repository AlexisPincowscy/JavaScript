// Usado apra fazer Loops, cuidado para não fazer um infinito
// na prática é muito usado apra posts e áreas que são automaticmente renovadas

// podemos criar um array, de posts
let postagens = [
    "Um belo dia",
    "Ta pago",
    "O sol nasce para quem luta",
    "Eh noix que voa, bruxão"
]

// agora criar o contador para ter começo e fim o loop
let numero = 0
const totalPostagens = postagens.length // aqui iremos andar em cada item do array
// formato é while  entre ( a condição)
while (numero < totalPostagens){
    console.log("Imagem do post " + numero )
    console.log(postagens[numero]) // para postar a postagem andadno de posição em posição
    console.log("----") // quebra de linha
    numero += 1 // ou numero++
}

// Do...While é igual, mas ele faz uma ida antes de conferir a condição
let contador = 0
do{
    console.log("Contador = " + contador)
    contador ++
}while(contador <= 5)

// pouco utilizado

// FOR maneira mais usual de fazer os comparativos
// for (contaodr , até quando, incremento)
for (let numero = 1; numero <= 5; numero++){
    console.log("Teste " + numero)
}

for (index in postagens){
    console.log(postagens[index])
    console.log("----\n")
}

let total = postagens.length
for (let cont = 0; cont < total; cont++){
    console.log(postagens[cont])
}