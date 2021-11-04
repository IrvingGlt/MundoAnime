const express = require('express')
const passport = require('passport')
const { ctrlCreateProducto } = require('../controllers/producto/ctrlCreateProducto')
const { ctrlDeleteProducto } = require('../controllers/producto/ctrlDeleteProducto')
const { ctrlSelectProductos } = require('../controllers/producto/ctrlSelectProducto')
const { ctrlUpdateProducto } = require('../controllers/producto/ctrlUpdateProducto')
const router = express.Router()


router.get('/',
passport.authenticate('jwt', {session:false}),
ctrlSelectProductos
)

router.put('/:_id',
passport.authenticate('jwt', {session:false}),
ctrlUpdateProducto
)

router.post('/',
passport.authenticate('jwt', {session:false}),
ctrlCreateProducto
)

router.delete('/:_id',
passport.authenticate('jwt', {session:false}),
ctrlDeleteProducto
)


module.exports = router
