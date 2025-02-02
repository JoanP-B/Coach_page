// Actualización del JavaScript para el nuevo diseño
document.addEventListener('DOMContentLoaded', function() {
    // Animación para barras
    const bars = document.querySelectorAll('.skill-bar');
    const circles = document.querySelectorAll('.circle-progress');
    
    const animateElements = () => {
        // Animar barras
        bars.forEach(bar => {
            const width = bar.dataset.width;
            if(isElementInViewport(bar)) {
                bar.style.width = width;
            }
        });
        
        // Animar círculos
        circles.forEach(circle => {
            const percent = circle.dataset.percent;
            if(isElementInViewport(circle)) {
                circle.style.setProperty('--percent', percent);
            }
        });
    };

    const isElementInViewport = (el) => {
        const rect = el.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.bottom >= 0
        );
    };

    window.addEventListener('scroll', animateElements);
    animateElements(); // Inicializar
});

//menu



//linea de tiempo

$(window).on('scroll', function() {
    console.log("Scroll detectado");
    var skillsSection = $('#skills');
    var skillsPosition = skillsSection.offset().top;
    var windowHeight = $(window).height();
    var scrollPosition = $(window).scrollTop();

    if (scrollPosition + windowHeight > skillsPosition) {
        $('#skills .timeline').addClass('visible');
    }
});


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
        strings: ['Ejecutivo', 'Personal (Life Coaching)', 'de Carrera', 'para Equipos', 'de Liderazgo', 'de Ventas y Marketing', 'para Emprendedores', 'en Toma de Decisiones', 'de Transformación y Cambio', 'de Salud y Bienestar', 'para la Gestión del cambio', 'Financiero'],
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