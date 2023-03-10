const io = require('../io')

let vetor = []
let soma = 0

for (let i = 0; i < 10; i++) {
    io.write('Insira um número')
    let numero = io.readInt()
    vetor[i] = numero
    soma = soma + numero
}

media = soma / 10

io.write('Média: ' + media)

io.write('Números acima da média: ')

//prcorre o vetor
for (let i = 0; i < 10; i++) {
    let numero = vetor[i]
    vetor[i] = numero

    //verifica se o número está acima da média e imprime
    if (numero > media) {
        io.write(numero)
    }
}