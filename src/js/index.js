


const btn_mostrar_projetos = document.querySelector('.btn-mostrar-projetos');
const projetos_inativos = document.querySelectorAll('.projeto:not(.ativo)');

btn_mostrar_projetos.addEventListener('click', () => {
    mostrar_mais_projetos();
    esconder_botao_mostrar_mais();
});


function esconder_botao_mostrar_mais() {
    btn_mostrar_projetos.classList.add('remover');
}

function mostrar_mais_projetos() {
    projetos_inativos.forEach(projeto_inativo => {
        projeto_inativo.classList.add('ativo');
    });
}

