let p = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("three");
        resolve(55);
    }, 3000);
})
p.then((value) => {
    console.log(value);
    let p1 = new Promise((resolve, reject) => {
        setTimeout(() => { resolve("promise 2") }, 3000)
    })
    return p1
}).then((value) => {
    console.log(value);
}).then((value) => {
    console.log("now i am done");
})

