const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;

// Servir archivos estáticos (css, js, img, locales, etc.)
app.use(express.static(__dirname));

// Rutas principales
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/nosotros", (req, res) => {
  res.sendFile(path.join(__dirname, "nosotros.html"));
});

app.get("/servicios", (req, res) => {
  res.sendFile(path.join(__dirname, "servicios.html"));
});

app.get("/reservas", (req, res) => {
  res.sendFile(path.join(__dirname, "reservas.html"));
});

app.get("/contacto", (req, res) => {
  res.sendFile(path.join(__dirname, "contacto.html"));
});

// Catch-all → 404 si no existe la ruta
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, "index.html"));
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
