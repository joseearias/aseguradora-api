const Cotizacion = require("../models/cotizacion.model");

exports.crearCotizacion = async (req, res) => {
  try {
    const cotizacion = new Cotizacion();
    cotizacion.nombreCliente = req.body.nombreCliente;
    cotizacion.apellidoCliente = req.body.apellidoCliente;
    cotizacion.segundoApellido = req.body.segundoApellido
      ? req.body.segundoApellido
      : "";
    cotizacion.fechaNacimiento = req.body.fechaNacimiento;
    cotizacion.direccion = req.body.direccion;
    cotizacion.numeroCasa = req.body.numeroCasa;
    cotizacion.colonia = req.body.colonia;
    cotizacion.nombreVehiculo = req.body.nombreVehiculo;
    cotizacion.anioVehiculo = req.body.anioVehiculo;
    cotizacion.modeloVehiculo = req.body.modeloVehiculo;
    cotizacion.marcaVehiculo = req.body.marcaVehiculo;
    cotizacion.numeroSerie = req.body.numeroSerie;

    await cotizacion.save();

    res.json({
      status: true,
      message: "Cotizacion creada exitosamente",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
