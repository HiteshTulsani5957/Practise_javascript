try{
    let a=prompt("what is tour name")
    a=Number.parseInt(a)
    if(a>150){
        throw new ReferenceError("hitesh")
    }
}catch(error){
    console.log(error.name)
    console.log(error.message) 
    console.log(error.stack)  
}
 console.log("hellooo")