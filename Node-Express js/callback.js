function login(cb){
    setTimeout(()=>{
        console.log("Login success");
        cb();
    },2000)
}
function fetchProfile(cb){
    setTimeout(()=>{
        console.log("Profile fetched");
        cb();
    },2000)
}
function fetchOrders(cb){
    setTimeout(()=>{
        console.log("Orders Fetched");
        cb();
    },2000)
}
login(()=>{
    
fetchProfile(()=>{
 fetchOrders(()=>{
 console.log("All done")
 });
});


});
