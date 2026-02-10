let myLeads = []

const textInput = document.getElementById("input-el")
const saveBtn = document.getElementById("save-btn")
const list = document.getElementById("showTrack")

saveBtn.addEventListener("click", function () {
    myLeads.push(textInput.value)
    renderLead()
    textInput.value = ''
})

let listItem = ''
function renderLead() {
    //listItem = "<li><a  target='_blank' href='"+textInput.value+"'>" + textInput.value + "</a></li>"
    //templete strings 
    listItem =
        `<li>
        <a  target='_blank' href='${textInput.value}'>
        ${textInput.value}
         </a>
          </li>`
    list.innerHTML += listItem
    console.log(listItem)


}

// function renderLeads() {
//     let listItems = ''
//     for (let i = 0; i < myLeads.length; i++) {
//         //list.innerHTML+= "<li>"+myLeads[i]+"</li>"
//         //second method to create li element and append it to the list
//         // let li=document.createElement("li")
//         // li.textContent=myLeads[i]
//         // list.append(li)
//         listItems += "<li>" + myLeads[i] + "</li>"
//     }
//     list.innerHTML = listItems
// }


