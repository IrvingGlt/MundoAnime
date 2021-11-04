const Usuarios = require('../../models/usuarios')

async function updateUsuarios({name, lastName, email}){
  try {
    console.log('Hola desde el servicio')
    console.log(email)
    const usuariosUpdated = await Usuarios.findOneAndUpdate(
      {email},
      {name,lastName},
      {new: true}
    )
console.log(usuariosUpdated)
return usuariosUpdated
} catch(error){
  return {message: error.message}
}
}

module.exports = {updateUsuarios}
