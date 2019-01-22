/*task1*/
let a = 5;
if (a > 10) {
    console.log('This number is more than 10')
} else {
    console.log('This number is less than 10')
}

/*task2*/
let lang = 'ru';
switch (lang) {
    case 'ru':
        console.log(['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь']);
        break;
    case 'en':
        console.log(['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']);
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