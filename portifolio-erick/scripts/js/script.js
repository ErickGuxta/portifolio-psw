// ANIMAÇÕES
document.addEventListener("DOMContentLoaded", function () {
    const h1 = document.querySelector(".container-left h1");
    const textoOriginal = "Olá, Eu sou Erick";
    let i = 0;

    h1.textContent = " ";
    h1.classList.add("typing");

    function digitar() {
        if (i < textoOriginal.length) {
            h1.textContent += textoOriginal.charAt(i);
            i++;
            setTimeout(digitar, 100); 
        } else {
            h1.classList.remove("typing"); 
        }
    }

    digitar();
});


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


// VALIDAÇÃO SIMPLES EMAIL
document.addEventListener('DOMContentLoaded', function() {
    const formEl = document.getElementById('form');
    const email  = document.getElementById('email');

    formEl.addEventListener('submit', evento => {
        evento.preventDefault();

        if(email.value === "" || !eEmailValido(email.value)) {
            alert("Digite um email válido");
            return
        }
    })
})

// Função de validação email usando regex
function eEmailValido(email) {
    const emailRegex = new RegExp(
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
    );

    if (emailRegex.test(email)) {
        return true;
    }
    return false;  
}