//MAP - alterar cada elemento do array e retornar um novo array 
let array = [29.5, 4.6, 50, 60, 78, 90]

array = array.map((elemento) => {
    return elemento + (elemento * 0.2)
})

console.log(array)

// function dobra(elemento) {
//     return elemento * 2
// }

// array = array.map(dobra)

// array = array.map(function (elemento) {
//     return elemento * 2
// })