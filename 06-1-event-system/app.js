const EventEmitter = require('events');

const eventEmitter = new EventEmitter();

const BasicMath = {
  add: (a, b) => console.log(a + b),
  subtract: (a, b) => console.log(a - b),
};

// Tulis kodemu di bawah ini ...
// fungsi add dari basicmath sebagai listener dari event calculate
eventEmitter.on('calculate', BasicMath.add);

// fungsi subtract dari basicmath sebagai listener dari event calculate
eventEmitter.once('calculate', BasicMath.subtract);

// bangkitkan event calculate dengan parameter angka 2 dan 3
eventEmitter.emit('calculate', 2, 3);

// bangkitkan event calculate dengan parameter angka 5 dan 6
eventEmitter.emit('calculate', 5, 6);
