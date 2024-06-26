document.addEventListener('DOMContentLoaded', function () {
    AOS.init({
        duration: 900
    });
})

$(document).ready(function () {
    $(".sliders").slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        dots: true,

        prevArrow: "<button type='button' class='btn-slick-prev btn btn-slider'><img src='img/arrov-left.svg' alt='arrov'></button>",
        nextArrow: "<button type='button' class='btn-slick-next btn btn-slider'><img src='img/arrov-ride.svg' alt='arrov'></button>",
        responsive: [
            {
                breakpoint: 1401,
                settings: {
                    infinite: true,
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    dots: true,
                }
            },
            {
                breakpoint: 1101,
                settings: {
                    infinite: true,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    dots: true,
                }
            },
            {
                breakpoint: 851,
                settings: {
                    infinite: true,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: true,
                    arrows: false,
                    autoplay: true,
                    autoplaySpeed: 2500,
                }
            },
            {
                breakpoint: 551,
                settings: {
                    infinite: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                    arrows: false,
                    autoplay: true,
                    autoplaySpeed: 2500,
                }
            },
        ]
    });

    $(".mibile-menu ").click(function () {
        $(".mibile-menu span").toggleClass('active');
        $(".menu").toggleClass('active');
        $(".nav").toggleClass('active');
        $("body").toggleClass('owerlay');
    })

    $(window).scroll(function () {
        if ($(this).scrollTop() > 99) {
            $('.header-top').addClass('header-top__fixed')
        } else {
            $('.header-top').removeClass('header-top__fixed')
        }
    })
});


