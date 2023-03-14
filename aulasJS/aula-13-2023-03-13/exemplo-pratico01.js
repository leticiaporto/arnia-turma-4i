const io = require("../io")
class Pessoa { 
    cpf
    nome
    sexo
    anoNascimento

    constructor(cpfC, nomeC, sexoC, anoC) {
        this.cpf = cpfC
        this.nome = nomeC
        this.sexo = sexoC
        this.anoNascimento = anoC
    }

    idade(){
        return 2023 - this.anoNascimento
    }
}

let cpf
let nome
let ano

io.write("Defina o CPF")
cpf = io.read()
io.write("Defina o nome")
nome = io.read()
io.write("Defina o ano de nascimento")
ano = io.read()

let pessoa1 = new Pessoa(cpf, nome, ano)

console.log(pessoa1.idade())
console.log(pessoa1);