//Program to add first n natural no (For loop).

let sum=0
let n = prompt("Enter the value of n")
n=Number.parseInt(n)
for(let i=0; i<n; i++){
    sum+=(i+1)
}
console.log("Sum of first" +n+ "Natural no is"+sum)

