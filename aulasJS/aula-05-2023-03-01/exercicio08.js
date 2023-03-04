const io = require("../io")

let numero
let maior = 0
let contador = 1

io.write('Digite um número:')
numero = io.readFloat()

while (contador <= numero) {
    if (contador % 2 === 0) {
        io.write(contador + ' - par')
    } else {
        io.write(contador + ' - ímpar')
    }
    contador++
}