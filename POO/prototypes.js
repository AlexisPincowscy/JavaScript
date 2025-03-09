// Versão original da relação de classe extends
// Toda classe é, por definição, um protótipo
// Classes são uma maneira mais facilitada de esrever ()

const veiculo = {
    motor: 'sim'
}

const carro = {//aqui criado o objeto literal
    __proto__: veiculo,//carro é um protótipo de veículo e a bmw vai ser dos dois
    placa: "ABC-1234",
    acelerar: function(){
        console.log('Aceleraaaa')
    }
}

const bmw = {
    __proto__ : carro, //aqui eu fiz a conexão via prototype (bmw recebe atributos e funções de carro)
    modelo: "320i",
    turbo: true
}

bmw.acelerar()//vai funcionar, pq carro é um prototipo (igual o método super das classes)
console.log('Esse motor é turbo? '+ bmw.turbo)
console.log('Isso é um veículo motorizado? '+bmw.motor)