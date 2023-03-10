const io = require("../io")

let nomes = []
let notas = []
let quantidade = 3

for (let i = 0; i < quantidade; i++) {
    io.write('Digite o nome: ')
    const nome = io.read()
    nomes.push(nome)

    io.write('Digite a nota: ')
    const nota = io.readFloat()
    notas.push(nota)
}

io.write('Alunos com notas acima de 7: ')

for (let i = 0; i < quantidade; i++) {
    if(notas[i] > 7){
        io.write(nomes[i])
    }
}