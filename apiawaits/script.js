async function getActivity() {
    try {
        const response = await fetch(" https://bored-api.appbrewery.com/random")
        const data = await response.json()
        console.log(data)
    } catch (err) {
        console.log(err)
    }finally{
        console.log("api call completed")
    }
}

getActivity()
