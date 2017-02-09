$(window).scroll(function () {
    var top = $(document).scrollTop();
    var parallax = $('.parallax');
    parallax.css('background-position-y', -top / 10);
    // parallax.animate({
    //     'background-position-y': -top / 10
    // }, 400);
});