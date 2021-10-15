const express = require('express')
const router = express.Router()
const Producto = require('../models/producto')

router.get('/', (req, res)=>{
    try{
        res.json({
          id: '1',
          name: 'Figura de Miku Nakano',
          price: 5000,
          stock: 3,
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
