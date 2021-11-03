const express = require('express')
const passport = require('passport')
const { ctrlDeleteProducto } = require('../controllers/producto/ctrlDeleteProducto.Js')
const { ctrlSelectProductos } = require('../controllers/producto/ctrlSelectProducto')
const { ctrlUpdateProducto } = require('../controllers/producto/ctrlUpdateProducto')
const router = express.Router()


router.get('/',
passport.authenticate('jwt', {session:false}),
ctrlSelectProductos
)

router.put('/update',
passport.authenticate('jwt', {session:false}),
ctrlUpdateProducto
)

router.delete('/delete',
passport.authenticate('jwt', {session:false}),
ctrlDeleteProducto
)


module.exports = router
