$(document).ready(function() {
	$("#cat-menu ul").hide();
	$("#cat-menu li span").click(function() {
		$("#cat-menu ul:visible").slideUp("normal");
		if (($(this).next().is("ul")) && (!$(this).next().is(":visible"))) 
			$(this).next().slideDown("normal");
	});
	$(".js-catalog-menu").click(function() {
		if($('.cat-menu').hasClass('js-cat-menu-show'))
			$('.cat-menu').removeClass('js-cat-menu-show')
		else
			$('.cat-menu').addClass('js-cat-menu-show')
	});
});

