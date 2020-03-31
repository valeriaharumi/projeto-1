function toggle(){
    var inicio = document.getElementById('inicio');
    inicio.classList.toggle('active')
}


$(document).ready(function(){

    $('nav a[href*="#"]').on('click', function(){
        $('html, body').animate(keyframes:{
            scrollTop: $($(this).attr('href')).offset().top - 100
        }, options:2000);
    });

    AOS.init({
        easing: 'ease',
        duration: 1800
    })
});