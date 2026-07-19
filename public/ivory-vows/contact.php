<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $name = htmlspecialchars(trim($_POST['name'] ?? ''));
    $email = htmlspecialchars(trim($_POST['email'] ?? ''));
    $phone = htmlspecialchars(trim($_POST['phone'] ?? ''));
    $date = htmlspecialchars(trim($_POST['date'] ?? ''));
    $message = htmlspecialchars(trim($_POST['message'] ?? ''));

    $mail = new PHPMailer(true);

    try {

        // SMTP Settings
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPAuth = true;
        $mail->Username = 'ivoryvows18@gmail.com';
        $mail->Password = 'vlfigukugohgwolw'; 
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = 587;

        // Sender & Receiver
        $mail->setFrom('ivoryvows18@gmail.com', 'Ivory Vows Website');
        $mail->addAddress('ivoryvows18@gmail.com');

        // Email Content
        $mail->isHTML(true);
        $mail->Subject = 'New Wedding Enquiry';

        $mail->Body = "
        <h2>New Wedding Enquiry</h2>

        <p><strong>Name:</strong> {$name}</p>

        <p><strong>Email:</strong> {$email}</p>

        <p><strong>Phone:</strong> {$phone}</p>

        <p><strong>Wedding Date:</strong> {$date}</p>

        <p><strong>Message:</strong><br>{$message}</p>
        ";

        $mail->send();

        // Success
        header("Location: index.html?success=1#contact");
        exit();

    } catch (Exception $e) {

        // Error
        header("Location: index.html?error=1#contact");
        exit();

    }

}
?>