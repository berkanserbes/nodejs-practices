// Custom events

const EventEmitter = require('events');

const customEmitter = new EventEmitter();

customEmitter.on('response', () => {
    console.log('data received');
});

customEmitter.on('response', (name, age) => {
    console.log(`Name: ${name} | Age: ${age}`);
});

customEmitter.on('response', () => {
    console.log('some other logic');
});

customEmitter.emit('response'); // data received \n Name: undefined | Age: undefined \n some other logic
customEmitter.emit('response', 'John', 34); // data received \n Name: John | Age: 34 \n some other logic