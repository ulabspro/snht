$(document).ready(function () {
    $('#slider').slick({
        accessibility: true,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 1500,
        infinite: true,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: false,
        fade: true
        // prevArrow: '<span class="slick-prev slick-nav slick-nav--prev" aria-label="previous"></span>',
        // nextArrow: '<span class="slick-next slick-nav slick-nav--next" aria-label="next"></span>'
    });
});
