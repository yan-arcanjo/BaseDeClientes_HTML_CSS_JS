const criaNovoCliente = async (nome, email) => {
    const novoClienteResponse = await fetch("http://localhost:3000/profile", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            nome: nome,
            email: email
        }),
            
    })

    if(!novoClienteResponse.ok) {
        throw new Error("Não foi possível enviar o vídeo");
    }

    return await novoClienteResponse.json();  
}

const listaClientes = async () => {

    try {
       return await fetch("http://localhost:3000/profile").then(response => response.json());

    } catch (error) {
        console.log(`${error}: Erro interno`)
    }

}

async function deletaCliente() {
    const conexao = fetch("http://localhost:3000/profile", {
        method: "DELETE",
    })
}




















export const conexaoApi = {
    listaClientes,
    criaNovoCliente,
    deletaCliente
}