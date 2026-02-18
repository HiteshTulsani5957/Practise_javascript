// const a=async (src)=>{
//     return new Promise((resolve, reject) => {
//     let script=document.createElement("script")
//     script.src=src
//     script.onload=()=>{
//         resolve(src+"done")
//     }
//     document.head.append(script)
//      })
// }

//Problem no1
//  let d=a("https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js")
// d.then((value)=>{
//     console.log(value);
// })

//Problem no2
// const c=async()=>{
//     console.log(new Date().getMilliseconds())
//     let d=await a("https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js")
//     console.log(d);
//     console.log(new Date().getMilliseconds())
// }
// c()

//Problem no3
let p=()=>{
    return new Promise((resolve, reject) => {
        setTimeout=(()=>{
            reject(new Error("I am a error"))
        },3000)
    })
}
let a=async()=>{
    try{
        let u =await(p)
        console.log(u);
        
    }
catch(err){
 console.log("allset");
}
}