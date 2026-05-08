const API_URL = "http://localhost:3001/api";

export async function buscarDadosCo2(pais = "") {
  const url = pais ? `${API_URL}/co2?pais=${encodeURIComponent(pais)}` : `${API_URL}/co2`;
  const resposta = await fetch(url);

  if (!resposta.ok) {
    throw new Error("Erro ao buscar dados de CO₂");
  }

  return resposta.json();
}

export async function buscarPaises() {
  const resposta = await fetch(`${API_URL}/co2/paises`);

  if (!resposta.ok) {
    throw new Error("Erro ao buscar países");
  }

  return resposta.json();
}
