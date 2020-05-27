<?php 

    // header('Content-Type: application/json');
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
 


    $currDate = date('Y-m-d');
 
    $post = json_decode(file_get_contents('php://input'), true);
    
    // var_dump($_POST);
    if(!empty($post)) {
        switch ($post['actionType']) {
            case 'SEARCH':
                $searchKey = $post['searchKey'];
                if ($searchKey !== '') {
                    $usersDB = mysqli_query($connection, "SELECT *, Timestampdiff(Year, `dateOfBirth`, CURDATE()) AS age FROM `workers_store` WHERE `showUser`= 1 AND `firstName`= '$searchKey' OR `lastName`='$searchKey' OR `position`='$searchKey' OR `city`='$searchKey' ");
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
                }
                else {
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
                }
                break;            
            case 'SET_REMOTE_WORKING':
                $choosenUser = $post['choosenUser'];
                $result = mysqli_query($connection, "UPDATE `workers_store` SET `remoteWorking` = '1' WHERE `workers_store`.`id` = $choosenUser" );
                $usersDB = mysqli_query($connection, "SELECT *, Timestampdiff(Year, `dateOfBirth`, CURDATE()) AS age FROM `workers_store` WHERE `showUser`= 1");
                if($usersDB->num_rows > 0) {
                    $users = [];
                    while($row = $usersDB->fetch_assoc()) {
                        $users[] = $row;
                    } }
                if ($result) {
                    echo json_encode($users);
                } else {
                    echo ('Error');
                }
                break;
            case 'REMOVE_REMOTE_WORKING':
                $choosenUser = $post['choosenUser'];
                $result = mysqli_query($connection, "UPDATE `workers_store` SET `remoteWorking` = '0' WHERE `workers_store`.`id` = $choosenUser" );
                $usersDB = mysqli_query($connection, "SELECT *, Timestampdiff(Year, `dateOfBirth`, CURDATE()) AS age FROM `workers_store` WHERE `showUser`= 1");
                if($usersDB->num_rows > 0) {
                    $users = [];
                    while($row = $usersDB->fetch_assoc()) {
                        $users[] = $row;
                    } }
                if ($result) {
                    echo json_encode($users);
                } else {
                    echo ('Error');
                }
                break;
            case 'DELETE_USER':
                    $choosenUser = $post['choosenUser'];
                    $result = mysqli_query($connection, "UPDATE `workers_store` SET `showUser` = '0' WHERE `workers_store`.`id` = $choosenUser" );
                    $usersDB = mysqli_query($connection, "SELECT *, Timestampdiff(Year, `dateOfBirth`, CURDATE()) AS age FROM `workers_store` WHERE `showUser`= 1");
                    if($usersDB->num_rows > 0) {
                        $users = [];
                        while($row = $usersDB->fetch_assoc()) {
                            $users[] = $row;
                        } }
                    if ($result) {
                        echo json_encode($users);
                    } else {
                        echo ('Error');
                    }
                    break;
            case 'PUSH_EDITED_USER':
                        $userId = $post['userId'];
                        $userName = $post['userName'];
                        $userSurname = $post['userSurname'];
                        $userBirth = $post['userBirth'];
                        $userPosition = $post['userPosition'];
                        $newUserRemoteworking = $post['newUserRemoteworking'];
                        $userCity = $post['userCity'];
                        $userStreet = $post['userStreet'];
                        $userHouse = $post['userHouse'];
                        $userApartment = $post['userApartment'];
                        $searchKey = $post['searchKey'];
                        if ($userBirth === '') {
                            $userBirth = '0000-00-00';
                        }
                        $result = mysqli_query($connection, "UPDATE `workers_store` SET `firstName` = '$userName', `lastName` = '$userSurname', `position` = '$userPosition', `city` = '$userCity', `street` = '$userStreet', `house` = '$userHouse', `apartment` = '$userApartment', `remoteWorking` = '$newUserRemoteworking', `dateOfBirth`='$userBirth'  WHERE `workers_store`.`id` = $userId" );
                        
                        if ($searchKey === '') {
                            $usersDB = mysqli_query($connection, "SELECT *, Timestampdiff(Year, `dateOfBirth`, CURDATE()) AS age FROM `workers_store` WHERE `showUser`= 1");
                        } else {
                            $usersDB = mysqli_query($connection, "SELECT *, Timestampdiff(Year, `dateOfBirth`, CURDATE()) AS age FROM `workers_store` WHERE `showUser`= 1 AND `firstName`= '$searchKey' OR `lastName`='$searchKey' OR `position`='$searchKey' OR `city`='$searchKey' ");
                        }
                        if($usersDB->num_rows > 0) {
                            $users = [];
                            while($row = $usersDB->fetch_assoc()) {
                                $users[] = $row;
                            } }
                        if ($result) {
                            echo json_encode($users);
                        } else {
                            echo ('Error');
                        }
                        break;
            case 'PUSH_NEW_USER':
                            $userId = $post['userId'];
                            $userName = $post['userName'];
                            $userSurname = $post['userSurname'];
                            $userBirth = $post['userBirth'];
                            $userPosition = $post['userPosition'];
                            $newUserRemoteworking = $post['newUserRemoteworking'];
                            $userCity = $post['userCity'];
                            $userStreet = $post['userStreet'];
                            $userHouse = $post['userHouse'];
                            $userApartment = $post['userApartment'];
                            if ($userBirth === '') {
                                $userBirth = '0000-00-00';
                            }
                            $result = mysqli_query($connection, "INSERT INTO `workers_store` (`id`, `showUser`, `preview`, `firstName`, `lastName`, `dateOfBirth`, `position`, `remoteWorking`, `city`, `street`, `house`, `apartment`) VALUES (NULL, '1', '', '$userName', '$userSurname', '$userBirth', '$userPosition', '$newUserRemoteworking', '$userCity', '$userStreet', '$userHouse', '$userApartment')" );
                            $usersDB = mysqli_query($connection, "SELECT *, Timestampdiff(Year, `dateOfBirth`, CURDATE()) AS age FROM `workers_store` WHERE `showUser`= 1");
                            if($usersDB->num_rows > 0) {
                                $users = [];
                                while($row = $usersDB->fetch_assoc()) {
                                    $users[] = $row;
                                } }
                            if ($result) {
                                echo json_encode($users);
                            } else {
                                   echo ('Error');
                            }
                            break;                        
            default:
                # code...
                break;
        }


    } else {
        echo json_encode(['status'=>'error', 'msg' => 'Empty data request']);
    }
    // $r = var_dump(file_get_contents('php://input'));
    // $f = json_decode($r);



    // $usersDB = mysqli_query($connection, "SELECT * FROM `workers_store` WHERE `showUser`= 1 ");
    // if($usersDB->num_rows > 0) {
    //     $users = [];
    //     while($row = $usersDB->fetch_assoc()) {
    //         $users[] = $row;
    //     }
        
    //     echo json_encode($users);
    // }
    // else {
    //     echo json_encode([]);
    // }



    //   