<?php

  
  $name = $_POST['name_form'];
  $dest = $_POST['email_form'];
  $subject = $_POST['subject_form'];
  $objet ='=?UTF-8?B?'.base64_encode($name).'?='.$subject;
  $message=$_POST['message_form'];
  $Entetes = "MIME-Version: 1.0\r\n";
  $Entetes .= "Content-type: text/html; charset=UTF-8\r\n";
  $Entetes .= "From: Formulaire <".$_POST['mail'].">\r\n";
  $Entetes .= "Reply-To: Formulaire <".$_POST['mail'].">\r\n";
  
  if(mail($dest,$objet,$message,$entetes))
    echo "Mail envoyé avec succès.";
  else
    echo "Un problème est survenu.";
  exit;
  
  echo json_encode($_POST);
  
?>