expandir = (itemId) => {
    const divItem = document.getElementById(itemId)
    const descricao = divItem.querySelector('.descricao')
    let mostrar = false

    //recupera todas as descrições
    const descricoes = document.getElementsByClassName('descricao')

    //verifica o que deve ser feito com a da descrição atual
    if (descricao.classList.contains('none')) {
        mostrar = true
    } else if (descricao.classList.contains('block')) {
        mostrar = false
    }

    //oculta todas as descrições
    for (var i = 0; i < descricoes.length; i++) {
        descricoes[i].classList.remove('block')
        descricoes[i].classList.add('none')
    }

    /* 
        Outra forma de passar por todas as descrições. 
        É necessário transformar "descrições" em um array.

        Array.from(descricoes).forEach((elemento) => {
            elemento.classList.remove('block')
            elemento.classList.add('none') 
        })
    */

    //trata da descrição atual
    if (mostrar) {
        descricao.classList.remove('none')
        descricao.classList.add('block')
    } else {
        descricao.classList.remove('block')
        descricao.classList.add('none')
    }
}