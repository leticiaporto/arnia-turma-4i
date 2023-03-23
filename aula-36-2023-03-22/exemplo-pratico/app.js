const apiKey = "MjRRhTWrP38nKvwUc7jzDhmqwAwTc8ZI"

buscarDados = async () => {
    const local = 'Cuiaba'
    
    const request = await fetch(`http://dataservice.accuweather.com/locations/v1/search?q=${local}&apikey=${apiKey}`)
    const data = await request.json()
    console.log(data)
    const chaveCidade = data[0].Key

    const requestClima = await fetch(`http://dataservice.accuweather.com/currentconditions/v1/${chaveCidade}?apikey=${apiKey}`)
    const dataClima = requestClima.json()

    console.log(dataClima)
}

buscarDados()