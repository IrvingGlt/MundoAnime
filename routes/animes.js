const express = require('express')
const passport = require('passport')
const { ctrlSelectAnimes } = require('../controllers/animes/ctrlSelectAnimes')
const router = express.Router()


router.get('/',
passport.authenticate('jwt', {session:false}),
ctrlSelectAnimes
)

router.put('/',
passport.authenticate('jwt', {session:false}),

)

router.delete('/',
passport.authenticate('jwt', {session:false}),
)

module.exports = router
