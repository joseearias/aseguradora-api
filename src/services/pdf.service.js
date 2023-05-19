const PDFDocument = require("pdfkit");

exports.generatePdf = async (req, res) => {
  const { nombreVehiculo, anioVehiculo, codigoPostal, correoElectronico } =
    req.body;

  const doc = new PDFDocument();

  // Set the response headers for downloading the PDF
  res.setHeader("Content-Type", "application/pdf");
  res.setHeader(
    "Content-Disposition",
    `attachment; filename=${nombreVehiculo}.pdf`
  );

  doc.pipe(res);

  doc.fontSize(20).text(`Name: ${nombreVehiculo}`, 100, 100);
  doc.fontSize(20).text(`Year: ${anioVehiculo}`, 100, 150);

  doc.end();
};
