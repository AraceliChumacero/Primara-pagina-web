document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.getElementById("menu-btn");
    const mobileMenu = document.getElementById("mobile-menu");

    // Mostrar/ocultar el menú móvil al hacer clic en el botón
    menuBtn.addEventListener("click", function () {
        mobileMenu.classList.toggle("hidden");
    });
});
