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
    numero += 1
}