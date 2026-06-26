const express = require("express");
const cors = require("cors");
const co2Data = require("./data");

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

const usuarioTeste = {
  email: "aluno@teste.com",
  senha: "123456",
  nome: "Caio Augusto C. G."
};

app.get("/", (req, res) => {
  res.json({
    mensagem: "API do Dashboard de Sustentabilidade - Entrega Final",
    status: "online"
  });
});

app.post("/api/login", (req, res) => {
  const { email, senha } = req.body;

  if (email === usuarioTeste.email && senha === usuarioTeste.senha) {
    return res.json({
      autenticado: true,
      usuario: { nome: usuarioTeste.nome, email: usuarioTeste.email }
    });
  }

  return res.status(401).json({
    autenticado: false,
    mensagem: "E-mail ou senha inválidos."
  });
});

app.get("/api/co2", (req, res) => {
  const { pais, ano } = req.query;
  let resultado = co2Data;

  if (pais) {
    resultado = resultado.filter(item => item.pais.toLowerCase() === pais.toLowerCase());
  }

  if (ano) {
    resultado = resultado.filter(item => item.ano === Number(ano));
  }

  res.json(resultado);
});

app.get("/api/co2/paises", (req, res) => {
  res.json([...new Set(co2Data.map(item => item.pais))]);
});

app.get("/api/co2/anos", (req, res) => {
  res.json([...new Set(co2Data.map(item => item.ano))].sort());
});

app.get("/api/status", (req, res) => {
  res.json({ backend: "online", versao: "TP6", totalRegistros: co2Data.length });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
