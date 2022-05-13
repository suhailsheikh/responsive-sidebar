function toggleMenu(el) {
    const sidebar = document.querySelector(".sidebar");
    const navText = document.querySelectorAll(".nav-text");
    const navBrand = document.querySelector(".nav-brand");

    el.classList.toggle("change");
    sidebar.classList.toggle("active");
    navBrand.classList.toggle("active");
    navText.forEach(el => {
        el.classList.toggle("active");
    });
}
