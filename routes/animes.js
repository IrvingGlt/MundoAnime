const express = require('express')
const passport = require('passport')
const { ctrlSelectAnimes } = require('../controllers/animes/ctrlSelectAnimes')
const { ctrlUpdateAnimes } = require('../controllers/animes/ctrlUpdateAnimes')
const { ctrlDeleteAnimes } = require('../controllers/animes/ctrlDeleteAnimes')
const { ctrlCreateAnimes } = require('../controllers/animes/ctrlCreateAnimes')
const router = express.Router()


router.get('/',
passport.authenticate('jwt', {session:false}),
ctrlSelectAnimes
)

router.put('/:_id',
passport.authenticate('jwt', {session:false}),
ctrlUpdateAnimes
)

router.post('/',
passport.authenticate('jwt', {session:false}),
ctrlCreateAnimes
)

router.delete('/:_id',
passport.authenticate('jwt', {session:false}),
ctrlDeleteAnimes
)

module.exports = router
