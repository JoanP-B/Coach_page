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
    new Typed('#type-it', {
        strings: ['Personal','Empresarial','Educativo','Ejecutivo'],
        typeSpeed: 200,
        loop: true
    });
});