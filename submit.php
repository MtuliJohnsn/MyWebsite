<?php

if (isset($_POST['submit'])) { // check if the form was submitted

    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    
}
$to = 'youremail@example.com';
$subject = 'New form submission';
$body = "Name: $name\nEmail: $email\nMessage:\n$message";
$headers = "From: $email\r\nReply-To: $email\r\n";

mail($to, $subject, $body, $headers);

echo 'Thank you for submitting the form!';
?>
