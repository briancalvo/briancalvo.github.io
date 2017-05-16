<?php
    $mail_to = 'brian.calvo.aragon@gmail.com'; // specify your email here

    // Assigning data from the $_POST array to variables
    $name = $_POST['sender_name'];
    $subject2 = $_POST['sender_subject'];
    $mail_from = $_POST['sender_email'];
    $phone = $_POST['sender_phone'];
    $message = $_POST['sender_message'];

    // Construct email subject
    $subject = 'www.mysite.com Message from visitor ' . $name . '- ' .$subject2.;

    // Construct email body
    $body_message = 'From: ' . $name . "\r\n";
    $body_message .= 'E-mail: ' . $mail_from . "\r\n";
    $body_message .= 'Phone: ' . $phone . "\r\n";
    $body_message .= 'Message: ' . $message;

    // Construct email headers
    $headers = 'From: ' . $mail_from . "\r\n";
    $headers .= 'Reply-To: ' . $mail_from . "\r\n";

    $mail_sent = mail($mail_to, $subject, $body_message, $headers);

    if ($mail_sent == true){ ?>
        <script language="javascript" type="text/javascript">
        alert('Gracias por el mensaje. Nos pondremos en contacto en breve.');
        window.location = 'index.html';
        </script>
    <?php } else { ?>
    <script language="javascript" type="text/javascript">
        alert('Mensaje no enviado. Por favor, prueba mas tarde.');
        window.location = 'index.html';
    </script>
    <?php
    }
?>