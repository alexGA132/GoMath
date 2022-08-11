const express = require('express');

let userLogged;
const app = express()
const ejs = require('ejs')
//const Auth = require('./firebase')

//var publicDir = require('path'.join(__dirname, 'publiv'));

app.listen(5670)

app.set('view-engine', 'ejs')
app.use(express.urlencoded({extended : false}))

app.get('/', (req, res) => {
    res.render('index.ejs')
})


app.get('/login', (req, res) => {
    res.render('login.ejs')
})


app.get('/registrar', (req, res) => {
    res.render('registrar.ejs')
})

app.post('/registrar', (req, res) =>{

})