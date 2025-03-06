// Os arrays são listas, vetores, de dados
// usar os colchetes para abri-lo []
// aceita tipos de dados misto, não é recomendado

let nomes = ["Alex", "Jamilton", 15, "Maria"]
console.log(nomes) //vai imprimir tudo
console.log(nomes[0])//vai imprimir a posição 0 (Alex)

// para adicionar itens:
nomes.push("João")
console.log(nomes)//agora com joão

// para mudar uma posição específica
nomes[3] = "Novo valor" //no lugar de maria
console.log(nomes)

// para deletar items
delete nomes[2]
console.log(nomes)//deixa no lugar um "deleted item"
