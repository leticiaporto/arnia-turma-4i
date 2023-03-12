const io = require('../io')

let numeros = []
let numerosOrdenados = []
let tipo 

function ordenaVetor(vetor, tipo) {
    for (let i = 0; i < vetor.length - 1; i++) {
        //este for leva o maior ou menor número para última posição
        for (let j = 0; j < vetor.length - 1; j++) {
            let condicao
            if (tipo === 'C') {
                condicao = vetor[j] > vetor[j + 1]
            } else {
                condicao = vetor[j] < vetor[j + 1]
            }

            if (condicao) {
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
io.write('Digite o tipo de ordenação (C - Crescente / D - Descrescente):')
tipo = io.read()

numerosOrdenados = ordenaVetor(numeros, tipo)

io.write('Números ordenados:')
io.write(numerosOrdenados)