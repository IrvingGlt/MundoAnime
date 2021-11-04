const Usuarios = require('../../models/usuarios')

async function deleteUsuarios(email){
  try {
    const usuariosDeleted = await Usuarios.deleteOne( {email})
console.log(usuariosDeleted)
if (usuariosDeleted.deletedCount == 0)
return {usuariosDeleted: usuariosDeleted.deletedCount, message:'Usuarios no encontrado'}
else return {usuariosDeleted: usuariosDeleted.deletedCount, message: 'Usuarios eliminado'}
} catch(error){
  return {message: error.message}
}
}

module.exports = {deleteUsuarios}
