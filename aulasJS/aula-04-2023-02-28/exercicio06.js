let quantidade = 5
let contador = 0
let elemento = 1
let anterior = 0
let anteriorTemporario

while(contador < 5) {
    console.log(elemento) // 1 - 1 - 2 - 3 - 5 - 8 

    anteriorTemporario = elemento // guarda o valor do elemento antes de recalcular
    elemento = elemento + anterior // calcula o novo elemento da serie
    anterior = anteriorTemporario // atualiza o anterior

    contador++
}