const express = require('express')
const passport = require('passport')
const { ctrlDeleteUsuarios } = require('../controllers/usuarios/ctrlDeleteUsuarios')
const { ctrlSelectUsuarios } = require('../controllers/usuarios/ctrlSelectUsuarios')
const { ctrlUpdateUsuarios } = require('../controllers/usuarios/ctrlUpdateUsuarios')
const { ctrlCreateUsuarios } = require('../controllers/usuarios/ctrlCreateUsuarios')
const router = express.Router()


router.get('/',
passport.authenticate('jwt', {session:false}),
ctrlSelectUsuarios
)

router.put('/:email',
passport.authenticate('jwt', {session:false}),
ctrlUpdateUsuarios
)

router.post('/',
passport.authenticate('jwt', {session:false}),
ctrlCreateUsuarios
)

router.delete('/:email',
passport.authenticate('jwt', {session:false}),
ctrlDeleteUsuarios
)

module.exports = router
