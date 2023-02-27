let io = require("../io")

let preco1
let preco2
let media

io.write('Digite o primeiro preço:')
preco1 = io.readFloat()
io.write('Digite o segundo preço:')
preco2 = io.readFloat()
media = (preco1 + preco2) / 2
io.write('A média é: ' + media)