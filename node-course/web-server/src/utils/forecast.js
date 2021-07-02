const request = require('request')
const fs = require('fs')

const forecast = (lat, lon, callback) => {
    const buffKeyW = fs.readFileSync('key_w.txt')
    const accKeyWeth = buffKeyW.toString()

    const url = `http://api.weatherstack.com/current?access_key=${accKeyWeth}&query=${lat},${lon}&units=f`

    request({ url, json: true}, (error, {body}) => {
        if (error){
            callback('Unable to conect to weather service!', undefined)
        } else if ( body.error) {
            callback('Unable to find location', undefined)
        } else{
            const temperature = body.current.temperature
            const feelsLike = body.current.feelslike
            const weatDescrip = body.current.weather_descriptions[0]
            const data = `${weatDescrip}. It is ${temperature} degrees. It feels like ${feelsLike}.`
            callback(undefined, data)
        }
    })
}

module.exports = forecast