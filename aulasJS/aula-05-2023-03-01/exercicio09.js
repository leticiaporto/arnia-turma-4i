const io = require("../io")

let numero
let quantidade = 0
let soma = 0
let media

io.write('Digite um número:')
numero = io.readFloat()

while (numero > 0) {
    io.write('Digite um número:')
    numero = io.readFloat()

    if (numero > 0) {
        quantidade++
        soma = soma + numero
    }
}

media = soma / quantidade

io.write('Quantidade de números: ' + quantidade)
io.write('Média dos números: ' + media)
