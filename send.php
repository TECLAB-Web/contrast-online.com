<?
//if((isset($_POST['name'])&&$_POST['name']!=""&&$_POST['name']!=" ")&&(isset($_POST['tel'])&&$_POST['tel']!=""&&$_POST['tel']!=" ")){
$to = 'clean.contrast@gmail.com';
$subject = 'Письмо с сайта contrast.co.ua';
$message = '
                <html>
                    <head>
                        <title>'.$subject.'</title>
                    </head>
                    <body>
                        <p>Имя: '.$_POST['name'].'</p>
                        <p>Телефон: '.$_POST['tel'].'</p>                        
                    </body>
                </html>';
$headers  = "Content-type: text/html; charset=utf-8 \r\n";

mail($to, $subject, $message, $headers);
//}
?>