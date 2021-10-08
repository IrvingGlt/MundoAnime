const animesRouters = require('./animes')
//const usuariosRouters = require('./usuarios')
//const listasRouters = require('./listas')
const tiendaRouters = require('./tienda')
function routerApi(app){
    app.use('/animes', animesRouters)
    app.use('/tienda', tiendaRouters)
}
module.exports = routerApi