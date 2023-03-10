const io = require('../io')

let numero
let divisores = 0

io.write("Digite um número: ")
numero = io.readInt()

//for que vai de 1 até o número para calcular a quantidade de divisores
for (let i = 1; i <= numero; i++) {
    if (numero % i === 0) { // numero é divisível por i? se sim, incrementa a quantiade de divisores
        divisores++
    }
}

//se a quantidade de divisores for igual á 2, o número é primo
if (divisores === 2) {
    io.write("Este é um número primo.")
} else {
    io.write("Este não é um número primo.")
}