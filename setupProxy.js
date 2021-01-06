const proxy = require('http-proxy-middleware')
module.exports = function(app) {
    app.use(proxy('/pokemons/', 
        {target: 'http://localhost:4242/'}
    ))}