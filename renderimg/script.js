const containerImg = document.getElementById("container")

const imgs = [
    "images/image1.jpg",
    "images/image2.jpg",
    "images/image3.jpg",
    "images/image4.jpg",
    "images/image5.jpg",

]

function renderImg() {
    for (let i = 0; i < imgs.length; i++) {
        containerImg.innerHTML += `<img class="image" src="${imgs[i]}">`;
    }
}

renderImg()