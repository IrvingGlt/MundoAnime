const express = require('express')
const passport = require('passport')
const { ctrlSelectVenta } = require('../controllers/venta/ctrSelectVenta')
const { ctrlUpdateVenta } = require('../controllers/venta/ctrUpdateVenta')
const { ctrlDeleteVenta } = require('../controllers/venta/ctrlDeleteVenta')
const { ctrlCreateVenta } = require('../controllers/venta/ctrlCreateVenta')

const router = express.Router()


router.get('/',
passport.authenticate('jwt', {session:false}),
ctrlSelectVenta
)

router.put('/:_id',
passport.authenticate('jwt', {session:false}),
ctrlUpdateVenta
)
router.post('/',
passport.authenticate('jwt', {session:false}),
ctrlCreateVenta
)
router.delete('/:_id',
passport.authenticate('jwt', {session:false}),
ctrlDeleteVenta
)

module.exports = router
