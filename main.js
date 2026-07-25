// Покраска одной карточки


const productCard = document.querySelector('.product'); 
const buttonChangeColorCard = document.querySelector('#button-change-color-card'); 
const blueColor = 'rgb(0, 255, 242)';

buttonChangeColorCard.addEventListener('click', () => {
    productCard.style.backgroundColor = blueColor
})


// Покраска всех карточек


const productCards = document.querySelectorAll('.product'); 
const buttonChangeColorCards = document.querySelector('#button-change-color-allCard'); 
const yellowColor = 'rgb(242, 255, 0)';

buttonChangeColorCards.addEventListener('click', () => {
    productCards.forEach((card) => card.style.backgroundColor = yellowColor)
})


// Открыть гугл


const openPageGoogl = document.querySelector('#open-page-google');

openPageGoogl.addEventListener('click', openGoogle )


function openGoogle() {
    const answer = confirm('вы действительно хотите открыть Google?');
    if (answer===true) {
    window.open('https://google.com')
    }
}

// вывод консоль лог

const outputConsolLogButton = document.querySelector('#buttonOutputeLog');
outputConsolLogButton.addEventListener('click', () => outputConsolLog ('как дела?'))

    function outputConsolLog(message) {
    alert(message)
    console.log(message)
    }

    // вывод в консоль выбери продукт


const outputChangeProduct = document.querySelector('.title');
outputChangeProduct.addEventListener('mouseenter', () => outputConsolLog ('у меня норм'))

    function outputConsolLog(message) {
    console.log(message)
    }

    // 

const buttonChangeColor = document.querySelector('.button')
buttonChangeColor.addEventListener('click', () => {
if (buttonChangeColor.classList.contains('active')) {
        buttonChangeColor.classList.remove('active');
        buttonChangeColor.classList.add('active-2');
    } else {
        buttonChangeColor.classList.remove('active-2');
        buttonChangeColor.classList.add('active');
    }
});
