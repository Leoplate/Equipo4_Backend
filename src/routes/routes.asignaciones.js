
const { Router } = require('express')
const Asignaciones   = require('../controllers/asignaciones');

const router = Router();

router.get("/asignar", Asignaciones.allAsignaciones );
router.get("/asignar/:id", Asignaciones.asignacionByID );
router.post("/asignar/", Asignaciones.crearAsignacion );
router.delete("/asignar/:id", Asignaciones.eliminarAsignacion );
router.put("/asignar/:id", Asignaciones.modificarAsignacion );
 

 module.exports = router;