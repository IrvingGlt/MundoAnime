const Usuarios = require('../../models/usuarios')

async function updateUsuarios({name, lastName,phone, email,password}){
  try {
    console.log('Hola desde el servicio')
    console.log(email)
    const usuariosUpdated = await Usuarios.findOneAndUpdate(
      {email},
      {name,phone,lastName,password},
      {new: true}
    )
console.log(usuariosUpdated)
return usuariosUpdated
} catch(error){
  return {message: error.message}
}
}

module.exports = {updateUsuarios}
