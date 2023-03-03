const io = require("../io")

let salario
let reajuste //70 = 70% / 55 = 55%
let valorReajuste

io.write("Insira o salário:")
salario = io.readFloat()
io.write("Insira o percentual de reajuste:")
reajuste = io.readFloat()

valorReajuste = salario * reajuste / 100
salario = salario + valorReajuste

io.write("O novo salário é: R$" + salario)