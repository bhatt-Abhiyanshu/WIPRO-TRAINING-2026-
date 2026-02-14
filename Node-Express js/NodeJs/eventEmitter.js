const EventEmitter = require("events");
const emitter = new EventEmitter();

//Lstener
emitter.on("order placed",(orderId)=>{
    console.log(`order ${orderId} placed`)
});
emitter.on("order placed",(orderId)=>{
    console.log(`welcome email sent for order ${orderId}`)
});
emitter.on("order placed",(orderId)=>{
    console.log(`inventory updated for order ${orderId}`)
});
emitter.on("payment success",(data)=>{
    console.log(`payment recieved of Rs.${data.amount} for order Id ${data.orderId}`)
});



//Emitter
emitter.emit("order placed",101);
emitter.emit("payment success",{
    orderId : 101,
    amount : 4500
});