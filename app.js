const path = require('path'); 
const express = require('express'); 
const hbs = require('hbs'); 
 
const app = express(); 
const publicDirectoryPath = path.join(__dirname, '../public'); 
const viewsPath = path.join(__dirname, '../templates/views'); 
const partialsPath = path.join(__dirname, '../templates/partials')
 
app.set('view engine', 'hbs'); 
app.set('views', viewsPath); 
hbs.registerPartials(partialsPath); 
 
app.use(express.static(publicDirectoryPath)); 
 
app.get('', (req, res) => { 
    res.render('index', { 
 
        title: 'ExpressApp', 
        name: 'MyName' 
    }) 
 
}) 
 
app.get('/about', (req, res) => { 
    res.render('about', { 
 
        title: 'About Me', 
        name: 'MyName' 
    }) 
 
}) 
 
app.get('./help', (req, res) => { 
    res.render('help', { 
        helpText: 'This is name helpful text.', 
        title: 'Help', 
        name: 'MyName' 
    }) 
 
}) 
 
app.listen(4000, () => { 
    console.log('Server is up on port 4000') 
}) 
app.get('/ExpressApp', (req, res) => { 
    res.send({ 
        forecast: 'It is snowing', 
        location: 'Philadelphia' 
    }) 
}) 
app.get('/help/*', (req, res) => { 
    res.render('404', { 
        title: '404', 
        name: 'MyName', 
        errorMessage: 'Help article not found.' 
    }) 
}) 
app.get('*', (req, res) => { 
    res.render('404', { 
        title: '404', 
        name: 'MyName', 
        errorMessage: 'Page not found.' 
    }) 
})