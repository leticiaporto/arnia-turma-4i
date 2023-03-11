// REDUCE - utilizado para acumular os elementos de um array (soma ou multiplicação)
const array = [10, 20, 30, 40, 50, 60, 70]

const somaTotal = array.reduce((acumulador, item) => {
    return acumulador - item
}, 0)

console.log(somaTotal)