# Prompt para Open Designer — Protótipo FilaClara no iPhone 15

Crie um protótipo navegável, clicável e funcional de alta fidelidade para o aplicativo **FilaClara**, dentro de um **frame realista de iPhone 15**. O objetivo é que qualquer pessoa, inclusive colegas e professor da disciplina **GCETENS843 — Projeto Algoritmo I**, entenda completamente como funcionaria um sistema de filas inteligentes em clínicas, hospitais e postos de saúde.

## Contexto do projeto

O projeto se chama **FilaClara — Sistema de Filas Inteligentes e Acessíveis**. Ele foi pensado para resolver um problema comum em serviços de saúde: pacientes ficam presos em filas presenciais longas, sem saber sua posição exata, sem previsão de atendimento e com medo de perder a chamada. Isso prejudica idosos, trabalhadores, mães com crianças, pessoas com deficiência auditiva, baixa visão, TEA e qualquer pessoa que tenha outras tarefas para fazer enquanto aguarda.

O aplicativo deve permitir que o paciente retire uma senha virtual, acompanhe sua posição na fila em tempo real, receba aviso quando estiver perto de ser chamado e veja informações claras sobre o atendimento. O sistema também deve ter recursos de acessibilidade como alto contraste, texto ampliado, sinalização visual, linguagem simples e organização previsível.

## Direção visual

- Criar tudo dentro de um **mockup/frame de iPhone 15**.
- Usar estética moderna, limpa, institucional e acessível.
- Visual com confiança de serviço de saúde: branco, azul, verde, cinza claro e destaques em amarelo/laranja apenas para alertas.
- Interface grande, legível e com botões fáceis de tocar.
- Aparência de aplicativo real, não apenas slides estáticos.
- Evitar poluição visual e excesso de textos.
- Usar ícones claros: fila, hospital, relógio, sino, acessibilidade, mapa, documento, usuário.
- Mostrar status bar do iPhone, dynamic island e navegação inferior quando fizer sentido.

## Regras de prototipagem

O protótipo precisa ser **totalmente clicável**. Todos os botões principais devem levar para alguma tela ou abrir algum estado visual. Não deixar botões mortos.

Adicionar interações de clique/tap para:

- entrar no app;
- escolher clínica;
- escolher tipo de atendimento;
- retirar senha virtual;
- acompanhar fila;
- ativar modo acessível;
- visualizar detalhes da senha;
- receber notificação de chamada próxima;
- confirmar chegada na clínica;
- ver painel público da clínica;
- voltar para tela anterior;
- navegar pelo menu inferior.

Usar transições suaves entre telas, como slide lateral, fade curto ou mudança de estado. O fluxo deve parecer um aplicativo móvel funcional.

## Telas obrigatórias

### 1. Splash / abertura

Tela inicial com logo textual **FilaClara**, subtítulo “filas inteligentes e acessíveis” e botão **Começar**.

### 2. Onboarding curto

Criar 2 ou 3 telas rápidas explicando:

1. “retire sua senha pelo celular”;
2. “acompanhe sua posição em tempo real”;
3. “receba aviso quando estiver perto da sua vez”.

Botões: **Próximo**, **Pular** e **Começar agora**.

### 3. Tela inicial do paciente

Mostrar saudação simples: “Olá, Deivison”. Mostrar cards grandes:

- **Retirar senha**;
- **Minha fila**;
- **Clínicas próximas**;
- **Acessibilidade**.

Também mostrar um resumo se houver senha ativa: “você está na posição 8 — previsão 18 min”.

### 4. Escolha da clínica

Listar clínicas fictícias próximas, por exemplo:

- Clínica Vida Mais — fila moderada — 18 min;
- Laboratório Saúde Fácil — fila baixa — 9 min;
- Hospital Municipal — fila alta — 42 min.

Cada card deve mostrar distância, tempo estimado, quantidade de pessoas cadastradas e botão **Selecionar**.

### 5. Escolha do tipo de atendimento

Após selecionar uma clínica, mostrar tipos de atendimento:

- Consulta comum;
- Exames;
- Prioritário;
- Retorno;
- Triagem.

Incluir explicação simples de que a ordem considera tipo de atendimento e prioridades legais.

### 6. Confirmação da senha virtual

Tela mostrando:

- senha: **A-028**;
- clínica: Clínica Vida Mais;
- tipo: consulta comum;
- posição inicial: 12;
- previsão: 25 min;
- botão **Acompanhar fila**.

Adicionar mensagem: “você não precisa ficar preso na recepção. avisaremos quando estiver perto.”

### 7. Acompanhamento em tempo real

Esta é a tela mais importante. Mostrar:

- senha atual chamada no painel: **A-020**;
- sua senha: **A-028**;
- posição na fila: **8**;
- previsão: **18 min**;
- barra de progresso visual;
- número de pacientes cadastrados hoje: **120**;
- fila presencial reduzida: **-64%**;
- botão **ver painel da clínica**;
- botão **confirmar que estou por perto**;
- botão **ativar alerta sonoro/visual**.

Deixar claro que o local continua com fluxo alto de pacientes, mas sem necessidade de todos ficarem parados em pé na fila.

### 8. Notificação de chamada próxima

Criar estado/tela simulando notificação:

“sua vez está chegando — faltam 3 pessoas”.

Botões:

- **Estou chegando**;
- **Abrir rota**;
- **Ver painel**.

### 9. Painel público da clínica

Tela simulando o painel de chamada da recepção, mas dentro do app. Mostrar:

- senha em atendimento: A-025;
- próximas senhas: A-026, P-011, A-027, A-028;
- guichê/sala: consultório 2;
- legenda: comum, prioritário, exame.

Essa tela deve demonstrar transparência e reduzir suspeita de favorecimento.

### 10. Acessibilidade

Tela de configurações acessíveis com switches clicáveis:

- texto ampliado;
- alto contraste;
- modo simples;
- alerta visual forte;
- vibração;
- leitura por voz;
- reduzir estímulos visuais para TEA.

Ao ativar alto contraste ou texto ampliado, mostrar mudança visual perceptível no protótipo.

### 11. Comprovante / histórico

Tela com histórico de senhas e comprovante do atendimento:

- data;
- clínica;
- senha;
- horário de cadastro;
- horário estimado;
- status: atendido / aguardando / cancelado.

### 12. Mini tela administrativa opcional

Criar uma área simples demonstrativa para a clínica, acessada por um botão discreto “painel da clínica”. Mostrar:

- total cadastrado hoje: 120;
- em espera: 34;
- atendidos: 86;
- tempo médio: 18 min;
- chamar próxima senha;
- pausar chamada;
- priorizar atendimento legal.

Essa tela serve para mostrar ao professor que o sistema também organiza o lado da clínica.

## Fluxo principal obrigatório

O usuário precisa conseguir seguir este caminho clicando:

1. abrir app;
2. passar onboarding;
3. tocar em **Retirar senha**;
4. escolher uma clínica;
5. escolher tipo de atendimento;
6. confirmar senha virtual;
7. acompanhar fila em tempo real;
8. receber aviso de chamada próxima;
9. abrir painel da clínica;
10. ativar acessibilidade;
11. voltar para a tela inicial.

## Conteúdo textual dentro do app

Usar textos curtos, humanos e objetivos:

- “acompanhe sua vez sem ficar preso na fila”;
- “sua posição está atualizando em tempo real”;
- “avisaremos quando faltar pouco”;
- “atendimento cheio não precisa significar fila desorganizada”;
- “mais transparência para pacientes e clínicas”;
- “acessibilidade desde o início”.

## Dados fictícios para simulação

Usar estes dados para deixar o protótipo concreto:

- paciente: Deivison;
- clínica principal: Clínica Vida Mais;
- senha do paciente: A-028;
- senha atual: A-020 no início, depois A-025 na notificação;
- posição inicial: 12;
- posição atual: 8;
- previsão inicial: 25 min;
- previsão atual: 18 min;
- pacientes cadastrados hoje: 120;
- atendidos: 86;
- aguardando: 34;
- fila presencial reduzida: 64%.

## Acessibilidade e inclusão

O app precisa mostrar que acessibilidade não é detalhe. Deve aparecer no fluxo principal e não apenas em uma tela escondida. A interface deve ser compreensível para pessoas idosas, pessoas com deficiência auditiva, baixa visão e TEA.

Incluir:

- botões grandes;
- contraste adequado;
- feedback visual além de som;
- textos simples;
- indicação clara de posição e tempo;
- opção de reduzir estímulos;
- ícones acompanhados de texto.

## Resultado esperado

Entregar um protótipo de aplicativo no frame do iPhone 15, com múltiplas telas conectadas e fluxo navegável. A pessoa que abrir o protótipo deve entender em poucos minutos:

1. qual problema o FilaClara resolve;
2. como o paciente retira senha virtual;
3. como acompanha a fila;
4. como recebe aviso;
5. como a clínica mantém controle;
6. como a acessibilidade entra no sistema;
7. por que a solução reduz filas físicas sem diminuir o número de atendimentos.

Criar o protótipo com aparência profissional, limpa, funcional e pronta para apresentação acadêmica.
