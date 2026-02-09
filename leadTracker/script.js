let myLeads=["ww.asdf.com","asdfgh"]

const textInput=document.getElementById("input-el")
const saveBtn=document.getElementById("save-btn")
const list=document.getElementById("showTrack")

saveBtn.addEventListener("click",function(){
    myLeads.push(textInput.value)
    textInput.value=''
    
    

})

for(let i=0;i<myLeads.length;i++){
    //list.innerHTML+= "<li>"+myLeads[i]+"</li>"
    let li=document.createElement("li")
    li.textContent=myLeads[i]
    list.append(li)
}


