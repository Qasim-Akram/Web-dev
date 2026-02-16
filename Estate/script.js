import propertyforSaleArr from "./properties/propertyforSaleArr.js";
import placeholderPropertyObj from "./properties/placeholderPropertyObj.js";

document.getElementById("container").innerHTML = getPropertyHtml(propertyforSaleArr );


function getPropertyHtml(propertyArr =  [placeholderPropertyObj]) {
    return propertyArr.map(property => {
        const { propertyLocation, priceGBP, comment, image, roomsM2 } = property
        const totalSize = roomsM2.reduce((total, room) => total + room)
        return `<section class="card">
          <img src="images/${image}">
          <div class=card-right>
            <h2>${propertyLocation}</h2>
            <h3>$ ${priceGBP} </h3>
            <p>${comment}</p>
            <h3>${totalSize}m&sup2;</h3>
            </div>
            </section>`

    })
}


