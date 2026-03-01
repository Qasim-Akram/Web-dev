async function  fetchComment(){try{
    const  response = await fetch("https://dummyjson.com/comments/150")
    if(!response.ok){
        throw new Error("there was a error with the api");
    }
    const  data = await response.json()
    console.log(data)

}catch(err){
    console.log(err)
}finally{
 console.log("execution completed! ")
}}


fetchComment()