const io = require("../io")

let numero
let i = 1
let fatorial

io.write('Digite o número: ')
numero = io.readInt()
fatorial = numero

while (i < numero) {
    fatorial = fatorial * i
    i++
}

io.write(fatorial)