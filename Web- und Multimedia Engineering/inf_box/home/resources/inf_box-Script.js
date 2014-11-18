/* 
inf_box script
Last Updated: 18.11.2014
Author: Javier Sagastuy , Alejandro Escalante
*/
// loose code
var user_id = 1;
var items = [];

loadUser(user_id);
loadData(user_id);

// 1) Sticky Nav
$(document).ready(function(){
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
		$(this).toggleClass("active");
		if($(this).hasClass("active"))
			$(".size").show();
		else
			$(".size").hide();
	});
	$(".showType").click(function(){
		$(this).toggleClass("active");
		if($(this).hasClass("active"))
			$(".mimetype").show();
		else
			$(".mimetype").hide();
	});
	$(".showCreation").click(function(){
				$(this).toggleClass("active");
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
		$.getJSON( 'http://wme.lehre.imld.de:8080/wme14-15/api/users/' + id + '/items', '', function(data) {
			$.each(data, function(index, item){
				items.push(item);
			})
			displayTable();
		});
	});
}

// 5.2) Dynamic content: display content in document
// called from within the LoadData AJAX callback function to display content on the table
function displayTable(){
	// items has the file list
	var filelist = '';
	for(var i = 0; i<items.length; i++){
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
	}
	document.getElementById("files").innerHTML = filelist;
}

// 5.3) Dynamic content: load and display user info
function loadUser(id){
	$.ajax({
			url: 'http://wme.lehre.imld.de:8080/wme14-15/api/users/' + id,
			data: '',
			dataType: 'xml',
			success: function(result) {
				var display_name = $(result).find('display_name').text();
				var email_address = $(result).find('email_address').text();
				var quota = $(result).find('quota').text();
				var quota_used = $(result).find('quota_used').text();
				var username = $(result).find('username').text();
				$('#display_name').html(display_name);
				$('#email_address').html(email_address);
				$('#username').html(username);
				$('#quota').html(formatSize(quota_used) + ' / ' + formatSize(quota));
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
	$.getJSON( 'http://wme.lehre.imld.de:8080/wme14-15/api/users/', '', function(data) {
		$.each(data, function(index, user){
			users.push(user);
		})
		for(var i = 0; i<users.length; i++){
			if(users[i].username == username){
				user_id = users[i].id;
			}
		}
		loadUser(user_id);
		loadData(user_id);
	});
}
