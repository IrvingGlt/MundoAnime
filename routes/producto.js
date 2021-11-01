const express = require('express')
const passport = require('passport')
const { ctrlSelectProductos } = require('../controllers/producto/ctrlSelectProducto')
const router = express.Router()


router.get('/',
passport.authenticate('jwt', {session:false}),
ctrlSelectProductos
)

router.put('/',
passport.authenticate('jwt', {session:false}),

)

router.delete('/',
passport.authenticate('jwt', {session:false}),
)


module.exports = router
