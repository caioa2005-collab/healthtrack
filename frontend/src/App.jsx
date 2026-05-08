import { useEffect, useState } from "react";
import Co2Chart from "./components/Co2Chart";
import { buscarDadosCo2, buscarPaises } from "./services/api";

function App() {
  const [dados, setDados] = useState([]);
  const [paises, setPaises] = useState([]);
  const [paisSelecionado, setPaisSelecionado] = useState("");
  const [erro, setErro] = useState("");

  async function carregarDados(pais = "") {
    try {
      setErro("");
      const resultado = await buscarDadosCo2(pais);
      setDados(resultado);
    } catch (error) {
      setErro("Não foi possível carregar os dados. Verifique se o backend está rodando.");
    }
  }

  async function carregarPaises() {
    try {
      const resultado = await buscarPaises();
      setPaises(resultado);
    } catch (error) {
      setErro("Não foi possível carregar a lista de países.");
    }
  }

  useEffect(() => {
    carregarPaises();
    carregarDados();
  }, []);

  function aplicarFiltro(event) {
    const pais = event.target.value;
    setPaisSelecionado(pais);
    carregarDados(pais);
  }

  function exportarCSV() {
    if (dados.length === 0) return;

    const cabecalho = "pais,ano,emissao\n";
    const linhas = dados
      .map(item => `${item.pais},${item.ano},${item.emissao}`)
      .join("\n");

    const arquivo = new Blob([cabecalho + linhas], {
      type: "text/csv;charset=utf-8;"
    });

    const url = URL.createObjectURL(arquivo);
    const link = document.createElement("a");
    link.href = url;
    link.download = "dados_emissao_co2.csv";
    link.click();

    URL.revokeObjectURL(url);
  }

  return (
    <main className="container">
      <header className="header">
        <span className="badge">ODS 13</span>
        <h1>Dashboard de Sustentabilidade</h1>
        <p>
          Visualização inicial de dados de emissão de CO₂ por país,
          desenvolvida como primeiro entregável funcional do TP3.
        </p>
      </header>

      <section className="controls">
        <label htmlFor="pais">Filtrar por país:</label>
        <select id="pais" value={paisSelecionado} onChange={aplicarFiltro}>
          <option value="">Todos os países</option>
          {paises.map(pais => (
            <option key={pais} value={pais}>
              {pais}
            </option>
          ))}
        </select>

        <button onClick={exportarCSV}>Exportar CSV</button>
      </section>

      {erro && <p className="error">{erro}</p>}

      <Co2Chart dados={dados} />

      <section className="table-card">
        <h2>Dados exibidos</h2>

        <table>
          <thead>
            <tr>
              <th>País</th>
              <th>Ano</th>
              <th>Emissão de CO₂</th>
            </tr>
          </thead>
          <tbody>
            {dados.map((item, index) => (
              <tr key={`${item.pais}-${item.ano}-${index}`}>
                <td>{item.pais}</td>
                <td>{item.ano}</td>
                <td>{item.emissao}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </main>
  );
}

export default App;
