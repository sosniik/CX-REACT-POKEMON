const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const PORT = process.argv[2] || 4242
const initDatabase = require('./database')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended:true
}))
db = initDatabase()
app.use(cors())

app.get('/pokemons/:id', function(req,res) {
    db.select('*').from('pokemons').where({numéro: req.params.id}).then(function(data) {
        res.json(data);
    })
})

app.get('/pokemons/', function(req,res) {
    // res.json('Hello from prokemon x')
    db.select('*').from('pokemons').then(function(data) {
        res.json(data);
    })
})

app.post('/pokemons', function(req,res) {
    db.insert(req.body).returning('*').into('pokemons').then(function(data) {
        res.json("data")
    })
})

app.put('/pokemons/:id', function(req,res) {
    db('pokemons').where({numéro : req.params.id}).update({
        nom: req.body.nom || null
    }).returning('*').then(function(data) {
        res.json(data)
    })
})

app.delete('/pokemons/:id', function(req,res) {
    db('pokemons').where({numéro : req.params.id}).del().then(function(data) {
        res.json({succes : true})
    })
})

app.get('/pokemons/:id', function(req,res) {
    db('pokemons').where({numéro : req.params.id}).select().then(function(data) {
        res.json(data)
    })
})

app.listen(PORT, () => {
    console.log("Server is running on port "+PORT)
    // req.json('Hello World')
})
