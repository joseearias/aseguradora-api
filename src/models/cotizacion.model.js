const mongoose = require("mongoose");

const cotizacionSchema = new mongoose.Schema({
  nombreCliente: { type: String, required: true },
  apellidoCliente: { type: String, required: true },
  segundoApellido: { type: String, required: false },
  fechaNacimiento: { type: Date, required: true },
  direccion: { type: String, required: true },
  numeroCasa: { type: Number, required: true },
  colonia: { type: String, required: true },
  anioVehiculo: { type: Number, required: true },
  modeloVehiculo: { type: String, required: true },
  marcaVehiculo: { type: String, required: true },
  numeroSerie: { type: Number, required: true },
});

module.exports = mongoose.model("Cotizacion", cotizacionSchema);
