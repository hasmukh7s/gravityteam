

$(document).ready(function () {
    // Header Toggle
    $('.hamburger .menu').click(function () {
        $('.mobile-menu').toggle();
    });

    // Sticky Header
    $(window).on("scroll", function () {
        const currentScroll = $(window).scrollTop();
        const toggleClass = "is-sticky";

        if (currentScroll > 200) {
            $(".head").addClass(toggleClass);
        } else {
            $(".head").removeClass(toggleClass);
        }
    });

    // Company Testimonial
    $('.slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
    });

    // Back To Top
    $(function () {

        //Scroll event
        $(window).scroll(function () {
            var scrolled = $(window).scrollTop();
            if (scrolled > 200) $('.go-top').fadeIn('slow');
            if (scrolled < 200) $('.go-top').fadeOut('slow');
        });

        //Click event
        $('.go-top').click(function () {
            $("html, body").animate({ scrollTop: "0" }, 500);
        });

    });
});

