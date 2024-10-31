const API_URL = "http://localhost:8080"; // Coloque a URL da sua API aqui

// Função para lidar com requisições GET
export async function fetchData(endpoint) {
  try {
    const response = await fetch(`${API_URL}/${endpoint}`);
    if (!response.ok) throw new Error("Erro ao buscar dados");
    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}

// Função para POST (criação)
export async function createData(endpoint, data) {
  try {
    const response = await fetch(`${API_URL}/${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error("Erro ao criar dados");
    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}

// Função para PUT (atualização)
export async function updateData(endpoint, data) {
  try {
    const response = await fetch(`${API_URL}/${endpoint}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error("Erro ao atualizar dados");
    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}

// Função para DELETE (exclusão)
export async function deleteData(endpoint) {
  try {
    const response = await fetch(`${API_URL}/${endpoint}`, {
      method: "DELETE",
    });
    if (!response.ok) throw new Error("Erro ao excluir dados");
    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}