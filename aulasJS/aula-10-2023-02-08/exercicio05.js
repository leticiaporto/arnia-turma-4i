const io = require('../io')

let quantidade
let numeros = []
let numerosPares

function filtrarPares(vetor) {
    let pares = []
    for (let i = 0; i < vetor.length; i++) {
        let numero = vetor[i]
        if (numero % 2 === 0) {
            pares.push(numero) // adicionando numero no vetor pares
            // pares[pares.length] = numero //Outra forma de fazer
        }
    }
    return pares
}

io.write('Digite a quantidade de números: ')
quantidade = io.readInt()

for(let i = 0; i < quantidade; i++) {
    io.write('Digite um número: ')
    let numero = io.readInt()
    numeros.push(numero)
}
console.log(numeros, numeros.length)
numerosPares = filtrarPares(numeros)
console.log(numerosPares, numerosPares.length)

