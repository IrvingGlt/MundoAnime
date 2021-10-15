const animesRouters = require('./animes')
//const usuariosRouters = require('./usuarios')
//const listasRouters = require('./listas')
const tiendaRouters = require('./tienda')
const usuariosRouters = require('./usuarios')
const ventaRouters = require('./venta')
const productoRouters = require('./producto')
function routerApi(app){
    app.use('/animes', animesRouters)
    app.use('/tienda', tiendaRouters)
    app.use('/usuarios', usuariosRouters)
    app.use('/venta', ventaRouters)
    app.use('/producto', productoRouters)
}
module.exports = routerApi
