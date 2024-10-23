
const {Base} = require("../db/models");
const {Tareas} = require("../db/models");
const {Usuarios} = require("../db/models");

const allAsignaciones = async (req , res) => {
    const asignaciones = await Base.findAll({
      include: [{model: Usuarios},{model: Tareas}],
    });
    res.status(200).json(asignaciones);

}


const asignacionByID = async (req , res) => {
    const id = req.params.id
    const indice = await Base.findOne({where: {id}, include: [{model: Usuarios},{model: Tareas}],})
     if(indice){return res.status(200).json(indice)}
     res.status(400).json({mensaje: "No existe Asignación de Tarea"})
    

}



const crearAsignacion = async(req, res) => {
   const asignacion = req.body;
     const busca = await Base.findOne({where: {id_usuario: asignacion.id_usuario, id_tarea:asignacion.id_tarea}})
       if(!busca){
          await Base.create(asignacion);
          const nueva = await Base.findOne({where: {id_usuario: asignacion.id_usuario, id_tarea:asignacion.id_tarea}, include: [{model: Usuarios},{model: Tareas}]})
          res.status(200).json(nueva);
       }   
       else{
          res.status(400).json({mensaje: "Asignación de Tarea existe"})
       }   
      
}


const eliminarAsignacion = async (req , res) => {
    const id = req.params.id
    
        const indice = await Base.findOne({where: {id}})
           if(indice){
              await Base.destroy({where: {id}})
              return res.status(200).json(indice)
           }
              res.status(400).json({mensaje: "No existe Asignación de Tarea N°" + id})
    

}


const modificarAsignacion = async (req , res) => {
    const id = req.params.id
    const mbody = req.body;
    
        const indice = await Base.findOne({where: {id}})
           if(indice){
              const modi = {
                "id_usuario": mbody.id_usuario,
                "id_tarea": mbody.id_tarea,
                "id_estado": mbody.id_estado,
              }
              
                    await Base.update(modi,{where: {id}})
                    const modificado =  await Base.findOne({where: {id}})     
                    return res.status(200).json(modificado)
           }
              res.status(400).json({mensaje: "No existe Asignación"})
    

}

module.exports = { allAsignaciones, asignacionByID, crearAsignacion, eliminarAsignacion, modificarAsignacion };