document.write("Daniel")

let  a=-50, b=50;
document.write("<br>")
for(let i=-50;i<=b;i++)
    document.write(i + ", ")

document.write("<br><br><br>")


document.write("<br>")
for(let i=-50;i<=b;i++)
if(i<50){
    document.write(i + ", ")
}else{
    document.write(i)
}

document.write("<br><br><br>")

let k=3
for(let i=a;i<=b;i+=k)
    if(i<=(b-k)){
        document.write(i+", ")
    }else{
        document.write(i)
    }