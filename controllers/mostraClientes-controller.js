import { conexaoApi } from "../services/conexaoAPI.js";
const tabela = document.querySelector("[data-tabela]")

/**Excluir cliente */
tabela.addEventListener('click', (evento) => {
    const modalContainer = document.querySelector('[data-modal]');
    const confirmaExclusao = document.querySelector('.modal__botao--confirmar');
    const cancelaExclusao = document.querySelector('.modal__botao--nao-excluir');
    const fecharModal = document.querySelector('.modal__fechar');
    let btnExcluir = evento.target.className == "botao-simples botao-simples--excluir"
    if(btnExcluir) {
        modalContainer.classList.remove('modal--fechado')
        confirmaExclusao.addEventListener('click', async () => {
            const linhaCliente = evento.target.closest('[data-id]');
            let id = linhaCliente.dataset.id;
            await conexaoApi.deletaCliente(id).then( () => {
                linhaCliente.remove();
            });
            modalContainer.classList.add('modal--fechado');
        })
        cancelaExclusao.addEventListener('click', () => {
            modalContainer.classList.add('modal--fechado');
        })
        fecharModal.addEventListener('click', () => {
            modalContainer.classList.add('modal--fechado');
        })
    }
})

const novoCliente = (nome, email, id) => {

    const cliente = document.createElement('tr')

    cliente.innerHTML = `
        <td class="td" data-td>${nome}</td>
            <td>${email}</td>
        <td>
            <ul class="tabela__botoes-controle">
                <li><a href="../telas/edita_cliente.html?id=${id}" class="botao-simples botao-simples--editar">Editar</a></li>
                <li><button class="botao-simples botao-simples--excluir" type="button">Excluir</button></li>
            </ul>
        </td>
    `
    cliente.dataset.id = id;
    return cliente;
} 

const mostrarClientes = async () => {
    try{
        const clientes = await conexaoApi.listaClientes();
        if(clientes.length == 0){
            window.location.href = '../telas/sem_clientes.html';
        }
        clientes.forEach(cliente => tabela.appendChild(novoCliente(cliente.nome, cliente.email, cliente.id)));
    }catch(err){
        console.log(err);
        window.location.href = '../telas/erro.html'
    }
    
}

mostrarClientes();