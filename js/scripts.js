$(document).ready(function () {

    showMenu();

});

function showMenu() {
    $(".menu-btn").on("click", function () {
        $(".slide-menu").toggleClass("show");
    });
}