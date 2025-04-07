<?php
 
if(isset($_POST['input-email']) && !empty($_POST['input-email'])) {
    $name    = addslashes($_POST['input-text']);
    $email   = addslashes($_POST['input-email']);
    $mensage = addslashes($_POST['input-mensage']);

    $to = "gustavocosta.tech@gmail.com";
    $subject = "Contato - Erick Gustavo";
    $body = "Nome: ".$name. "\r\n".
            "Email: ".$email. "\r\n".
            "Mensagem: ".$mensage. "\r\n";
    $header = "From: gustavocostacnn@gmail.com"."\r\n".
            "Reply-to: ".$email."\r\n".
            "X-Mailer: PHP/".phpversion();

    if(mail($to, $subject, $body, $header)) {
        echo("Email enviado com sucesso");
    } else {
        echo("O email não pode ser enviado");
    }
}

?>