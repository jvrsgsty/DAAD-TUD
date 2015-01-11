/* 
inf_box util script
Last Updated: 14.12.2014
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
	return bytes.toFixed(2) + result;
}

function formatDate(date){
	var myDate = new Date(date);
	var day = myDate.getDate();
	var month = myDate.getMonth() + 1;
	var year = myDate.getFullYear();
	var hour = myDate.getHours();
	var minute = ("0" + myDate.getMinutes()).slice(-2);
	return day + "." + month + "." + year + " " + hour + ":" + minute;
}

function formatType(type){
	var result;
	if(type.indexOf("txt") != -1)
		result = "Text";
	else if(type.indexOf("image") != -1)
		result = "Bild";
	else if(type.indexOf("video") != -1)
		result = "Video";
	else if(type.indexOf("audio") != -1)
		result = "Audio";
	else
		result = "Unknown";
	return result;
}

/*Parameters:
	array:		array of items that will be ordered
	asc:		ascendent sorting {true|false}
	property:	property to sort {filename|size}
*/
function mergeSort(array, asc, property){
	return mergeSortRec(array, 0, array.length-1, asc, property);
}

function mergeSortRec(array, left, right, asc, property){
	if(left==right){
		// The list is size 1. Therefore, it is already ordered
		return [array[left]];
	}else{
		// Calculate middle index
		var middle = left + right;
		// Round down division
		middle = (middle - (middle%2))/2;
		// Sort each half of the array
		var leftArray = mergeSortRec(array, left, middle, asc, property);
		var rightArray = mergeSortRec(array, middle+1, right, asc, property);
		// Merge sorted halves
		var sortedArray = new Array(right - left + 1);
		var i = 0;
		var j = 0;
		for(k=0;k<sortedArray.length;k++){
			if(i < leftArray.length){
				if(j < rightArray.length){
					// There are unsorted elements on both lists
					if(compare(leftArray[i], rightArray[j], asc, property)<0){
						sortedArray[k] = leftArray[i];
						i++;
					}else{
						sortedArray[k] = rightArray[j];
						j++;
					}
				}else{
					// There are elements on the left list only
					sortedArray[k] = leftArray[i];
					i++;
				}
			}else{
				// There are elements on the right list only
				sortedArray[k] = rightArray[j];
				j++;
			}
		}
		return sortedArray;
	}
}

// Item comparison
function compare(x, y, asc, property){
	var result;
	if(property=="size"){
		result = x.metadata.size - y.metadata.size;
	}else if(property=='id'){
		result = x.id - y.id;
	}else{
		// Default property is filename
		if(x.filename < y.filename){
			result = -1;
		}else if(x.filename > y.filename){
			result = 1;
		}else{
			result = 0;
		}
	}
	if(!asc){
		result = -result;
	}
	return result;
}
