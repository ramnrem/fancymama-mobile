import "./scripts/menu.js";
import "./scripts/cat-menu.js";
import "./scripts/basket.js";
import "./scripts/product-card.js";

let currentSlide = 1;
let currentArrslide = 1;
let translateWidth = 0;
let arrTranslateWidth = 0;
let slideCounter = $('.slider-wrapper').children().length;
let arrSlideCounter = $('.js-arrslider-wrapper').children().length / 2;

//функция автоматической прокрутки слайдов
function autoSlider() {
	if (currentSlide == slideCounter) {
		$('.slider-wrapper').css('transform', 'translate(0, 0)');
		currentSlide = 1;
	} else {
		translateWidth = -$('.slider-container').width() * (currentSlide);
		$('.slider-wrapper').css({
		    'transform': 'translate(' + translateWidth + 'px, 0)'
		});
		currentSlide++;
	}
	if (currentArrslide == arrSlideCounter) {
		$('.js-arrslider-wrapper').css('transform', 'translate(0, 0)');
		currentArrslide = 1;
	} else {
		arrTranslateWidth = -$('.js-arrslider-container').width() * (currentArrslide);
		$('.js-arrslider-wrapper').css({
		    'transform': 'translate(' + arrTranslateWidth + 'px, 0)'
		});
		currentArrslide++;
	}
}

let revs = document.getElementsByClassName('review');
function reviewSlider() {
	for(let i = 0; i<revs.length; i++){
		if(revs[i].classList.contains('curRev')){
			revs[i].classList.remove('curRev')
			if(i == revs.length-1){
				revs[0].classList.add('curRev');
				break;
			} else {
				revs[i+1].classList.add('curRev');
				break;
			}
		}
	}
}

setInterval(reviewSlider, 4000);

$(document).ready(function() {
	$('.left-arr').click(function(){
		if (currentArrslide == 1) {
			translateWidth = -$('.arrslider-container').width() * (arrSlideCounter - 1)
			$('.arrslider-wrapper').css({'transform': 'translate(' + translateWidth + 'px, 0)'});
			currentArrslide = arrSlideCounter;
		} else {
			translateWidth = -$('.arrslider-container').width() * (currentArrslide - 2);
			$('.arrslider-wrapper').css({
			    'transform': 'translate(' + translateWidth + 'px, 0)'
			});
			currentArrslide--;
		}
	})
	$('.right-arr').click(function(){
		if (currentArrslide == arrSlideCounter) {
			$('.arrslider-wrapper').css('transform', 'translate(0, 0)');
			currentArrslide = 1;
		} else {
			translateWidth = -$('.arrslider-container').width() * (currentArrslide);
			$('.arrslider-wrapper').css({
			    'transform': 'translate(' + translateWidth + 'px, 0)'
			});
			currentArrslide++;
		}
	})
	

	setInterval(autoSlider, 4000);
});