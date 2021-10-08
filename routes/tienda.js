const express = require('express')

const router = express.Router()

router.get('/', (req, res)=>{
    res.json([
        {
            Name: 'Figura de Zerotwo',
            Price: 2000
        },
        {
            Name: 'Camiseta de Miku',
            Price: 250
        }
    ])
})

router.get('/filter', (req, res)=>{
    res.json(
        {
            Name: 'Figura de Zerotwo',
            Price: 2000
        })
})

module.exports = router