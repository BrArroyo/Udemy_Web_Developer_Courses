const EvenEmitter = require('events');

const emitter = new EvenEmitter();

emitter.on('event', function(){
  console.log('Un evento ha ocurrido');
})

emitter.emit('event');

emitter.on('eventWithArgument', function(arg){
  console.log('Un evento ha ocurrido con argumentos' , arg.id + ' ' + arg.number);
})

emitter.emit('eventWithArgument', {id: 1, number: 24});

// Es lo mismo que el anterior pero escrito de otra forma
emitter.on('eventArrow', (arg)=>{
  console.log('Un evento flecha ha ocurrido con argumentos' , arg.id + ' ' + arg.number);
})

emitter.emit('eventArrow', {id: 1, number: 24});
