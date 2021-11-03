const Usuarios = require('../../models/usuarios')
const { config } = require('../../config/index')

async function deleteUsuarios(){
  try {

    const usuarios = await Usuarios.deleteOne({_id:config.dbIdMundoAnime})

return usuarios
} catch(error){
  return {message: error.message}
}
}

module.exports = {deleteUsuarios}
