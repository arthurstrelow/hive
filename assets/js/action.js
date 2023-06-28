lightbox.option({})
$(document).ready(function() {
    $(".heart").click(function() {
        $(this).toggleClass("active");
    });
});
function bateCoracaum(button) {
    button.classList.add('animate');

    setTimeout(function() {
        button.classList.remove('animate');
        button.disabled = false;
    }, 600);
}
//Modo Dark
function darkMode(){
    document.getElementById('dm').classList.toggle('fa-sun')
    document.body.classList.toggle('dark-mode')
    document.querySelector('.container').classList.toggle('text-light')
    document.querySelector('.menu-content').classList.toggle('dark-mode')
    document.querySelector('.menu').classList.toggle('dark-mode')
    document.querySelector('.modal-body').classList.toggle('dark-mode')
    document.querySelector('.modal-header').classList.toggle('dark-mode')
    document.querySelector('.modal-content').classList.toggle('dark-mode')
    document.querySelectorAll('.card-body').forEach(function(cardBody) {
        cardBody.classList.toggle('dark-mode');
    });
    document.querySelectorAll('.list-group-item').forEach(function(i) {
        i.classList.toggle('dark-mode');
    });
    document.querySelector('input').classList.toggle('dark-mode')
    document.querySelector('.card-header').classList.toggle('dark-mode')
    document.querySelector('.form-control').classList.toggle('dark-mode')
    document.querySelectorAll('.text-justify').forEach(function(i) {
        i.classList.toggle('text-light')
    });
    document.getElementById('hive').classList.toggle('text-light')
    document.querySelectorAll('.card-title').forEach(function(i) {
        i.classList.toggle('text-light')
    });
    document.querySelectorAll('.h6').forEach(function(i) {
        i.classList.toggle('text-light')
    });
    document.querySelectorAll('h5').forEach(function(i) {
        i.classList.toggle('text-light')
    });
    document.querySelectorAll('h6').forEach(function(i) {
        i.classList.toggle('text-light')
    });
    document.querySelectorAll('.card-title').forEach(function(i) {
        i.classList.toggle('text-light');
    });
    document.querySelectorAll('.text-muted').forEach(function(i) {
        i.classList.toggle('text-light');
    });
    document.querySelector('.list-group').classList.toggle('text-light')
    document.querySelector('.card .shadow-sm').classList.toggle('dark-mode')
}