//   let marks=[23,45,56,78,false,"lol"]
// console.log(marks[0])
// console.log(marks[1])
// console.log(marks[2])
// console.log(marks[3])
// console.log(marks[4])
// console.log(marks.length)
// console.log(typeof marks)
// marks[2]=26//changing a new value to an arry
// marks[6]=89//adding a new value to an arry
// console.log(marks)


// let marks=[23,45,56,78,54]
// let b=marks.toString()//convert an arrry(obj)to a string
// console.log( b,typeof b)


// let c = marks.join(  " and "  )
// console.log(c)


// let a = marks.pop()//pop return the poping element
// console.log(marks , a)


// let a = marks.push(66)//adding a new value at the end to an arry
// console.log(marks , a)


// let a = marks.shift()//remove first element to an arry
// console.log(marks , a)


// let a = marks.unshift(66)//adding a new value at the bigning to an arry
// console.log(marks , a)

// let a=[23,45,56,78,21]
// delete a[0]
// console.log(a)


// let a1= [23,45,56,78,21]
// let a2 = [1,2,3,4,5]
// let a3=a1.concat(a2)
// console.log(a3)

// let a1= [23,45,44,78,21,90,91]
// a1.splice(1,3,21,42,52)
// console.log(a1)

// let a1= [23,45,44,78,21,90,91]
// let a2 = a1.slice(2,3)
// console.log(a2)

// let a1= [23,45,44,78,21,90,91]
// for(let i = 0 ; i<a1.length ; i++ )
//     console.log(a1[i])


// let a1= [2,3,4,5]
// a1.forEach((b)=>{
// console.log(b*b)
// })

// let a1= "amit"
// let b = Array.from(a1) 
// console.log(b)

//for of
// let a1= [2,3,4,5]
// for(let i of a1){
//     console.log(i)
// }

//for in
// let a1= [2,3,4,5]
// for(let i in a1){
//     ////console.log(i)
//     console.log(a1[i])
// }
//array map method
// let a1= [2,3,4,5]
// let a=a1.map((value,index,array)=>{
//     console.log(value,index, array)
//     return value+1 , index
// })
// console.log(a)

//array filter method
// let a1= [2,3,4,5]
// let b=a1.filter((a)=>{
// return a<5
// })
// console.log(a1,b)

//array reduce method
// let a= [2,3,4,5,]
// let b = a.reduce((h1,h2)=>{
//     return h1+h2
// })
// console.log(b)