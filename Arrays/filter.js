// Filter é feito para filtrar um valor do array
// Ele retorna um if de true or false, o padrão é false
// O retunr já é a condição, não precisa construiir o If dentro

const carros = [
    {modelo: 'gol', marca: 'volks'},
    {modelo: 'ix35', marca: 'hyundai'},
    {modelo: 'santa fé', marca: 'hyundai'},
    {modelo: 'polo', marca: 'volks'},
]

// criar a variável que recebe o novo array, aqui que tem a mcarca hyundai
// filter tem dois parametro, a função que vai executar e a segunda funcção que tem o filtro a ser usado
function filtraCarros(carro){
    return carro.marca == this.filtro//aqui ele está fazendo o IF para retonar os valores
}

const filtroHyundai = {//aqui criamos o objeto com o filtro que queremos
    filtro:'hyundai'
}

const carrosHyundai = carros.filter(filtraCarros,filtroHyundai)
console.log(carrosHyundai)

// jeito mais simples é passar o filtro direto
const carrosFiltrados = carros.filter(carro => carro.marca == 'hyundai')
console.log(carrosFiltrados)