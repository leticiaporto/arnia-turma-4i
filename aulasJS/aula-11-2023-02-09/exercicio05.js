const io = require('../io')

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

function exercicio05() {
    let pares = []
    let impares = []
    let paresOrdenados = []
    let imparesOrdenados = []

    for (let i = 0; i < 5; i++) {
        io.write('Digite um número: ')
        let numero = io.readInt()
        // testa se o número é par ou ímpar e já adiciona no array correto
        if (numero % 2 === 0) {
            pares.push(numero)
        } else {
            impares.push(numero)
        }
    }

    // a parte de ordenação foi separada em um função (igual ao exercício 04), para que possa ser chamada 2 vezes sem repetição de código
    paresOrdenados = ordenaVetor(pares, 'C')
    imparesOrdenados = ordenaVetor(impares, 'D')

    io.write('Pares ordenados:')
    io.write(paresOrdenados)
    io.write('Ímpares ordenados:')
    io.write(imparesOrdenados)
}

exercicio05()