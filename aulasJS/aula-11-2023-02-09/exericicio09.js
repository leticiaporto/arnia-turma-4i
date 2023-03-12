const numeros = []
const frequencia = []

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    let numero = Math.floor(Math.random() * (max - min) + min); // O valor máximo é excluído e o mínimo é incluído
    return numero
}

function ordenaFrequenciaDezena(frequencia, dezena) {
    for (let i = 0; i < frequencia.length - 1; i++) {
        //este for leva o menor número para última posição
        for (let j = 0; j < frequencia.length - 1; j++) {
            if (frequencia[j] < frequencia[j + 1]) {
                // troca a posição das frequências
                let aux = frequencia[j]
                frequencia[j] = frequencia[j + 1]
                frequencia[j + 1] = aux
                // troca a posição das numeros
                let aux2 = dezena[j]
                dezena[j] = dezena[j + 1]
                dezena[j + 1] = aux2
            }
        }
    }
}

for (let i = 0; i < 100; i++) {
    const numero = getRandomInt(1, 60)
    numeros.push(numero)
}

//calcula a frequência de cada número
for (let i = 0; i < numeros.length; i++) {
    for (let j = 0; j < numeros.length; j++) {
        if (numeros[i] === numeros[j]) {
            if (frequencia[i]) {
                frequencia[i] = frequencia[i] + 1
            } else {
                frequencia[i] = 1
            }
        }
    }
}

//ordena a frequencia junto a isso ordena as numeros
ordenaFrequenciaDezena(frequencia, numeros)
console.log(frequencia, numeros)