<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';

header('Content-Type: application/json');

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $subject = htmlspecialchars($_POST['subject']);
    $message = htmlspecialchars($_POST['message']);

    $mail = new PHPMailer(true);
    try {
        //Server settings
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPAuth = true;
        $mail->Username = 'jkcablecar@gmail.com'; // Replace with your Gmail address
        $mail->Password = 'xowhsctnitrcszfy'; // Replace with your Gmail password
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = 587;

        //Recipients
        $mail->setFrom($email, $name);
        $mail->addAddress('jkcablecar@gmail.com'); // Add a recipient

        // Content
        $mail->isHTML(true);
        $mail->Subject = $subject;
        $mail->Body    = nl2br("Name: $name\nEmail: $email\n\nMessage:\n$message");

        $mail->send();
        echo json_encode(['status' => 'success', 'message' => 'Feedback submitted successfully.']);
    } catch (Exception $e) {
        // echo json_encode(['status' => 'error', 'message' => "Failed to send feedback. Mailer Error: {$mail->ErrorInfo}"]);
        echo json_encode(['status' => 'error', 'message' => "Failed to send feedback. Please try again later."]);
    }
} else {
    echo json_encode(['status' => 'error', 'message' => 'Invalid request method.']);
}
?>
