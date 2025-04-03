document.addEventListener("DOMContentLoaded", () => {
    const carousel = document.getElementById("carousel");
    const images = carousel.children;
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    const dots = document.querySelectorAll(".dot");

    let index = 0;
    const totalSlides = images.length;

    function updateCarousel() {
        const offset = -index * 100;
        carousel.style.transform = `translateX(${offset}%)`;
        
        // Actualizar indicadores
        dots.forEach((dot, i) => {
            dot.classList.toggle("bg-blue-500", i === index);
            dot.classList.toggle("bg-gray-400", i !== index);
        });
    }

    nextBtn.addEventListener("click", () => {
        index = (index + 1) % totalSlides;
        updateCarousel();
    });

    prevBtn.addEventListener("click", () => {
        index = (index - 1 + totalSlides) % totalSlides;
        updateCarousel();
    });

    // Auto desplazamiento cada 4 segundos
    setInterval(() => {
        index = (index + 1) % totalSlides;
        updateCarousel();
    }, 4000);
});
