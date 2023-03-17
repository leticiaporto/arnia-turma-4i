expandir = (itemId) => {
    const divItem = document.getElementById(itemId)
    const descricao = divItem.querySelector('.descricao')

    //recupera todas as descrições
    const descricoes = document.getElementsByClassName('descricao')

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
    if (descricao.classList.contains('none')) {
        descricao.classList.remove('none')
        descricao.classList.add('block')
    } else if (descricao.classList.contains('block')) {
        descricao.classList.remove('block')
        descricao.classList.add('none')
    }
}