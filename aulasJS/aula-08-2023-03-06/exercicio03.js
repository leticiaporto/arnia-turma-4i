const io = require('../io')

let vetor = []
let pares = []
let impares = []

for (let i = 0; i < 10; i++) {
    io.write('Insira um número')
    let numero = io.readInt()
    // se o número for par, insere no vetor "pares"
    if (numero % 2 === 0) {
        pares.push(numero)
    } else {// se o número for impar, insere no vetor "impares"
        impares.push(numero)
    }
}

io.write('Números pares: ' + pares)
io.write('Números ímpares: ' + impares)