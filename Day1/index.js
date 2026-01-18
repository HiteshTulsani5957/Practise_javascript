alert("ENTER THE VALUE OF A")

let a = prompt("enter a here")
a = Number.parseInt(a)
document.write(a)
alert(
    typeof a
)

let write = confirm("write here")
if(write){
document.write("write")

}
else{
    document.write("not write")
}



document.body.style.background="red"