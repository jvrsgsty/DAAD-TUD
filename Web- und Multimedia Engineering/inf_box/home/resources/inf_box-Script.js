/* 
inf_box script
Last Updated: 18.11.2014
Author: Javier Sagastuy , Alejandro Escalante
*/
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
