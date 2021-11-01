const User = require('../../models/usuarios')

async function selectUsuarios(genre){
  try {
  console.log('Hola desde el servicio')
  console.log(genre)
 /* let usuarios
  if (!genre) {
    usuarios = await User.find()
  }
  else {
  usuarios = await User.find({genre})
} */
const usuarios = !genre ? await User.find(): await User.find({genre},'name lastName')
console.log(usuarios)
return usuarios
} catch(error){
  return {message: error.message}
}
}

module.exports = {selectUsuarios}
