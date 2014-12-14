inf_box
Third course exercise XML and PHP
Web- und Multimedia Engineering
Team # 1
Javier Sagastuy		(s9650555)
Alejandro Escalante	(s6210277)

The /Team1 folder contains all files related to the website. 

Inside you will find:

index.php	: the starting file for the website. In this case: the admin login page. 
img/		: all images needed for the website (thumbnails and logo)
resources/	: folder with all other resources needed for the webpage (e.i. font awesome, html5 reset stylesheet, the stylesheet for out webpage: styles.css, jquery.js, xml schemas and transformations, login.txt (the data for admin login), etc. )

Workflow:
The xml transformation is performed when index.php is loadad and the result is saved in resources/result.xml
Once the user logs in, result.xml is read and parsed to be displayed as a table. 
To make this step compatible with our previous implementation, the read xml data is parsed into JSON ("item") objects according to the "new" Web Service definition. 

Files to be graded:

/Team1/index.php
/Team1/admin.php
/Team1/login.php
/Team1/logout.php
/Team1/session.php
/Team1/resources/result.xml
/Team1/resources/transformation.xslt
/Team1/resources/infbox_schema_normal.xml
/Team1/resources/infbox_schema_extended.xml
