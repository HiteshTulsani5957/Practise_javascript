// let p=new Promise((resolve, reject) => {
//     alert('how are you')
//     resolve(333)
// })
// console.log("one");
//  setTimeout(() => {
//     console.log("three");
// },3000);
// console.log("two");
// console.log(p);


let p=new Promise((resolve, reject) => {
     console.log("one");  
 setTimeout(() => {
    // console.log("three");
    resolve(true);
},3000);
})
 console.log(p);


let p1=new Promise((resolve, reject) => {
     console.log("one");  
 setTimeout(() => {
    // console.log("three");
    reject(new Error("i am error"));
},3000);
})
 console.log(p,p1);

 //to get the value
 p.then((value)=>{
 console.log(value);
 })

 //to get the error
 p1.catch((error)=>{
 console.log("i am a error");
 })


 p1.catch((error)=>{
 console.log("i am a error");
 },(error)=>{
 console.log(error);
 },)