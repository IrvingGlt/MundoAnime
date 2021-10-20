const bcrypt = require('bcrypt')

async function verifyPassword(){
  const myPassword = 'tacoasado'
  const myPasswordHashed = '$2b$05$OZI7aMdhshsRhVr4MDsKIuYlc/N6.YTPWjFkifZoNCUkcUMvHsm6W'
  const isMatch = await bcrypt.compare(myPassword, myPasswordHashed)
  console.log(isMatch)
}

verifyPassword()
