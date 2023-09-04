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
    if(novoClienteResponse.ok) {
        return novoClienteResponse.json();  
    }else{
        throw new Error ('Não foi possível cadastrar')
    } 
}

const listaClientes = async () => {
    const clientes = await fetch("http://localhost:3000/profile")
    .then(response => {
     if(response.ok){
         return response.json();
    }else{
         throw new Error('Não foi possível lista os clientes.')
     }
    });

     return clientes;
}

const deletaCliente = async (id) => {
    const conexao = fetch(`http://localhost:3000/profile/${id}`, {
        method: "DELETE",
    }).then( response => {
        if(!response.ok){
            throw new Error('Não foi possível lista os clientes.')
        }

    })
}

const detalhaCliente = async (id) => {
    try {
            return await fetch(`http://localhost:3000/profile/${id}`).then(response => {
                if(response.ok){
                    return response.json()
                }
                throw new Error('Não foi possível lista os clientes.')
            });

     } catch (error) {
         console.log(`${error}: Erro interno`)
     }
}

const atualizaCliente = async (id, nome, email) => {
    return await fetch(`http://localhost:3000/profile/${id}`, {
        method: "PUT",
        headers: {
            'Content-type' : 'application/json'
        },
        body: JSON.stringify({
            nome: nome,
            email: email
        })
    })
    .then( response => {
        if(response.ok){
            return response.json()
        }
        throw new Error('Não foi possível lista os clientes.')
    })
}

export const conexaoApi = {
    listaClientes,
    criaNovoCliente,
    deletaCliente,
    detalhaCliente,
    atualizaCliente
}