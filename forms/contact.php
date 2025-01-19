<?php
// Get form data
$name = $_POST['name'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];

// Set recipient email
$to = 'francisc.o.liveira@outlook.com';

// Create email headers
$headers = 'From: ' . $email . "\r\n" .
    'Reply-To: ' . $email . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

// Compose the email body
$email_body = "You have received a new message from your website contact form.\n\n" .
    "Name: $name\n" .
    "Email: $email\n" .
    "Subject: $subject\n\n" .
    "Message:\n$message";

// Send email
$success = mail($to, $subject, $email_body, $headers);

// Return JSON response
header('Content-Type: application/json');
if ($success) {
    echo json_encode(array("success" => true));
} else {
    echo json_encode(array("success" => false));
}
?> 