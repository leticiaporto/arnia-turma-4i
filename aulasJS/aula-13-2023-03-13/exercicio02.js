const io = require('../io')
class Pessoa {
    nome
    idade

    constructor(nome, idade) {
        this.nome = nome
        this.idade = idade
    }
}

const pessoas = []

for (let i = 0; i < 5; i++) {
    io.write('Definir o nome:')
    const nome = io.read()
    io.write('Defina a idade:')
    const idade = io.readInt()
    
    const pessoa = new Pessoa(nome, idade)
    pessoas.push(pessoa)
}

/* Ordenação pelo método da bolha

for (let i = 0; i < pessoas.length - 1; i++) {
    for(let j = 0; j < pessoas.length - 1; j++) {
        if(pessoas[j].nome[0] > pessoas[j + 1].nome[0]) {
            let aux = pessoas[j]
            pessoas[j] = pessoas[j + 1]
            pessoas[j + 1] = aux
        }
    }
} 

*/

pessoas.sort((a, b) => {
    if (a.nome > b.nome) {
      return 1;
    }
    if (a.nome < b.nome) {
      return -1;
    }
    return 0;
});

console.log(pessoas)