const { Strategy } = require('passport-local')
const bcrypt = require('bcrypt')

const LocalStrategy = new Strategy(
    async(email, password, done) =>{
        try{
            const usuarios =[
                {name: 'Irving',lastName: 'Lopez', email: 'admin@mail.com', password: '$2b$05$OZI7aMdhshsRhVr4MDsKIuYlc/N6.YTPWjFkifZoNCUkcUMvHsm6W', rol: 'admin'},
                {name: 'Alfonso',lastName: 'Careaga', email: 'user1@mail.com', password: '$2b$05$OZI7aMdhshsRhVr4MDsKIuYlc/N6.YTPWjFkifZoNCUkcUMvHsm6W', rol:'user'},
                {name: 'Ruben', lastName: 'Balcazar', email: 'user2@mail.com', password: '$2b$05$OZI7aMdhshsRhVr4MDsKIuYlc/N6.YTPWjFkifZoNCUkcUMvHsm6W', rol: 'user'}
            ]
            const user = usuarios[1]
            if(!user) return done(null, null)
            console.log(user)
            const isMatch = await bcrypt.compare(password, user.password)
            if(!isMatch) throw { status: 401, message: 'No autorizado', error: true}
            done(null, user) 
        } catch(error){
            done(error,false)
        }
    }
)

module.export = LocalStrategy
