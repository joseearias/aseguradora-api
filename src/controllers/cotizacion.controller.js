const cotizacionService = require("../services/cotizacion.service");

exports.crearCotizacion = async (req, res) => {
  await cotizacionService.crearCotizacion(req, res);
};
