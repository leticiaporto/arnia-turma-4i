const io = require('../io')

function acimaDaMedia() {
    let numero = 0
    let soma = 0
    let media
    let notas = []

    while (numero > -1) {
        io.write('Digite uma nota:')
        numero = io.readInt()
        if (numero > -1) {
            notas.push(numero)
            soma = soma + numero
        }
    }

    media = soma / notas.length

    io.write('Notas acima da média: ')

    for(let i = 0; i < notas.length; i++) {
        let nota = notas[i]
        if(nota > media) {
            io.write(nota)
        }
    }
}

acimaDaMedia()