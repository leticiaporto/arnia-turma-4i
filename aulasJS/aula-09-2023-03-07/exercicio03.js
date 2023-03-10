const io = require('../io')

function calcularPotencia(x, z) {
    let potencia = 1
    // multiplicar x por ele mesmo z vezes
    for (let i = 0; i < z; i++) {
        potencia = potencia * x
    }

    return potencia
}

const resultado = calcularPotencia(3, 2)
io.write('O resultado é: ' + resultado)