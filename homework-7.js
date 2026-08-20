//вывод города и его температуры


function showCityTemperat(showCitysWeather, showTemperature) {
    console.log(`Сейчас в ${showCitysWeather} температура — ${showTemperature} градусов по Цельсию`);
}

showCityTemperat('растике', '26')


//скорость света


const SPEED_LIGHT = 299792458;

if (25 > SPEED_LIGHT) {
    console.log('Сверхсветовая скорость')
} else {
    console.log('Субсветовая скорость')
}


//покупка


const nameProduct = 'телефон';
const priceProduct = 10000;

function buyProduct(nameProduct, priceProduct) {
    if (12000 > priceProduct) {
        console.log(`${nameProduct} приобретён. Спасибо за покупку!`)
    } else {
        console.log('Вам не хватает 3000, пополните баланс')
    }
}

buyProduct(nameProduct, priceProduct);


//3 переменные


let firstVariable = 9
let secondVariable = 2
let thirdVariable = 0

console.log(firstVariable);
console.log(secondVariable);
console.log(thirdVariable);