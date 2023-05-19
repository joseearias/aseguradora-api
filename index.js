const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const authRoutes = require("./src/routes/auth.routes");
const pdfRoutes = require("./src/routes/pdf.routes");
const usersRoutes = require("./src/routes/users.routes");
const cotizacionRoutes = require("./src/routes/cotizacion.routes");

const app = express();
const port = 3000;
const secret = "mysecretsshhh";

mongoose
  .connect("mongodb://localhost/aseguradora", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(`Error connecting to MongoDB: ${err}`);
  });

app.use(bodyParser.json());
app.use(cors());

app.use("/auth", authRoutes);
app.use("/generate-pdf", pdfRoutes);
app.use("/users", usersRoutes);
app.use("/cotizacion", cotizacionRoutes);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
