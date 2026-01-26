//getting the element 
const el = document.getElementById("count-el");
let saveel=document.getElementById("previous");



let count = 0;
const increment = () => el.textContent = ++count;


function save(){
    let countstr= " -  "+ count ;
    saveel.textContent+=countstr;
    el.innerText=0;
    count=0;
}