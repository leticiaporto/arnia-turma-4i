const form = document.getElementById('subscribe')

form.addEventListener('submit', (event) => {
    event.preventDefault()

    const tituloForm = form.elements['titulo'].value
    const alternativa1Form = form.elements['textoAlternativa1'].value
    const alternativa2Form = form.elements['textoAlternativa2'].value
    const alternativa3Form = form.elements['textoAlternativa3'].value
    const alternativa4Form = form.elements['textoAlternativa4'].value
    /* 
        A variável 'correto' poderá receber 'alternativa1', 'alternativa2', 'alternativa3' ou 'alternativa4' à depender do radio que foi clicado
    */
    const correto = form.elements['correto'].value 

    const questao = {
        titulo: tituloForm,
        alternativas: [
            {
                numero: 1,
                texto: alternativa1Form,
                correta: correto === 'alternativa1' // será true ou false
            },
            {
                numero: 2,
                texto: alternativa2Form,
                correta: correto === 'alternativa2' // será true ou false
            },
            {
                numero: 3,
                texto: alternativa3Form,
                correta: correto === 'alternativa3' // será true ou false
            },
            {
                numero: 4,
                texto: alternativa4Form,
                correta: correto === 'alternativa4' // será true ou false
            }
        ]
    }
})