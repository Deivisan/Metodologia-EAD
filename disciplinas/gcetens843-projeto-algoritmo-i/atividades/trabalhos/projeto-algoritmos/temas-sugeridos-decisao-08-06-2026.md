# Temas Sugeridos pelo Grupo — Decisão em 08/06/2026

> **⚠️ DOCUMENTO HISTÓRICO (08/06/2026)**  
> Este arquivo registra apenas a **fase inicial de discussão e a enquete** do dia 08/06/2026.  
> **NÃO reflete o estado atual do projeto.**  
> 
> **Decisão oficial do grupo em 12/06/2026:** O grupo decidiu **NÃO realizar Código em C**.  
> Artur e Marcos Vinicius foram liberados dessa tarefa.  
> 
> **Para o estado atual e oficial do projeto, leia sempre:**
> - [`Index-Geral.md`](Index-Geral.md) (core vivo do grupo)
> - [`decisoes.md`](decisoes.md) (decisões consolidadas)
> - [`divisao-de-tarefas.md`](divisao-de-tarefas.md)
> 
> Todas as seções abaixo que mencionam “Possível código em C” são **históricas** e não representam mais o plano do grupo.

> **Disciplina:** GCETENS843 — Projeto Algoritmo I  
> **Curso:** Bacharelado em Sistemas de Informação  
> **Semestre:** 2026.1

---

## 1. Contexto da Discussão

O grupo começou a discutir possíveis temas para o trabalho de **Projeto Algoritmo I**. Pelo que foi entendido até agora, o tema é livre, desde que siga a proposta do professor: escolher um **problema real** e apresentar uma **solução computacional**, com pelo menos protótipo e fluxograma. A apresentação de código é opcional, mas pode fortalecer o trabalho.

A decisão do tema ficou prevista para:

> **Data de decisão:** 08/06/2026

Até lá, este documento serve como espaço de organização das ideias iniciais e das sugestões que ainda serão enviadas pelos demais integrantes.

---

## 2. Integrantes e Situação das Sugestões

| Integrante | Situação atual |
|---|---|---|
| **Deivison de Lima Santana** | Sugeriu ideias ligadas à educação, acessibilidade e organização de filas em clínicas/hospitais. Também demonstrou preferência por temas de educação, por afinidade com o meio acadêmico. |
| **Ausiane** | Tem TEA e deficiência auditiva unilateral. Trabalhou no NAI (Núcleo de Acessibilidade e Inclusão). Sugeriu trabalhar com educação, inclusão, acessibilidade, TEA, deficiência auditiva, baixa visão e dificuldades de acesso. Depois apoiou filas inteligentes e perguntou se poderia incluir acessibilidade no tema. |
| **Nubia de Asiká** | Apoiou o tema de educação e acessibilidade, especialmente sobre diagnósticos tardios e traumas educacionais. |
| **Rios** | Trouxe a pergunta inicial, sugeriu agendamento por horário com fichas virtuais (filas inteligentes), e concordou em incluir acessibilidade no tema. Também tem experiência nas áreas de educação e saúde. |
| **Wallace** | Ainda não apresentou sugestão específica no grupo. |
| **Artur Campos** | Entrou no grupo em 08/06/2026. |

---

## 3. Temas Que Surgiram na Conversa

### 3.1 Educação, Acessibilidade e Inclusão

**Origem da ideia:** Ausiane e Deivison.

A ideia parte da dificuldade que muitos estudantes podem ter para acompanhar conteúdos, prazos, aulas e plataformas educacionais, especialmente em contextos de EAD. Também foi levantada a possibilidade de pensar em acessibilidade para pessoas com deficiência, TEA, baixa visão ou deficiência auditiva.

Uma nova contribuição reforça que o tema é especialmente importante no momento atual, em que muitas pessoas recebem diagnósticos tardios. Quando essas necessidades não são percebidas ou acolhidas antes, podem surgir dificuldades, frustrações e traumas que impactam a trajetória educacional. Por isso, uma solução voltada à educação e acessibilidade pode ajudar não apenas na organização dos estudos, mas também no acolhimento e na criação de caminhos mais inclusivos.

#### Problemas observados

- Dificuldade de acesso e navegação em plataformas educacionais.
- Estudantes que não conseguem acompanhar aulas por horários incompatíveis.
- Baixa participação em aulas síncronas, mesmo com grande número de matriculados.
- Falta de suporte acessível em vídeos, materiais e interfaces.
- Pessoas com baixa visão enfrentando obstáculos com leitores de tela.
- Pessoas com deficiência auditiva sem suporte adequado em vídeos ou conteúdos falados.
- Pessoas com TEA podendo precisar de mais organização, previsibilidade e estrutura para acompanhar atividades.
- Diagnósticos tardios podem fazer com que estudantes passem anos sem apoio adequado.
- Falta de acolhimento e adaptação pode gerar traumas, evasão ou baixo desempenho.

#### Possíveis soluções computacionais

- Organizador acadêmico acessível para atividades, prazos e materiais.
- Painel simples de acompanhamento de trilhas, aulas e pendências.
- Sistema de checklist acadêmico com lembretes e prioridades.
- Protótipo de plataforma ou módulo com foco em acessibilidade.
- Assistente de organização para estudantes com TEA, com rotina, prazos e alertas claros.
- Módulo de apoio para vídeos, com indicação de legenda, resumo e material complementar.
- Questionário ou triagem inicial não diagnóstica para mapear dificuldades de acesso, organização e acompanhamento.
- Painel de necessidades de apoio, ajudando o estudante a identificar barreiras e buscar orientação adequada.

#### Pontos fortes do tema

- Tem relação direta com a realidade do curso EAD.
- Pode ser justificado pela própria vivência dos integrantes.
- Permite falar de inclusão, permanência estudantil e melhoria de acesso.
- Permite discutir acolhimento e prevenção de dificuldades acumuladas por diagnósticos tardios.
- Pode gerar protótipo simples e bem compreensível.
- Pode permitir uma implementação simples em C, como simulador de prazos, checklist ou prioridade de tarefas.

#### Possível código em C

- Cadastro de atividades com data de entrega.
- Cálculo de prioridade por prazo.
- Lista de pendências acadêmicas.
- Sistema simples de alertas por urgência.
- Organização de tarefas por categoria: aula, atividade, prova, leitura, vídeo.

---

### 3.2 Sistema de Filas para Clínicas e Hospitais

**Origem da ideia:** Deivison, com concordância de Ausiane sobre a relevância do problema.

A ideia parte da experiência comum em clínicas e hospitais: o paciente recebe uma senha, mas nem sempre entende a ordem de atendimento. Muitas vezes há painéis com códigos confusos, chamadas por voz e alternância entre prioridades, o que causa insegurança e perda de tempo.

#### Problemas observados

- Usuário não sabe quando será atendido.
- Painéis usam códigos pouco intuitivos.
- A ordem pode parecer aleatória para quem está esperando.
- Pessoas podem perder tempo presas na recepção sem necessidade.
- Falta de transparência pode gerar sensação de favorecimento.
- Pessoas com deficiência auditiva podem perder chamadas por voz.
- Pessoas com baixa visão podem ter dificuldade com painéis pequenos ou mal posicionados.

#### Possíveis soluções computacionais

- Sistema de acompanhamento de fila pelo celular.
- Painel digital mais claro, com ordem estimada de atendimento.
- Indicação de posição aproximada na fila.
- Notificação quando a vez estiver próxima.
- Separação visual entre fila comum, prioritária e por tipo de atendimento.
- Histórico de chamadas para aumentar transparência.

#### Pontos fortes do tema

- É um problema fácil de explicar.
- Muitas pessoas já viveram situação semelhante.
- Permite fluxograma objetivo.
- Permite protótipo simples de tela.
- Permite simulação em C usando fila, prioridade e ordem de atendimento.

#### Possível código em C

- Simulação de fila comum e prioritária.
- Cadastro de senhas de atendimento.
- Chamada da próxima senha.
- Cálculo de posição aproximada.
- Registro de histórico das senhas chamadas.

---

### 3.3 Educação e Evasão/Participação em Aulas

**Origem da ideia:** Deivison, a partir da observação de que havia muitos alunos matriculados, mas poucos presentes na aula.

Esse tema está relacionado ao tema de educação, mas com foco específico em participação, rotina, acompanhamento e engajamento dos alunos em cursos EAD.

#### Problemas observados

- Muitos alunos matriculados, mas poucos presentes nas aulas.
- Horários podem dificultar a participação.
- Alunos podem se perder entre vídeos, trilhas, PDFs, atividades e prazos.
- Falta de visão geral sobre o que já foi feito e o que ainda falta.

#### Possíveis soluções computacionais

- Painel de acompanhamento da trilha de aprendizagem.
- Organizador de presença, vídeos assistidos e atividades pendentes.
- Sistema simples de recomendação de próxima tarefa.
- Relatório de progresso acadêmico individual.

#### Pontos fortes do tema

- Muito conectado com a experiência do próprio curso.
- Pode ser unido ao tema de acessibilidade.
- Permite protótipo simples.
- Pode ter código em C com cálculo de progresso e pendências.

#### Possível código em C

- Cálculo de percentual de progresso.
- Cadastro de tarefas concluídas e pendentes.
- Priorização por prazo.
- Relatório simples de situação do aluno.

---

### 3.4 Finanças de Empresas

**Origem da ideia:** Deivison citou como uma possibilidade, mas sem detalhamento ainda.

Esse tema ainda precisa ser melhor definido caso o grupo queira seguir por essa área. Pode envolver controle financeiro simples, fluxo de caixa, gastos, receitas, estoque ou alertas para pequenas empresas.

#### Possíveis caminhos

- Controle básico de entradas e saídas.
- Simulador de fluxo de caixa.
- Controle de gastos por categoria.
- Alerta de saldo negativo.
- Relatório simples de lucro/prejuízo.

#### Situação atual

> Tema citado como possibilidade, mas ainda sem aprofundamento pelo grupo.

---

### 3.5 Hospitais e Saúde — Organização de Atendimento

**Origem da ideia:** Deivison citou hospitais como uma possibilidade, e a ideia de fila detalha um problema mais específico dentro dessa área.

Esse tema pode seguir dois caminhos:

1. organização de fila e atendimento;
2. acessibilidade e comunicação com pacientes.

#### Possíveis soluções

- Sistema de fila mais transparente.
- Acompanhamento de atendimento pelo celular.
- Notificações para pessoas com deficiência auditiva.
- Interface simples e acessível para pacientes.
- Painel com linguagem mais clara.

#### Situação atual

> Tema forte, especialmente se for combinado com acessibilidade e transparência.

---

## 4. Comparação Inicial dos Temas

| Tema | Clareza do problema | Facilidade de protótipo | Código em C | Relação com realidade do grupo | Observação |
|---|:---:|:---:|:---:|:---:|---|
| Educação, acessibilidade e inclusão | Alta | Alta | Médio | Alta | Tema muito conectado com o curso e com experiências relatadas. |
| Filas em clínicas/hospitais | Alta | Alta | Alto | Média/Alta | Problema fácil de demonstrar e bom para simulação de fila em C. |
| Participação/evasão em aulas EAD | Média/Alta | Alta | Médio | Alta | Pode ser incorporado ao tema de educação. |
| Finanças de empresas | Média | Média | Alto | Média | Ainda precisa de mais definição. |
| Saúde/atendimento acessível | Alta | Média/Alta | Médio | Média | Pode se unir ao tema de filas. |

---

## 5. Possíveis Caminhos de Decisão

### Caminho A — Educação + Acessibilidade

Projeto voltado para melhorar a organização e o acesso de estudantes em ambientes EAD, considerando prazos, materiais, vídeos, acessibilidade e necessidades específicas de estudantes com deficiência ou TEA.

**Nome provisório:** `EducaAcesso` ou `AcessaEAD`

### Caminho B — Filas Inteligentes em Clínicas/Hospitais (com Acessibilidade) ⬅️ **Tendência**

Projeto voltado para tornar filas de atendimento mais claras, **acessíveis** e transparentes, com acompanhamento pelo celular e simulação da ordem de atendimento.

A **Ausiane** sugeriu incluir acessibilidade no sistema (suporte a libras, contraste, leitores de tela, notificação visual para pessoas com deficiência auditiva), e **Rios concordou**.

**Nome provisório:** `FilaClara`, `Atende+` ou `FilaAcessível`

### Caminho C — Organização Acadêmica para Estudantes EAD

Projeto voltado para ajudar estudantes a acompanhar aulas, vídeos, atividades, prazos e progresso nas trilhas de aprendizagem.

**Nome provisório:** `TrilhaFácil` ou `MeuAVA`

---

## 6. Critérios para Escolher o Tema

Antes da decisão em **08/06/2026**, o grupo pode avaliar cada tema com base nos seguintes critérios:

- O problema é real e fácil de explicar?
- O grupo tem vivência ou informação suficiente sobre ele?
- Dá para criar protótipo de telas?
- Dá para criar fluxograma simples?
- Dá para apresentar uma solução sem ficar complexa demais?
- Dá para implementar uma simulação em C, mesmo que simples?
- Todos conseguem defender a ideia na apresentação?

---

## 7. Perguntas para o Grupo Responder

1. Qual tema parece mais próximo da nossa realidade?
2. Qual problema conseguimos explicar melhor em poucos minutos?
3. Qual tema permite uma solução simples, mas convincente?
4. Queremos priorizar educação/acessibilidade ou saúde/filas?
5. Quem pode contribuir com experiência real em cada tema?
6. O grupo quer fazer código em C ou apenas protótipo e fluxograma?

---

## 8. Espaço para Novas Sugestões

| Integrante | Nova sugestão ou posição |
|---|---|---|
| **Deivison de Lima Santana** | Educação/acessibilidade; filas em clínicas/hospitais; organização acadêmica. |
| **Ausiane** | Educação, inclusão, acessibilidade, TEA, deficiência auditiva, baixa visão e suporte em plataformas/conteúdos. ✅ Apoiou filas + acessibilidade. |
| **Nubia de Asiká** | ✅ Apoiou educação e acessibilidade (diagnósticos tardios). |
| **Rios** | ✅ Sugeriu filas inteligentes com fichas virtuais. ✅ Concordou em incluir acessibilidade. |
| **Wallace** | Sem sugestão registrada. |
| **Artur Campos** | Entrou em 08/06. |

---

## 9. Observação Importante

Este documento registra ideias em construção. Nenhum tema está fechado ainda. A finalidade é facilitar a conversa do grupo e permitir que todos cheguem ao dia **08/06/2026** com uma visão mais clara das possibilidades.

Depois que o tema for escolhido, será necessário criar uma documentação específica com:

- problema escolhido;
- justificativa;
- público afetado;
- casos existentes;
- solução proposta;
- fluxograma;
- protótipo;
- possível código em C;
- roteiro final da apresentação.
