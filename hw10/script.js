/*task1*/
const min = -100;
const max = 100;

let random = (min, max) => Math.round(Math.random() * (max - min) + min);

let firstNum = random(min, max);
console.log('1) Значення змінної:' + firstNum);
if (firstNum > 10) {
    console.log('This number is more than 10')
} else {
    console.log('This number is less than 10')
}

/*task2*/
let lang = 'ru';

const ruMonths = ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь'];
const enMonths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

switch (lang) {
    case 'ru':
        console.log(ruMonths);
        break;
    case 'en':
        console.log(enMonths);
        break;
    default:
        console.log('Error');
}

/*task3*/
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 2; i < arr.length; i++) {
    if (i % 2 === 0) {
        console.log(arr[i])
    }
}

/*task4*/
let num = 1;
while (num <= 15) {
    console.log(num);
    num++
}

/*task5*/
let subtraction = (a, b) => console.log(a - b);
subtraction(10, 20);

let addition = (a, b) => console.log(a + b);
addition(10, 20);

let division = (a, b) => console.log(a / b);
division(10, 20);

let multiplication = (a, b) => console.log(a * b);
multiplication(10, 20);