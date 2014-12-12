<?php include("login.php");?>
<!DOCTYPE html>
<html lang="en-US">
	<head>
		<meta charset="UTF-8">
		<title>inf_box</title>
		<meta name="author" content="Javier Sagastuy und Alejandro Escalante">
		<meta name="description" content="Third course exercise XML and PHP of the lecture Web and Multimedia Engineering">
		<meta name="keywords" content="XML,PHP,inf_box">
		<!-- Google Fonts API link -->
		<link href='http://fonts.googleapis.com/css?family=Ubuntu:300,400,500,700%7CUbuntu+Condensed' rel='stylesheet' type='text/css'>
		<!-- HTML5 Reset CSS link -->
		<link rel="stylesheet" type="text/css" href="resources/html5reset-1.6.1.css">
		<!-- Font Awesome locally stored CSS Link -->
		<link rel="stylesheet" href="resources/font-awesome/css/font-awesome.min.css">
		<!-- inf_box stylesheet -->
		<link rel="stylesheet" type="text/css" href="resources/styles.css">
	</head>
	<body>
		<header>
			<nav>
				<a class="header-fltleft" href="#home">
					<span class="logo">
						<img src="img/infbox_logo.png" alt="">
					</span>
				</a>
			</nav>
		</header>
		<main>
			<h1>Admin Login</h1>
			<div class="txtleft login">
				<form action="" method="post">
					<label class="notvalid">
						<?php echo $error;?>
					</label>
					<table>
						<tbody>
							<tr><td>
								Username
								<input type="text" id="username" name="username">
							</td></tr>
							<tr><td>
								Password
								<input type="password" id="password" name="password">
							</td></tr>
							<tr ><td>
								<input name="submit" type="submit" class="grn-btn-fltleft" value="Login">
							</td></tr>
						</tbody>
					</table>
				</form>
			</div>
			<p class="black">
				Hinweise: 
			</p>
			<br />
			<ul>
				<li>
					während dem Anrufen dieser Seite wird per PHP die Transformation von files.xml zu result.xml durchgeführt
				</li>
				<li>
					nach dem login wird die HTML-Tabelle dann per AJAX aus der result.xml erzeugt (Aufgabe 1 Zusatz)
				</li>
			</ul>
		</main>
		<footer>
			<div class="footer-fltleft-txtleft">
			Copyright © 2014 inf_box<br />
			Third course exercise <b>XML and PHP</b> of the lecture Web and Multimedia Engineering</div>
			<div class="footer-fltright-txtright">
			This solution has been created by team #1:<br />
			Javier Sagastuy (s9650555) and Alejandro Escalante (s6210277)
			</div>
		</footer>
		<script src="resources/jquery-1.11.1.min.js"></script>
		<script src="resources/inf_box-util.js"></script>
		<script src="resources/inf_box-Script.js"></script>
	</body>
</html>
