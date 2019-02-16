(function ($) {

    // 1. Засобами jQuery дублюйте меню в футер сторінки.

    $('#footer').append($('#header nav').clone());

    // 2. Створити "акордеон"

    $(".accordion").on("click", ".accordion-header", function() {
        $(this).toggleClass("active").next().slideToggle();
    });

}(jQuery));