const animesRouters = require('./animes')
//const usuariosRouters = require('./usuarios')
//const listasRouters = require('./listas')
const tiendaRouters = require('./tienda')
const usuariosRouters = require('./usuarios')
function routerApi(app){
    app.use('/animes', animesRouters)
    app.use('/tienda', tiendaRouters)
    app.use('/usuarios', usuariosRouters)
}
module.exports = routerApi