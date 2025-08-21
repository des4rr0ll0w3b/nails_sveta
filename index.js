const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;

// Servir archivos estáticos (css, js, img, locales, etc.)
app.use(express.static(__dirname));

// Middleware → si la ruta no tiene extensión, intentar servir el .html
app.get("/:page?", (req, res, next) => {
  const page = req.params.page || "index";
  const filePath = path.join(__dirname, `${page}.html`);
  res.sendFile(filePath, (err) => {
    if (err) next(); // si no existe, pasa al siguiente middleware
  });
});

// Catch-all → si no existe, mostrar 404 o redirigir al index
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, "index.html"));
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
