$(document).ready(function () {
    // $('.header__menu-item').click(function (e) {
    //     if ($(window).width() <= 768) {
    //         if (!$(this).hasClass('hover') && $(this).hasClass('header__menu-item--arrow')) {
    //             e.preventDefault();
    //             $('.header__menu-item.hover').removeClass('hover');
    //             $(this).addClass('hover');
    //         }
    //     }
    // })
    $('.header__menu-item').each(function () {
        if ($(this).find('.header__menu-sub').length > 0) {
            $(this).addClass('header__menu-item--arrow');
        }
        if ($(this).find('.header__menu-sub .active').length > 0) {
            $(this).addClass('active');
        }
    });
    $('.header__menu-close').click(function () {
        $('.header__menu').removeClass('header__menu--active');
        $('.header__menu-item.hover').removeClass('hover');
    });
    $('.header__toggler').click(function () {
        $('.header__menu').addClass('header__menu--active');
    });
});
