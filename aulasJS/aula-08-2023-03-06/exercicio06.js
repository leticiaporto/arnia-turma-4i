const io = require("../io")

let contador = 0
let elemento = 1
let anterior = 0
let sequencia = []
let quantidade

io.write('Sequência de Fibonacci')
io.write('Digite a quantidade de números:')
quantidade = io.readInt()

while(contador < quantidade){ // 1ª - 2ª - 3ª - 4ª
    sequencia.push(elemento) // 1 - 1 - 2 - 3

    let anteriorTemporario = elemento // 1 - 1 - 2 - 3
    elemento = elemento + anterior // 1 - 2 - 3 - 5
    anterior = anteriorTemporario // 1 - 1 - 2 - 3

    contador++
}

io.write('Sequência na ordem inversa:')
for(let i = quantidade - 1; i >= 0; i--) {
    io.write(sequencia[i])
}