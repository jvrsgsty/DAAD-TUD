<!-- 
login.php
PHP script to validate login form
Last Updated: 14.12.2014
Author: Javier Sagastuy , Alejandro Escalante
 -->
<?php
	transform();
	session_start();
	$error = "";
	if (isset($_POST['submit'])) {
		if (empty($_POST['username']) || empty($_POST['password'])) {
			$error = "Username or Password is invalid";
		}
		else{
			// get the request parameters
			$username = $_POST['username'];
			$password = $_POST['password'];
			// open file in read only mode
			$file = fopen("resources/login.txt", "r") or die("Unable to open file!");
			$hash = "";
			$found = false;
			while(!feof($file) && !$found) {
				$line = fgets($file);
				// parse line as csv
				// first value is user, second is hashed pwd
				$values = str_getcsv($line);
				if($values[0] == $username){
					$hash = $values[1];
					$found = true;
				}
			}
			fclose($file);
			// perform validation
			if ($found && password_verify($password, $hash)) {
				// if user is valid, initialize session
				$_SESSION['user'] = $username;
				// redirect to admin page
				header("location: admin.php");
			}
			else {
				$error = "Username or Password is invalid";
			}
		}
	}

	// transformation from files.xml to result.xml
	function transform($xmlPath="resources/files.xml", $xsltPath="resources/transformation.xslt"){
		$xslt = new DOMDocument();
		$xslt->load($xsltPath);

		$xml = new DOMDocument();
		$xml->load($xmlPath);

		$proc = new XSLTProcessor();
		$proc->importStylesheet($xslt);
		$result = $proc->transformToXML($xml);

		$file = fopen("resources/result.xml", "w") or die("Unable to open file!");
		fwrite($file, $result);
		fclose($file);
	}
?>
