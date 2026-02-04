let welcomeel=document.getElementById("welcome")
let newel=document.getElementById("new")
//for welcome 
let name="M.Qasim Akram"
let greet="Welcome back!"

welcomeel.innerText = greet+" "+name

welcomeel.innerText+="👍"

//for new 
let check="just checking prvious things "
newel.innerText=check
newel.innerText+="😂🥳❤️"


function greetqasim(){
    console.log(name + " "+ greet)
}

greetqasim()