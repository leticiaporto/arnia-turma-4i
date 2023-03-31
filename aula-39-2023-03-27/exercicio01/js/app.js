const form = document.getElementById('subscribe')

form.addEventListener('submit', (event) => {
    event.preventDefault()

    const tituloForm = form.elements['titulo'].value
    const alternativa1Form = form.elements['textoAlternativa1'].value
    const alternativa2Form = form.elements['textoAlternativa2'].value
    const alternativa3Form = form.elements['textoAlternativa3'].value
    const alternativa4Form = form.elements['textoAlternativa4'].value
    const correto = form.elements['correto'].value

    const questao = {
        titulo: tituloForm,
        alternativas: [
            {
                texto: alternativa1Form,
                correta: correto === 'alternativa1' // true ou false
            },
            {
                texto: alternativa2Form,
                correta: correto === 'alternativa2'
            },
            {
                texto: alternativa3Form,
                correta: correto === 'alternativa3'
            },
            {
                texto: alternativa4Form,
                correta: correto === 'alternativa4'
            }
        ]
    }
})