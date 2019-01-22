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
