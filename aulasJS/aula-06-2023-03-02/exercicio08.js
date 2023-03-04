const io = require('../io')

let numero

io.write("Digite um número: ")
numero = io.readInt()

io.write("Divisores:")
for (let i = 1; i <= numero; i++) {
    if (numero % i === 0) { // numero é divisível por i?
        io.write(i)
    }
}