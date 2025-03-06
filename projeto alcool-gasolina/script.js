function calcularMelhorPreco(){
    // validando os campos
    // pega os valores dos campos pelo ID
    let precoAlcool = document.getElementById("alcool").value 
    let precoGasolina = document.getElementById("gasolina").value
    // para saber se vale mais a pena usar álcool ou gasolina a conta é 
    // valorAlcool / valorGasolina >= 0.7, melhor Gasolina, senão Álcool
    if (precoAlcool != ""){
        if (precoGasolina != ""){
            let resultado = precoAlcool / precoGasolina
            if (resultado >= 0.7){
                // insere o valor com InnerHTML no lugar que usa o ID
                document.getElementById("resultado").innerHTML = "Melhor usar gasolina!"
            } else {
                document.getElementById("resultado").innerHTML = "Melhor usar álcool!"
            }
        }else {
            alert("Preencha o preço da gasolina!")
        }
    }else {
        alert("Preencha o preço do álcool!")
    }
    
}