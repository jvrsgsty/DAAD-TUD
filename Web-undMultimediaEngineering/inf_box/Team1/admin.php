<?php include("session.php");?>
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
			<div class="sticky-nav">
				<nav>
					<ul class="fltleft">
						<li class="sticky">
							<a class="sticky-fltleft" href="resources/infbox_schema_normal.xsd">
								2. Schema
							</a>
						</li>
						<li class="sticky">
							<a class="sticky-fltleft" href="resources/infbox_schema_extended.xsd">
								3.1 Schema (extended)
							</a>
						</li>
						<li class="sticky">
							<a class="sticky-fltleft" href="resources/transformation.xslt">
								3.2 Transformation
							</a>
						</li>
						<li class="sticky">
							<a class="sticky-fltleft" href="resources/result.xml">
								3.3 Result
							</a>
						</li>
					</ul>
				</nav>
			</div>
			<nav>
				<a class="header-fltleft" href="#home">
					<span class="logo">
						<img src="img/infbox_logo.png" alt="">
					</span>
				</a>
				<ul class="fltleft">
					<li class="transition">
						<a class="header-fltleft" href="resources/infbox_schema_normal.xsd">
							2. Schema
						</a>
					</li>
					<li class="transition">
						<a class="header-fltleft" href="resources/infbox_schema_extended.xsd">
							3.1 Schema (extended)
						</a>
					</li>
					<li class="transition">
						<a class="header-fltleft" href="resources/transformation.xslt">
							3.2 Transformation
						</a>
					</li>
					<li class="transition">
						<a class="header-fltleft" href="resources/result.xml">
							3.3 Result
						</a>
					</li>
				</ul>
				<ul class="fltright" id="popup">
					<li class="transition">
						<a class="header" href="#user">
							<i class="fa fa-user fa-lg"></i>&nbsp;&nbsp; <label id="username"><?php echo $user; ?></label>
						</a>
							<div class="txtleft">
									Your Name: <br />
									<label class="info" id="display_name"><?php echo $user; ?></label><br />
									Your Email: <br />
									<label class="info" id="email_address">admin@inf_box.com</label><br />
									Your Quota (max/used):<br />
									<label class="info" id="quota">2.5 GB / 7.0 GB</label><br />
									<a class="grn-btn-fltright" href="logout.php">Logout</a><br />
							</div>
					</li>
				</ul>
			</nav>
		</header>
		<main>
			<h1>Your files in detail...</h1>
			<div class="table-ctrl">
				<div class="fltleft">
					<p>Number of entries per page:</p>
					<ul>
						<li>
							<a class="itemsPerPage active" href="" value="10">10</a>&nbsp;|&nbsp;
						</li>
						<li>
							<a class="itemsPerPage" href="" value="20">20</a>&nbsp;|&nbsp;
						</li>
						<li>
							<a class="itemsPerPage" href="" value="50">50</a>&nbsp;|&nbsp;
						</li>
						<li>
							<a class="itemsPerPage" href="" value="100">100</a>
						</li>
					</ul>
				</div>
				<div class="fltleft">
					<p>Show/Hide:</p>
					<ul>
						<li>
							<a class="active showID" href="">ID</a>&nbsp;|&nbsp;
						</li>
						<li>
							<a class="active showType" href="">Type</a>&nbsp;|&nbsp;
						</li>
						<li>
							<a class="active showCreation" href="">Creation</a>
						</li>
					</ul>
				</div>
				<div class="fltright">
					<p>Page:</p>
					<ul class="pages">
						<li>
							<a class="pageNav active" href="" value="1">1</a>&nbsp;|&nbsp;
						</li>
						<li>
							<a class="pageNav" href="" value="2">2</a>&nbsp;|&nbsp;
						</li>
						<li>
							<a class="pageNav" href="" value="3">3</a>
						</li>
					</ul>
				</div>
			</div>
			<table id="filelist">
				<thead>
					<tr>
						<th class="filename">
							<a href="" onclick="return sortByFilename();">
								Filename
							</a>
							<i class="fa fa-chevron-down"></i>
							<i class="fa fa-chevron-up"></i>
						</th>
						<th class="id">
							<a href="" onclick="return sortByID();">
								ID
							</a>
							<i class="fa fa-chevron-down"></i>
							<i class="fa fa-chevron-up"></i>
						</th>
						<th class="mimetype">Type</th>
						<th class="creation_date">Creation</th>
						<th class="actions">Actions</th>
					</tr>
				</thead>
				<tbody id="files">
					<tr>
						<td class="filename">06 - BLUEMARC - BLUEMARC-BLUEMARC_-_AGA_LIFE_2012.mp3</td>
						<td class="size">6.3 MB</td>
						<td class="mimetype">Audio</td>
						<td class="creation_date">10.03.2013 23:14</td>
						<td class="actions">
						<a class="icon" href=""><i class="fa fa-eye fa-lg"></i></a>&nbsp;
						<a class="icon" href=""><i class="fa fa-share fa-lg"></i></a>&nbsp;&nbsp;|&nbsp;
						<a class="icon" href=""><i class="fa fa-pencil fa-lg"></i></a>&nbsp;
						<a class="icon" href=""><i class="fa fa-lock fa-lg"></i></a>&nbsp;
						<a class="icon" href=""><i class="fa fa-trash-o fa-lg"></i></a>
						</td>
					</tr>
					<tr>
						<td class="filename">08 - BLUEMARC - EWSKO_BLUEMARC-ROMANTIC WIND.mp3</td>
						<td class="size">5.8 MB</td>
						<td class="mimetype">Audio</td>
						<td class="creation_date">10.03.2013 23:14</td>
						<td class="actions">
						<a class="icon" href=""><i class="fa fa-eye fa-lg"></i></a>&nbsp;
						<a class="icon" href=""><i class="fa fa-share fa-lg"></i></a>&nbsp;&nbsp;|&nbsp;
						<a class="icon" href=""><i class="fa fa-pencil fa-lg"></i></a>&nbsp;
						<a class="icon" href=""><i class="fa fa-lock fa-lg"></i></a>&nbsp;
						<a class="icon" href=""><i class="fa fa-trash-o fa-lg"></i></a>
						</td>
					</tr>
					<tr>
						<td class="filename"><img src="img/amsterdam.png" alt=""> amsterdam.jpg</td>
						<td class="size">240 KB</td>
						<td class="mimetype">Bild</td>
						<td class="creation_date">10.09.2013 10:57</td>
						<td class="actions">
						<a class="icon" href=""><i class="fa fa-eye fa-lg"></i></a>&nbsp;
						<a class="icon" href=""><i class="fa fa-share fa-lg"></i></a>&nbsp;&nbsp;|&nbsp;
						<a class="icon" href=""><i class="fa fa-pencil fa-lg"></i></a>&nbsp;
						<a class="icon" href=""><i class="fa fa-lock fa-lg"></i></a>&nbsp;
						<a class="icon" href=""><i class="fa fa-trash-o fa-lg"></i></a>
						</td>
					</tr>
					<tr>
						<td class="filename"><img src="img/beeren.png" alt=""> beeren.jpg</td>
						<td class="size">556 KB</td>
						<td class="mimetype">Bild</td>
						<td class="creation_date">10.09.2013 10:57</td>
						<td class="actions">
						<a class="icon" href=""><i class="fa fa-eye fa-lg"></i></a>&nbsp;
						<a class="icon" href=""><i class="fa fa-share fa-lg"></i></a>&nbsp;&nbsp;|&nbsp;
						<a class="icon" href=""><i class="fa fa-pencil fa-lg"></i></a>&nbsp;
						<a class="icon" href=""><i class="fa fa-lock fa-lg"></i></a>&nbsp;
						<a class="icon" href=""><i class="fa fa-trash-o fa-lg"></i></a>
						</td>
					</tr>
					<tr>
						<td class="filename"><img src="img/drachen.png" alt=""> drachen.jpg</td>
						<td class="size">311 KB</td>
						<td class="mimetype">Bild</td>
						<td class="creation_date">10.09.2013 10:57</td>
						<td class="actions">
						<a class="icon" href=""><i class="fa fa-eye fa-lg"></i></a>&nbsp;
						<a class="icon" href=""><i class="fa fa-share fa-lg"></i></a>&nbsp;&nbsp;|&nbsp;
						<a class="icon" href=""><i class="fa fa-pencil fa-lg"></i></a>&nbsp;
						<a class="icon" href=""><i class="fa fa-lock fa-lg"></i></a>&nbsp;
						<a class="icon" href=""><i class="fa fa-trash-o fa-lg"></i></a>
						</td>
					</tr>
					<tr>
						<td class="filename"><img src="img/leben.png" alt=""> leben.jpg</td>
						<td class="size">426 KB</td>
						<td class="mimetype">Bild</td>
						<td class="creation_date">10.09.2013 10:57</td>
						<td class="actions">
						<a class="icon" href=""><i class="fa fa-eye fa-lg"></i></a>&nbsp;
						<a class="icon" href=""><i class="fa fa-share fa-lg"></i></a>&nbsp;&nbsp;|&nbsp;
						<a class="icon" href=""><i class="fa fa-pencil fa-lg"></i></a>&nbsp;
						<a class="icon" href=""><i class="fa fa-lock fa-lg"></i></a>&nbsp;
						<a class="icon" href=""><i class="fa fa-trash-o fa-lg"></i></a>
						</td>
					</tr>
					<tr>
						<td class="filename">lizenz_musik.txt</td>
						<td class="size">123 Byte</td>
						<td class="mimetype">Text</td>
						<td class="creation_date">10.09.2013 17:44</td>
						<td class="actions">
						<a class="icon" href=""><i class="fa fa-eye fa-lg"></i></a>&nbsp;
						<a class="icon" href=""><i class="fa fa-share fa-lg"></i></a>&nbsp;&nbsp;|&nbsp;
						<a class="icon" href=""><i class="fa fa-pencil fa-lg"></i></a>&nbsp;
						<a class="icon" href=""><i class="fa fa-lock fa-lg"></i></a>&nbsp;
						<a class="icon" href=""><i class="fa fa-trash-o fa-lg"></i></a>
						</td>
					</tr>
					<tr>
						<td class="filename"><img src="img/mainframe.png" alt=""> mainframe.jpg</td>
						<td class="size">260 KB</td>
						<td class="mimetype">Bild</td>
						<td class="creation_date">10.09.2013 10:57</td>
						<td class="actions">
						<a class="icon" href=""><i class="fa fa-eye fa-lg"></i></a>&nbsp;
						<a class="icon" href=""><i class="fa fa-share fa-lg"></i></a>&nbsp;&nbsp;|&nbsp;
						<a class="icon" href=""><i class="fa fa-pencil fa-lg"></i></a>&nbsp;
						<a class="icon" href=""><i class="fa fa-lock fa-lg"></i></a>&nbsp;
						<a class="icon" href=""><i class="fa fa-trash-o fa-lg"></i></a>
						</td>
					</tr>
					<tr>
						<td class="filename">mimetype.txt</td>
						<td class="size">2 KB</td>
						<td class="mimetype">Text</td>
						<td class="creation_date">03.09.2013 12:01</td>
						<td class="actions">
						<a class="icon" href=""><i class="fa fa-eye fa-lg"></i></a>&nbsp;
						<a class="icon" href=""><i class="fa fa-share fa-lg"></i></a>&nbsp;&nbsp;|&nbsp;
						<a class="icon" href=""><i class="fa fa-pencil fa-lg"></i></a>&nbsp;
						<a class="icon" href=""><i class="fa fa-lock fa-lg"></i></a>&nbsp;
						<a class="icon" href=""><i class="fa fa-trash-o fa-lg"></i></a>
						</td>
					</tr>
					<tr>
						<td class="filename">rest_definition.txt</td>
						<td class="size">387 Byte</td>
						<td class="mimetype">Text</td>
						<td class="creation_date">08.09.2013 07:52</td>
						<td class="actions">
						<a class="icon" href=""><i class="fa fa-eye fa-lg"></i></a>&nbsp;
						<a class="icon" href=""><i class="fa fa-share fa-lg"></i></a>&nbsp;&nbsp;|&nbsp;
						<a class="icon" href=""><i class="fa fa-pencil fa-lg"></i></a>&nbsp;
						<a class="icon" href=""><i class="fa fa-lock fa-lg"></i></a>&nbsp;
						<a class="icon" href=""><i class="fa fa-trash-o fa-lg"></i></a>
						</td>
					</tr>
				</tbody>
			</table>
			<div id="preview">
				<a onclick="return hidePreviews();" href="">
					<i class="fa fa-close fa-4x"></i>
				</a><br />
				<img src="" id="pvw_img" alt="">
				<audio controls autoplay id="pvw_aud">
					<source src="" id="pvw_aud_src" type="audio/mpeg">
					Your browser does not support the audio element.
				</audio>
				<video height="400" controls autoplay id="pvw_vid">
						<source src="" id="pvw_vid_src" type="video/mp4">
						Your browser does not support HTML5 video.
				</video>
			</div>
			<div class="table-ctrl">
				<div class="fltleft">
					<p>Number of entries per page:</p>
					<ul>
						<li>
							<a class="itemsPerPage active" href="" value="10">10</a>&nbsp;|&nbsp;
						</li>
						<li>
							<a class="itemsPerPage" href="" value="20">20</a>&nbsp;|&nbsp;
						</li>
						<li>
							<a class="itemsPerPage" href="" value="50">50</a>&nbsp;|&nbsp;
						</li>
						<li>
							<a class="itemsPerPage" href="" value="100">100</a>
						</li>
					</ul>
				</div>
				<div class="fltleft">
					<p>Show/Hide:</p>
					<ul>
						<li>
							<a class="active showID" href="">ID</a>&nbsp;|&nbsp;
						</li>
						<li>
							<a class="active showType" href="">Type</a>&nbsp;|&nbsp;
						</li>
						<li>
							<a class="active showCreation" href="">Creation</a>
						</li>
					</ul>
				</div>
				<div class="fltright">
					<p>Page:</p>
					<ul class="pages">
						<li>
							<a class="pageNav active" href="" value="1">1</a>&nbsp;|&nbsp;
						</li>
						<li>
							<a class="pageNav" href="" value="2">2</a>&nbsp;|&nbsp;
						</li>
						<li>
							<a class="pageNav" href="" value="3">3</a>
						</li>
					</ul>
				</div>
			</div>
		</main>
		<footer>
			<div class="footer-fltleft-txtleft">
			Copyright © 2014 inf_box<br />
			First course exercise <b>HTML and CSS</b> of the lecture Web and Multimedia Engineering</div>
			<div class="footer-fltright-txtright">
			This solution has been created by team #1:<br />
			Javier Sagastuy (s9650555) and Alejandro Escalante (s6210277)
			</div>
		</footer>
		<script src="resources/jquery-1.11.1.min.js"></script>
		<script src="resources/inf_box-util.js"></script>
		<script src="resources/inf_box-Script.js"></script>
		<script>loadAdminDataFromFile("resources/result.xml");</script>
	</body>
</html>
