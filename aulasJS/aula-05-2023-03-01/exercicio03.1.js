const io = require("../io")

let c 
let f

io.write("Insira a temperatura em Celsius:")
c = io.readFloat()

f = ((9 * c) + 32) / 5