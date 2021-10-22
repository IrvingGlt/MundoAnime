const express = require('express')
const passport = require('passport')
const router = express.Router()
const Usuarios = require('../models/usuarios')
router.get('/', 
passport.authenticate('jwt', {session:false}),
(req, res)=>{
    try{
        res.json({
        idUsuario: 1,
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
