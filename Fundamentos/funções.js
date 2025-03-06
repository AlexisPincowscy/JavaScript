// FUNÇÕES - FUNCTION NOME(CAMELCASE) (PARAMETROS, PODE TER OU NÃO) {}
// RESTURN NO FINAL É O QUE ELA VOLTA

function mediaNotas (nota1, nota2, nota3){
    let somaNotas = nota1 + nota2 + nota3
    let mediaNotas = somaNotas / 3
    return mediaNotas
}

// É PRECISO CHAMAR A FUNÇÃO AO FINAL PARA QUE SEJA EXECUTADA
// PASSANDO OS PARAÊTROS ESTIPULADOS, NESSE CASO 3 VALORES DE NOTAS
resultadoMediaNotas = mediaNotas(10,9,5)
console.log(resultadoMediaNotas)
// PODIA TER COLCOADO A FUNÇÃO DIRETO NO LOG
// AQUI COM OUTRAS NOTAS COMO PARAMÊTRO
console.log(mediaNotas(5,1,10))