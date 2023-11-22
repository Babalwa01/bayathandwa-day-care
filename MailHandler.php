<?php
	$stripHTML = true;
	$owner_email = "babalwambolekwa93@gmail.com";
	// $headers = 'From:' . $_POST["contact_email"];
	$subject = ' ' . $_POST["contact_subject"];
	$messageBody = "";
	
	if($_POST['fname']!='nope'){
		$messageBody .= '<p><strong>Full name: </strong>' . $_POST["fname"] . '</p>' . "\n";
		$messageBody .= '<br>' . "\n";
	}
    
	//if($_POST['lname']!='nope'){
		//$messageBody .= '<p><strong>Last Name: </strong>' . $_POST["lname"] . '</p>' . "\n";
		//$messageBody .= '<br>' . "\n";
	//}

	//if($_POST['contact_subject']!='nope'){
		//$messageBody .= '<p><strong>Subject: </strong>' . $_POST["contact_subject"] . '</p>' . "\n";
		//$messageBody .= '<br>' . "\n";
	//}

    if($_POST['pnumber']!='nope'){		
		$messageBody .= '<p><strong>Phone number: </strong>' . $_POST['pnumber'] . '</p>' . "\n";
		$messageBody .= '<br>' . "\n";
	}

	if($_POST['email']!='nope'){
		$messageBody .= '<p><strong>E-mail address: </strong>' . $_POST['email'] . '</p>' . "\n";
		$messageBody .= '<br>' . "\n";
	}else{
		$headers = '';
	}
	
	if($_POST['message']!='nope'){
		$messageBody .= '<p><strong>Message: <br></strong>' . $_POST['message'] . '</p>' . "\n";
	}
	
	if($stripHTML == 'true'){
		$messageBody = strip_tags($messageBody);
	}
	
	try{
		if(!mail($owner_email, $subject, $messageBody)){
			throw new Exception('mail failed');
		}else{
			header("Location: https://bayathandwadaycare.org/");
			die();
			/*echo '<h3>Mail Sent</h3>';*/
		}
	}catch(Exception $e){
		echo $e->getMessage() ."\n";
	}
?>