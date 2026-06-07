# Resultado da Execução dos Testes

**Projeto:** Dashboard de Sustentabilidade  
**Aluno:** Caio Augusto C. G.  
**Sprint:** TP5

## Ambiente de teste

- Sistema operacional: Windows
- Navegador: Google Chrome
- Backend: Node.js + Express
- Frontend: React + Vite
- URL frontend: `http://localhost:5173`
- URL backend: `http://localhost:3001`

## Resultados

| TC | Caso de teste | Resultado | Observação |
|---|---|---|---|
| TC01 | Login com dados válidos | Aprovado | Dashboard foi exibido corretamente |
| TC02 | Login com senha inválida | Aprovado | Mensagem de erro exibida |
| TC03 | Login com e-mail inválido | Aprovado | Mensagem de erro exibida |
| TC04 | Carregar gráfico ao entrar | Aprovado | Gráfico carregado após login |
| TC05 | Visualizar todos os países | Aprovado | Registros gerais exibidos |
| TC06 | Atualização do gráfico | Aprovado | Gráfico atualizou após filtro |
| TC07 | Filtrar por país | Aprovado | Dados filtrados corretamente |
| TC08 | Filtrar por ano | Aprovado | Dados filtrados corretamente |
| TC09 | Filtrar por país e ano | Aprovado | Apenas registro correspondente exibido |
| TC10 | Exportar dados gerais | Aprovado | Arquivo CSV gerado |
| TC11 | Exportar por país | Aprovado | CSV gerado com dados filtrados |
| TC12 | Exportar por ano | Aprovado | CSV gerado com dados filtrados |
| TC13 | Sair do sistema | Aprovado | Retorno à tela de login |
| TC14 | Sair após filtros | Aprovado | Retorno à tela de login |
| TC15 | Entrar novamente após sair | Aprovado | Dashboard acessado novamente |

## Conclusão

Os testes manuais exercitados no TP5 foram aprovados. As principais funcionalidades do sistema funcionaram conforme o esperado.
