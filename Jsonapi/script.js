async function sendpost() {
    try {
        const response = await fetch("https://apis.scrimba.com/jsonplaceholder/posts", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
            title:'War Criminals',
            body:'Usa and israel are war criminals',
            userId:1
            })
        })
        if (!response.ok) {
            throw new Error("there was a error with the api");
        }
        const data = await response.json()
        console.log(data)

    } catch (err) {
        console.log(err)
    } finally {
        console.log("execution completed! ")
    }
}

async function getpost() {
    try {
        const response = await fetch("https://apis.scrimba.com/jsonplaceholder/posts/101")
        if (!response.ok) {
            throw new Error("there was a error with the api");
        }
        const data = await response.json()
        console.log(data)

    } catch (err) {
        console.log(err)
    }   finally {  
        console.log("execution completed! ")
    }}


getpost()