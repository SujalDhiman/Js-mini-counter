let var1=document.querySelector("#INC")

var1.addEventListener("click",add1)

function add1()
{
    let var2=document.querySelector(".display")
    let c=var2.innerText
    c=c-'0'
    c=c+1
    var2.textContent=c
}

let var3=document.querySelector("#DEC")
var3.addEventListener("click",sub1)

function sub1()
{
    let var2=document.querySelector(".display")
    let c=var2.innerText
    c=c-'0'
    c=c-1
    var2.textContent=c
}

let var4=document.querySelector(".submit")
var4.addEventListener("click",clear)

function clear()
{
    let var2=document.querySelector(".display")
    var2.innerText=0
}