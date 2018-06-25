$(document).ready(function() {
	//Активация меню
	$('.menu-btn').click(function(){
		$('#js-menu').addClass('menu-open');
	})
	//Активация формы отправки отзыва
	$('.post-reviews').click(function(){
		$('#js-post-review').addClass('menu-open');
	})
	//Деактивация меню или формы
	$('.back-btn').click(function(){
		//Если открыто меню
		if($('#js-menu').hasClass('menu-open')){
			$('#js-menu').removeClass('menu-open');
		//Если открыта форма
		} else if($('#js-post-review').hasClass('menu-open')){
			$('#js-post-review').removeClass('menu-open');
		}
	})
})