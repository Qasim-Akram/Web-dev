let myLeads = []

const textInput = document.getElementById("input-el")
const saveBtn = document.getElementById("save-btn")
const  list = document.getElementById("showTrack")
const deleteAllBtn = document.getElementById("deleteall-btn")
const  leadFromStorage = JSON.parse(localStorage.getItem("Leads"))



 if(leadFromStorage){
     myLeads = leadFromStorage 
     renderLead()
}


saveBtn.addEventListener("click", function () {
    myLeads.push(textInput.value)
    localStorage.setItem("Leads",JSON.stringify(myLeads))
    renderLead()
    textInput.value = ''
})

deleteAllBtn.addEventListener("dblclick",function(){
    localStorage.clear()
    myLeads = []
    renderLead()
    
    
})


 function renderLead() {
    let listItems = " "
     for (let i = 0; i < myLeads.length; i++) {
         //list.innerHTML+= "<li>"+myLeads[i]+"</li>"
         //second method to create li element and append it to the list
         // let li=document.createElement("li")
         // li.textContent=myLeads[i]
         // list.append(li)
         listItems += `<li><a target='_blank' href='${myLeads[i]}'>${myLeads[i]}</a></li>`
    }
    list.innerHTML = listItems
    }

  
