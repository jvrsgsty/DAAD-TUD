<!-- 
logout.php
PHP script to invalidate all sessions
Last Updated: 12.12.2014
Author: Javier Sagastuy , Alejandro Escalante
 -->
<?php
	session_start();
	// destroy all sessions
	if(session_destroy())
	{
		header("Location: index.php");
	}
?>
