document.addEventListener('DOMContentLoaded', function() {
    // Seleccionar elementos del DOM
    const header = document.querySelector('header');
    const introSection = document.getElementById('introduccion');

    // Añadir un event listener
    header.addEventListener('click', function() {
        alert('¡Bienvenido al Blog de Tecnología!');
    });

    introSection.addEventListener('mouseover', function() {
        introSection.style.backgroundColor = '#e0e0e0';
    });

    introSection.addEventListener('mouseout', function() {
        introSection.style.backgroundColor = 'white';
    });
});
