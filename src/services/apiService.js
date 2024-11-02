const API_URL = "http://localhost:8080"; // Coloque a URL da sua API aqui

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

// Função de registro
// src/services/apiService.js
export async function register(userData) {
    const response = await fetch(`${API_URL}/usuarios`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
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
export async function fetchData(endpoint, token) {
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
export async function createData(endpoint, data, token) {
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
export async function updateData(endpoint, data, token) {
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
export async function deleteData(endpoint, token) {
    const response = await fetch(`${API_URL}/${endpoint}`, {
        method: "DELETE",
        headers: {
            'Authorization': `Bearer ${token}`
        },
    });
    if (!response.ok) throw new Error("Erro ao excluir dados");
    return await response.json();
}
