// Funcções construtoras é o jeto antigo de criar objetos
// Todo objeto é criado via funções

// isso aqui é uma classe
class Hotel {

}
console.log(typeof Hotel)
// aqui um objeto moderno, mas o que o código faz é o de baixo, maneira antiga
// que é igual a isso:

const Hotel2 = function(){

    this.nome = "Hotel do Alexis"
    this.quantidadesSuites = 40
    this.suitesOcupadas = 25
    let suitesOcupadas = 25
    this.reservar = function(){
        if ( suitesOcupadas >= this.quantidadesSuites){
            console.log('Estamos lotados')
        }else {
            suitesOcupadas++
        console.log('Tem ' + suitesOcupadas + ' suítes ocupadas!')
        }
    }
}

const hotel = new Hotel2()
console.log(typeof Hotel2)
hotel.suitesOcupadas = 35 //aqui alterei o atributo, mas como utilizamos a let como variável principal
// nada acontece, ele cria ou altera o atributo, mas let tem escopo de função, então a let criada
//dentro do objeto fica sendo validada dentro do objeto, apenas.
// mais fácil do que usar o set e get para proteção do código
hotel.reservar()
hotel.reservar()
hotel.reservar()
hotel.reservar()
hotel.reservar()
hotel.reservar()
hotel.reservar()
