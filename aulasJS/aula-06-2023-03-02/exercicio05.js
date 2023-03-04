const io = require("../io")

let numero

io.write("Digite um número: ")
numero = io.readInt()

for (let i = 0; i < numero; i++) {
    if (i % 2 === 0) {
        io.write(i)
    }
}