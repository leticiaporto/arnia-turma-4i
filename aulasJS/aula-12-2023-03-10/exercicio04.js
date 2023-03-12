let vetor = [1000, 40, 340, 501, 500, 1093, 245, 21]

function exercicio04(vetor){
    vetor = vetor.map((elemento) => {
        if(elemento % 2 === 0) {
            return elemento * 4
        }
        return elemento * 3
    })
    
    vetor = vetor.filter((elemento) => {
        return elemento > 100
    })

    return vetor
}

const novoVetor = exercicio04(vetor)
console.log(novoVetor)