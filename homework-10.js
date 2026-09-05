//карточки людей


const peoples = [
    {
        name: "Александр",
        surname: "Петров",
        height: 182,
        city: "Москва",
        country: "Россия",
    },

    {
        name: "Омар",
        surname: "Хасанов",
        height: 188,
        city: "Баку",
        country: "Азербайджан",
    },

    {
        name: "Лука",
        surname: "Риччи",
        height: 174,
        city: "Рим",
        country: "Италия",
    },

    {
        name: "Адам",
        surname: "Смит",
        height: 180,
        city: "Лондон",
        country: "Великобритания",
    },

    {
        name: "Даниэль",
        surname: "Мюллер",
        height: 176,
        city: "Берлин",
        country: "Германия",
    }
];


//отображение карточек


window.onload = function() {
    const cardSelection = prompt('Сколько карточек отобразить?, от 1-5')
    if (cardSelection) {
        alert (cardSelection); 
    }
};