const EventEmitter = require("events");
const emitter = new EventEmitter();

emitter.on("userLogin", () => {
    console.log("EVENT: userLogin triggered");
});

emitter.on("dataFetched", () => {
    console.log("EVENT: dataFetched triggered");
});

module.exports = emitter;
