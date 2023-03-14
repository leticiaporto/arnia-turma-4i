const io = require("../io")

class Pessoa {
    nome
    idade

    constructor(nome, idade) {
        this.nome = nome
        this.idade = idade
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

pessoas = pessoas.filter((pessoa) => {
    return pessoa.idade >= 18
})

io.write('Pessoas maiores de idade:')
console.log(pessoas)