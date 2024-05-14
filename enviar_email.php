<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nome = $_POST['nome'];
    $email = $_POST['email'];
    $mensagem = $_POST['mensagem'];
    
    $to = "alexandremota560@gmail.com";
    $subject = "Nova mensagem do formulário do site";
    $message = "Nome: $nome\n";
    $message .= "Email: $email\n";
    $message .= "Mensagem:\n$mensagem";
    
    $headers = "From: $email";
    
    if (mail($to, $subject, $message, $headers)) {
        echo "Email enviado com sucesso!";
    } else {
        echo "Erro ao enviar o email.";
    }
}
?>
