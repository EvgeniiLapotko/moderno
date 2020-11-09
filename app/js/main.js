$(function () {

    $(".rate_star").rateYo({
        rating: 4,
        starWidth: "12px",
        readOnly: true
    });

    var mixer = mixitup('.products__inner-box');

    $(".products-slider__inner").slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        dots: true,
        arrows: false
    });


});