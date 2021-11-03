const express = require('express')
const passport = require('passport')
const { ctrlDeleteUsuarios } = require('../controllers/usuarios/ctrlDeteleUsuarios')
const { ctrlSelectUsuarios } = require('../controllers/usuarios/ctrlSelectUsuarios')
const { ctrlUpdateUsuarios } = require('../controllers/usuarios/ctrlUpdateUsuarios')
const router = express.Router()


router.get('/',
passport.authenticate('jwt', {session:false}),
ctrlSelectUsuarios
)

router.put('/update',
passport.authenticate('jwt', {session:false}),
ctrlUpdateUsuarios
)

router.delete('/delete',
passport.authenticate('jwt', {session:false}),
ctrlDeleteUsuarios
)

module.exports = router
