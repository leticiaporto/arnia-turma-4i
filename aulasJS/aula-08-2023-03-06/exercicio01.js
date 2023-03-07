const io = require('../io')

let vetor = []

for (let i = 0; i < 10; i++) {
    io.write('Insira um número')
    let numero = io.readInt()
    vetor[i] = numero
}

/* 
    let contador = 0
    while (contador < 10) {
        io.write('Insira um número')
        let numero = io.readInt()
        vetor.push(numero)
        contador++
    } 
*/

io.write(vetor)

for (let i = 0; i < 10; i++) {
    let numero = vetor[i]
    let sucessor = numero + 1
    io.write(sucessor)
}