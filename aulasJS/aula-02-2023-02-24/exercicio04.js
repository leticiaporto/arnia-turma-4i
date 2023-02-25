let io = require("../io")
let anos
let cigarrosDia
let precoMaco
let dias 
let precoUnitario
let gastoTotal

io.write("Digite a quantidade de anos")
anos = io.readInt()
io.write("Quantidade de cigarros por dia")
cigarrosDia = io.readInt()
io.write("Digite o preço do maço")
precoMaco = io.readFloat()

dias = anos * 365
precoUnitario = precoMaco / 20

gastoTotal = cigarrosDia * dias * precoUnitario

io.write('O gasto total foi:' + gastoTotal)