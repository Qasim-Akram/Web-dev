export function getStockData(){
    return{
        Name:"Barkat Traders",
        Symbol:"BT",
        Price:(Math.random()*5).toFixed(2),
        Time: new Date().toLocaleTimeString()
        
    }

}

