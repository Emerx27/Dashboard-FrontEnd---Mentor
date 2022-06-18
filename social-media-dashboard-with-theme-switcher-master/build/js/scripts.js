document.addEventListener("DOMContentLoaded", function() {
    iniciarApp();
});

function iniciarApp() {
    darkMode();
}

function darkMode() {
    const btn = document.querySelector(".header__dark-switch");
    const ball = document.querySelector(".header__dark-check");
    const body = document.querySelector("body");

    btn.addEventListener("click", function(){
        body.classList.toggle("dark-mode");
        ball.classList.toggle("active");
    });
}