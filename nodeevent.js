const EventEmitter = require('node:events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('event', () => {
  console.log('an event occurred!');
  setTimeout(() => {
    console.log('gentle reminder events has occurred')
  },3000);
});

console.log('the scipt is running')
myEmitter.emit('event');