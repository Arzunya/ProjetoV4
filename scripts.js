document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.imagem-abaixo-texto').addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector('#next-section').scrollIntoView({ behavior: 'smooth' });
    });
});


document.querySelector('.scroll-to-top').addEventListener('click', function(event) {
    event.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});


window.addEventListener('scroll', function() {
    const imagemFixa = document.querySelector('.imagem-fixa');
    const footer = document.querySelector('footer');
    const footerRect = footer.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    
    if (footerRect.top < windowHeight) {
        imagemFixa.classList.add('imagem-oculta');
    } else {
        imagemFixa.classList.remove('imagem-oculta');
    }
});




 