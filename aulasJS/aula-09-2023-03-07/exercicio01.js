const io = require('../io')

let anos
let meses
let dias

function calculaIdade(anos, meses, dias) {
    return (anos * 365) + (meses * 30) + dias
}

io.write('Informe os anos:')
anos = io.readInt()
io.write('Informe os meses:')
meses = io.readInt()
io.write('Informe os dias:')
dias = io.readInt()

const resultado = calculaIdade(anos, meses, dias)
io.write('A idade em dias é: ' + resultado)