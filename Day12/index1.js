let p1= new Promise((resolve,reject)=>{
setTimeout(()=>{
    resolve(1);
},1000)
})
let p2= new Promise((resolve,reject)=>{
setTimeout(()=>{
    // resolve(2);
    reject(new Error("error"))
},1000)
})
let p3= new Promise((resolve,reject)=>{
setTimeout(()=>{
    resolve(3);
},1000)
})

// let p4=Promise.all([p1,p2,p3])
// p4.then((value)=>{
//     console.log(value);
// })

//isme error wale dekh jate hai
// let p4=Promise.allSettled([p1,p2,p3])
// p4.then((value)=>{
//     console.log(value);
// })

//isme race hoti hai jisme kam time set hoga wo race win kaar jaiga
// let p4=Promise.race([p1,p2,p3])
// p4.then((value)=>{
//     console.log(value);
// })

//isme error wale ki resolve value dikh jati hai
// let p4=Promise.([p1,p2,p3])
// p4.then((value)=>{
//     console.log(value);
// })

// //it gives th e resolve value
// let p4=Promise.resolve(7)
// p4.then((value)=>{
//     console.log(value);
// })

//it gives the error value
// let p4=Promise.reject(new Error("heeee"));
// p4.then((value)=>{
//     console.log(value);
// })