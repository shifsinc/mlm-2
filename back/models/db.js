const mongoose = require('mongoose');
const config = require('../configurations/configurations');

// Crea la conexión a la BD allasite
mongoose.connect(config.db.uri, config.db.options);
// Almacenamos en una variable la conexión
var db = mongoose.connection;
// En caso de error en la conexión a la BD
db.on('error', console.error.bind(console, 'Error en la conexión de la Base de Datos.'));
// Cuando la conexión se haya establecido
db.once('open', function callback(){
    'use strict';
    console.log('La base de datos inició correctamente.');
});

module.exports = mongoose;