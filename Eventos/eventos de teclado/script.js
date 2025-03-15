function executar(){
    console.log('Executou!')
    
}
function duplo(){
    console.log('CLique duplo!')
    
}function mouseOver(){
    console.log('Mouse em cima!')
    
}

function mouseOut(){
    console.log('Mouse fora!')
    
}


const entrada = document.getElementById('butao')
const entrada2 = document.getElementById('h1')
// entrada.addEventListener('click',executar) // executa quando clicamos, na verdade quando solta o botão do mouse
// // serve em diversos elemento, podemos clicar num H1

// entrada2.addEventListener('click',executar)
// entrada.addEventListener('click',executar) 
entrada.addEventListener('dblclick',duplo) // executa no double click, podendo ser usado junto com o outro
// entrada.addEventListener('mousedown',executar) // quando pressiona ele executa
// entrada.addEventListener('mouseup',executar) // quando vc libera o botçao do mouse
// entrada.addEventListener('mousemove',executar) //vai executando enquanto o mouse está por cima do elemento
entrada.addEventListener('mouseover',mouseOver) //quando o cursos passa por cima, conta uma vez a cada passagem
entrada.addEventListener('mouseout',mouseOut)// quando o cursos sai de cima do elemento