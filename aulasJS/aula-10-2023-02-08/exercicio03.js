
const io = require('../io')

let vetor

function mediaNumeros(numeros) {
    let soma = 0
    for (let i = 0; i < numeros.length; i++) {
        soma = soma + numeros[i]        
    }
    return soma / numeros.length
}

vetor = [1, 2, 3, 4, 5]
io.write("Média: " + mediaNumeros(vetor))
