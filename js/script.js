var nav_pos = $("header").offset().top;
var nav_height = $("header").outerHeight();
$(window).scroll(function () {
    if ($(this).scrollTop() > nav_pos) {
        $("header").addClass("fixed");
    } else {
        $("header").removeClass("fixed");
    }
});