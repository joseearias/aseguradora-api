const express = require("express");
const router = express.Router();

const cotizacionController = require("../controllers/cotizacion.controller");

router.post("/", cotizacionController.crearCotizacion);

module.exports = router;
