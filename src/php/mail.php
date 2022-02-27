<?php 

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$name = $_POST['user_name'];
$email = $_POST['user_phone'];

//$mail->SMTPDebug = 3;                               // Enable verbose debug output


$mail->setFrom('ostv05@mail.ru'); // от кого будет уходить письмо?
$mail->addAddress('vadim.ostapchuk.02@bk.ru');     // Кому будет уходить письмо 
//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Заявка с сайта';
$mail->Body    = '' .$email . ' оставил заявку!'.'' .$name . ' - имя пользователя' .'' .$phone . ' - текст сообщения';
$mail->AltBody = '';

if(!$mail->send()) {
    return false;
} else {
    return true;
}
?>