//for asynchronous call
const EventEmitter = require("events");
const emitter = new EventEmitter();

function orderplaced() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, 1000); // simulates async task (DB/API call)
    });
}

emitter.on("orderplaced",async (orderId)=>{
    await orderplaced();
    console.log(`order ${orderId} placed`)
});
emitter.on("orderplaced", async (orderId)=>{
    await orderplaced();
    console.log(`welcome email sent for order ${orderId}`)
});
emitter.on("orderplaced",async (orderId)=>{
    await orderplaced();
    console.log(`inventory updated for order ${orderId}`)
});

emitter.emit("orderplaced", 101);