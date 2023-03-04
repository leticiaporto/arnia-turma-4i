const io = require("../io")

let numero
let maior = 0
let contador = 0

while (contador < 3) {
    io.write('Digite um número:')
    numero = io.readFloat()

    if(numero > maior){
        maior = numero
    }

    contador++
}

io.write('O número maior é: ' + maior)