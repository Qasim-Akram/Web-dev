const userInput = document.getElementById("input");
const convertBtn = document.getElementById("convert");
const length = document.getElementById("length")
const volumne = document.getElementById("volumne")
const mass = document.getElementById("mass")





convertBtn.addEventListener("click", function () {
    const input = Number(userInput.value);
    convertLen(input)
    convertVol(input)
    convertMas(input)

})


function convertLen(input) {
    let meter = input * 3.281;
    let feet = input / 3.281;
    length.innerHTML = `${input} meters = ${feet.toFixed(3)} feet | ${input} feet =  ${meter.toFixed(2)} meters`


}
function convertVol(input) {
    let liters = input * 3.785;
    let gallons = input / 3.785;
    volumne.innerHTML = `${input} liters =  ${gallons.toFixed(3)} gallons | ${input} gallons = ${liters.toFixed(3)} liters `


}
function convertMas(input) {
    let kilograms = input / 2.205;
    let pounds = input * 2.205;
    mass.innerHTML = `${input} kilos =  ${pounds.toFixed(3)} pounds | ${input} pounds = ${kilograms.toFixed(3)} kilos `


}
