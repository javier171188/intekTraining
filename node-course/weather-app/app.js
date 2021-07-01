const request = require('request')
const fs = require('fs')

const bufferKey = fs.readFileSync('keys.txt')
const access_key = bufferKey.toString()

const url = `http://api.weatherstack.com/current?access_key=${access_key}&query=37.8267,-122.4233&units=f`

request({ url: url, json: true}, (error, response) => {
    const temperature = response.body.current.temperature
    const feelsLike = response.body.current.feelslike
    const weatDescrip = response.body.current.weather_descriptions[0]
    console.log(`${weatDescrip}. It is currently ${temperature} degrees outside. It feels like ${feelsLike}.`)
})