const http = require('http');

const url = 'http://api.weatherstack.com/current?access_key=4b8dea77571fe4ed721d6f17522c15b7&query=40,-75&units=m'

const request = http.request(url, (response) => {
    let data = ''

    response.on('data', (chunk) => {
        data = data + chunk.toString()
    })

    response.on('end', () => {
        const body = JSON.parse(data)
        console.log(body);
    })

})

request.on('error', (error) => {
    console.log('An error has occured', error);
})

request.end()