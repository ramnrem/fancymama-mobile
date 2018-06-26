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

var slider = document.getElementById('slider');

noUiSlider.create(slider, {
	start: [20, 80],
	connect: true,
	range: {
		'min': 0,
		'max': 100
	}
});