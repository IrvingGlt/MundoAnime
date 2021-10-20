const bcrypt = require ('bcrypt')

async function hashPassword(){
    const myPassword = 'tacoasado'
    const hash = await bcrypt.hash(myPassword, 5)
    console.log(hash)
}

hashPassword()
