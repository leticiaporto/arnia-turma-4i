const io = require("../io")

let numero
let soma = 0
let media
let contador = 0
let quantidade = 5

while(contador < quantidade) {
    io.write("Insira o número: ")
    numero = io.readInt()
    soma = soma + numero
    contador++
}

media = soma / quantidade

io.write("A média é:" + media)