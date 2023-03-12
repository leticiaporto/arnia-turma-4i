const io = require('../io')

let numeros = []
let numerosOrdenados = []

function ordenaVetor(vetor) {
    for (let i = 0; i < vetor.length - 1; i++) {
        //este for leva o maior número para última posição
        for (let j = 0; j < vetor.length - 1; j++) {
            if (vetor[j] > vetor[j + 1]) {
                // troca a posição dos números
                let aux = vetor[j]
                vetor[j] = vetor[j + 1]
                vetor[j + 1] = aux
            }
        }
    }

    return vetor
}

for (let i = 0; i < 10; i++) {
    io.write('Digite um número: ')
    let numero = io.readInt()
    numeros.push(numero)
}

numerosOrdenados = ordenaVetor(numeros)

io.write('Números ordenados:')
io.write(numerosOrdenados)