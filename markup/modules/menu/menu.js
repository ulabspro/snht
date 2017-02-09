$(document).ready(function () {
    $('.header-menu').click(function () {
        $('.header-menu-slide, body').addClass('active');
    });
    $('.header-menu-slide__close').click(function () {
        $('.header-menu-slide, body').removeClass('active');
    });
});