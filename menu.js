let btnMenu = document.getElementById('btn-menu');
let menu = document.getElementById('menu-mobile');
let overlay = document.getElementById('overlay-menu');

btnMenu.addEventListener('click', () => {
    menu.classList.add('abrir-menu');
});

menu.addEventListener('click', () => {
    menu.classList.remove('abrir-menu');
});

overlay.addEventListener('click', () => {
    menu.classList.remove('abrir-menu');
});

document.getElementById('emailForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Evita que o formulário seja enviado normalmente

    // Obtém os dados do formulário
    const formData = new FormData(this);

    // Envia os dados para o arquivo PHP usando AJAX
    fetch('enviar_email.php', {
        method: 'POST',
        body: formData
    })
        .then(response => {
            if (response.ok) {
                return response.text(); // Retorna o texto da resposta
            }
            throw new Error('Erro ao enviar o email.');
        })
        .then(data => {
            alert(data); // Exibe a mensagem de sucesso ou erro
        })
        .catch(error => {
            console.error('Erro:', error);
            alert('Fale comigo agora mesmo pelo botão contato no inicio da página');
        });
});

// Botão para voltar ao topo
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    const btn = document.getElementById("myBtn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
}

// Função para rolar suavemente para o topo
function topFunction() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'  // Essa linha ativa a rolagem suave
    });
}
