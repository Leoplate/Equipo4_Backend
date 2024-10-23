
const { Router } = require('express')
const Usuarios  = require('../controllers/usuarios');

const router = Router();

router.get("/usuarios", Usuarios.obtenerUsuario);
router.get("/usuarios/:id", Usuarios.usuarioByID);

 



 module.exports = router;