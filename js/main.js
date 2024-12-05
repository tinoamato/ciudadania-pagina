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

function nextStep(step) {
    // Ocultar todos los elementos con la clase "step"
    const steps = document.querySelectorAll('.step');
    steps.forEach(s => s.style.display = 'none');

    // Mostrar el paso actual
    document.getElementById(`paso${step}`).style.display = 'block';

    // Manejar la lógica específica para el paso 3
    if (step === 3) {
        const tipoActa = document.getElementById('tipoActa').value;
        // Ocultar todos los formularios de actas
        const actaForms = document.querySelectorAll('.actaForm');
        actaForms.forEach(form => form.style.display = 'none');
        
        // Mostrar solo el formulario seleccionado
        const formToShow = document.getElementById(`form${tipoActa.charAt(0).toUpperCase() + tipoActa.slice(1)}`);
        if (formToShow) {
            formToShow.style.display = 'block';
        }
    }
}

////ENTREVISTA

function mostrarCalendario() {
    // Ocultar el formulario original
    const quoteSection = document.querySelector('.quote');
    quoteSection.style.display = 'none';

    // Mostrar el calendario
    const calendarioSection = document.getElementById('calendarioSeleccion');
    calendarioSection.style.display = 'block';

    // Inicializar el calendario (usando flatpickr si es necesario)
    flatpickr('#calendario', {
        inline: true,
        minDate: "today",
        onChange: function(selectedDates, dateStr) {
            cargarHorarios(dateStr);
        }
    });
}

function cargarHorarios(fecha) {
    const horarioSelect = document.getElementById('seleccionHorario');
    horarioSelect.innerHTML = ""; // Limpiar los horarios anteriores

    const horarios = ["10:00 AM", "12:00 PM", "2:00 PM", "4:00 PM"];
    horarios.forEach(horario => {
        const option = document.createElement('option');
        option.value = horario;
        option.textContent = `${fecha} - ${horario}`;
        horarioSelect.appendChild(option);
    });
}

function confirmarSeleccion() {
    const horarioSeleccionado = document.getElementById('seleccionHorario').value;
    if (!horarioSeleccionado) {
        alert("Por favor, selecciona un horario.");
    } else {
        alert(`Horario seleccionado: ${horarioSeleccionado}`);
        // Aquí puedes añadir lógica adicional para confirmar la selección
    }
}


