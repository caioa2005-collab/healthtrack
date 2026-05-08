# TP3 - Sprint de Desenvolvimento

**Aluno:** Caio Augusto C. G.  
**Projeto:** Dashboard de Sustentabilidade  
**ODS escolhido:** ODS 13 – Ação contra a mudança global do clima

## 1. Objetivo da Sprint

O objetivo do TP3 foi desenvolver o primeiro entregável funcional do projeto, conforme planejado no TP2. Nesta etapa, foi criada uma versão inicial do Dashboard de Sustentabilidade, contendo frontend, backend, comunicação entre as camadas e visualização de dados de emissão de CO₂.

## 2. Entregável desenvolvido

O entregável desenvolvido é um dashboard web funcional que permite:

- Consultar dados de emissão de CO₂;
- Visualizar os dados em gráfico;
- Filtrar os dados por país;
- Visualizar os dados em tabela;
- Exportar os dados visualizados em CSV.

## 3. Tecnologias utilizadas

| Camada | Tecnologia |
|---|---|
| Frontend | React + Vite |
| Backend | Node.js + Express |
| Comunicação | HTTP/JSON |
| Gráficos | Recharts |
| Dados | Dados simulados no backend |
| Versionamento | Git + GitHub |

## 4. Funcionalidades implementadas

| Código | Funcionalidade | Status |
|---|---|---|
| RF02 | Exibir gráficos de emissão de CO₂ | Implementado |
| RF03 | Filtrar dados por país | Implementado |
| RF04 | Filtrar dados por ano | Parcialmente implementado nos dados |
| RF05 | Exportar dados em CSV | Implementado |
| RF06 | Consultar dados ambientais | Implementado com dados simulados |
| RF07 | Interface web responsiva | Implementado parcialmente |

## 5. Backend

O backend foi desenvolvido utilizando Node.js e Express. Ele fornece uma API REST com as seguintes rotas:

| Rota | Método | Descrição |
|---|---|---|
| `/` | GET | Retorna informações gerais da API |
| `/api/co2` | GET | Retorna dados de emissão de CO₂ |
| `/api/co2?pais=Brasil` | GET | Retorna dados filtrados por país |
| `/api/co2/paises` | GET | Retorna a lista de países disponíveis |

## 6. Frontend

O frontend foi desenvolvido em React e possui:

- Cabeçalho com identificação do projeto;
- Filtro por país;
- Botão para exportar CSV;
- Gráfico de emissão de CO₂;
- Tabela com os dados exibidos.

## 7. Estado atual da solução

A solução já possui um primeiro protótipo funcional. O usuário consegue acessar a interface, selecionar um país, visualizar os dados em gráfico e exportar os dados para CSV.

Nesta etapa, os dados utilizados são simulados, mas a estrutura já permite futura integração com uma API externa real de dados climáticos.

## 8. Limitações atuais

- O login ainda não foi implementado.
- Os dados ainda são simulados.
- A integração com uma API externa real será feita em uma etapa futura.
- O filtro por ano poderá ser melhorado no TP4.
- A interface ainda pode receber melhorias de usabilidade.

## 9. Conclusão

O TP3 resultou no primeiro entregável funcional do projeto. A aplicação já possui comunicação entre frontend e backend, visualização gráfica e exportação CSV. A estrutura desenvolvida permite a continuidade do projeto no TP4, com melhorias como autenticação, integração com dados reais e aprimoramento da interface.
