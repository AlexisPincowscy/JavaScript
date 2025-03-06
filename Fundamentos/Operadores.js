let comparacao = 10 === 10
console.log(comparacao)
// comparação 
// ==, !=, >, <, >=, <=

// IF, ELSE
let idade = 25
if (idade > 18 && idade <= 40){
    console.log("Está voando!")
} else if(idade < 18){
    console.log("Novinho demais")
}
else {
    console.log("Véi demais da conta!")
}


// SWITCH CASE - COMPARA APENAS SE É TRUE
// TEM O BREAK, SEM ELE VAI RODAR OS DE BAIXO
let opcao = 2
switch(opcao){
    case 1 :
        console.log("escolha 1")
        break;
    case 2 :
        console.log("escolha 2")
    
    case 3 :
        console.log("escolha 3")
        break;
    default:
        console.log("nenhuma opção")
}

// IF TERNÁRIO
let saldo = 30
// VERIFICAÇÃO ? SE FOR TRUE : SE FOR FALSE
saldo >= 100 ? console.log("Ryyyco") : console.log("Quebraaadoo!")