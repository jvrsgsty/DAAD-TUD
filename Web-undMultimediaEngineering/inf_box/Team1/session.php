<!-- 
session.php
PHP script to verify session validity
Last Updated: 12.12.2014
Author: Javier Sagastuy , Alejandro Escalante
 -->
<?php
	session_start();
	$user=$_SESSION['user'];
	if(!isset($user)){
		header('Location: index.php'); // Redirecting To Home Page
	}
?>
