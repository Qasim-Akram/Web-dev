const text = 'Happy new year!May this year bring happiness for you'
const sender = 'Hank'

document.getElementById('content').innerHTML = getLabelHtml(sender, text, { name: "M.Qasim" }
    , { name: "M.Afnan" }
    , { name: "M.Abdullah" }
)


function getLabelHtml(sender, text, ...name) {
    const labelHtml = name.map(devname => (`<div>
             <p>Hi,${devname.name}</p>
             <p>${text}</p>
              <p>BestWishes,</p>
              <p>${sender}</P>
           </div>`))
    return labelHtml
}