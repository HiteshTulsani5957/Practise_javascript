//asynknous actions
// let a=prompt('what your age')
// let b=prompt('what your name')
// let c=prompt('what your color')
// let d=prompt('what is your no')


//synschronous actions
// console.log("loooooo");
//  setTimeout(() => {
//     console.log("lololololo");
// },3000);
// console.log("laaaa");

//Callbacks
function b(name,Callbacks){
     console.log(name);
     Callbacks();
}
function lol(){
 console.log("lololololo");
}
b('anil',lol)