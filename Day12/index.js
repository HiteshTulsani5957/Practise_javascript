let p1= new Promise((resolve,reject)=>{
    // alert("not resolve")
setTimeout(()=>{
    resolve(1);
},3000)
p1.then(()=>{
     console.log("yooo")
     return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(4);
        },4000);
     })

}).then(()=>{
    console.log("ok")
})
p1.then(()=>{
    console.log("ok resolved")
})
})
