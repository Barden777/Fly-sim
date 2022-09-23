"use strict"

$(function () {
    $('.slider').slick({
        arrows: true,
        prevArrow: $('.arrow-left'),
        nextArrow: $('.arrow-right'),
        dots: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        mobileFirst: false,
        appendArrows: $('.content'),
        appendDots: $('.dots'),
        responsive: [
            {
                breakpoint: 320,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]
    });

    $('.slider2').slick({
        arrows: true,
        prevArrow: $('.arrow-left2'),
        nextArrow: $('.arrow-right2'),
        dots: true,
        adaptiveHeight: true,
        slidesToShow: 3,
        slidesToScroll: 2,
        speed: 1000,
        easing: 'linear',
        infinite: true,
        initialSlide: 3,
        autoplay: false,
        autoplaySpeed: 1000,
        pauseOnFocus: true,
        pauseOnHover: true,
        pauseOnDotsHover: true,
        draggable: true,
        swipe: true,
        touchThreshold: 7,
        touchMove: true,
        waitForAnimate: true,
        centerMode: false,
        variableWidth: false,
        rows: 1,
        slidesPerRow: 1,
        vertical: false,
        verticalSwiping: false,
        fade: false,
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ],
        mobileFirst: false,
        appendArrows: $('.content2'),
        appendDots: $('.dots2'),

    });
});