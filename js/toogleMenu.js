//window.alert('oi')

//menu

const botao = document.getElementById('toggle').addEventListener("click", toggle);
const botaoClose = document.querySelector('#menu i').addEventListener("click", closeMenu);   

function toggle(){     
    const menu = document.getElementById('menu');    
    menu.classList.add('active');

}

function closeMenu(){
    const menu = document.getElementById('menu');    
    menu.classList.remove('active');
}


//scroll suave

const menuItems = document.querySelectorAll('#menu a');
const topo = document.getElementById('up')

menuItems.forEach(item => {
    item.addEventListener('click', scrollToIdOnClick)
});


function scrollToIdOnClick(e){
    e.preventDefault();
    const element = e.target;
    const id = element.getAttribute('href')
    const section = document.querySelector(id).offsetTop;
    window.scroll({
        top: section,
        behavior: "smooth"
    });
};



//modals

const modalTriggers = document.querySelectorAll('.modal-trigger');

const modalClose = document.querySelectorAll('.modal-close');

const worksBg = document.querySelector('.bg-modal')

//abrir o modal

Array.from(modalTriggers).forEach(trigger => {
    trigger.addEventListener('click', function(e) {
        console.log(e);
        e.preventDefault();
        const modalName = trigger.dataset.modal;
        const modal = document.querySelector('.' + modalName);
        modal.classList.add('modal-is-open');
        worksBg.classList.add('active');
    });
});



//fechar o modal

Array.from(modalClose).forEach(closeSymbol => {
    closeSymbol.addEventListener('click', function (){
        this.closest('.modal').classList.remove('modal-is-open');
        worksBg.classList.remove('active')
    })
});

