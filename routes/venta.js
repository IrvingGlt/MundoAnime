const express = require('express')
const router = express.Router()
const Venta = require('../models/venta')

router.get('/', (req, res)=>{
    try{
        res.json({
          status:'pagado' ,
          idVenta: 1,
          totalPrice: 10000,
    })
    }catch(error){
        console.log(`Error: ${error}`)
    }
})

router.get('/filter', (req, res)=>{
    res.json(
        {

        })
})

module.exports = router
