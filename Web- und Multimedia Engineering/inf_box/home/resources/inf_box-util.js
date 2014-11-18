/* 
inf_box util script
Last Updated: 18.11.2014
Author: Javier Sagastuy , Alejandro Escalante
Description: utility functions for inf_box, including output formatting
*/
function formatSize(bytes){
	var i = 0;
	var result;
	while(bytes > 1024 && i<4){
		bytes /= 1024;
		i++;
	}
	switch(i){
		case 0:
			result = " B";
			break;
		case 1:
			result = " KB";
			break;
		case 2:
			result = " MB";
			break;
		case 3:
			result = " GB";
			break;
		case 4:
			result = " TB";
			break;
	}
	return bytes.toPrecision(3) + result;
}

function formatDate(date){
	var myDate = new Date(date);
	var day = myDate.getDate();
	var month = myDate.getMonth();
	var year = myDate.getFullYear();
	var hour = myDate.getHours();
	var minute = myDate.getMinutes();
	return day + "." + month + "." + year + " " + hour + ":" + minute;
}

function formatType(type){
	var result;
	if(type.indexOf("txt") != -1)
		result = "Text";
	else
		if(type.indexOf("image") != -1)
			result = "Bild";
		else
			if(type.indexOf("video") != -1)
				result = "Video";
			else
				if(type.indexOf("audio") != -1)
					result = "Audio";
				else
					result = "Unknown";
	return result;
}
