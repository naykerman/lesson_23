"use strict"

//Оператори

/*
//Варіант №1
console.log('35' - "22");
//верне 13

//Варіант №2
console.log('35' * "22");
//Верне 770

//Варіант №3
console.log("55" > 22++);
//верне true

//Варіант №4
let usersCounter = 0;
let newUsers = usersCounter;
console.log(newUsers);
//Верне 1

//Варіант №5
console.log(!false && 11 || 18 && !'');
//Верне 18

//Варіант№6
let name = 0;
console.log(name ?? "Без імені");
*/


//Умовне вітвлення
/*
//Варіант №1
if (1 === "1") {
   console.log('Правда!');
} else {
   console.log('Брехня!');
}

//Варіант №2
if (5 == "5") {
   console.log('Правда!');
} else {
   console.log('Брехня!');
}

//Варіант №3
let message = (92 > '11' && 58 < 100) ? 'Правда!' : 'Брехня!';
console.log(message);

//Варіант №4
if (0) {
   console.log('Брехня!');
} else if (" ") {
   console.log('правда!');
}
*/


//Цикли

//Задача №1
/*
let num = 0;
while (num <= 5) {
   console.log(num);
   num++;
}

do {
   console.log(num);
   num++;
} while (num <= 5);

for (; num <= 5; num++) {
   console.log(num);
}
*/

//Задача №2
/*
let num = 8;
while (num) {
   console.log(num);
   num--;
}
*/
//Задача №3
/*
let num = 0;
while (num < 3) {
   console.log(`Число: ${num}`);
   num++;
}
*/

//Задача №4
/*firstFor: for (let num = 0; num < 2; num++) {
   for (let size = 0; size < 3; size++) {
      if (size == 1) {
         break firstFor;
      }
      console.log(size);
   }
}*/


//Числа
/*
//Задача №1
let numOne = 1.005 + Number.EPSILON;
let numTwo = Math.round(numOne * 100) / 100;
console.log(numTwo);

//Задача №2

let value = parseFloat("158.58px");
console.log(value);

//Задача №3
let newValue = 58 + "Фрилансер";
if (isNaN(newValue)) {
   console.log('Результат виразу NaN');
}

//Задача №4
console.log(Math.max(10, 58, 39, -150, 0));

//Задача №5
let minNumber = Math.floor(58.858);
console.log(minNumber);
*/


//Рядки

//ЗАДАЧА №1
let fls = "фрілансер";
let text = 'Привіт! Я ${fls}';
console.log(text);

//Задача №2 
let textTwo = 'фрілансер';
console.log(textTwo.slice(5, 6));

//Задача №3
let textThree = 123 + "456";
console.log(textThree);

//Задача №4
let taskFour = 'фрілансер';
console.log(taskFour.toUpperCase());

//Задача №5
let taskFive = 'фрілансер';
console.log(taskFive.slice(3, 6));

//Задача №6
let taskSix = 'фрілансер';
console.log(text.includes('лан', 4));