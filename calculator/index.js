let num1=10;
let num2=6;

document.getElementById("firstnum").textContent=num1
document.getElementById("secondnum").textContent=num2

let ans=document.getElementById("Ans")
 
function add(){
    let sum=num1+num2
    ans.textContent="Sum:"+sum
}

function sub(){
    let sub=num1-num2
    ans.textContent="Substact:"+sub
}

function mul(){
    let mul=num1*num2
    ans.textContent="Multiply:"+mul
}

function divd(){
    let div=num1/num2
    ans.textContent="Divide:"+div
}