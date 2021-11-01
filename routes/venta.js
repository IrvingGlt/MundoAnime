const express = require('express')
const passport = require('passport')
const { ctrlSelectVenta } = require('../controllers/venta/ctrSelectVenta')
const router = express.Router()


router.get('/',
passport.authenticate('jwt', {session:false}),
ctrlSelectVenta
)

router.put('/',
passport.authenticate('jwt', {session:false}),

)

router.delete('/',
passport.authenticate('jwt', {session:false}),
)

module.exports = router
