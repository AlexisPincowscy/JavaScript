function executar(){
    console.log('Executou!')
}

function submit(event){
    if(entrada.value == ""){
        alert('Digite o Nome')
        event.preventDefault()
    }
}

// Para formulários conseguimos acessar os elementos pelo "name" dessa maneira
// não precisa do getElemtentById, mas funcionaria
const form = document.formulario
const entrada = form.entrada

// entrada.addEventListener('input',executar) executa a cada caracter escrito ou apagado (qualquer alteração)
// entrada.addEventListener('cut',executar) executa quando vc faz um recortar do que está escrito
// entrada.addEventListener('copy',executar) executa quando vc faz um Copy do conteúdo
// entrada.addEventListener('paste',executar) executa quando fazemos o Paste, colamos algo na área de input
const selecao = form.selecao
// selecao.addEventListener('change',executar) executa quando mudamos a opção da escolha, se clicar no mesmo, nada acontece


const radio = form.idade
// radio.addEventListener('change',executar) o tipo "radio" gera um NodeList então é necessário setar qual posição queremos mexer
// radio[0].addEventListener('change',executar)
// radio[1].addEventListener('change',executar)
// agora sim, quando clicamos e ocorre alguma alteração em um das seleções, ele executa o 'change'
// podendo ser executado em apenas um

// podemos usar o 'change' tb em checkbox
const check = form.box
// check.addEventListener('change',executar)

// submit pode chamar direto do form
form.addEventListener('submit',submit)
// usamos o event como parâmetro pq ele tem a função de prevenir o processamento padrão
// então ele pausa e colocamos um alerta para o usuário inserir o nome, caso ele não tenha digitado algo
// é necessário aqui pois o funcionamento padrão do submit é enviar os dados para algum lugar, então ele envia e recarreega a pagina

form.addEventListener('reset', executar)
// podemos preeencher tudo e quando clicamos em limpar ele limpa e recebe a execução
