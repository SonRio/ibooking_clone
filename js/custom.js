$(window).scroll(function () {
    // MY JS FIX FOR MENU
    var navbar = $('.navbar');
    scrollTop = $(window).scrollTop();
    if (scrollTop > 100) {
        navbar.addClass('menu-fixed');
    } else if (scrollTop <= 100) {
        navbar.removeClass('menu-fixed');
    }
});