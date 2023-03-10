function inverter(texto) {
    let textoInvertido = []
    for (let i = texto.length - 1; i >= 0; i--) {
        textoInvertido.push(texto[i])
    }
    //a função join irá juntar os elementos de um vetor em uma única string
    return textoInvertido.join('')
}

console.log(inverter('arnia'))