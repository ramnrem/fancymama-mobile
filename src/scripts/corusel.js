import 'slick-carousel';
import 'slick-carousel/slick/slick.css';

$(function(){

    $('.slider-wrapper').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });

    $('.js-arrslider-new').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: $('.js-left-new'),
        nextArrow: $('.js-right-new')
    });

    $('.js-arrslider-top').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: $('.js-left-top'),
        nextArrow: $('.js-right-top')
    });
});

