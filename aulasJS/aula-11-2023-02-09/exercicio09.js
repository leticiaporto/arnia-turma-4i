// [6, 7, 8, 9, 9, 9, 2, 2, 1, 5, 5, 5, 5, 5, 23, 23]
const numeros = []
const frequencias = []
const numerosSemRepeticao = []

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    let numero = Math.floor(Math.random() * (max - min) + min); // O valor máximo é excluído e o mínimo é incluído
    return numero
}

// função para ordenação dos vetores
function ordenaFrequenciaNumeros(frequencias, numeros) {
    for (let i = 0; i < frequencias.length - 1; i++) {
        //este for leva o menor número para última posição
        for (let j = 0; j < frequencias.length - 1; j++) {
            if (frequencias[j] < frequencias[j + 1]) {
                // troca a posição das frequências
                let aux = frequencias[j]
                frequencias[j] = frequencias[j + 1]
                frequencias[j + 1] = aux
                // troca a posição das numeros
                let aux2 = numeros[j]
                numeros[j] = numeros[j + 1]
                numeros[j + 1] = aux2
            }
        }
    }
}

//função verifica se o número já existe no vetor
function numeroExiste(vetor, numero) {
    let existe = false
    for (let i = 0; i < vetor.length; i++) {
        let numeroVetor = vetor[i]
        if(numeroVetor === numero) {
            existe = true
        } 
    }
    return existe
}

for (let i = 0; i < 100; i++) {
    const numero = getRandomInt(1, 60)
    numeros.push(numero)
}

//calcula a frequência de cada número
for (let i = 0; i < numeros.length; i++) {
    let existe = numeroExiste(numerosSemRepeticao, numeros[i])

    //calcula a frequência apenas se já não foi calculada antes
    if(!existe) {
        let frequencia = 0

        //for que verifica quantas vezes o número apareceu no vetor
        for (let j = 0; j < numeros.length; j++) {
            if (numeros[i] === numeros[j]) {
                frequencia++
            }
        }
        //salva o número em outro vetor
        numerosSemRepeticao[numerosSemRepeticao.length] = numeros[i]
        //salva a frequencia
        frequencias[frequencias.length] = frequencia

        //O número e sua frequência devem estar na mesma posição nos vetores "numerosSemRepeticao" e "frequencias"
    }
}

//ordena a frequencia e junto a isso ordena os numeros
ordenaFrequenciaNumeros(frequencias, numerosSemRepeticao)
console.log(numeros, frequencias, numerosSemRepeticao)