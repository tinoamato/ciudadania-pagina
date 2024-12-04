(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();

    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });

    // Back to top button
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

    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });

    // Header carousel
    $(".header-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        items: 1,
        dots: true,
        loop: true,
        nav: true,
        navText: [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });

    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        dots: false,
        loop: true,
        nav: true,
        navText: [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            }
        }
    });

    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });
    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');

        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });

})(jQuery);

// Función para pasar al siguiente paso con transiciones suaves
function nextStep(stepNumber) {
    // Obtener todos los pasos
    const steps = document.querySelectorAll('.step');
    
    // Ocultar todos los pasos, quitando la clase 'show'
    steps.forEach(step => {
        step.classList.remove('show');
    });

    // Mostrar el paso correspondiente agregando la clase 'show'
    const stepToShow = document.getElementById('paso' + stepNumber);
    stepToShow.classList.add('show');
    
    // Si llegamos al Paso 3, mostramos el formulario adecuado según el tipo de acta seleccionado
    if (stepNumber === 3) {
        showActaForm();
    }
}

// Función para mostrar el formulario adecuado en el Paso 3
function showActaForm() {
    const tipoActa = document.getElementById('tipoActa').value;

    // Ocultar todos los formularios de actas
    const actaForms = document.querySelectorAll('.actaForm');
    actaForms.forEach(form => form.style.display = 'none');

    // Mostrar el formulario correspondiente según el tipo de acta
    if (tipoActa === 'nacimiento') {
        document.getElementById('formNacimiento').style.display = 'block';
    } else if (tipoActa === 'matrimonio') {
        document.getElementById('formMatrimonio').style.display = 'block';
    } else if (tipoActa === 'defuncion') {
        document.getElementById('formDefuncion').style.display = 'block';
    } else if (tipoActa === 'cnn') {
        document.getElementById('formCNN').style.display = 'block';
    }
}



