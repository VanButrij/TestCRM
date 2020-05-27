<?php 

    header('Content-Type: application/json');
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
    header('Access-Control-Allow-Headers: Content-Type');
    header('Access-Control-Allow-Credentials: true');

    $connection = mysqli_connect('127.0.0.1','root','', 'workers');

    if($connection === false) {
        echo ('Не удалось подключиться к базе данных!');
        echo mysqli_connect_error();
        exit();
    } 
 




    $usersDB = mysqli_query($connection, "SELECT *, Timestampdiff(Year, `dateOfBirth`, CURDATE()) AS age FROM `workers_store` WHERE `showUser`= 1");
    if($usersDB->num_rows > 0) {
        $users = [];
        while($row = $usersDB->fetch_assoc()) {
            $users[] = $row;
        }

        echo json_encode($users);
    }
    else {
        echo json_encode([]);
    }




    

   
