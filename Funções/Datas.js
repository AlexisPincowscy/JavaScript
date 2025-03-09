// Você primerio precisa instaciar o objeto Date para poder usar os métodos de data

const data = new Date()

console.log(data.toString())//pega a data do pc do usuário no momento da execução

// .getDate() pega o dia
console.log(data.getDate())
let d = data.getDate()
// .getMonth() pega o mês, MAS o valor vai de 0 a 11, então sempre incrementar +1
console.log(data.getMonth()+1)
let m = data.getMonth()+1
// .getFullYear() pega o ano
console.log(data.getFullYear())
let y = data.getFullYear()

console.log(`Data: ${d}/${m}/${y}`)


// .getHours() pega a hora
console.log(data.getHours())
let h = data.getHours()
// .getMinutes() pega os minutos
console.log(data.getMinutes())
let min = data.getMinutes()
// .getSeconds() pega os segundos
console.log(data.getSeconds())
let s = data.getSeconds()

console.log(`Hora certa: ${h}:${min}:${s}`)

// Operações com datas
data.setDate(data.getDate()+100)//aqui ele pega a data para setar novo valor, nesse caso 100 dias daqui
d = data.getDate()
data.setMonth(data.getMonth()+4)
m = data.getMonth()+1
data.setFullYear(data.getFullYear()+3)
y = data.getFullYear()

console.log(`Data: ${d}/${m}/${y}`)

// faz essa mesam lógica com as horas, mine  segundos
data.setHours(data.getHours()+2)
h = data.getHours()
console.log(`Hora certa: ${h}:${min}:${s}`)