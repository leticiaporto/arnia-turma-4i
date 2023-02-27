let io = require("../io")

let numero1
let numero2
let resto

io.write('Digite o primeiro número:')
numero1 = io.readFloat()
io.write('Digite o segundo número:')
numero2 = io.readFloat()
resto = numero1 % numero2
io.write('O resto da divisão é: ' + resto)