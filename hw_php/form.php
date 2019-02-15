<?php
    var_dump($_POST);

    $email = $_POST['email-address'];
    echo "<br/>" .$email;

    $userName = explode('@', $email);
    echo "<br/>" .$userName[0];