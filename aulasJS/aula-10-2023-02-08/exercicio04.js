
const io = require('../io')

let vetor

function inverterNumeros(numeros) {
    let numerosInvertidos = []
    for (let i = numeros.length - 1; i >= 0; i--) {
        numerosInvertidos.push(numeros[i])
    }
    return numerosInvertidos
}

vetor = [1, 2, 3, 4, 5]
io.write("Números Invertidos: " + inverterNumeros(vetor))
