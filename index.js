const express = require('express')
const bodyParser = require('body-parser')
const request = require('request')
const app = express()

app.set('port',(process.env.PORT || 5000))

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.get('/', function (req, res) {
    res.send('Hello Youtube!')
})

app.get('/webhook/', function(req, res) {
    if(req.query['hub.verify_token'] === 
      'mi_numero_es_mi_contraseña') {
        res.send(req.query['hub.challenge'])
      }
    res.send('No entra')
})

app.listen(app.get('port'), function(){
    console.log('running on port', app.get('port'))
})
