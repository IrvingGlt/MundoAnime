const express = require('express')
const animesRouters = require('./animes')
const usuariosRouters = require('./usuarios')
const ventaRouters = require('./venta')
const productoRouters = require('./producto')
const authRouters = require('./auth')

function routerApi(app){
    app.use(express.json())
    app.use('/auth',authRouters)
    app.use('/animes', animesRouters)
    app.use('/usuarios', usuariosRouters)
    app.use('/venta', ventaRouters)
    app.use('/producto', productoRouters)
}
module.exports = routerApi
