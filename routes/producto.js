const express = require('express')
const passport = require('passport')
const router = express.Router()
const Producto = require('../models/producto')

router.get('/', (req, res)=>{
    try{
        res.json([{
          id: '1',
          name: 'Figura de Miku Nakano',
          price: 5000,
          stock: 3
                  },
          { id: '2',
          name: 'Figura de ZeroTwo',
          price: 10000,
          stock: 3

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
          id: '2',
          name: 'Figura de ZeroTwo',
          price: 10000,
          stock: 3
        })
})

module.exports = router
