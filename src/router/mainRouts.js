const express = require ('express')
const router = express.Router()
const controladores = require('../controllers/mainController')

router.get('/listado', controladores.getListado)
router.post('/listado', controladores.crearRegistro)
router.get('/modificar/:id', controladores.getModificar)
router.put('/modificar', controladores.actualizar)
router.delete('/listado', controladores.eliminar)

module.exports = router
