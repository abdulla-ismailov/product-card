//вывод города и его температуры


function announcementCityAndTemperature(city, temperature) {
console.log(`Сейчас в ${city} температура — ${temperature} градусов по Цельсию`);
}

announcementCityAndTemperature('растике', '26')


//скорость света


const speedLight = 299792458;

if (25 > speedLight) {
    console.log ('Сверхсветовая скорость')
} else {
    console.log ('Субсветовая скорость')
}


//покупка


const nameProduct = 'телефон';
const priceProduct = 10000;

if (12000 > priceProduct) {
    console.log (`${nameProduct} приобретён. Спасибо за покупку!`)
} else {
    console.log ('Вам не хватает 3000, пополните баланс')
}


//1 функция


function numberGet() {
    return 19;
}

console.log (numberGet())


//3 переменные


let firstVariable = 9
let secondVariable = 2
let thirdVariable = 0

console.log (firstVariable)
console.log (secondVariable)
console.log (thirdVariable)