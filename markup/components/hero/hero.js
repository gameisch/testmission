$(document).ready(function () {
    function scrollToId() {
        $('.goTo').on('click', function (e) {
            e.preventDefault();
            let section = $(this).attr('href');
            $('html, body').animate({
                scrollTop: $(section).offset().top - 80
            });
        });
    }
    scrollToId();
});
