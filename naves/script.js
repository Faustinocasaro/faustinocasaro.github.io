document.addEventListener("DOMContentLoaded", function() {
    var slides = document.getElementsByClassName("slide");
    var currentSlide = 0;

    function showSlide(slideIndex) {
        if (slideIndex >= slides.length) {
            slideIndex = 0;
        } else if (slideIndex < 0) {
            slideIndex = slides.length - 1;
        }

        for (var i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        slides[slideIndex].style.display = "block";
        currentSlide = slideIndex;
    }

    function nextSlide() {
        showSlide(currentSlide + 1);
    }

    function previousSlide() {
        showSlide(currentSlide - 1);
    }

    // Mostrar la primera diapositiva al cargar la página
    showSlide(0);

    // Agregar eventos de clic para navegar entre diapositivas
    document.getElementById("slideshow-container").addEventListener("click", nextSlide);
    document.addEventListener("keydown", function(event) {
        if (event.key === "ArrowRight") {
            nextSlide();
        } else if (event.key === "ArrowLeft") {
            previousSlide();
        }
    });
});
