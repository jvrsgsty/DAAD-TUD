/* 
inf_box script
Last Updated: 19.11.2014
Author: Javier Sagastuy , Alejandro Escalante
*/
// loose code
var user_id = 1;
var items = [];
var items_per_page = 10;
var current_page = 1;
var total_items = -1;
var total_pages = -1;

loadUser(user_id);

/* There is a short hand for the document ready function
   it would be used like this:
		Javier: yes, but I like that document.ready is more explicit
$(function(){
	//Insert code	
});
*/

// 1) Sticky Nav
$(document).ready(function(){
	// Note: jQuery can be abbreviated with a '$' sign
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
	});
	$(".showType").click(function(){
		$(".showType").toggleClass("active");
		if($(this).hasClass("active"))
			$(".mimetype").show();
		else
			$(".mimetype").hide();
	});
	$(".showCreation").click(function(){
		$(".showCreation").toggleClass("active");
		if($(this).hasClass("active"))
			$(".creation_date").show();
		else
			$(".creation_date").hide();
	});
});

// 5.1) Dynamic content: call web api
// Loads the items from a user into the items list
function loadData(id){
	$(document).ready(function(){
		items = [];
		$.getJSON( 'http://wme.lehre.imld.de:8080/wme14-15/api/users/' + id + '/items', function(data) {
			// This is a special jQuery function for arrays or objects
			// This is where the 10,20,50,100 functionality should be placed (using index)
			$.each(data, function(index, item){
				items.push(item);
			})
			total_items = items.length;
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
	while(i<total_items && i<items_per_page*current_page){
		filelist += '<tr>\n';
		filelist += '<td class="filename">';
		if(items[i].metadata.thumbnail_available){
			// insert the thumbnail
			var item_id = items[i].id;
			filelist += '<img src="' + 'http://wme.lehre.imld.de:8080/wme14-15/api/items/' + item_id + '/thumbnail' + '" alt="">';
		}
		filelist += items[i].filename + '</td>\n';
		filelist += '<td class="size">' + formatSize(items[i].metadata.size) + '</td>\n';
		filelist += '<td class="mimetype">' + formatType(items[i].metadata.mimetype) + '</td>\n';
		filelist += '<td class="creation_date">' + formatDate(items[i].metadata.creation_date) + '</td>\n';
		filelist += '<td class="actions">\n';
		filelist += '<a class="icon" href=""><i class="fa fa-eye fa-lg"></i></a>&nbsp;\n';
		filelist += '<a class="icon" href=""><i class="fa fa-share fa-lg"></i></a>&nbsp;&nbsp;|&nbsp;\n';
		filelist += '<a class="icon" href=""><i class="fa fa-pencil fa-lg"></i></a>&nbsp;\n';
		filelist += '<a class="icon" href=""><i class="fa fa-lock fa-lg"></i></a>&nbsp;\n';
		filelist += '<a class="icon" href=""><i class="fa fa-trash-o fa-lg"></i></a>\n';
		filelist += '</tr>\n';
		i++;
	}
	document.getElementById("files").innerHTML = filelist;
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
		if(i!=users.length)
			user_id = users[i].id;
		loadUser(user_id);
	});
}

// 5.5) Adjust Pages table control elements and variables
function displayPagesControl(pages){
	var innerHTML = "";
	var i = 1;
	while(i<=pages){
		innerHTML += "<li>\n";
		if(i == 1)
			innerHTML += "<a class='pageNav active' href='#' id='page";
		else
			innerHTML += "<a class='pageNav' href='#' id='page";
		if(i!=pages)
			innerHTML += i + "'>" + i + "</a>&nbsp;|&nbsp;\n";
		else
			innerHTML += i + "'>" + i + "</a>\n";
		innerHTML += "</li>\n";
		i++;
	}
	$("#pages").html(innerHTML);
	// add the click listener
	$(".pageNav").click(function(){
		$(".pageNav").removeClass("active");
		$(this).addClass("active");
		// set current page
		setCurrentPage($(this).html());
	});
}

function setItemsPerPage(numItems){
	items_per_page = numItems;
	adjustPagesControl();
}

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
		$(".itemsPerPage").removeClass("active");
		$(this).addClass("active");
		current_page = 1;
		setItemsPerPage($(this).html());
	});
});
// 5.5) END
