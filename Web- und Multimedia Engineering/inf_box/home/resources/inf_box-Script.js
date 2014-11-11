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