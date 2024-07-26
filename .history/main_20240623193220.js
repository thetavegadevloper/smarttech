(function ($) {
    "use strict";

    // Spinner function
    function initSpinner() {
        if ($('#spinner').length > 0) {
            $('#spinner').removeClass('show');
        }
    }

    // Initiate WOW.js function
    function initWOW() {
        new WOW().init();
    }

    // Sticky navbar function
    function initStickyNavbar() {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 300) {
                $('.sticky-top').addClass('shadow-sm').css('top', '0px');
            } else {
                $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
            }
        });
    }

    // Back to top button functions
    function initBackToTop() {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 300) {
                $('.back-to-top').fadeIn('slow');
            } else {
                $('.back-to-top').fadeOut('slow');
            }
        });

        $('.back-to-top').click(function () {
            $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
            return false;
        });
    }

    // Facts counter function
    function initCounterUp() {
        $('[data-toggle="counter-up"]').counterUp({
            delay: 10,
            time: 2000
        });
    }

    // Header carousel function
    function initHeaderCarousel() {
        $(".header-carousel").owlCarousel({
            autoplay: true,
            smartSpeed: 1500,
            loop: true,
            nav: false,
            dots: true,
            items: 1,
            dotsData: true,
        });
    }

    // Testimonials carousel function
    function initTestimonialsCarousel() {
        $(".testimonial-carousel").owlCarousel({
            autoplay: true,
            smartSpeed: 1000,
            center: true,
            dots: false,
            loop: true,
            nav : true,
            navText : [
                '<i class="bi bi-arrow-left"></i>',
                '<i class="bi bi-arrow-right"></i>'
            ],
            responsive: {
                0:{
                    items:1
                },
                768:{
                    items:2
                }
            }
        });
    }

    // Portfolio isotope and filter function
    function initPortfolioIsotope() {
        var portfolioIsotope = $('.portfolio-container').isotope({
            itemSelector: '.portfolio-item',
            layoutMode: 'fitRows'
        });

        $('#portfolio-flters li').on('click', function () {
            $("#portfolio-flters li").removeClass('active');
            $(this).addClass('active');

            portfolioIsotope.isotope({filter: $(this).data('filter')});
        });
    }

    // Initialize all functions when document is ready
    $(document).ready(function () {
        initSpinner();
        initWOW();
        initStickyNavbar();
        initBackToTop();
        initCounterUp();
        initHeaderCarousel();
        initTestimonialsCarousel();
        initPortfolioIsotope();
    });

})(jQuery);
