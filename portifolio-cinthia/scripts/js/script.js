document.addEventListener("DOMContentLoaded", function(){
    const h1 = document.querySelector(".container-left h1");
    const textoOriginal = "Olá, Eu sou Cinthia!";
    let i = 0;

    h1.textContent = " ";
    h1.classList.add("typing");

    function digitar() {
        if (i < textoOriginal.length ) {
            h1.textContent += textoOriginal.charAt(i);
            i++;
            setTimeout(digitar, 120);
        } else{
            h1.classList.remove("typing");
        }   
    }
    digitar()
})

document.addEventListener('DOMContentLoaded', function() {
    const elementos = document.querySelectorAll('.section-main, .section-projects, .section-tech, .section-contact');
    
    function verificarVisibilidade() {
        elementos.forEach(e => {
            const posicao = e.getBoundingClientRect();
            const alturaJanela = window.innerHeight;
            
            if (posicao.top < alturaJanela - 100) {
                e.classList.add('visivel');
            }
        });
    }
    
    verificarVisibilidade();
    window.addEventListener('scroll', verificarVisibilidade);
});


