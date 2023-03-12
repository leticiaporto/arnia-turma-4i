const io = require('../io')
let numeros = []

for (let i = 0; i < 10; i++) {
    io.write('Digite um número: ')
    let numero = io.readInt()
    numeros.push(numero)
}

for (let i = 0; i < numeros.length - 1; i++) {
    //este for leva o maior número para última posição
    for (let j = 0; j < numeros.length - 1; j++) {
        if (numeros[j] > numeros[j + 1]) {
            // troca a posição dos números
            let aux = numeros[j]
            numeros[j] = numeros[j + 1]
            numeros[j + 1] = aux
        }
    }
}

io.write('Números ordenados:')

for (let i = 0; i < numeros.length; i++) {
    io.write(numeros[i])
}