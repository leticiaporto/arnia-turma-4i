const io = require("../io")

let idade
let altura
let maiorIdade = 0
let soma = 0
let media

for (let i = 0; i < 5; i++) {
    io.write("Insira a idade: ")
    idade = io.readInt()
    io.write("Insira a altura: ")
    altura = io.readFloat()

    if (idade > maiorIdade) {
        maiorIdade = idade
    }

    soma = soma + altura
}

media = soma / 5

io.write('A maior idade é: ' + maiorIdade)
io.write('A média das alturas é: ' + media)