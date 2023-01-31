const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/carsdb')
  .then(()=> console.log('Conectado correctamente a MongoDB'))


