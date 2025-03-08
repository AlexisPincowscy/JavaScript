// Pilar HERANÇA - atributos/métodos comuns entre classes
class Animal {//superclasse - classe mãe
    constructor (cor,tamanho,peso) {//podemos passaar parametros aqui
        this.cor = cor
        this.tamanho = tamanho
        this.peso = peso
    }

    correr (){
        return 'correr'
    }

    dormir(){
        return 'dormir'
    }
}


class Cao extends Animal {//subclasse - criada a partir de outra classe (animal aqui)
    // para criar atributos só do cão
    constructor(){//aqui da errado pq já tem o construtor Animal
        super() //faz referência ao constructor animal, tudo certo agora
        this.tipoDaOrelha = '' // os objetos da classe cão tme esse atributo específico
    }
    latir(){
        return 'latir'
    }

    // Polimorfismo - sobreescrever um método geral
    correr (){//senão usar o super. ele sobreescreve, mas com o super ele acrescenta
        let a = super.correr()//aqui ele vai receber o método correr que está em Animal
        return a + ' como um cão'
    }

}

class Passaro extends  Animal{
    constructor(cor,tamanho,peso){
        super(cor,tamanho,peso)
    }
    voar(){
        return 'voar'
    }
}

class Papagaio extends Passaro{//herda tudo de animal e do pássaro
    constructor(cor,tamanho,peso,falar){
        super(cor,tamanho,peso)
        this.sabeFalar = falar// saberFalar = falar //aqui tendo um atributo dó de papagaio
    }
    
    falar(){
        return 'falar'
    }
}

// instânciar
const cao = new Cao()
const passaro = new Passaro()
const papagaio = new Papagaio('branco', 50, 5, true)

cao.peso = 27.5
console.log(cao.peso)
console.log(papagaio.cor + papagaio.tamanho + papagaio.sabeFalar)
cao.tipoDaOrelha = 'Em pé'
console.log('Meu cachorro tem a orelha ' + cao.tipoDaOrelha)
console.log('\n')
console.log('Cachorro pode '+ cao.correr())
console.log('Pássaro pode ' +passaro.voar())
console.log('Papagaio pode '+ papagaio.correr())
console.log('Papagaio pode '+ papagaio.falar())
