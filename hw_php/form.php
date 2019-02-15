<?php
    var_dump($_POST);

    $userName = explode('@', $_POST['email-address']);
    echo "<br/>" .$userName[0];