const express = require('express')
const router = express.Router()
const Usuarios = require('../models/usuarios')
router.get('/', (req, res)=>{
    try{
        res.json({
        name: 'Irving',
        lastName: 'Lopez',
        phone: '9212460264',
        genre: 'H',
        country: 'Mexico',
        email: 'iinf18.ilopezt@itesco.edu.mx',
        direccion: 'Prol Zaragoza 2007'
    })
    }catch(error){
        console.log(`Error: ${error}`)
    }
    })



module.exports = router
