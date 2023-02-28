const io = require('../io')

let a
let b
let c

io.write('Digite o maior lado:')
a = io.readFloat()
io.write('Digite o segundo lado')
b = io.readFloat()
io.write('Digite o terceiro lado')
c = io.readFloat()

if (a < b + c) {
    io.write("É um triângulo")
} else {
    io.write('Não é um triângulo')
}