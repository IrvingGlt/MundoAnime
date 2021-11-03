const express = require('express')
const passport = require('passport')
const { ctrlSelectAnimes } = require('../controllers/animes/ctrlSelectAnimes')
const { ctrlUpdateAnimes } = require('../controllers/animes/ctrlUpdateAnimes')
const { ctrlDeleteAnimes } = require('../controllers/animes/ctrlDeleteAnimes')
const router = express.Router()


router.get('/',
passport.authenticate('jwt', {session:false}),
ctrlSelectAnimes
)

router.put('/update',
passport.authenticate('jwt', {session:false}),
ctrlUpdateAnimes
)

router.delete('/delete',
passport.authenticate('jwt', {session:false}),
ctrlDeleteAnimes
)

module.exports = router
