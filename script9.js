'use strict';

console.log('arr' + ' - object');
console.log(4 + '5');
console.log(4 + +'5');

let incr = 10,
    decr = 10;

//incr++;   //инкримент
//decr--;   //декримент

//console.log(incr++);   //постфиксная форма инкримента
//console.log(decr--);   //постфиксная форма дикримента
console.log(++incr);     //префиксная форма инкримента
console.log(--decr);     //префиксная форма дикримента

console.log(5%2);        //возвращает остаток от деления

console.log(2*4 == 8);   // == знак сравнения
console.log(2*4 === '8');// === строгое сравнение т.е. сравнивает и по типу данных
console.log(2 + 2 * 2 != 6);    // != - оператор неравенства
console.log(2 + 2 * 2 !== '6');   // !== - строгое неравенство, сравнение в том числе и по тепу данных

const isChecked = false,
      isClose = true;

console.log(isChecked && isClose);  //оператор "И"
console.log(isChecked || isClose);  //оператор "ИЛИ"
console.log(!isChecked && isClose); // ! - оператор отрицания превращает значение в обратное

