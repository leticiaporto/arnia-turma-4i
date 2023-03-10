function tiraCaracter(texto1, texto2) {
    let primeiroCaracter = texto2[0]
    let vetor = []

    for (let i = 0; i < texto1.length; i++) {
        let caracter = texto1[i]
        if (caracter !== primeiroCaracter) {
            vetor.push(caracter)
        }
    }
    
    //a função join irá juntar os elementos de um vetor em uma única string
    return vetor.join('')
}

console.log(tiraCaracter('arnia', 'a'))