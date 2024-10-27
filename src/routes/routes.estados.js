
const { Router } = require('express')
const Estados  = require('../controllers/estados');

const router = Router();

router.get("/estados", Estados.obtenerEstados);
router.get("/estados/:id", Estados.estadoByID);

 



 module.exports = router;