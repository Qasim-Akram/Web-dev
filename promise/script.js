function getImage(url){
   return new Promise((resolve,reject) => {
    const img = new Image()
    img.src = url 
    img.alt = ` wtf i don't know `
    img.addEventListener("load",() => resolve(img))
    img.addEventListener("error",() => reject('there is an error'))
    
    }
   )}


   (async () => {
      try{
         const response = await getImage('https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png')
         document.getElementById('container').appendChild(response)
      }catch(error){
         console.log(error)
      }
   })()
   




   