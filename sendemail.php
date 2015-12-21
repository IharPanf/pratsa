<?php
	$to = 'pif13@tut.by';	
    $from    = htmlspecialchars(trim($_POST['curEmail'])); 
    $message = htmlspecialchars(trim($_POST['textMessage'])); 
 	if( $from && $message) {
        mail($to, 'message', $message, 'From:'.$from); 
	} 
?>