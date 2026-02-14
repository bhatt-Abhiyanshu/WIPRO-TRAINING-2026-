const EventEmitter = require('events');

const emitter = new EventEmitter();

// Event listeners
emitter.on('userLoggedIn', (name) => {
  console.log(`User ${name} logged in.`);
});

emitter.on('userLoggedOut', (name) => {
  console.log(`User ${name} logged out.`);
});

emitter.on('sessionExpired', () => {
  console.log('Session expired.');
});

// Emit events
emitter.emit('userLoggedIn', 'abhy');

setTimeout(() => {
  emitter.emit('userLoggedOut', 'abhy');
}, 2000);

setTimeout(() => {
  emitter.emit('sessionExpired');
}, 5000);
