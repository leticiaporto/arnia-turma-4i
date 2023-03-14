const io = require("../io")

class Pessoa {
    nome
    idade

    constructor(nome, idade) {
        this.nome = nome
        this.idade = idade
    }

    aumentarIdade() {
        this.idade = this.idade + 1
    }
}

let pessoas = []
for (let i = 0; i < 3; i++) {
    io.write('Digite o nome:')
    const nome = io.read()
    io.write('Digite a idade:')
    const idade = io.readInt()

    const pessoa = new Pessoa(nome, idade)
    pessoas.push(pessoa)
}

pessoas.forEach((pessoa) => {
    pessoa.aumentarIdade()
})

io.write('Pessoas com idades atualizadas:')
console.log(pessoas)