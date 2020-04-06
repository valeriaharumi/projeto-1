function toggle(){
    var inicio = document.getElementById('inicio');
    var menu = document.getElementById('menu');
    inicio.classList.toggle('active');
    menu.classList.toggle('active');

}

$('nav a').click(function(e){
	e.preventDefault();
	var id = $(this).attr('href'),
        targetOffset = $(id).offset().top,
        menuHeight = $('nav').innerHeight();

	

	$('html, body').animate({
		scrollTop: targetOffset 
	}, 500);
});


const debounce = function(func, wait, immediate) {
    let timeout;
    return function(...args) {
      const context = this;
      const later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      const callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
};

const target = document.querySelectorAll([data-anime]);
const animationClass = 'animate';

function animeScroll(){
    const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4);
    target.forEach(function(element){
        if((windowTop) > element.offsetTop){
            element.classList.add(animationClass);
        } else{
            element.classList.remove(animationClass);
        }
    })

}

animeScroll();

if(target.length){
window.addEventListener('scroll', debounce(function(){
    animeScroll();
}, 200));
}

window.alert('ei')