const express = require('express')
const passport = require('passport')
const { ctrlSelectVenta } = require('../controllers/venta/ctrSelectVenta')
const { ctrlUpdateVenta } = require('../controllers/venta/ctrUpdateVenta')
const { ctrlDeleteVenta } = require('../controllers/venta/ctrlDeleteVenta')

const router = express.Router()


router.get('/',
passport.authenticate('jwt', {session:false}),
ctrlSelectVenta
)

router.put('/update',
passport.authenticate('jwt', {session:false}),
ctrlUpdateVenta
)

router.delete('/delete',
passport.authenticate('jwt', {session:false}),
ctrlDeleteVenta
)

module.exports = router
