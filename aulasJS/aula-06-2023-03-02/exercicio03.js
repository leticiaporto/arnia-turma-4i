const io = require("../io")

let nome
let quantidade = 0
let maria = "Maria"


for (let i = 0; i < 10; i++) {
    io.write("Digite um nome: ")
    nome = io.read()

    if (nome === maria) {
        quantidade++
    }
}

io.write("Quantidade de Marias:" + quantidade)