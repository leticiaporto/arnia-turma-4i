const io = require('../io')

let nomes = []
for (let i = 0; i < 5; i++) {
    io.write('Digite um nome: ')
    let nome = io.read()
    nomes.push(nome)
}

for (let i = 0; i < nomes.length - 1; i++) {
    //este for leva a maior letra para última posição
    for (let j = 0; j < nomes.length - 1; j++) {
        if (nomes[j][0] > nomes[j + 1][0]) { //acessa a primera letra dos nomes
            // troca a posição dos nomes
            let aux = nomes[j]
            nomes[j] = nomes[j + 1]
            nomes[j + 1] = aux
        }
    }
}

io.write('Nomes ordenados:')

for (let i = 0; i < nomes.length; i++) {
    io.write(nomes[i])
}