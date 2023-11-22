<?php

$fname = $_POST['fname'];
$pnumber = $_POST['pnumber'];
$email = $_POST['email'];
$message = $_POST['message'];

$mailheader = "From:".$fname."<".$email.">\r\n";

$recipient = "babalwambolekwa93@gmail.com";
$subject = "Bayathandwa Day Care website message"

mail($recipient, $subject, $message, $mailheader, $pnumber)
or die("Error!");

?>