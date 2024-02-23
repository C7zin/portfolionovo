// Ativar botao de menu //
let menuBtn = document.querySelector('#menu-btn');
let menuBar = document.querySelector('.menu-bar');

menuBtn.onclick = () => {
    menuBtn.classList.toggle('bx-x');
    menuBar.classList.toggle('active');
}

// Remover menu bar com rolagem //
window.onscroll = () => {
    menuBtn.classList.remove('bx-x');
    menuBar.classList.remove('active');
}


//ScrollReveal//

ScrollReveal({
    reset: true,
    distance: '100px',
    duration: 2000,
    delay:200,
});

ScrollReveal().reveal('.home-bio h1, .sobremim-resumo',{origin: 'left'});

ScrollReveal().reveal('.home-bio p', {origin: 'right'} );

ScrollReveal().reveal('.home-bio, heading', {origin: 'top'} );

ScrollReveal().reveal('.profile-pic, .sobremim-items, .habilidades-items,.projetos-items, .form', {origin: 'bottom'} );


// <!-- SEÇÕES TYPING ANIMATION-->
 var typed6 = new Typed('.animated-text', {
    strings: ['Web Developer', 'Front-End'],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true
  });



