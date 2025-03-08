// Notação literal
const hotel = {
    quartos: 20,
    ocupados: 10,
    verficarDisponibilidade: function (){
        let res = this.quartos - this.ocupados
        return `Tem ${res} quartos dispiníveis.`
    }
}

// Fazendo alterações nos valores dentro do objeto:
// hotel.quartos = 35
// hotel.ocupados = 12
// hotel['quartos'] = 42
console.log(hotel.verficarDisponibilidade())
console.log('\n')

// Notação construtor (objeto em branco e sair confirguranado seus atributos)
const hotel2 = new Object() //aqui criei um bjeto vazio
hotel2.quartos = 28 //fui acrescentando atribhtos com valores
hotel2.ocupados = 6
hotel2.verficarDisponibilidade = function(){ //aqui criamos a função e a acrescentamos
        let res = this.quartos - this.ocupados
        return `Tem ${res} quartos dispiníveis no Hotel 2.`
}

console.log(hotel2.verficarDisponibilidade())
console.log('\n')

// Criando classes (mais simpels)
// cria objeto presonalizado, aqui ela funciona como a planta da casa(do objeto)

class Hotel {
    //aqui criamos a classe
    //a primeira coisa que vai ser executada é o constructor
    //ele serve para receber os atributos
    constructor(){//é necessário usar o this na criação dos atributos
        this.quartos = 40
        this.ocupados = 16
    }

    //para criar os métodos criamos eles abaixo do constructor
    verficarDisponibilidade(){
        let res = this.quartos - this.ocupados
        return `Tem ${res} quartos dispiníveis no Hotel 3.`
    }
}
// agora criamos uma variável que receberá, se tornará um obejto Hotel
const hotel3 = new Hotel
//podemos alterar o valor igual fazíamos antes
// hotel3.ocupados = 22
// hotel3['quartos'] = 35
console.log(hotel3.verficarDisponibilidade())