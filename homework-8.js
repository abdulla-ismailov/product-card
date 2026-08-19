//информация о мне


const man = {
    name: "Абдулла",
    family: "Исмаилов",
    Age: 17,
    city: "Махачкала",
    work: "Нету",
}

console.log(man)


//данные автомобиля


const car = {
    brand: "BMW",
    model: "M3",
    yearManufacture: "2021",
    color: "red",
    typeBox: "automatic",
}

console.log(car)


//владелец авто


const owner = man;

console.log(owner)


//функция про макс скорость


function checkMaxSpeed(showMaxSpeed) {
    if (!showMaxSpeed.hasOwnProperty("maxSpeed")) {
        showMaxSpeed["maxSpeed"] = 302;
        console.log(`Свойство "maxSpeed" добавлено. Значение: ${showMaxSpeed["maxSpeed"]}`);
    } else {
        console.log("Свойство 'maxSpeed' уже существует. Ничего не делаем.");
    }
    return showMaxSpeed;
}

checkMaxSpeed(car);
checkMaxSpeed(car);


//функция, получает первым аргументом — объект, вторым аргументом — свойство объекта, которое нужно вывести.


function showInfo(object, property) {
    if (object && object.hasOwnProperty(property)) {
        console.log(object[property]);
    } else {
        console.log(`свойство "${property}" не найдено`);
    }
}

showInfo(man, `surname`);


//массив 


const colors = ['red', 'yellow', 'blue', 'black', 'white']

console.log(colors)


//массив с 4-5 книгами


const books = [
    {
    title: '1984',
    author: 'Джордж Оруэлл',
    yearPublication: 1949,
    coverColor: 'красный',
    genre: 'антиутопия',
    },

    {
    title: 'Гарри Поттер и философский камень',
    author: 'Дж. К. Роулинг',
    yearPublication: 1997,
    coverColor: 'Синий',
    genre: 'Фэнтези',
    },

    {
    title: 'Маленький принц',
    author: 'Антуан де Сент-Экзюпери',
    yearPublication: 1943,
    coverColor: 'Жёлтый',
    genre: 'Сказка',
    },

    {
    title: 'Преступление и наказание',
    author: 'Фёдор Достоевский',
    yearPublication: 1866,
    coverColor: 'Коричневый',
    genre: 'Роман',
    },

    {
    title: 'Властелин колец',
    author: 'Дж. Р. Р. Толкин',
    yearPublication: 1954,
    coverColor: 'Зелёный',
    genre: 'Фэнтези',
    },
];


//добавляем книгу в конец


books.push({
    title: 'Шерлок Холмс: Собака Баскервилей',
    author: 'Артур Конан Дойл',
    yearPublication: 1902,
    coverColor: 'Чёрный',
    genre: 'Детектив',
});

console.log(books)


//книги из киновселенной гарри потер


const booksHarryPotter = [{
    title: 'Гарри Поттер и философский камень',
    author: 'Дж. К. Роулинг',
    yearPublication: 1997,
    coverColor: 'Красный',
    genre: 'Фэнтези',
    },

    {
    title: 'Гарри Поттер и Тайная комната',
    author: 'Дж. К. Роулинг',
    yearPublication: 1998,
    coverColor: 'Зелёный',
    genre: 'Фэнтези',
    },

    {
    title: 'Гарри Поттер и узник Азкабана',
    author: 'Дж. К. Роулинг',
    yearPublication: 1999,
    coverColor: 'Синий',
    genre: 'Фэнтези',
    },
];


//метод спред


const allBooks = [...books, ...booksHarryPotter];
console.log(allBooks);


//редкость книг


function getRareBooks(arrayBooks) {
    return arrayBooks.map((book) => {
        const newBook = { ...book };
        
        newBook.isRare = book.yearPublication > 2000;
        
        return newBook;
    });
}

const rareBooks = getRareBooks(allBooks);

console.log(rareBooks)