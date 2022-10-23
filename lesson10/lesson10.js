const getData = async() =>{
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'b6e5c43dcamsh0acfaea2676ac9fp11af8djsn7de1bffb9d03',
            'X-RapidAPI-Host': 'api-basketball.p.rapidapi.com'
        }
    };
    var response = ''

    response = await fetch('https://api-basketball.p.rapidapi.com/teams?league=12&season=2019-2020', options)

    data = await response.json()

    console.log(data)

    teams = data.response
    teams.forEach(element =>{
        console.log(element)

        var name = element.name
        var imgLink = element.logo

        title = document.createElement('h1')
        img = document.createElement('img')

        title.innerHTML = name
        img.src = imgLink

        document.getElementById('main').appendChild(title)
        document.getElementById('main').appendChild(img)
    })
}
getData()
