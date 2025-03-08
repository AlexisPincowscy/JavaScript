// CONCEITOS DE ENCAPSULAMENTO
// GETTERS AND SETTERS
//  são métodos para varzer verificação e para não alterar valores que
// não devem ser alterados na utilização dos objetos.
// são chamados pseudo propriedade

class ContaBancaria {
    constructor(){
        this._numeroConta = 10 //_ antes é para ser valores privados, não devem ser alterados
        this._saldo = 0
    }

    sacar( valorSaque){
        if(valorSaque > 0){
            this._saldo -= valorSaque
        }
    }

    depositar(valorDeposito){
        if(valorDeposito>0){
            this._saldo += valorDeposito
        }
    }
    get saldo(){
        return this._saldo
    }
    set saldo(novoSaldo){
        if(novoSaldo > 0){
            this._saldo = novoSaldo
        }
    }

    get numeroConta(){//parce função, mas é atributo
        return 'Número da conta é: ' + this._numeroConta
    }
    set numeroConta (numero){ //aqui é um método, mas é chamnado de maneira diferente
        if (numero > 0){// podemos fazer uma condição para que não seja aceito um valor não desejado
        this._numeroConta = numero
        }
    }

}
// maneiras de manipular o atributo _numeroConta sem mexer nele
const conta = new ContaBancaria()
// agora com o IF se tentar um valor negativo ou algo fora de inteiros ele não seta o valor
conta.numeroConta = 25 //aqui o SET vai receber o valor e "criar" o tributo
console.log(conta.numeroConta) //aqui foi chamado o GET, passando o valor que foi SETADO no set

conta.depositar(1500)
conta.sacar(145)
conta.depositar(30)
conta.sacar(180)
console.log(conta.saldo)