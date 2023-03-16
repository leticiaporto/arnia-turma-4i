let contraste = false;

function carregarEstilo() {
    const body = document.getElementById('body')
    body.className = 'body'

    const section = document.getElementById('section')
    section.className = 'section'

    const firstParagraph = document.getElementById('firstParagraph')
    firstParagraph.className = 'section-paragraph paragraph'

    const secondParagraph = document.getElementById('secondParagraph')
    secondParagraph.className = 'section-paragraph paragraph'

    const thirdParagraph = document.getElementById('thirdParagraph')
    thirdParagraph.className = 'paragraph'
}

function trocarTema() {
    if (contraste) {
        const body = document.getElementById('body')
        body.className = 'body'

        contraste = false
    } else {
        const body = document.getElementById('body')
        body.className = 'body-dark'

        contraste = true
    }
}

function listarAtributos() {
    const firstParagraph = document.getElementById('firstParagraph')
    console.log(firstParagraph.attributes)
    const atributos = firstParagraph.getAttributeNames();

    let listarAtributos = "<ul>";

    for (let i = 0; i < atributos.length; i++) {
        listarAtributos +=
            "<li>" +
            atributos[i] +
            ": " +
            firstParagraph.getAttribute(atributos[i]) +
            "</li>";
    }

    listarAtributos += "</ul>";
    document.getElementById('atributtes').innerHTML = listarAtributos;

}