//menu

//scroll

$(window).on("scroll", function() {
    var scrollTop = $(window).scrollTop();
    if (scrollTop >= 100 ) {
        $('body').addClass('fixed-header');
    }
    else {
        $('body').removeClass('fixed-header');
    }
});


//Documentacion typed

$(document).ready(function() {

    //typed animacion
    new Typed('#type-it', {
        strings: ['Personal','Empresarial','Educativo','Ejecutivo'],
        typeSpeed: 200,
        loop: true
    });

    // owl animacion
    $('.owl-carousel').owlCarousel({
        loop: true,
        items: 2,
        margin: 30,
        autoplay: true,
        autoplayTimeout: 2000,
        responsive: {
            0: {
                items: 1
            },
            900: {
                items: 2
            },
        }
    });

    //One Page Scroll
    $.scrollIt({
        upKey: 38,
        downKey: 40,
        easing: 'linear',
        scrollTime: 100,
        activeClass: 'active',
        onPageChange: null,
        topOffset: 0
    });
});