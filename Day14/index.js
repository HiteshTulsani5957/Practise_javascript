// const a=async (src)=>{
//     return new Promise((resolve, reject) => {
//     let script= document.createElement("script")
//     script.src = src
//     script.onload=()=>{
//         resolve(src + "done")
//     }
//     document.head.append(script)
//      })
// }

//Problem no1
//  let d=a("https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js")
// d.then((value)=>{
//     console.log(value);
// })

// Problem no2
// const c2=async()=>{
//     console.log(new Date().getMilliseconds())
//     let d=await a("https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js")
//     console.log(d);
//     console.log(new Date().getMilliseconds())
// }
// c2()

//Problem no3
// let p = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             reject(new Error("I am a error"));
//         }, 3000);
//     });
// }

// let a = async () => {
//     try {
//         let u = await p();
//         console.log(u);
//     } catch (err) {
//         console.log("allset");
//     }
// }

// a();



//Problem no4
let p1 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(33)
        }, 3000)
    })
}

let p2 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(3355)
        }, 2000)
    })
}

let p3 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(344)
        }, 1000)
    })
}

const run = async () => {
    console.time("run")

    let a = p1()
    let b = p2()
    let c = p3()
let abc= await Promise.all([a,b,c])
    console.log(abc)
    console.timeEnd("run")
}

run()