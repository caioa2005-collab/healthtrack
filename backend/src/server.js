const express = require("express");
const cors = require("cors");
const co2Data = require("./data");

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    mensagem: "API do Dashboard de Sustentabilidade",
    rotas: ["/api/co2", "/api/co2/paises"]
  });
});

app.get("/api/co2", (req, res) => {
  const { pais, ano } = req.query;
  let resultado = co2Data;

  if (pais) {
    resultado = resultado.filter(
      item => item.pais.toLowerCase() === pais.toLowerCase()
    );
  }

  if (ano) {
    resultado = resultado.filter(
      item => item.ano === Number(ano)
    );
  }

  res.json(resultado);
});

app.get("/api/co2/paises", (req, res) => {
  const paises = [...new Set(co2Data.map(item => item.pais))];
  res.json(paises);
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
