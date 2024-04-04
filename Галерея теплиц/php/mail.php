<?php 
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
 
require_once 'phpmailer/Exception.php';
require_once 'phpmailer/PHPMailer.php';
require_once 'phpmailer/SMTP.php';
 
// Для более ранних версий PHPMailer
//require_once '/PHPMailer/PHPMailerAutoload.php';
 
$mail = new PHPMailer;
$mail->CharSet = 'UTF-8';

$name = $_POST['user_name'];
$phone = $_POST['user_phone'];
$email = $_POST['user_email'];
$text = $_POST['user_text'];
 
// Настройки SMTP
$mail->isSMTP();
$mail->SMTPAuth = true;
$mail->SMTPDebug = 0;
 
$mail->Host = 'ssl://smtp.mail.ru';
$mail->Port = 465;
$mail->Username = 'ostv05@mail.ru';
$mail->Password = 'JtA7BLVU1Jj90ZbK2hp1';
 
// От кого
$mail->setFrom('ostv05@mail.ru', 'Теплицы_Птз');		
 
// Кому
$mail->addAddress('vadim.ostapchuk.02@bk.ru', 'vadim.ostapchuk.02@bk.ru');
 
// Тема письма
$mail->Subject = 'Заявка с сайта';
 
// Тело письма
$body = '' .$name . ' оставил заявку! '.'' .$phone . ' - номер телефона '. ''.$text . ' - текст сообщения'.'' .$email . ' желаемая теплица ';
$mail->msgHTML($body);
 
$mail->send();
?>