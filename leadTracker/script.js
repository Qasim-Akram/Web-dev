let myLeads = []

const textInput = document.getElementById("input-el")
const saveBtn = document.getElementById("save-btn")
const list = document.getElementById("showTrack")
const deleteAllBtn = document.getElementById("deleteall-btn")
const leadFromStorage = JSON.parse(localStorage.getItem("Leads"))
const saveTabBtn = document.getElementById("save-tab")



if (leadFromStorage) {
    myLeads = leadFromStorage
    render(myLeads)
}

function render(leads) {
    let listItems = " "
    for (let i = 0; i < leads.length; i++) {
        listItems += `<li><a target='_blank' 
        href='${leads[i]}'>${leads[i]}</a></li>`
    }
    list.innerHTML = listItems
}

saveBtn.addEventListener("click", function () {
    myLeads.push(textInput.value)
    localStorage.setItem("Leads", JSON.stringify(myLeads))
    render(myLeads)
    textInput.value = ''
})

deleteAllBtn.addEventListener("dblclick", function () {
    localStorage.clear()
    myLeads = []
    render(myLeads)
    textInput.value = ''
})



saveTabBtn.addEventListener("click", function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        myLeads.push(tabs[0].url)
        localStorage.setItem("Leads", JSON.stringify(myLeads))
        render(myLeads)
    })
})
