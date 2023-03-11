function questao01(vetor) {
    let impares = []
    let somaPares = 0
    let contador = 0

    impares = vetor.filter((elemento) => {
        return elemento % 2 !== 0
    })

    console.log(impares)

    vetor.forEach((elemento) => {
        if(elemento % 2 === 0) {
            somaPares = somaPares + elemento
        }
    })

    console.log(somaPares)

    while(contador < somaPares) {
        console.log('Javascript é muito bom')
        contador++ 
    }
}

questao01([3, 7, 8, 2, 1])