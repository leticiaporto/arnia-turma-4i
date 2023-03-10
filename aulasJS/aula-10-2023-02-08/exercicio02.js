
const io = require('../io')

let vetor

function somaNumeros(numeros) {
    let soma = 0
    for (let i = 0; i < numeros.length; i++) {
        soma = soma + numeros[i]        
    }
    return soma
}

vetor = [1, 2, 3, 4, 5]
io.write("Soma: " + somaNumeros(vetor))
