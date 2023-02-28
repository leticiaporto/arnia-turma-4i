const io = require('../io')

let numero

io.write('Digite um numero inteiro: ')
numero = io.readInt()

if (numero % 2 === 0 && numero > 10) {
    io.write("Esse número é par.")
} else {
    io.write("Esse numero é ímpar.")
}