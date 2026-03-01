const text = 'Happy new year!May this year bring happiness for you'
const sender = 'Hank'

document.getElementById('content').innerHTML = getLabelHtml(sender, text, { name: "M.Qasim" }
    , { name: "M.Afnan" }
    , { name: "M.Abdullah" }
    , {name:"Rehan"}
)


function getLabelHtml(sender, text, ...name) {
    return  name.map(devname => (`<div class="container">
             <p>Hi, ${devname.name}</p>
             <p>${text}</p>
              <p>BestWishes,</p>
              <p>${sender}</P>
           </div>`))
    
}