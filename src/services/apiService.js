const API_URL = process.env.REACT_APP_API_URL; // Coloque a URL da sua API aqui
const token = localStorage.getItem('token');

// Função de login
export async function login(email, password) {
    const response = await fetch(`${API_URL}/auth/login`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({email, password})
    });

    if (!response.ok) {
        const errorDetails = await response.json().catch(() => ({}));
        console.error('Erro no login:', errorDetails);
        throw new Error(`Falha no login: ${errorDetails.message || 'Erro desconhecido'}`);
    }

    return await response.json();
}

// Função para criar evento
export async function createEvento(eventoFormatado) {
    try {
        const resposta = await fetch(`${API_URL}/evento`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(eventoFormatado)
        });

        if (!resposta.ok) throw new Error('Erro ao criar o evento');

        const dados = await resposta.json();
        console.log('Evento criado:', dados);
        return dados; // Retorna os dados do evento criado
    } catch (erro) {
        console.error('Erro ao enviar o evento:', erro);
        throw erro; // Re-throw the error for further handling if needed
    }
}

// Função de registro
export async function register(userData) {
    const response = await fetch(`${API_URL}/usuarios`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(userData),
        mode: "cors" // Adiciona o modo CORS explicitamente
    });

    if (!response.ok) {
        const errorDetails = await response.json().catch(() => ({}));
        console.error('Erro no registro:', errorDetails);
        throw new Error(`Falha no registro: ${errorDetails.message || 'Erro desconhecido'}`);
    }

    return await response.json();
}

// Função para lidar com requisições GET com token de autenticação
export async function fetchData(endpoint) {
    const response = await fetch(`${API_URL}/${endpoint}`, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
    });
    if (!response.ok) throw new Error("Erro ao buscar dados");
    return await response.json();
}

// Função para criar dados (POST) com token de autenticação
export async function createData(endpoint, data) {
    const response = await fetch(`${API_URL}/${endpoint}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error("Erro ao criar dados");
    return await response.json();
}

// Função para atualizar dados (PUT) com token de autenticação
export async function updateData(endpoint, data) {
    const response = await fetch(`${API_URL}/${endpoint}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error("Erro ao atualizar dados");
    return await response.json();
}

// Função para excluir dados (DELETE) com token de autenticação
export async function deleteData(endpoint) {
    const response = await fetch(`${API_URL}/${endpoint}`, {
        method: "DELETE",
        headers: {
            'Authorization': `Bearer ${token}`
        },
    });
    if (!response.ok) throw new Error("Erro ao excluir dados");
    return await response.json();
}

export async function fetchPublicData(endpoint) {
    const response = await fetch(`${API_URL}/${endpoint}`, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
    });
    if (!response.ok) throw new Error("Erro ao buscar dados");
    return await response.json();
}
