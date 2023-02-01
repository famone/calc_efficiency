import { getRange } from '/rangeSlider.js'

// inputsIds

const weightDifference = document.querySelector('#weightDifference input[type="number"]')
const distance = document.querySelector('#distance input[type="number"]')
const dailyCargoes = document.querySelector('#dailyCargoes input[type="number"]')
const yearDays = document.querySelector('#yearDays input[type="number"]')
const salary = document.querySelector('#salary input[type="number"]')
const fuelLitter = document.querySelector('#fuelLitter input[type="number"]')
const fuelRate = document.querySelector('#fuelRate input[type="number"]')
const cargoMass = document.querySelector('#cargoMass input[type="number"]')
const carsAmount = document.querySelector('#carsAmount input[type="number"]')
const years = document.querySelector('#years input[type="number"]')

// resultsIds
const yearRun = document.querySelector('#yearRun')
const combinationMoney = document.querySelector('#combinationMoney')
const yearFuel = document.querySelector('#yearFuel')
const repair = document.querySelector('#repair')
const cargoVolume = document.querySelector('#cargoVolume')
const yearEconomy = document.querySelector('#yearEconomy')
const additionVolume = document.querySelector('#additionVolume')
const insurance = document.querySelector('#insurance')
const fuelRateKg = document.querySelector('#fuelRateKg')
const fuelEconomy = document.querySelector('#fuelEconomy')
const kmRub = document.querySelector('#kmRub')
const tonnPrice = document.querySelector('#tonnPrice')
const additionTonn = document.querySelector('#additionTonn')

// range-block-inp
const rangeBlockInp = document.querySelectorAll('.range-block-inp input[type="number"]')
const rangeBlockSlider = document.querySelectorAll('.range-block-inp input[type="range"]')

getRange()
calculate()

function calculate(){
   
    yearRun.innerHTML = parseFloat(distance.value) * parseFloat(dailyCargoes.value) * parseFloat(yearDays.value) * 2
    yearFuel.innerHTML = (parseFloat(yearRun.innerText) / 100 * parseInt(fuelLitter.value) * parseInt(fuelRate.value)).toFixed(2)
    repair.innerHTML = (parseFloat(yearRun.innerText)/25000*350000).toFixed(2)
    insurance.innerHTML = 15000000 * 0.03
    combinationMoney.innerHTML = ((parseInt(salary.value) * 13) + (parseInt(repair.innerText)) + parseInt(insurance.innerText) + parseFloat(yearFuel.innerText)).toFixed(2)

    cargoVolume.innerHTML = parseFloat(cargoMass.value * dailyCargoes.value * yearDays.value).toFixed(2)
    additionVolume.innerHTML = ((parseFloat(weightDifference.value) * parseFloat(dailyCargoes.value) * parseFloat(yearDays.value)) / 1000).toFixed(2)
    fuelRateKg.innerHTML = parseFloat(44/fuelRate.value/1000).toFixed(3)

    fuelEconomy.innerHTML = ((parseFloat(fuelRateKg.innerText) * parseFloat(weightDifference.value) * parseInt(yearRun.innerText) / 100 * parseInt(fuelLitter.value)) / 2).toFixed(2)
    kmRub.innerHTML = (parseFloat(combinationMoney.innerText) / parseInt(yearRun.innerText)).toFixed(2)

    tonnPrice.innerHTML = ( parseFloat(combinationMoney.innerText) / parseInt(cargoVolume.innerText)).toFixed(2)
    yearEconomy.innerHTML = ((parseFloat(tonnPrice.innerText) * parseFloat(additionVolume.innerText) + parseFloat(fuelEconomy.innerText)) * parseInt(carsAmount.value)).toFixed(2)

    additionEconomy.innerHTML = (parseFloat(yearEconomy.innerText) * parseInt(years.value)).toFixed(2)
    additionTonn.innerHTML = (parseFloat(additionVolume.innerText) * parseInt(carsAmount.value) * parseInt(years.value)).toFixed(2)
    
}

// экшен на действия текстовых полей
rangeBlockInp.forEach((item, index) => {
    item.addEventListener('input', function(){
        calculate();
        rangeBlockSlider[index].value = item.value
        getRange()
    })
})

// экшен на действия ползунков
rangeBlockSlider.forEach((item, index) => {
    item.addEventListener('input', function(){
        calculate();
        rangeBlockInp[index].value = item.value
        getRange()
    })
})