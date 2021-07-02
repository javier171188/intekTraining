const path = require('path')
const express = require('express')
const hbs = require('hbs')


const app = express()

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewPath)
hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('',(req, res) => {
    res.render('index',{
        title:"Weather",
        name: "Andrew Mead"
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        name:'Andrew'
    })
})

app.get('/help', (req, res) => {
    res.render('help',{
        title: 'Help',
        helpText: 'This is a helpful text.',
        name: "Andrew Mead"
    })
})

app.get('/weather', (req, res) => {
    res.send({
        forecast: "forecast",
        location: "location" 
    })
})

app.get('/help/*', (req, res) => {
    res.render('404',{
        title:'Error',
        name:'Andrew',
        message:'Help article not found'
    })
})

app.get('*', (req, res) => {
    res.render('404',{
        title:'404',
        name:'Andrew',
        errorMessage:'Page not found'
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})
