const io = require('../io')

let nota1
let nota2
let nota3
let tipoMedia
let mediaCalculada

function calcularMedia(n1, n2, n3, tipo) {
    let media
    if (tipo === 'A') {
        media = (n1 + n2 + n3) / 3
    } else if (tipo === 'P') {
        media = ((n1 * 5) + (n2 * 3) + (n3 * 2)) / 10
    }
    return media
}

io.write('Insira a Nota 1:')
nota1 = io.readFloat()
io.write('Insira a Nota 2:')
nota2 = io.readFloat()
io.write('Insira a Nota 3:')
nota3 = io.readFloat()
io.write('Defina o tipo de média (P-ponderada ou A-aritmética):')
tipoMedia = io.read()

if (tipoMedia !== 'P' && tipoMedia !== 'A') {
    io.write('O tipo de média é inválido!')
} else {
    mediaCalculada = calcularMedia(nota1, nota2, nota3, tipoMedia)
    io.write('A média das notas é: ' + mediaCalculada)
}