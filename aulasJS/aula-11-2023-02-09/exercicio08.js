const dezenas = []

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    let numero = Math.floor(Math.random() * (max - min) + min); // O valor máximo é excluído e o mínimo é incluído
    if (numero < 10) {
        numero = '0' + numero
    }

    return numero
}

for (let i = 0; i < 6; i++) {
    const dezena = getRandomInt(1, 60)

    //Testa se o array dezenas já possui aquela dezena. Só inclui se não possuir.
    if (!dezenas.includes(dezena)) {
        dezenas.push(dezena)
    }
}

console.log(dezenas)