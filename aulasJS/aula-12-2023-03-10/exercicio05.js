function acrescentaOrdenacao(elem){
    return elem + "º"
}

function simulaMap(vetorF, func) {
    let vetorLocal = []
    for(let i = 0; i < vetorF.length; i++){
        let aux = func(vetorF[i])
        vetorLocal.push(aux)
    }
    return vetorLocal
}

let vetor = [1, 2, 3, 4, 5]
vetor = simulaMap(vetor, acrescentaOrdenacao)
console.log(vetor)