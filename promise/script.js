function getImage(url) {
   return new Promise((resolve, reject) => {
      setTimeout(() => {
         const img = new Image()
         img.src = url
         img.alt = ` wtf i don't know `
         img.addEventListener("load", () => resolve(img))
         img.addEventListener("error", () => reject('there is an error'))
      }, 500)
   }
   )
}


const images = [
   'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
   'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
   'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
   'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
]


async function preLoadImage(imagearr) {
   const imgContainer = document.getElementById('img-container')
   const uploadContainer = document.getElementById('upload-container')

   const promises = imagearr.map(url => getImage(url))

   try {
          const result = await Promise.all(promises)
          console.log("all images are loaded")
          uploadContainer.style.display = 'none'
          result.forEach(img => imgContainer.appendChild(img))


      } catch (error) {
      console.log(error)
   }
}
// (async () => {
//       try {
//          const response = await getImage('https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png')
//          document.getElementById('container').appendChild(response)
//       } catch (error) {
//          console.log(error)
//       }
//    })()
 document.getElementById('loadimg').addEventListener('click',()=>preLoadImage(images))




