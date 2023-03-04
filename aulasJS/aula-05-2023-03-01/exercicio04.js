const io = require("../io")

const login = 'leticiaportosoares'
const senha = 'teste123@'
let loginUsuario
let senhaUsuario

io.write('Digite o seu login:')
loginUsuario = io.read()
io.write('Digite a sua senha:')
senhaUsuario = io.read()

if(loginUsuario === login && senhaUsuario === senha) {
    io.write('Bem vindo ao sistema!')
} else {
    io.write('Dados inválidos.')
}