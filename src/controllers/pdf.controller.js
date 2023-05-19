const pdfService = require("../services/pdf.service");

exports.generatePdf = async (req, res) => {
  const pdf = await pdfService.generatePdf(req, res);
};
