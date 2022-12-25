const express = require('express');
const app = express();
const port = process.env.PORT || 3003;

var coches = [
  {id: 1, marca: 'Audi', modelo: 'A3'},
  {id: 2, marca: 'Audi', modelo: 'A4'},
  {id: 3, marca: 'Audi', modelo: 'A5'},
  {id: 4, marca: 'Audi', modelo: 'A6'},
]

app.get('/', (req, res) =>{
  res.send('Hello World!');
})

app.get('/api/cars/list', (req, res) => {
  res.send('cars list 2');
})

app.get('/api/cars/id/:id', (req, res) => {
  res.send(req.params.id);
})

app.get('/api/cars/:company/:model', (req, res) => {
  res.send(req.params);
})

app.get('/api/cars/', (req, res) => {
  res.send(coches);
})

app.get('/api/cars/:marca', (req, res) => {
  const coche = coches.find(coche => coche.marca === req.params.marca);
  
  if (!coche) {
    res.status(404).send('El coche no existe');
  }else{
    res.send(coche);
  }
})

app.listen(port, ()=> console.log('Escuchando puerto 3003'));