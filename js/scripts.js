// navegacao suave para voltar ao topo
const irParaTopo = (event) => {
    if (typeof event == 'undefined') {
        let limite = 100;
        let opacidade = 1200;
        let botao = document.querySelector('.ir-topo');
        
        document.onscroll = () => {
            let top = document.documentElement.scrollTop;
            if (top > limite) {
                botao.classList.add('visivel');
            } else {
                botao.classList.remove('transparente');
                botao.classList.remove('visivel');
            }
            if (top > opacidade) {
                botao.classList.add('transparente');
            }
        };
    } else {
        event.preventDefault();
    }

    window.scroll({
        top: 0,
        behavior: 'smooth',
    });
};

$(function () {
    $('[data-toggle="tooltip"]').tooltip();

    irParaTopo();
});
