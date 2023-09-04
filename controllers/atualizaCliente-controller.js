import { conexaoApi } from "../services/conexaoAPI.js";


    const pegaURL = new URL(window.location);

    const id = pegaURL.searchParams.get('id');

    const inputNome = document.querySelector('[data-nome]');
    const inputEmail = document.querySelector('[data-email]');

    conexaoApi.detalhaCliente(id)
    .then(cliente => {
        inputNome.value = cliente.nome;
        inputEmail.value = cliente.email;
    })

    const formulario = document.querySelector('[data-form]');

    formulario.addEventListener('submit', async (evento) => {
        evento.preventDefault();

        await conexaoApi.atualizaCliente(id, inputNome.value, inputEmail.value)
        .then(() => {
            window.location.href = "../telas/edicao_concluida.html"
        })
    })

