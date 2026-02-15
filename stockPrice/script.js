import { getStockData } from "./fakestockapi.js"

const stockDisplayname = document.getElementById("name")
const stockDisplaySymbol = document.getElementById("symbol")
const stockDisplayPrice = document.getElementById("price")
const stockDisplayIcon = document.getElementById("price-icon")
const stockDisplayTime = document.getElementById("time")
let previousprice = 0

setInterval(function () {
    const stockData = getStockData()
    renderStockTicker(stockData)
}, 1500)

function renderStockTicker(stockData) {
    const { Name, Symbol, Price, Time } = stockData

    const direction = Price > previousprice ? "🔼" : Price < previousprice ? "🔽" : "↙️"

    stockDisplayname.innerText = "Name: " + Name
    stockDisplaySymbol.innerText = "Symbol: " + Symbol
    stockDisplayPrice.innerText = "Price: $" + Price
    stockDisplayTime.innerText = "Time: " + Time
    stockDisplayIcon.innerText = direction

    previousprice = Number(Price)

}


