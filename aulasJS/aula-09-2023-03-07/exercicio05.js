const io = require('../io')

function mediaNumeros() {
    let numero = 0
    let soma = 0
    let quantidade = 0
    let media

    while (numero > -1) {
        io.write('Digite um número:')
        numero = io.readInt()
        if (numero > -1) {
            soma = soma + numero
            quantidade++
        }
    }

    media = soma / quantidade
    return media
}

const resultado = mediaNumeros()
io.write('A média dos números é: ' + resultado)