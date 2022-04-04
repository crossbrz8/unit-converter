let numberEl = document.getElementById("metersFeet")
let volumeEl = document.getElementById("volume")
let kilosEl = document.getElementById("kilos")
let numberChange = document.getElementById("numberToConvert")


function numberConvert()
{  
    let userInput = prompt()
    numberChange.innerText = userInput
    let conversion = userInput * 3.28084
    let conversionF = 0.3048 * userInput
    numberEl.innerText = userInput + " meters = " + conversion.toFixed(3) + " | " + userInput + " feet = " + conversionF.toFixed(3) + " meters" 
      
    let conversionLiter = userInput * 0.264172 
    let conversionGallon = 3.785 * userInput
    volumeEl.innerText = userInput + " liters = " + conversionLiter.toFixed(3) + " | " + userInput + " Gallons = " + conversionGallon.toFixed(3) + " liters" 
    
    let conversionKilos = userInput * 2.20  
    let conversionPounds = 0.453592 * userInput
    kilosEl.innerText = userInput + " Pounds = " + conversionKilos.toFixed(3) + " | " + userInput + " Kilos = " + conversionPounds.toFixed(3) + " Pounds" 
    
     
}