const {Strategy, ExtractJwt} = require('passport-jwt')
const { config } = require('../../../config/index')
const TOKENPASS = encodeURIComponent(config.dbTokenPass)

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: TOKENPASS
}

const JwtStrategy = new Strategy(options, (payload, done)=>{
  return done(null, payload)
})

module.exports = JwtStrategy
