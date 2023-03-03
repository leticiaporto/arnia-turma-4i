const io = require("../io")

let c 
let f

io.write("Insira a temperatura em Fahrenheit:")
f = io.readFloat()

c = ((f - 32) / 9) * 5 

io.write("O valor em Celsius é: " + c)