require("dotenv").config();
const express = require("express");
const dbConnection = require("./database/db.js");
const cors = require("cors");
const routesHelados = require("./routes/routesHelados.js");
const routesBandejas = require("./routes/routesBandejas.js");
const routesPostres = require("./routes/routesPostres.js");
const routesTermicos = require("./routes/routesTermicos.js");
const routesSucursales = require("./routes/routesSucursales.js");

const app = express();
app.use(cors());
const port = process.env.PORT || 8000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", routesHelados);
app.use("/api", routesBandejas);
app.use("/api", routesPostres);
app.use("/api", routesTermicos);
app.use("/api", routesSucursales);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

dbConnection();
