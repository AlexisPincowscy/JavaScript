// Tudo vira objeto em JS
// por isso temos várias funções e métodos já definidos 

// Para manipular Strings

let nome = "carro d@ Alexis"
console.log(nome.length)//número de caracteres
console.log(nome.charAt(2))//pega o caracter em modo de array. no caso o 'e'
console.log(nome.replace('Alexis', 'Lígia'))//ele acha na string o primerio parâmetro e substituí pelo segundo
console.log(nome.replace('Alaxis', 'Lígia'))// se não achar o primerio, ele não muda nada
let n = nome.replace('carro','moto')//tbm funciona retornando o novo valor
console.log(n)

// substring substitui um pedaço da string, passando como parâmetro o car inicial e car final
let frase = 'A vida é bela, mas viver sem café é um sacrifício.'
console.log(frase.substring(0,19)+'...')//aqui vai até o '...,mas', útil para texto grande e quando
// clicarmos aparecefr o resto, já viu isso em algum lugar?

// método SPLIT
// pega a string com o parâmetro de separação e transforma tudo em array
let exeSplit = 'Alexis Pincowscy Cardoso' //repre que o noem está separado por espaço (" ")
console.log(exeSplit.split(' '))//vai pegar a string e transforar em arrays a cda espaço
console.log(exeSplit.split(''))//aqui separa cada caracter em array
let exeSplit2 = 'Alexis-Pincowscy-Cardoso'
console.log(exeSplit2.split('-'))//aqui eu teria que usar - na string para que ele serapasse a cada -
console.log(exeSplit.split())//sem parâmetro ele transforma a string em um item do array
let divisao = exeSplit2.split('-')//retornei o array da string
console.log(divisao[0])//mandei imprimir a posição 0, no caso Alexis

// SLICE para o susbtring mas útil para pegar pedaços do nome
let nome1 = 'Alexandre'
let sobrenome = 'Silva'
let s = sobrenome.slice(0,3)//vai pegar os 3 primeiros carcteres
let email = nome1+s+'@teste.com'//fazendo emails empresarias, por exemplo
console.log(email)

// ttoUpperCase() vai tudo para maiúscula
// toLowerCase() tudo minúsculas
email = nome1.toLowerCase()+s.toLowerCase()+'@teste.com.br'//formatamos indempendete de como o usuário preencher os dados
console.log(email)

// .TRIM() remove espaços laterais extras da sttring
let nome3 = "Alexis   "
let sobrenome3 = "Cardoso"
console.log(nome3.trim()+sobrenome3)

// .CONCAT() concatena a string
let a = 'Alex'
let b = 'Silva'
let c = 'Alvim'
console.log(a.concat(' ',b,' ',c))//os espaços tb precisam ser acrescentados, ele vai juntar tudo
