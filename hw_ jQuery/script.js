(function ($) {

    // 1. Засобами jQuery дублюйте меню в футер сторінки.

    $('#footer').append($('#header nav').clone());


    // 2. Створити "акордеон"

    $(".accordion").on("click", ".accordion-header", function() {
        $(this).toggleClass("active").next().slideToggle();
    });


    // 3. Створити попап

    $(".open").on("click", function(){
        $(".overlay, .modal").addClass("active");
    });

    $(".close, .overlay").on("click", function(){
        $(".overlay, .modal").removeClass("active");
    });

    $(document).keyup(function(e) {
        if (e.keyCode === 27) {
            $(".overlay, .modal").removeClass("active");
        }
    });

}(jQuery));