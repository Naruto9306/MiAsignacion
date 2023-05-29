const express = require("express");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// OTRAS
const db = require("./src/app/models");
db.sequelize.sync()
  .then(() => {
    console.log("Sincronizado con la db.");
  })
  .catch((err) => {
    console.log("Fallo la sincrionizazión de la db: " + err.message);
  });

  db.sequelize.sync({ force: true }).then(() => {
  console.log("Elimminadas las tablas de la base de datos.");
});

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Bienvenido a mi servidor de sequence." });
});

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}.`);
});
