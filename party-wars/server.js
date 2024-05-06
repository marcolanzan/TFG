const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Middleware para manejar solicitudes JSON
app.use(bodyParser.json());

// Middleware para manejar el límite de tamaño de carga
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb', extended: true, parameterLimit: 50000}));



// Rutas de tu aplicación
// Aquí definirías las rutas de tu API, etc.

// Manejador de errores para el límite de tamaño de carga
app.use((err, req, res, next) => {
  if (err instanceof SyntaxError && 'body' in err) {
    return res.status(400).send({ error: 'Carga de datos demasiado grande' });
  }
  next();
});

// Puerto en el que escucha el servidor
const PORT = process.env.PORT || 3000;

// Inicia el servidor
app.listen(PORT, () => {
  console.log(`Servidor Express en funcionamiento en el puerto ${PORT}`);
});



