const { Strategy } = require('passport-local')
const bcrypt = require('bcrypt')

const LocalStrategy = new Strategy(
    async(email, password, done) =>{
        try{
            const users =[
                {name: 'Irving',lastName: 'Lopez', email: 'user1@mail.com', password: '$2b$05$OZI7aMdhshsRhVr4MDsKIuYlc/N6.YTPWjFkifZoNCUkcUMvHsm6W', rol: 'user'},
                {name: 'Alfonso',lastName: 'Careaga', email: 'admin@mail.com', password: '$2b$05$OZI7aMdhshsRhVr4MDsKIuYlc/N6.YTPWjFkifZoNCUkcUMvHsm6W', rol:'admin'},
                {name: 'Ruben', lastName: 'Balcazar', email: 'user2@mail.com', password: '$2b$05$OZI7aMdhshsRhVr4MDsKIuYlc/N6.YTPWjFkifZoNCUkcUMvHsm6W', rol: 'user'}
            ]
            const user = users[1]
            if(!user) return done(null, null)            
            const isMatch = await bcrypt.compare(password, user.password)
            if(!isMatch) throw { status: 401, message: 'No autorizado', error: true}
            delete user.password
            done(null, user) 
        } catch(error){
            done(error,false)
        }
    }
)

module.exports = LocalStrategy
