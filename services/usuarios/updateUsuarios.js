const Usuarios = require('../../models/usuarios')
const { config } = require('../../config/index')

async function updateUsuarios(){
  try {


const usuarios = await Usuarios.updateOne({_id:config.dbIdMundoAnime},
  {
    $set:{
      phone: 9212346789,
      direccion: 'Cerrada de limonaria'
    }
  })

return usuarios
} catch(error){
  return {message: error.message}
}
}

module.exports = {updateUsuarios}
