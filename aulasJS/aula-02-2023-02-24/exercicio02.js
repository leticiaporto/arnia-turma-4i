let io = require("../io")

let num1
let num2
let produto

io.write('Digite o primeiro número:')
num1 = io.readFloat()
io.write('Digite o segundo número:')
num2 = io.readFloat()
produto = num1 * num2
io.write('O produto é: ' + produto)