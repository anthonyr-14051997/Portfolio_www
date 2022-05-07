<?php

  

$regleNomPrenom = "/^[a-zA-ZáàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ'-]+$/";
$regleEmail = "/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/";
$regleMessage = "/^[a-zA-ZáàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ',;()-]+$/";

if((isset($_POST['name_form']))&&(preg_match($regleNomPrenom, $_POST['name_form']))){
    $nom = $_POST['name_form'];
}
if((isset($_POST['email_form']))&&(preg_match($regleEmail, $_POST['email_form']))){
    $email = $_POST['email_form'];
}
if((isset($_POST['message_form']))&&(preg_match($regleMessage, $_POST['message_form']))){
    $message = $_POST['message_form'];
}
if((isset($_POST['subject_form']))&&(preg_match($regleMessage, $_POST['subject_form']))){
  $subject = $_POST['subject_form'];
}
if(($nom)&&($email)&&($message)&&($subject)){
    $res = array('validation' => "Email envoyé");
    $entetes = "From : $email"."\n";
    $nom_message = "De la part de -> $nom"."\r"."\n".$message."\n";
    $entetes .= "MIME-Version: 1.0\r\n";
    $entetes .= "Content-type: text/html; charset=UTF-8\r\n";
    echo json_encode($res);
    mail("aruby9905@gmail.com", "Sujet : ". $subject, nl2br($nom_message), $entetes);
}

  
?>