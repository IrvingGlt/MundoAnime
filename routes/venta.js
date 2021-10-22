const express = require('express')
const passport = require('passport')
const router = express.Router()
const Venta = require('../models/venta')

router.get('/',
passport.authenticate('jwt', {session:false}),
(req, res)=>{
    try{
        res.json([{
          status:'pagado' ,
          idVenta: 1,
          totalPrice: 10000,
          idUsuario: 1,
          idProducto: '2',
    },
                        {
        status:'pagado' ,
        idVenta: 2,
        totalPrice: 5000,
        idUsuario: 1,
        idProducto: '2',
                        }
                ])
    }catch(error){
        console.log(`Error: ${error}`)
    }
})

router.get('/filter', 
passport.authenticate('jwt', {session:false}),
(req, res)=>{
    res.json(
        {
        status:'pagado' ,
        idVenta: 1,
        totalPrice: 10000,
        idUsuario: 1,
        idProducto: '2',
        }
              )
})

module.exports = router
