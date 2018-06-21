/*import one from "./some.js";*/

$(document).ready(function() {
	//Активация меню
	$('.menu-btn').click(function(){
		if($('.menu-wrapper').css('display') === 'none'){
			$('.menu-wrapper').css('display','block');
			$('.menu-wrapper').animate({
				opacity: 1
			},500);
		}
	})
	$('.back-btn').click(function(){
		if($('.menu-wrapper').css('display') === 'block'){
			
			$('.menu-wrapper').animate({
				opacity: 0
			},500,function(){
				$('.menu-wrapper').css('display','none');
			});
		}
	})
});