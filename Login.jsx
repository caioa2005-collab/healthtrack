import { useState } from "react";
import { login } from "../services/api";

function Login({ onLogin }) {
  const [email, setEmail] = useState("aluno@teste.com");
  const [senha, setSenha] = useState("123456");
  const [erro, setErro] = useState("");

  async function entrar(event) {
    event.preventDefault();
    try {
      setErro("");
      const resposta = await login(email, senha);
      onLogin(resposta.usuario);
    } catch {
      setErro("E-mail ou senha inválidos.");
    }
  }

  return (
    <main className="login-page">
      <form className="login-card" onSubmit={entrar}>
        <span className="badge">ODS 13</span>
        <h1>Dashboard de Sustentabilidade</h1>
        <p>Entre para acessar o painel de emissão de CO₂.</p>

        <label htmlFor="email">E-mail</label>
        <input id="email" type="email" value={email} onChange={event => setEmail(event.target.value)} />

        <label htmlFor="senha">Senha</label>
        <input id="senha" type="password" value={senha} onChange={event => setSenha(event.target.value)} />

        {erro && <p className="error">{erro}</p>}

        <button type="submit">Entrar</button>
        <small>Usuário de teste: aluno@teste.com / 123456</small>
      </form>
    </main>
  );
}

export default Login;
