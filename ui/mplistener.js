const EventEmitter = require('events').EventEmitter;

const emitter = new EventEmitter();



const message =(_msg)=>{

    console.log(_msg);

}



emitter.addListener('sayHelloListener',message);





emitter.once('messageListener',message);

emitter.on('messageListener1',message);


emitter.emit('sayHelloListener',"Hello world");

emitter.emit('sayHelloListener',JSON.stringify({

    id: 1,

    name : 'Test user'

}));



emitter.emit('messageListener',"Welcome ");

emitter.emit('messageListener',"Node js");







emitter.emit('messageListener1','On ');

emitter.off('messageListener1',message);



console.log(emitter);



emitter.emit('messageListener1','Off ');



emitter.removeListener('sayHelloListener',message);


emitter.setMaxListeners(20);

console.log(emitter);