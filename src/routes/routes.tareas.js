
const { Router } = require('express')
const Tareas   = require('../controllers/tareas');

const router = Router();

router.get("/tareas", Tareas.allTareas );
router.get("/tareas/:id", Tareas.tareasByID );
router.post("/tareas/", Tareas.crearTarea );
router.delete("/tareas/:id", Tareas.eliminarTarea );
router.put("/tareas/:id", Tareas.modificarTarea );
 

 module.exports = router;