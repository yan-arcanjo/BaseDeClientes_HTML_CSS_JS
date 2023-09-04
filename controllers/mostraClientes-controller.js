import { conexaoApi } from "../services/conexaoAPI.js";
const tabela = document.querySelector("[data-tabela]")

function novoCliente(nome, email) {

    const cliente = document.createElement('tr')

    cliente.innerHTML = `
        <td class="td" data-td>${nome}</td>
            <td>${email}</td>
        <td>
            <ul class="tabela__botoes-controle">
                <li><a href="../telas/edita_cliente.html" class="botao-simples botao-simples--editar">Editar</a></li>
                <li><button class="botao-simples botao-simples--excluir" type="button">Excluir</button></li>
            </ul>
        </td>
    `

    return cliente;
} 

async function mostrarClientes() {
    conexaoApi.listaClientes().then(data => {
        data.forEach(cliente => tabela.appendChild(novoCliente(cliente.nome, cliente.email)));
    })
}

mostrarClientes();