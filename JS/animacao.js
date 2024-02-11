document.addEventListener('DOMContentLoaded', function() {
    const bolinha = document.querySelector('.bolinha');
    const conteudo = document.querySelector('.perfil');

    bolinha.addEventListener('click', function() {
        conteudo.style.display = conteudo.style.display === 'none' ? 'block' : 'none';
    });
});