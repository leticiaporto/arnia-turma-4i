const io = require('../io')

let numero
let divisores = 0

io.write("Digite um número: ")
numero = io.readInt()

for (let i = 1; i <= numero; i++) {
    if (numero % i === 0) { // numero é divisível por i?
        divisores++
    }
}

if (divisores === 2) {
    io.write("Este é um número primo.")
} else {
    io.write("Este não é um número primo.")
}