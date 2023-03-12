const io = require('../io')

let nomes = []
let notas = []
let nota = 1

function ordenaDados(nomes, notas) {
    let soma = 0
    let media

    for (let i = 0; i < nomes.length - 1; i++) {
        //este for leva a maior letra para última posição
        for (let j = 0; j < nomes.length - 1; j++) {
            if (nomes[j][0] > nomes[j + 1][0]) { //acessa a primera letra dos nomes
                // troca a posição dos nomes
                let aux = nomes[j]
                nomes[j] = nomes[j + 1]
                nomes[j + 1] = aux

                // troca a posição das notas para manter a "conexão" dos índices de nomes e notas
                let aux2 = notas[j]
                notas[j] = notas[j + 1]
                notas[j + 1] = aux2
            }
        }
    }

    for (let i = 0; i < notas.length; i++) {
        soma = soma + notas[i]
    }

    media = soma / notas.length

    for (let i = 0; i < nomes.length; i++) {
        io.write('Nome: ' + nomes[i] + ' - Nota: ' + notas[i])
    }

    io.write('Média das Notas: ' + media)
}

while (nota > 0) {
    io.write('Digite um nome: ')
    let nome = io.read()
    io.write('Digite uma nota: ')
    nota = io.readFloat()
    if (nota > 0) {
        nomes.push(nome)
        notas.push(nota)
    }
}

ordenaDados(nomes, notas)