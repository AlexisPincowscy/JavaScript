
function executar(){
    console.log('Executou!')
    foco.focus()//trava o objeto, da foco ali
}


// método útil para validações de formulário

const foco = document.getElementById('foco')//serve para travar o foco no elemento
const blur = document.getElementById('blur')

foco.addEventListener('blur',executar)//quando ele tenta sair, desficar, ele volta pro foco