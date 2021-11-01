const express = require('express')
const passport = require('passport')
const { ctrlSelectUsuarios } = require('../controllers/usuarios/ctrlSelectUsuarios')
const router = express.Router()


router.get('/',
passport.authenticate('jwt', {session:false}),
ctrlSelectUsuarios
)

router.put('/',
passport.authenticate('jwt', {session:false}),

)

router.delete('/',
passport.authenticate('jwt', {session:false}),
)

module.exports = router
