const io = require('../io')



function testaTriangulo() {
    let a
    let b
    let c

    io.write('Digite o valor do 1º segmento de reta: ')
    a = io.readInt()

    io.write('Digite o valor de 2º segmento de reta: ')
    b = io.readInt()

    io.write('Digite o valor de 3º segmento de reta: ')
    c = io.readInt()

    if (a + b > c && b + c > a && a + c > b) {
        return 'Esses segmentos de reta formam um triângulo.'
    } else {
        return 'Esses segmentos de reta não formam um triângulo.'
    }
}

const resultado = testaTriangulo()
io.write(resultado)
