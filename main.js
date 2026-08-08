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

openPageGoogl.addEventListener('click', openGoogle)


function openGoogle() {
    const answer = confirm('вы действительно хотите открыть Google?');
    if (answer === true) {
        window.open('https://google.com')
    }
}


// вывод консоль лог


const outputConsolLogButton = document.querySelector('#buttonOutputeLog');
outputConsolLogButton.addEventListener('click', () => outputConsolLogButt('как дела?'))

function outputConsolLogButt(message) {
    alert(message)
    console.log(message)
}


// вывод в консоль выбери продукт


const title = document.querySelector('.title');

title.addEventListener('mouseenter', () => {
  console.log(title.textContent)
});


//кнопка ,которая меняет цвет


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
