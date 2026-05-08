# Projeto ODS: Dashboard de Sustentabilidade

**Aluno:** Caio Augusto C. G.  
**ODS escolhido:** ODS 13 – Ação contra a mudança global do clima

## Descrição

Este projeto tem como objetivo desenvolver um dashboard web interativo para visualização de dados de emissão de CO₂ por país, promovendo conscientização ambiental e facilitando o acesso a informações sobre mudanças climáticas.

## Entrega TP3

Nesta sprint foi desenvolvido um primeiro entregável funcional do sistema, contendo:

- Backend em Node.js com Express;
- API REST com dados simulados de emissão de CO₂;
- Frontend em React;
- Visualização de dados em gráfico;
- Filtro por país;
- Exportação de dados em CSV;
- Documentação da sprint TP3;
- Planejamento das atividades do TP4.

## Estrutura do projeto

```text
/
├── backend
├── frontend
├── docs
├── Videos
└── README.md
```

## Como executar o backend

```bash
cd backend
npm install
npm start
```

O backend será executado em:

```text
http://localhost:3001
```

Rota principal:

```text
GET http://localhost:3001/api/co2
```

## Como executar o frontend

Em outro terminal:

```bash
cd frontend
npm install
npm run dev
```

O frontend será executado em:

```text
http://localhost:5173
```

## Funcionalidades implementadas no TP3

- Consulta de dados de emissão de CO₂;
- Exibição dos dados em tabela;
- Exibição dos dados em gráfico;
- Filtro por país;
- Exportação CSV;
- Interface web inicial do dashboard.

## Planejamento para o TP4

- Implementar autenticação de usuários;
- Melhorar a responsividade da interface;
- Integrar uma API externa real de dados climáticos;
- Adicionar novos gráficos;
- Melhorar validações e tratamento de erros.
