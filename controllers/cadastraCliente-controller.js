import { conexaoApi } from "../services/conexaoAPI.js";

const formulario = document.querySelector("[data-form]")

async function criaCliente(evento){
    evento.preventDefault();

    const nome = document.querySelector("[data-nome]").value;
    const email = document.querySelector("[data-email]").value;

    await conexaoApi.criaNovoCliente(nome, email)
    .then(() => window.location.href = "../telas/cadastro_concluido.html");

    
}

formulario.addEventListener("submit", evento => criaCliente(evento));