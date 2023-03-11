//FILTER - filtrar elementos de um vetor de acordo com alguma condição
let array = [3, 5, 6, 1, 8, 9]

array = array.filter((elemento) => {
    return elemento % 2 === 0
})

console.log(array)