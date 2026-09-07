//импорт

import { comments } from "./comments.js";

console.log(comments);

//массив чисел

const numbers = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10
];

const pruning = numbers.slice(4, 10);

console.log(pruning);

//массив кухонн приборов (вывода ножа).

const kitchenAppliances = [
    'spoon', 'fork', 'knife',
];

const knife = kitchenAppliances.filter(applianc => applianc.includes('knife'));

console.log(knife);

//переворачиватель массивов

const alphabet = [
    'a', 'b', 'c'
];

alphabet.reverse();
kitchenAppliances.reverse();
numbers.reverse();

console.log(alphabet, kitchenAppliances, numbers);

//пользователи с .com в конце почты 

const containsComInMail = comments.filter(comment => comment.email.includes('.com'));

console.log(containsComInMail);

//изменение пост айди

comments.forEach(comment => {
    if (comment.id <= 5) {
        comment.postId = 2;
    } else {
        comment.postId = 1;
    }
});

console.log(comments);

//массив только из айди и имени

const onlyIdAndName = comments.map(comment => ({
    id: comment.id,
    name: comment.name,
}));

console.log(onlyIdAndName);

//добавляем свойство isInvalid

comments.forEach(comment => {
    comment.body.length > 187 ? comment.isInvalid : comment.isInvalid 
    });

console.log(comments);

//выводим массив почт

const emails = comments.reduce((acc, comment) => {
    acc.push(comment.email);
    return acc;
}, []);

console.log(emails);

const emails2 = comments.map(user => user.email);

console.log(emails2);

//приводим массив почт к строке

console.log(emails2.join());