const animesRouters = require('./animes')
//const devolucionesRouters = require('./devoluciones')
//const clientessRouters = require('./clientes')

function routerApi(app){
    app.use('/animes', animesRouters)
}
module.exports = routerApi