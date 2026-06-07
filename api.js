const API_URL = "http://localhost:3001/api";

export async function login(email, senha) {
  const resposta = await fetch(`${API_URL}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, senha })
  });

  if (!resposta.ok) throw new Error("E-mail ou senha inválidos.");
  return resposta.json();
}

export async function buscarDadosCo2(pais = "", ano = "") {
  const params = new URLSearchParams();
  if (pais) params.append("pais", pais);
  if (ano) params.append("ano", ano);

  const resposta = await fetch(`${API_URL}/co2${params.toString() ? `?${params.toString()}` : ""}`);
  if (!resposta.ok) throw new Error("Erro ao buscar dados.");
  return resposta.json();
}

export async function buscarPaises() {
  const resposta = await fetch(`${API_URL}/co2/paises`);
  if (!resposta.ok) throw new Error("Erro ao buscar países.");
  return resposta.json();
}

export async function buscarAnos() {
  const resposta = await fetch(`${API_URL}/co2/anos`);
  if (!resposta.ok) throw new Error("Erro ao buscar anos.");
  return resposta.json();
}
