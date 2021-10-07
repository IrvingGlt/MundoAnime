const express = require('express')

const router = express.Router()

router.get('/', (req, res)=>{
    res.json([
        {
            Name: 'Tokyo Revengers',
            Genero: 'Accion'
        },
        {
            Name: 'Kenichi',
            Genero: 'Artes Marciales'
        }
    ])
})

router.get('/filter', (req, res)=>{
    res.json(
        {
            Name: 'Tokyo Revengers',
            Genero:'Accion'
        })
})

module.exports = router