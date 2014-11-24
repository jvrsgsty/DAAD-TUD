/* 
inf_box script
Last Updated: 19.11.2014
Author: Javier Sagastuy , Alejandro Escalante
*/
// Global variables
var user_id = 1;
var items = [];
var items_per_page = 10;
var current_page = 1;
var total_items = -1;
var total_pages = -1;
// form validation global variables
var firstname_valid = false;
var lastname_valid = false;
var bday_valid = false;
var username_valid = false;
var password_valid = false;
var username_login_empty = true;
var password_login_empty = true;

loadUser(user_id);

/* Note:
	There is a short hand for the document ready function.
	It would be used like this:
$(function(){
	//Insert code	
});
*/

// 1) Sticky Nav
$(document).ready(function(){
	/* Note:
		jQuery can be abbreviated with a '$' sign
		.scroll adds an event listener to the document
	*/
	jQuery(document).scroll(function() {
		if(jQuery(this).scrollTop() > 80) {
			jQuery('.sticky-nav').addClass("is-sticky");
		}
		else{
			jQuery('.sticky-nav').removeClass("is-sticky");
		}
	});
});

// 2) Hide columns
$(document).ready(function(){
	$(".showSize").click(function(){
		$(".showSize").toggleClass("active");
		if($(this).hasClass("active"))
			$(".size").show();
		else
			$(".size").hide();
		/* Note:
			return false to prevent the webpage from reloading on click
		*/
		return false;
	});
	$(".showType").click(function(){
		$(".showType").toggleClass("active");
		if($(this).hasClass("active"))
			$(".mimetype").show();
		else
			$(".mimetype").hide();
		return false;
	});
	$(".showCreation").click(function(){
		$(".showCreation").toggleClass("active");
		if($(this).hasClass("active"))
			$(".creation_date").show();
		else
			$(".creation_date").hide();
		return false;
	});
});

// In this case, only the hidden parts need to be refreshed
// Because everytime the files are loaded, everything is shown
function refreshHidden(){
	/*Note:
		the .hasClass function checks if ANY of the selected
		elements has the specified class
	*/
	if(!$(".showSize").hasClass("active")){
		$(".size").hide();
	}
	if(!$(".showType").hasClass("active")){
		$(".mimetype").hide();
	}
	if(!$(".showCreation").hasClass("active")){
		$(".creation_date").hide();
	}
}

// 3) Sorting the files
var sortedAscendent;
var sortedByFilename;

function sortByFilename(){
	if(sortedByFilename){
		sortedAscendent = !sortedAscendent;
	}else{
		sortedByFilename = true;
		sortedAscendent = true;
	}
	items = mergeSort(items, sortedAscendent, 'filename');
	selectPage(1);
	return false;
}

function sortBySize(){
	if(sortedByFilename){
		sortedByFilename = false;
		sortedAscendent = true;
	}else{
		sortedAscendent = !sortedAscendent;
	}
	items = mergeSort(items, sortedAscendent, 'size');
	selectPage(1);
	return false;
}

// 4) Form validation
function validateRegister(){
	var form_valid = firstname_valid && lastname_valid && bday_valid && username_valid && password_valid;
	if(form_valid)
		$("#registerNotValid").hide();
	else
		$("#registerNotValid").show();
	if(firstname_valid)
		$("#firstnameNotValid").hide();
	else
		$("#firstnameNotValid").show();
	if(lastname_valid)
		$("#lastnameNotValid").hide();
	else
		$("#lastnameNotValid").show();
	if(bday_valid)
		$("#bdayNotValid").hide();
	else
		$("#bdayNotValid").show();
	if(username_valid)
		$("#usernameNotValid").hide();
	else
		$("#usernameNotValid").show();
	if(password_valid)
		$("#passwordNotValid").hide();
	else
		$("#passwordNotValid").show();
	return form_valid;
}

function validateLogin(){
	var form_empty = username_login_empty || password_login_empty;
	var form_valid = false;
	if(form_empty){
		$("#loginEmpty").show();
		$("#loginNotValid").hide();
	}else{
		var username = $("#username_login").val();
		var password = $("#password_login").val();
		if(username == "admin" && password == "12345"){
			form_valid = true;
			$("#loginNotValid").hide();
			$("#loginEmpty").hide();
		}else{
			$("#loginNotValid").show();
			$("#loginEmpty").hide();
		}
	}
	if(username_login_empty)
		$("#usernameLoginNotValid").show();
	else
		$("#usernameLoginNotValid").hide();
	if(password_login_empty)
		$("#passwordLoginNotValid").show();
	else
		$("#passwordLoginNotValid").hide();
	return form_valid;
}

function validateFirstName(){
	var fname = $("#firstname_register").val();
	if(fname != "")
		firstname_valid = true;
	else
		firstname_valid = false;
}

function validateLastName(){
	var lname = $("#lastname_register").val();
	if(lname != "")
		lastname_valid = true;
	else
		lastname_valid = false;
}

function validateBirthday(){
	// Fehlermeldung wenn Datum > 11.11.1995
	var bday = new Date($("#bday_register").val());
	var minBDate = new Date("1995-11-11");
	if(bday  <= minBDate)
		bday_valid = true;
	else
		bday_valid = false;
}

function validateUsername(){
	//Login: Benutzername != admin
	var username = $("#username_register").val();
	if(username != "" && username != "admin")
		username_valid = true;
	else
		username_valid = false;
}

function validatePassword(){
	var password = $("#password_register").val();
	if(password != "")
		password_valid = true;
	else
		password_valid = false;
}

function validateUsernameLogin(){
	//Login: Benutzername != admin
	var username = $("#username_login").val();
	if(username == "")
		username_login_empty = true;
	else
		username_login_empty = false;
}

function validatePasswordLogin(){
	// Passwort != 12345
	var password = $("#password_login").val();
	if(password == "")
		password_login_empty = true;
	else
		password_login_empty = false;
}

// 5.1) Dynamic content: call web api
// Loads the items from a user into the items list
function loadData(id){
	$(document).ready(function(){
		items = [];
		$.getJSON( 'http://wme.lehre.imld.de:8080/wme14-15/api/users/' + id + '/items', function(data) {
			/* Note:
				This is a special jQuery function for arrays or objects
				See http://learn.jquery.com/using-jquery-core/dollar-object-vs-function/
			*/
			$.each(data, function(index, item){
				items.push(item);
			})
			total_items = items.length;
			// Default sorting
			items = mergeSort(items, /*asc*/true, /*property*/'filename');
			sortedAscendent = true;
			sortedByFilename = true;
			adjustPagesControl();
		});
	});
}

// 5.2) Dynamic content: display content in document
// called from within the LoadData AJAX callback function to display content on the table
function displayTable(){
	// items has the file list
	var filelist = '';
	var i = (current_page-1)*items_per_page;
	var max_index = items_per_page*current_page;
	while(i<total_items && i<max_index){
		var item_id = items[i].id;
		filelist += '<tr class="entry-' + item_id + '">\n';
		filelist += '<td class="filename">';
		if(items[i].metadata.thumbnail_available){
			// insert the thumbnail
			filelist += '<img src="' + 'http://wme.lehre.imld.de:8080/wme14-15/api/items/' + item_id + '/thumbnail' + '" alt="">';
		}
		filelist += items[i].filename + '</td>\n';
		filelist += '<td class="size">' + formatSize(items[i].metadata.size) + '</td>\n';
		filelist += '<td class="mimetype">' + formatType(items[i].metadata.mimetype) + '</td>\n';
		filelist += '<td class="creation_date">' + formatDate(items[i].metadata.creation_date) + '</td>\n';
		filelist += '<td class="actions">\n';
		filelist += '<a class="icon preview" href="" value="' + i + '"><i class="fa fa-eye fa-lg"></i></a>&nbsp;\n';
		filelist += '<a class="icon" href=""><i class="fa fa-share fa-lg"></i></a>&nbsp;&nbsp;|&nbsp;\n';
		filelist += '<a class="icon" href=""><i class="fa fa-pencil fa-lg"></i></a>&nbsp;\n';
		filelist += '<a class="icon" href=""><i class="fa fa-lock fa-lg"></i></a>&nbsp;\n';
		filelist += '<a class="icon" href=""><i class="fa fa-trash-o fa-lg"></i></a>\n';
		filelist += '</tr>\n';
		i++;
	}
	$("#files").html(filelist);
	refreshHidden();
//	$("a.preview").click(showPreview());
}

// 5.3) Dynamic content: load and display user info
function loadUser(id){
	$.ajax({
			url: 'http://wme.lehre.imld.de:8080/wme14-15/api/users/' + id,
			dataType: 'xml',
			success: function(result) {
				var display_name = $(result).find('display_name').text();
				var email_address = $(result).find('email_address').text();
				var quota = $(result).find('quota').text();
				var quota_used = $(result).find('quota_used').text();
				var username = $(result).find('username').text();
				// Would it be faster to use 'document.getElementById' instead of jQuery?
				$('#display_name').html(display_name);
				$('#email_address').html(email_address);
				$('#username').html(username);
				$('#quota').html(formatSize(quota_used) + ' / ' + formatSize(quota));
				loadData(id);
			},
			error: function(result) { 
				alert("loadUser(): content failed to load: " + id);
			}
		});
}

// 5.4) Dynamic content: look for id with given username
// linked to click event on button with id="btnPrueba"
function lookForUser(username){
	var users =[];
	$.getJSON( 'http://wme.lehre.imld.de:8080/wme14-15/api/users/', function(data) {
		$.each(data, function(index, user){
			users.push(user);
		})
		var i = 0;
		while(i<users.length && users[i].username != username){
			i++;
		}
		// Only load new user if it was found, even though this is only temporary
		if(i<users.length){
			user_id = users[i].id;
			loadUser(user_id);
		}
	});
}

// 5.5) Adjust Pages table control elements and variables
function displayPagesControl(pages){
	var innerHTML = "";
	var i = 1;
	while(i<=pages){
		innerHTML += "<li>\n";
		if(i == 1)
			innerHTML += "<a class='pageNav active' href='' value='";
		else
			innerHTML += "<a class='pageNav' href='' value='";
		if(i!=pages)
			innerHTML += i + "'>" + i + "</a>&nbsp;|&nbsp;\n";
		else
			innerHTML += i + "'>" + i + "</a>\n";
		innerHTML += "</li>\n";
		i++;
	}
	/* Note:
		The .html(string) function from jQuery replaces the innerHTML
		from all matched elements. However, when the search is done
		by id, the search returns only the first element with such id.
	*/
	$("ul.pages").html(innerHTML);
	// Add the click listener
	$(".pageNav").click(pageClick);
}

function pageClick(){
	// Avoids redisplaying the table if the current active option was clicked
	if(!$(this).hasClass("active")){
		selectPage($(this).attr("value"));
	}
	// avoid reloading
	return false;
}

function selectPage(page){
	$(".pageNav").removeClass("active");
	$('.pageNav[value="' + page + '"]').addClass("active");
	// set current page
	setCurrentPage(page);
}

// This function is only called from the click function
function setItemsPerPage(numItems){
	items_per_page = numItems;
	adjustPagesControl();
}

// This function is only called from the click function
function setCurrentPage(page){
	current_page = page;
	displayTable();
}

function adjustPagesControl(){
	total_pages = Math.ceil(total_items / items_per_page);
	displayPagesControl(total_pages);
	displayTable();
}

// listeners on the click for the page control anchors
// click listener for the pageNav added on displayPagesControl
// otherwise the listeners are not added, because the pageControl
// is constructed later
$(document).ready(function(){
	$(".itemsPerPage").click(function(){
		// Avoids redisplaying the table if the current active option was clicked
		if(!$(this).hasClass("active")){
			$(".itemsPerPage").removeClass("active");
			// Select the elements with the same value for pages and activate them
			$('.itemsPerPage[value="' + $(this).attr("value") + '"]').addClass("active");
			// This assignment is consistent with the displayPagesControl function
			// current_page is set to 1 and the active class is given to page 1
			current_page = 1;
			setItemsPerPage($(this).attr("value"));
		}
		return false;
	});
});


function hidePreviews(){
	$("#imgpvw").removeClass("active");
	return false;
}

function showPreview(){
	alert("showPreview()");
	var type = formatType(items[$(this).attr("value")].metadata.mimetype);
	alert(type);
	if(type == "Bild"){
		alert(items[$(this).attr("value")].file_url);
		document.getElementById("imgpvw").setAttribute("src",items[$(this).attr("value")].file_url);
		$("#imgpvw").addClass("active");
	}
	return false;
}
// 5.5) END
