function executar(){
    console.log('Executou!')
    botao.removeEventListener('click', executar)//aqui ele vai executar e aprimeria vez e travar nas próximas, só vai valer o primeri click
}

// const botao = document.getElementById('botao')
// botao.onclick = executar


// versão usada quando não se tem id ou outra classificação fácil para o elemento
// const botao = document.querySelector('[botao-acao]') // usar o querySelector com [] pega o atributo
// botao.onclick = executar
// botao.onnclick = function(){executar()} trb funciona do modo anônimo

const botao = document.querySelector('[botao-acao]')

// com addEventListener os parâmetro são ('evento',função,bool)
// o parâmetro booleano tem padrão False e serve para conttrolar a ordem de ações
// se tiver no padrão ele vai executar primeiro o evento menor e ir expandindo (evento bota e evento no body)
// se colcoarmos como true, ele inverte essa ordem

botao.addEventListener('click', executar)
// podemos chamar direto como função anônima
// botao.addEventListener('click', function(){executar()}) pode ter mais de uma função sendo executada dentro

// em algumas versão antigas do IExplorer não funciona o addEventListener, então é usado o attachEvent (mesmos parâmetros)
// podemos fazer uma verificação para tal
// if (botao.addEventListener){
//     botao.addEventListener('click', executar)
// }else{
//     botao.attachEvent('click', executar)
// }