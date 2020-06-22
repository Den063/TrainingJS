"use strict";
//Условие
if (4 == 9) {
    console.log('Ok!');
} else {
    console.log('Error');
}
//Вложенное условие
const num = 50;

if (num < 49) {
    console.log('Error');
} else if (num > 100) {
    console.log('Много!');
} else {
    console.log('Ok!');
}

//Тернарный оператор 
(num === 50) ? console.log('Ok!') : console.log('Error');

//switch проверяет значение на строгое соответствие знычениям case
const num2 = 50;

switch (num2) {
    case 49:
        console.log('Неверно');
        break;
    case 100:
        console.log('Неверно');
        break;
    case 50:
        console.log('В точку!');
        break;
    default:
        console.log('Не в этот раз');
        break;
}