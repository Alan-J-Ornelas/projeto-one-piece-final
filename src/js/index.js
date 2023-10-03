//Objetivo1 - quandoclicarno botão do personagem na lista, marcar botão como selecionado
    //obj1 - passo 1 - pegar os botoes no js para verificar quando o usuário clicar em cima deles
    //obj1 - passo 2 - adicionar a classe "selecionado" no botãoque o usuário clicou 
    //obj1 - passo 3 - verificar se ja existe um botao selecionado e remover sua selecao

//Objetivo2 - quando clicar no botao de personagem, mostrar as informações do personagem.
    //obj2 - passo 1 - pegar os personagens no js para     mostra-los ou esconde-los
    //obj2 - passo 2 - adicionar a classe "selecionado" no personagem que o usuário selecionou
    //obj2 - passo 3 - verificarse jáexisteum personagem selecionado, se sim, remover a seleção



const botoes = document.querySelectorAll('.botao');

const personagens = document.querySelectorAll(".personagem");

botoes.forEach((botao, indice) => {
    botao.addEventListener("click", () => {


        desselecionarBotao();
        desselecionarPersonagem();


        botao.classList.add("selecionado");
        personagens[indice].classList.add("selecionado");

    })

})


function desselecionarPersonagem() {
    const personagemSelecionado = document.querySelector(".personagem.selecionado");
    personagemSelecionado.classList.remove("selecionado");
}

function desselecionarBotao() {
    const botaoSelecionado = document.querySelector(".botao.selecionado");

    botaoSelecionado.classList.remove("selecionado");
}
