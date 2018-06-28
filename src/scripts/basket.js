let basketCount = 0;
$(".js-basket-item").text(basketCount);

$('.card-buy a').on('click', function(){

	let btn = $(this).closest('.card').find('.card-buy');
	let bird = $(this).closest('.card').find('img.bird');
	let basket = $(".basket-icon");
	let w = bird.width();
	
	bird.clone()
		.css({'width': w,
		'position' : 'absolute',
		'z-index' : '9999',
		top: btn.offset().top,
		left:btn.offset().left})
		.appendTo("body")
		.animate({
			left: basket.offset()['left'],
			top: basket.offset()['top'],
			width: 20}, 1000, function() {	
				$(this).remove();
			});

	basketCount++;
	$(".js-basket-item").text(basketCount);
	return false;
});