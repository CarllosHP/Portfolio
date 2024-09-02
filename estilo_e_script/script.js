const contactForm = document.getElementById('contact-form');

// Adicionando um ouvinte para o envio do formulário
contactForm.addEventListener('submit', function(event) {
    event.preventDefault();

    // Capturando os valores dos inputs
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;

    // Exibindo uma mensagem de sucesso
    alert(`Obrigado, ${nome}! Sua mensagem foi enviada com sucesso.`);

    contactForm.reset();
});
