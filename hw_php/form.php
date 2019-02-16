<?php
//1. Створити php файл куди будуть відправлятись данні з усіх полів форми, яку ви робили у другій домашній роботі

    var_dump($_POST);

//2. Напишіть php код, який буде витягувать ім'я юзера з емейл адреси. Наприклад: з example@mail.com треба витягнуть example

    $userName = explode('@', $_POST['email-address']);
    echo "<br/>" .$userName[0];

//3. Написать генератор рандомних паролів, які складаються з чисел, малих і великих літер латинського алфавіту, і які
// повинні бути довші за 10 літер (включно) не використовуючи функцію rand()

    function generatePassword($length) {
        if ($length >= 10) {
            return substr(str_shuffle('0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'), 0, $length);
        } else {
            echo "Пароль має бути довшим за 10 символів";
        }
    };

    echo "<br/>";
    echo generatePassword(10);