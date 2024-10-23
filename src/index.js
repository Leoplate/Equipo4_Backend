
const express = require('express');
const cors = require('cors');
const routesUsuarios = require("./routes/routes.usuarios.js")
const routesTareas = require("./routes/routes.tareas.js")
const routesAsignar = require("./routes/routes.asignaciones.js")

const app = express();
const PORT = 3000;


app.use(cors());
app.listen(PORT,()=>{console.log("Escuchando en el puerto "+PORT)})

app.use(express.json());

app.use(routesUsuarios);
app.use(routesTareas);
app.use(routesAsignar);

