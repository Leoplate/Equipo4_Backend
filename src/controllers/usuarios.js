const { Usuarios } = require("../db/models")

const  obtenerUsuario = async (req , res) => {
    const usuarios = await Usuarios.findAll({order: [['id', 'ASC']]});
      if(!usuarios){return res.status(400).json({mensaje: "No existen Usuarios"})}
        res.status(200).json(usuarios);

}

const usuarioByID = async (req , res) => {
    const id = req.params.id
    const indice = await Usuarios.findOne({where: {id}})
     if(indice){return res.status(200).json(indice)}
     res.status(400).json({mensaje: "No existe Usuario"})
    

}

module.exports = { obtenerUsuario, usuarioByID };