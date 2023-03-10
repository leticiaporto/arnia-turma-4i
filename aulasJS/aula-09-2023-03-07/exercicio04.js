const io = require('../io')

function ehPar(numero) {
    return numero % 2 === 0
}

const resultado = ehPar(5)
io.write('É par? ' + resultado)