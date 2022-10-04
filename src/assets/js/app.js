
//Run Functions Theme
(function ($) {
    "use strict";

    // makes sure the whole site is loaded
    $(window).on('load', function () {
        $('.body').addClass('body--loaded');
    });

    //sticked MENU
    var c, currentScrollTop = 0,
        navbar = $('.menu-sticked');

    $(window).scroll(function () {
        var a = $(window).scrollTop();
        var b = navbar.height();

        currentScrollTop = a;

        if (c < currentScrollTop && a > b + b) {
            navbar.addClass("scrollUp");
        } else if (c > currentScrollTop && !(a <= b)) {
            navbar.removeClass("scrollUp").addClass("sticked");
        }

        if (a == 0) {
            navbar.addClass("no-sticked");
        } else {
            navbar.removeClass("no-sticked");
        }

        c = currentScrollTop;
    });

    //SCROLL
    $(document).ready(function () {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
    });

    //  $(document).ready(function(){
    //      var feed = new Instafeed({
    //          get: 'user',
    //          userId: '558761032',
    //          limit: 6,
    //          resolution: 'standard_resolution',
    //          template: '<div class="insta-items" style="background-image:url({{image}});"><a href="{{link}}" target="_blank" id="{{id}}"></a></div>',
    //          accessToken: '558761032.1677ed0.983b2acc9e964ed88a2d69554d03955f',
    //      });

    //      feed.run();
    //  });

    $(".dropdown").hover(
        function () {
            $('>.dropdown-menu', this).stop(true, true).fadeIn("fast");
            $(this).addClass('open');
        },
        function () {
            $('>.dropdown-menu', this).stop(true, true).fadeOut("fast");
            $(this).removeClass('open');
        });

})(jQuery);


//Run Functions Theme
(function ($) {
    $(document).ready(function () {

        $('.slider-for-services').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            asNavFor: '.slider-nav-services',
            autoplaySpeed: 3000,
            autoplay: true,
            speed: 700,
            fade: true,
            cssEase: 'linear'
        });

        $('.slider-nav-services').slick({
            slidesToShow: 3,
            slidesToScroll: 3,
            asNavFor: '.slider-for-services',
            dots: false,
            centerMode: false,
            focusOnSelect: true,
            autoplaySpeed: 3000,
            autoplay: true,
            speed: 700,
            responsive: [
                {
                    breakpoint: 990,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                    }
                },
                {
                    breakpoint: 690,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });

        $('#testimonials').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            dots: true,
            cssEase: 'linear'
        });


        $('.sponsor-carousel').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            dots: false,
            arrows: true,
            cssEase: 'linear'
        });

        $('.carousel-single-work').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            fade: true,
            dots: false,
            cssEase: 'linear'
        });

        $(".works--done-carousel").slick({
            arrows: true,
            infinite: true,
            slidesToScroll: 4,
            slidesToShow: 4,
            dots: false,
            autoplaySpeed: 3000,
            autoplay: true,
            speed: 500,
            responsive: [
                {
                    breakpoint: 1440,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                    }
                },
                {
                    breakpoint: 790,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });

    });

})(jQuery);