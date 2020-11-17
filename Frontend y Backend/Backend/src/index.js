const express = require("express");
const app = express();

const routes = require("../routes/routes");

// Ajustes
app.set("port", 3000);
app.set("json spaces", 2);

// Middlewares
app.use(express.json());

app.use("/api", routes);

// Ajustes del servidor
app.listen(app.get("port"), () => {
  console.log(`Servidor corriendo en el puerto ${app.get("port")}`);
});
