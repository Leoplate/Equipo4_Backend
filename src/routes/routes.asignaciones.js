
const { Router } = require('express')
const Asignaciones   = require('../controllers/asignaciones');

const router = Router();

router.get("/asignar", Asignaciones.allAsignaciones );
router.get("/asignar/:id", Asignaciones.asignacionByID );
router.get("/asignar/tareas/:id", Asignaciones.asignacionByTask );
router.get("/asignar/estado/:id", Asignaciones.asignacionByEstate );
router.post("/asignar/", Asignaciones.crearAsignacion );
router.delete("/asignar/:id", Asignaciones.eliminarAsignacion );
router.put("/asignar/:id", Asignaciones.modificarAsignacion );
 

 module.exports = router;