const { Estado } = require("../db/models")

const  obtenerEstados = async (req , res) => {
    const estados = await Estado.findAll({order: [['id', 'ASC']]});
      if(!estados){return res.status(400).json({mensaje: "No existen Estados"})}
        res.status(200).json(estados);

}

const estadoByID = async (req , res) => {
    const id = req.params.id
    const indice = await Estado.findOne({where: {id}})
     if(indice){return res.status(200).json(indice)}
     res.status(400).json({mensaje: "No existe Estado"})
    

}

module.exports = { obtenerEstados, estadoByID };