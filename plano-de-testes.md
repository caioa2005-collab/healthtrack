# Plano de Testes da Aplicação

**Projeto:** Dashboard de Sustentabilidade  
**Aluno:** Caio Augusto C. G.

## UC01 - Realizar login

| TC | Descrição | Entrada | Resultado esperado |
|---|---|---|---|
| TC01 | Login com dados válidos | aluno@teste.com / 123456 | Sistema permite acesso ao dashboard |
| TC02 | Login com senha inválida | aluno@teste.com / senhaerrada | Sistema exibe mensagem de erro |
| TC03 | Login com e-mail inválido | erro@teste.com / 123456 | Sistema exibe mensagem de erro |

## UC02 - Visualizar gráficos

| TC | Descrição | Entrada | Resultado esperado |
|---|---|---|---|
| TC04 | Carregar gráfico ao entrar | Login válido | Gráfico exibido com dados |
| TC05 | Visualizar todos os países | Sem filtro | Gráfico exibe registros gerais |
| TC06 | Atualizar gráfico | Aplicar filtro | Gráfico é atualizado |

## UC03 - Filtrar dados

| TC | Descrição | Entrada | Resultado esperado |
|---|---|---|---|
| TC07 | Filtrar por país | Brasil | Exibe apenas Brasil |
| TC08 | Filtrar por ano | 2022 | Exibe apenas 2022 |
| TC09 | Filtrar por país e ano | China + 2023 | Exibe apenas registro correspondente |

## UC04 - Exportar CSV

| TC | Descrição | Entrada | Resultado esperado |
|---|---|---|---|
| TC10 | Exportar dados gerais | Sem filtro | CSV é baixado |
| TC11 | Exportar dados filtrados por país | Brasil | CSV contém apenas Brasil |
| TC12 | Exportar dados filtrados por ano | 2023 | CSV contém apenas 2023 |

## UC05 - Sair do sistema

| TC | Descrição | Entrada | Resultado esperado |
|---|---|---|---|
| TC13 | Clicar em sair | Botão Sair | Retorna ao login |
| TC14 | Sair após filtros | Filtro aplicado + sair | Retorna ao login |
| TC15 | Entrar novamente após sair | Login válido | Acessa dashboard novamente |
