const express = require('express')
const passport = require('passport')
const router = express.Router()
const Animes = require('../models/animes')

router.get('/', 
passport.authenticate('jwt', {session:false}),
(req, res)=>{    
    try{
        res.json([{
                    Nombre: 'Tokyo Revengers',
                    Genero: 'Accion',
                    fechaE: '10/04/21',
                    Capitulos: 25,
                    Estatus: 'finished'
                  },
                  {
                    Nombre: 'Mushoku Tensei',
                    Genero: 'Isekai',
                    fechaE: '10/01/21',
                    Capitulos: 25,
                    Estatus: 'In broadcast'
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
            Nombre: 'Mushoku Tensei',
            Genero: 'Isekai',
            fechaE: '10/01/21',
            Capitulos: 25,
            Estatus: 'In broadcast'
          })
})

module.exports = router
