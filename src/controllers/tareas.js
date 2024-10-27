//const tareas = require("../data/Tareas.json")
const {Tareas} = require("../db/models");

const allTareas = async (req , res) => {
    const Base = await Tareas.findAll({order: [['id', 'ASC']]});
     if(Base){res.status(200).json(Base);}
     else{res.status(400).json({mensaje: "No existen Tareas"})}  

}


const tareasByID = async (req , res) => {
    const id = req.params.id
    const indice = await Tareas.findOne({where: {id}})
     if(indice){return res.status(200).json(indice)}
     res.status(400).json({mensaje: "No existe Tarea N°"+id})
    

}



const crearTarea = async(req, res) => {
   const tarea = req.body;
     const busca = await Tareas.findOne({where: {descripcion: tarea.descripcion}})
       if(!busca){
          await Tareas.create(tarea);
          const nueva = await Tareas.findOne({where: {descripcion: tarea.descripcion}})
          res.status(200).json(nueva);
       }   
       else{
          res.status(400).json({mensaje: "Tarea existe"})
       }   
      
}


const eliminarTarea = async (req , res) => {
    const id = req.params.id
    
        const indice = await Tareas.findOne({where: {id}})
           if(indice){
              await Tareas.destroy({where: {id}})
              return res.status(200).json(indice)
           }
              res.status(400).json({mensaje: "No existe Tarea"})
    

}


const modificarTarea = async (req , res) => {
    const id = req.params.id
    const mbody = req.body;
    
        const indice = await Tareas.findOne({where: {id}})
           if(indice){
              const modi = {
                "descripcion": mbody.descripcion,
                "habilitado": mbody.habilitado,
              }
              const repetido = await Tareas.findOne({where: {descripcion: mbody.descripcion}})
                 if(repetido){return res.status(400).json({mensaje: "Nombre de Tarea ya existe"})}
                    await Tareas.update(modi,{where: {id}})
                    const modificado =  await Tareas.findOne({where: {id}})     
                    return res.status(200).json(modificado)
           }
              res.status(400).json({mensaje: "No existe Tarea"})
    

}

module.exports = { allTareas, tareasByID, crearTarea, eliminarTarea, modificarTarea };