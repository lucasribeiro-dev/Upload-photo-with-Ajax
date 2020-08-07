<?php

if(isset($_FILES['image'])){
    $file = $_FILES['image'];

    move_uploaded_file($file['tmp_name'], 'images/'.$file['name']);

    echo "File of ".$_POST['name']." sent with success";
}


?>