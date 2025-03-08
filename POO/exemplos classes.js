class Cadastro {
    constructor(){
      this.email = "alex@gmail.com"
      this.senha = "12434"
      this.subTotal = 0
    }
    
    logar(){
      let emailDigitado = "alex@gmail.com"  
      let senhaDigitada = "1234"
        if (senhaDigitada == this.senha && emailDigitado == this.email){
            // console.log("Login feito!")//outra maneria seria com return
            return 'Login feito!'
        }else{
            console.log("Senha ou email inválido.")
        }
    }

    compraComDesconto( cupom ){
        let desconto = 0
        if (cupom == "d20"){
            desconto = 20
        }else if(cupom == "d10"){
            desconto = 10
        }
        return this.subTotal - desconto
    }
  }
  
const form = new Cadastro
form.logar()// aqui vai direto, a senha vaid ar errado
//   com return, vc precisa recber o valor para imprimi-lo
form.senha = '1234' //corrigi a senha, agora vai
let login = form.logar()
console.log(login)
console.log('\n')
form.subTotal = 375.90
console.log(form.compraComDesconto('d20'))
