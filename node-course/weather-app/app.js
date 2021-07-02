const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const location = process.argv.slice(2)[0]

if (location){
    geocode(location, (error, {latitude, longitude, location} = {}) => {
        if (error){
            return console.log(error)
        }
    
        forecast(latitude, longitude, (error, forecastData) =>{
            if (error) {
                return console.log(error)
            }
            console.log(location)
            console.log(forecastData)
        })
    })
} else {
    console.log('You need to specify a location.')
}

