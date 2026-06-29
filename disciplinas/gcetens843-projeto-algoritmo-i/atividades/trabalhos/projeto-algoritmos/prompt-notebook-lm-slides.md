# Prompt para Notebook LM — Geração dos Slides do MinhaFila

> Cole este documento no Notebook LM como fonte de contexto.
> Use o resumo abaixo para gerar uma apresentação de slides seguindo a estrutura indicada.

---

## 1. DADOS GERAIS DO PROJETO

| Campo | Informação |
|---|---|
| **Nome do projeto** | MinhaFila — Gestão Inteligente de Espera |
| **Tema** | Gerenciamento Inteligente de Filas para Múltiplos Setores |
| **Disciplina** | GCETENS843 — Projeto Algoritmo I |
| **Instituição** | UFRB — Universidade Federal do Recôncavo da Bahia / CETENS |
| **Curso** | Bacharelado em Sistemas de Informação (EAD) |
| **Semestre** | 2026.1 |
| **Professor** | Prof. Alex Ferreira |
| **Apresentação** | 29/06/2026 às 20h — AO VIVO |
| **Duração prevista** | 10 a 15 minutos |
| **Código em C** | ❌ Cancelado (decisão do grupo 12/06/2026). Não entregue. |

---

## 2. INTEGRANTES E ATRIBUIÇÕES (8 MEMBROS)

| Nº | Nome | Atribuição no Projeto |
|:--:|:-----|:---------------------|
| 1 | **Deivison de Lima Santana** | Documentação geral, repositório, protótipo de telas (HTML/iPhone 15), hub do projeto, proposta escrita |
| 2 | **Raimon Rios da Silva** | Pesquisa de campo, proposta (documento base "Projeto Algoritmo 1 V2"), problema real |
| 3 | **Ausiane de Oliveira Costa** | Casos existentes (soluções de mercado). Experiência no NAI (Núcleo de Acessibilidade e Inclusão) |
| 4 | **Núbia Rosália de Souza Ramos** | Casos existentes (inclusão, diagnósticos tardios) |
| 5 | **Artur Campos** | Fluxograma do sistema (lógica de algoritmo) |
| 6 | **Marcos Vinícius dos Santos Sena** | Fluxograma do sistema |
| 7 | **Uélinton Cardoso Santana** | Slides da apresentação |
| 8 | **Wallace Ribeiro Lima** | Slides da apresentação |

---

## 3. O PROBLEMA REAL

### 3.1 Contexto Geral

Filas presenciais são um problema universal. Afetam bancos, hospitais, faculdades, comércios e repartições públicas. Em todos os setores, o funcionamento é similar e problemático:

1. Usuário chega ao local, recebe uma senha física (ordem de chegada).
2. Permanece no local sem saber quantas pessoas estão à frente.
3. Depende de chamadas por alto-falante ou painéis de difícil compreensão.
4. Não tem visibilidade do tempo estimado de espera.
5. Não pode se ausentar do local — corre o risco de perder a vez.
6. Pessoas com deficiência auditiva perdem chamadas sonoras; pessoas com baixa visão têm dificuldade para ler painéis; pessoas com TEA sofrem com excesso de estímulos.

### 3.2 Consequências

- Sensação de injustiça e opacidade no atendimento
- Ansiedade gerada pela imprevisibilidade da espera
- Aglomeração desnecessária nas áreas de espera
- Desistência e absenteísmo
- Experiência negativa independentemente da qualidade do serviço
- Exclusão de pessoas com deficiência

### 3.3 Dados de Mercado

- 90% dos consumidores enfrentam filas pelo menos algumas vezes por mês (Waitwhile, 2024)
- 64% enfrentam filas múltiplas vezes por semana (Waitwhile, 2024)
- 61% dos consumidores já abandonaram uma fila antes de serem atendidos (Waitwhile, 2024)
- 22% abandonam compras durante processos de finalização demorados
- Mercado global de QMS: US$ 38,97 bi (2025) → US$ 77,13 bi (2031), CAGR 12,05% (Mordor Intelligence, 2026)
- Sem informações, a duração percebida parece 36% maior que o tempo real (Queberry, 2026)
- Uma única loja pode perder US$ 2 milhões/ano com abandono por filas (Queberry, 2026)
- Segmento BFSI representa ~23,85% do mercado global de QMS (Mordor Intelligence, 2026)

### 3.4 Problemas nas Soluções Atuais

- Sistemas de senha física não fornecem informações em tempo real
- Painéis eletrônicos têm alcance limitado e não são acessíveis
- Aplicativos existentes são setoriais (só saúde ou só bancos)
- Nenhuma solução permite que o usuário aguarde fora do local com segurança

---

## 4. CASOS EXISTENTES (MERCADO)

Três concorrentes/similares identificados:

| Sistema | Função | Limitação |
|---------|--------|-----------|
| **NextQS** | Totens de autoatendimento + painéis de chamada | Sem previsão de tempo para o usuário |
| **Fila Online** | Alertas por notificação sobre status da fila | Sem painel gestor, sem multissetorial |
| **Vizitor** | Check-in de visitantes, senhas digitais, gestão de balcões | Focado em recepção corporativa, não cobre múltiplos setores |

**Lacuna principal:** Nenhuma solução informa ao usuário o **tempo aproximado de espera** em tempo real durante a permanência na fila. Essa é a oportunidade do MinhaFila.

---

## 5. PROPOSTA — MinhaFila

### 5.1 Conceito

Sistema de senha virtual com acompanhamento em tempo real, notificações e painéis de gestão, projetado para funcionar em **múltiplos setores**: bancos, unidades de saúde, instituições de ensino, comércio e repartições governamentais.

### 5.2 Jornada do Usuário

1. **Chegada** — Abre o app ou escaneia QR Code na recepção
2. **Cadastro rápido** — Nome, telefone, serviço desejado (opcional: necessidades de acessibilidade)
3. **Senha virtual** — Recebe senha e entra na fila automaticamente
4. **Acompanhamento** — Visualiza no celular:
   - Posição atualizada em tempo real
   - Tempo estimado de espera
   - Pessoas à frente por categoria
5. **Notificação** — Alerta push/vibração/som quando estiver próximo de ser chamado
6. **Atendimento** — Dirige-se ao guichê indicado na hora certa
7. **Histórico** — Consulta atendimentos anteriores

### 5.3 Jornada do Gestor (Painel Administrativo)

1. Visualiza a fila em tempo real com todas as senhas ativas
2. Gerencia múltiplos guichês e serviços
3. Chama o próximo usuário com um clique
4. Acessa histórico e relatórios analíticos
5. Configura horários de pico, capacidade e prioridades

### 5.4 Diferenciais

| Diferencial | Descrição |
|-------------|-----------|
| **Transparência** | Usuário vê posição exata e tempo estimado — elimina sensação de injustiça |
| **Mobilidade** | Usuário pode aguardar fora do local e ser notificado |
| **Multissetorial** | Único sistema para bancos, saúde, educação, comércio, governo |
| **Dados analíticos** | Gestores obtêm relatórios de fluxo, picos, tempo médio |
| **Acessibilidade** | Alto contraste, fonte ampliada, vibração, alertas visuais, modo TEA |
| **Baixa fricção** | Cadastro rápido sem burocracia; QR Code para entrada |

### 5.5 Funcionalidades por Módulo

**Módulo Usuário:**
- Cadastro rápido (nome, telefone, serviço, acessibilidade)
- Senha virtual automática
- Acompanhamento em tempo real (posição, tempo estimado)
- Notificação push (alerta quando faltar 2-3 pessoas)
- Histórico de atendimentos
- Perfil de acessibilidade (alto contraste, fonte ampliada, modo simples, TEA)

**Módulo Gestor:**
- Painel de fila (senhas ativas por serviço/guichê)
- Chamada do próximo com um clique
- Gestão de guichês (abrir/fechar, alocar)
- Relatórios (tempo médio, horários de pico, volume)
- Configurações (regras de prioridade, capacidade, categorias)

**Módulo Painel Público (TV):**
- Senha do momento + guichê
- Próximas senhas (lista de 5-10)
- Informações complementares

---

## 6. FLUXOGRAMA DO SISTEMA

Desenvolvido por **Artur Campos** e **Marcos Vinícius dos Santos Sena**.

### Etapas do Fluxo:

```
1. ENTRADA NO SISTEMA
   Usuário acessa app (web/mobile)
   ├─ Já tem cadastro → Login
   └─ Não tem → Cadastro rápido

2. SOLICITAÇÃO DE ATENDIMENTO
   ├─ Escolhe estabelecimento/unidade
   └─ Seleciona tipo de serviço (comum, prioritário, retorno, informação)

3. DECISÃO: É PRIORIDADE?
   ├─ Sim → Fila prioritária (idosos, gestantes, PcD, TEA, prioridades legais)
   └─ Não → Fila convencional
       Ambas seguem o mesmo fluxo a partir daqui

4. GERAÇÃO DE SENHA
   ├─ Senha única (ex: A-028, B-015)
   ├─ Registra horário de entrada
   ├─ Posiciona no final da fila correspondente
   └─ Calcula previsão inicial de atendimento

5. CHAMADA E NOTIFICAÇÃO
   ├─ Topo da fila → Chamado para atendimento
   ├─ 2º usuário → Recebe notificação antecipada
   └─ Sistema exibe tempo médio em tempo real

6. ATENDIMENTO E FINALIZAÇÃO
   ├─ Usuário atendido
   ├─ Sistema exclui da fila
   ├─ Fila atualizada automaticamente
   └─ Próximo no topo é chamado

7. RETORNO (FEEDBACK LOOP)
   ├─ Não compareceu → Retorna à solicitação de atendimento
   └─ Atendimento concluído → Oferece opção de retorno
```

### Funcionalidades do Sistema (extraídas do fluxograma):
- Entrada (cadastro/login)
- Classificação de fila (comum vs prioritária)
- Algoritmo de chamada (ordem + prioridade legal)
- Notificação antecipada ao 2º usuário
- Painel de acompanhamento para o estabelecimento
- Cálculo de tempo médio de espera
- Atualização automática da fila
- Feedback loop (não comparecimento + nova solicitação)

---

## 7. PROTÓTIPO DE TELAS

Desenvolvido por **Deivison de Lima Santana** (HTML/CSS/JS puro, frame iPhone 15).

### Telas do Usuário (index.html):

1. **Splash** — Boas-vindas + botão "Começar"
2. **Onboarding (3 telas)** — Explica o app: senha virtual, acompanhamento em tempo real, alertas
3. **Home** — Posição atual + cards: Retirar senha, Minha fila, Estabelecimentos, Acessibilidade
4. **Escolha do estabelecimento** — Lista com 3 opções + distância, fila, previsão
5. **Tipo de atendimento** — Comum, Rápido, Prioritário, Retorno, Triagem
6. **Ticket/Senha** — Senha gerada (A-028), posição inicial, previsão
7. **Acompanhamento** — Senha atual, posição, previsão, progresso da fila
8. **Alerta de proximidade** — "Faltam 3 pessoas"
9. **Painel público** — Chamada atual + próximas senhas
10. **Acessibilidade** — Switches: alto contraste, texto ampliado, modo simples, alerta visual, vibração, leitura por voz, reduzir estímulos TEA
11. **Histórico** — Senhas anteriores com status

### Telas do Gestor (admin.html):

1. **Dashboard** — Métricas (total/espera/atendidos/tempo médio), chamada atual, ações
2. **Fila completa** — Lista detalhada com código, tipo, guichê, tempo de espera
3. **Configurações** — Nome do estabelecimento, setor (personalizado, saúde, banco, educação, comércio, governo), guichês ativos, acessibilidade

---

## 8. ACESSIBILIDADE

Recurso estrutural do MinhaFila (não é mais o pilar central, mas está presente em todo o protótipo):

- **Alto contraste** — Inverte cores para maior legibilidade
- **Texto ampliado** — Aumenta tamanho da fonte
- **Modo simples** — Remove elementos decorativos e badges sutis
- **Alerta visual** — Notificações visuais para pessoas com deficiência auditiva
- **Vibração** — Feedback tátil para chamadas próximas
- **Leitura por voz** — Narração de informações principais
- **Modo TEA** — Redução de estímulos visuais

---

## 9. ARQUITETURA TECNOLÓGICA (PROPOSTA)

| Componente | Tecnologia |
|------------|-----------|
| Frontend (usuário) | Web responsivo PWA (instalável como app) |
| Frontend (gestor) | Dashboard web responsivo |
| Painel TV | Página otimizada para telas grandes |
| Backend | API REST |
| Notificações | Push notification via Service Worker |
| Identificação | QR Code estático por estabelecimento |
| Banco de Dados | Relacional (fila, usuários, estabelecimentos, atendimentos) |

---

## 10. REFERÊNCIAS BIBLIOGRÁFICAS (PRINCIPAIS)

- CLEMENTE et al. Barreiras ao acesso das pessoas com deficiência. Rev. Saúde Pública, 2022.
- DARAMOLA; YAHAYA; ABDULLAHI. Evaluating queuing models: a case study of Access Bank. MJSAT, 2024.
- GIANNOTTI; LOUVISON; CHIORO. Listas de espera na atenção ambulatorial. Cad. Saúde Pública, 2025.
- GROSS et al. Fundamentals of Queueing Theory. 4.ed. Wiley, 2008.
- HA et al. Digital health equity for people with disability. JMIR, 2023.
- JONSSON et al. eHealth services accessibility: scoping review. JMIR, 2023.
- MORDOR INTELLIGENCE. Queue Management System Market (2026-2031), 2026.
- QUEBERRY. How long wait times cost you customers, 2026.
- THOMPSON et al. Wait time saving effectiveness of triage algorithms. arXiv, 2023.
- WAITWHILE. Consumer Survey: The State of Waiting in Line, 2024.
- ZHAO; GILBERT. Queuing theory to evaluate service delivery quality. IJQSS, 2025.

---

## 11. ESTRUTURA DE SLIDES RECOMENDADA

Use esta estrutura para gerar a apresentação no Google Slides / PowerPoint.
Distribua as falas entre os 8 integrantes.

| # | Slide | Conteúdo Principal | Quem Fala | Duração |
|:-:|:------|:-------------------|:----------|:-------:|
| 1 | **Capa** | MinhaFila, disciplina, professor, **nomes dos 8 integrantes** | Deivison ou Uélinton | 30s |
| 2 | **Agenda** | O que vamos apresentar (tópicos em bullet points) | Deivison | 30s |
| 3 | **Contexto do trabalho** | O que o professor pediu (problema real, casos, proposta, fluxograma, protótipo) | Wallace | 1min |
| 4 | **O problema: filas ineficientes** | Dados: 90% enfrentam filas, 61% abandonam, US$ 38bi de mercado | Rios | 1min30 |
| 5 | **O problema em diferentes setores** | Bancos (23,85% do mercado), comércio (US$ 2mi/loja/ano), serviços públicos, educação | Rios | 1min30 |
| 6 | **Casos existentes** | NextQS, Fila Online, Vizitor — o que fazem e a lacuna que deixam | Ausiane | 1min30 |
| 7 | **Proposta MinhaFila** | Senha virtual, acompanhamento, notificação, painel gestor, multissetorial | Núbia | 2min |
| 8 | **Diferenciais** | Transparência, mobilidade, multissetorial, dados analíticos, acessibilidade, baixa fricção | Deivison | 1min |
| 9 | **Fluxograma — Visão Geral** | Etapas: entrada → solicitação → prioridade → senha → notificação → atendimento → retorno | Artur | 1min30 |
| 10 | **Fluxograma — Detalhamento Técnico** | Algoritmo de chamada, fila prioritária vs convencional, feedback loop, notificação antecipada | Marcos | 1min30 |
| 11 | **Protótipo de Telas — Usuário** | Demonstração ao vivo: splash, home, ticket, fila, alerta, painel público | Deivison | 2min |
| 12 | **Protótipo de Telas — Gestor** | Demonstração ao vivo: dashboard, métricas, fila completa, chamar próximo, configurações | Deivison | 1min |
| 13 | **Acessibilidade** | Alto contraste, modo simples, TEA, vibração, leitura por voz — inclusão como requisito | (qualquer membro) | 1min |
| 14 | **Conclusão** | Impacto esperado, limitações, próximos passos | Rios ou Deivison | 1min |
| 15 | **Perguntas** | "Obrigado! Estamos abertos a perguntas." — Contato/repositório | Todos | — |

### Notas de Design para os Slides

1. **Capa:** Logo MinhaFila + "GCETENS843 — Projeto Algoritmo I" + "Prof. Alex Ferreira" + nomes dos 8 integrantes em grid ou coluna.
2. **Cores:** Use a paleta do protótipo (índigo #4f46e5 como cor principal, verde #10b981 para destaques positivos).
3. **Fontes:** Inter ou sistema sem serifa (consistente com o protótipo). Evite Times New Roman em slides.
4. **Visual:** Use ícones, diagramas e o fluxograma real. Evite texto corrido — prefira bullets, números destacados e métricas.
5. **Demonstração ao vivo:** Os slides do protótipo DEVEM abrir o HTML real no navegador. Não colocar apenas imagens estáticas.
6. **Distribuição das falas:** Todos os 8 integrantes devem falar. Cada slide tem um responsável indicado.
7. **Duração total:** 13-15 minutos ideal. Cronometrar os ensaios.
8. **Código em C:** Não mencionar. O grupo decidiu cancelar essa entrega. Se perguntarem, dizer que o foco foi no projeto conceitual e protótipo funcional.

---

## 12. INSTRUÇÕES PARA O NOTEBOOK LM

Com base em todo o contexto acima, gere o conteúdo detalhado para cada slide da apresentação, seguindo a estrutura da seção 11. Para cada slide, forneça:

1. **Título do slide**
2. **Conteúdo visual sugerido** (ícones, diagramas, imagens, disposição dos elementos)
3. **Texto do slide** (bullet points concisos — máximo 5-6 pontos por slide)
4. **Notas do apresentador** (fala completa, em linguagem natural, com duração estimada)
5. **Transição sugerida** para o próximo slide

Formato de saída: markdown estruturado, pronto para ser copiado para o Google Slides ou PowerPoint.
