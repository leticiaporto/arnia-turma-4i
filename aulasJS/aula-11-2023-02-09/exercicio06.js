function ordenaDados(nomes, notas) {
    for (let i = 0; i < nomes.length - 1; i++) {
        //este for leva o maior para última posição
        for (let j = 0; j < nomes.length - 1; j++) {
            if (nomes[j][0] > nomes[j + 1][0]) {
                let aux = nomes[j]
                nomes[j] = nomes[j + 1]
                nomes[j + 1] = aux

                let aux2 = notas[j]
                notas[j] = notas[j + 1]
                notas[j + 1] = aux2
            }
        }
    }

    for (let i = 0; i < nomes.length; i++) {
        console.log('Nome:', nomes[i], 'Nota:', notas[i])
    }

}

const nomes = ['Letícia', 'Adolfo', 'Márcio', 'Grasi','Alex']
const notas = [9, 9.5, 8, 9.8, 9.1]
ordenaDados(nomes, notas)