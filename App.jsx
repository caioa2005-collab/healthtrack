import { useEffect, useState } from "react";
import Login from "./components/Login";
import Co2Chart from "./components/Co2Chart";
import { buscarDadosCo2, buscarPaises, buscarAnos } from "./services/api";

function App() {
  const [usuario, setUsuario] = useState(null);
  const [dados, setDados] = useState([]);
  const [paises, setPaises] = useState([]);
  const [anos, setAnos] = useState([]);
  const [paisSelecionado, setPaisSelecionado] = useState("");
  const [anoSelecionado, setAnoSelecionado] = useState("");
  const [erro, setErro] = useState("");

  async function carregarDados(pais = "", ano = "") {
    try {
      setErro("");
      const resultado = await buscarDadosCo2(pais, ano);
      setDados(resultado);
    } catch {
      setErro("Não foi possível carregar os dados.");
    }
  }

  async function carregarFiltros() {
    try {
      setPaises(await buscarPaises());
      setAnos(await buscarAnos());
    } catch {
      setErro("Erro ao carregar filtros.");
    }
  }

  useEffect(() => {
    if (usuario) {
      carregarFiltros();
      carregarDados();
    }
  }, [usuario]);

  function alterarPais(event) {
    const pais = event.target.value;
    setPaisSelecionado(pais);
    carregarDados(pais, anoSelecionado);
  }

  function alterarAno(event) {
    const ano = event.target.value;
    setAnoSelecionado(ano);
    carregarDados(paisSelecionado, ano);
  }

  function limparFiltros() {
    setPaisSelecionado("");
    setAnoSelecionado("");
    carregarDados("", "");
  }

  function exportarCSV() {
    if (dados.length === 0) return;

    const cabecalho = "pais,ano,emissao\n";
    const linhas = dados.map(item => `${item.pais},${item.ano},${item.emissao}`).join("\n");
    const arquivo = new Blob([cabecalho + linhas], { type: "text/csv;charset=utf-8;" });

    const url = URL.createObjectURL(arquivo);
    const link = document.createElement("a");
    link.href = url;
    link.download = "dados_emissao_co2.csv";
    link.click();
    URL.revokeObjectURL(url);
  }

  if (!usuario) return <Login onLogin={setUsuario} />;

  return (
    <main className="container">
      <header className="header">
        <div className="top-line">
          <span className="badge">ODS 13</span>
          <button className="secondary" onClick={() => setUsuario(null)}>Sair</button>
        </div>
        <h1>Dashboard de Sustentabilidade</h1>
        <p>TP5 - Evolução do sistema com execução de testes manuais.</p>
        <small>Usuário logado: {usuario.nome}</small>
      </header>

      <section className="controls">
        <label htmlFor="pais">País:</label>
        <select id="pais" value={paisSelecionado} onChange={alterarPais}>
          <option value="">Todos</option>
          {paises.map(pais => <option key={pais} value={pais}>{pais}</option>)}
        </select>

        <label htmlFor="ano">Ano:</label>
        <select id="ano" value={anoSelecionado} onChange={alterarAno}>
          <option value="">Todos</option>
          {anos.map(ano => <option key={ano} value={ano}>{ano}</option>)}
        </select>

        <button onClick={limparFiltros}>Limpar filtros</button>
        <button onClick={exportarCSV}>Exportar CSV</button>
      </section>

      {erro && <p className="error">{erro}</p>}

      <section className="summary">
        <div><strong>Total de registros:</strong> {dados.length}</div>
        <div><strong>País:</strong> {paisSelecionado || "Todos"}</div>
        <div><strong>Ano:</strong> {anoSelecionado || "Todos"}</div>
      </section>

      <Co2Chart dados={dados} />

      <section className="table-card">
        <h2>Dados exibidos</h2>
        <table>
          <thead>
            <tr><th>País</th><th>Ano</th><th>Emissão de CO₂</th></tr>
          </thead>
          <tbody>
            {dados.map((item, index) => (
              <tr key={`${item.pais}-${item.ano}-${index}`}>
                <td>{item.pais}</td><td>{item.ano}</td><td>{item.emissao}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </main>
  );
}

export default App;
