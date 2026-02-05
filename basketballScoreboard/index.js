scoreH=document.getElementById("scoreH")//home score 
scoreG=document.getElementById("scoreG")//guest score 

//initializing count
countH=0
countG=0
//functions to add points
function add1H(){
    countH+=1
    scoreH.textContent=countH
}
function add2H(){
    countH+=2
    scoreH.textContent=countH
}
function add3H(){
    countH+=3
    scoreH.textContent=countH
}

//for guest team
function add1G(){
    countG+=1
    scoreG.textContent=countG
}
function add2G(){
    countG+=2
    scoreG.textContent=countG
}
function add3G(){
    countG+=3
    scoreG.textContent=countG
}
