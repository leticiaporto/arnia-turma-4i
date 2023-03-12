const vetor = [1000, 40, 340, 501, 500, 1093, 245, 21]
let novoVetor = []

novoVetor = vetor.map((elemento) => {
    if (elemento > 500) {
        return elemento + (elemento * 0.15)
    }
    return elemento
})

console.log(novoVetor)