const express = require('express')
const router = express.Router()
const Animes = require('../models/animes')

router.get('/', (req, res)=>{    
    try{
        res.json({
        Nombre: 'Tokyo Revengers',
        Genero: 'Accion',
        fechaE: '10/04/21',
        Capitulos: 25,
        Estatus: 'finished'
    })
    }catch(error){
        console.log(`Error: ${error}`)
    }
})

router.get('/filter', (req, res)=>{
    res.json(
        {
            Nombre: 'Tokyo Revengers',
            Genero:'Accion'
        })
})

module.exports = router
