document.addEventListener("DOMContentLoaded", function () {
    const dropdownBtn = document.querySelector(".dropdown-btn");
    const dropdownMenu = document.querySelector(".dropdown-menu");

    dropdownBtn.addEventListener("click", function (event) {
        event.stopPropagation();
        dropdownMenu.classList.toggle("show-menu");
    });

    document.addEventListener("click", function () {
        dropdownMenu.classList.remove("show-menu");
    });
});
