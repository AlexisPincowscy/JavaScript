// isNaN pergunta se - is not a nummber (se é um número)
// função útil para fazer mos conferências

function somar (num1 , num2){
    num1 = isNaN(num1) ? 0 : num1 //if ternário (se a condição for verdadeira "nesse caso não for um número", seta o valor
    //como 0, se for falsa "for um número, receb o valor dele")
    num2 = isNaN(num2) ? 0 : num2
    return num1 + num2
}

function subs (num1=0 , num2=0){//definir valor padrõ caso a pessoa deixe em branco
    // num1 = isNaN(num1) ? 0 : num1 //if ternário (se a condição for verdadeira "nesse caso não for um número", seta o valor
    // //como 0, se for falsa "for um número, receb o valor dele")
    // num2 = isNaN(num2) ? 0 : num2
    return num1 - num2
}
function subs2 (num1 , num2){
    num1 = isNaN(num1) ? 0 : num1 //if ternário (se a condição for verdadeira "nesse caso não for um número", seta o valor
    //como 0, se for falsa "for um número, receb o valor dele")
    num2 = isNaN(num2) ? 0 : num2
    return num1 - num2
}


console.log(somar(19,25))
console.log(somar(19,'teste')) //aqui soma 19+0, pq se verifica que teste n é um numero
console.log(subs('teste', 25))// só definindo valor padrão não funciona, ele retorna NaN
console.log(subs2('teste', 25))//aqui faz a conta 0 - 25