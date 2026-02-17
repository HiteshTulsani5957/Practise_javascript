async function a() {

    let p1 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("open");
        }, 1000)
    })
    let p2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("close");

        }, 3000)
    })
    // p1.then(alert)
    // p2.then(alert)

    console.log("opening the value");
    let b = await p1
    console.log("opening the value" + b);
    console.log("closing the value");
    let c = await p2
    console.log("closing the value" + c);
    return [b, c]
}
const hitesh = async () => {
    console.log("lalalallalalala");
}
const m = async () => {
    console.log("hahahahaha");
    let u =await a();
    let v =await hitesh();
    // u.then((value)=>{
    //     console.log(value)
    // })
}
m()