// Funções Callbacks são usadas para achar erros
// Basicamente são funcções passdas como parâmetros de outras funções

const sucesso = function(){ //criando a função de sucesso
    console.log('Sucesso!!')
}

const erro = function(){
    console.log('Deu pala...')
}

function programa (callbackSucesso, callbackErro){
    /*
    aqui vai vir o código a ser executado
    */
   let resultadoProcessamento = false//exemplo fixo
   if(resultadoProcessamento){
    callbackSucesso()
   }else{
    callbackErro()
   }
}

programa(sucesso,erro)//aqui chamo a função passando as outras como parâmetro, poderia ser
// arrow funcions direto tb