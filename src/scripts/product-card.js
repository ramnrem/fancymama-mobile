$(document).ready(function(){
	$('.tab-desc').click(function(){
		$('.tab').removeClass('cur-tab');
		$('.tab-desc').addClass('cur-tab');
		$('.desc-rev-content').removeClass('cur-tab-cont');
		$('.tab-desc-cont').addClass('cur-tab-cont');
	})
	$('.tab-rev').click(function(){
		$('.tab').removeClass('cur-tab');
		$('.tab-rev').addClass('cur-tab');
		$('.desc-rev-content').removeClass('cur-tab-cont');
		$('.tab-rev-cont').addClass('cur-tab-cont');
	})
});