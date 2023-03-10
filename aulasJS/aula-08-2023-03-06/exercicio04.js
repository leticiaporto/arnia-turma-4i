const io = require('../io')

let primos = []

for (let i = 0; i < 10; i++) {
    io.write('Insira um número')
    let numero = io.readInt()
    let divisores = 0
    //for que vai de 1 até o número para calcular a quantidade de divisores
    for (let j = 1; j <= numero; j++) {
        if (numero % j === 0) { // numero é divisível por j? se sim, incrementa a quantiade de divisores
            divisores++
        }
    }
    
    //se a quantidade de divisores for igual á 2, o número é primo. Então o número é adicionado ao vetor "primos"
    if (divisores === 2) {
        primos.push(numero)
    }
}

io.write('Números primos: ' + primos)