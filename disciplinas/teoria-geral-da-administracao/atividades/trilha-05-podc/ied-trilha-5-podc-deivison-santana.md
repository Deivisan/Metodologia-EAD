<div class="cabecalho-atividade">
<img src="templates/logo-ufrb-20-anos.png" alt="UFRB" style="max-width: 55%;" />
<span class="inst">Universidade Federal do Recôncavo da Bahia — UFRB</span><br/>
<span class="sub">Centro de Ciência e Tecnologia — CETENS</span><br/>
<span class="curso">Bacharelado em Sistemas de Informação (EAD)</span>
<hr/>
</div>

# Trilha 5 — O Checklist do Gestor de TI (PODC)

<div class="tabela-dados">
| | |
|---|---|
| **Curso:** | Sistemas de Informação |
| **Componente:** | GCETENS840 — Teoria Geral da Administração |
| **Docente:** | Prof. André de Mendonça Santos |
| **Discente:** | Deivison de Lima Santana |
| **Atividade:** | Trilha 5 — O Checklist do Gestor de TI (PODC) |
| **Data:** | 21/06/2026 |
</div>

---

## Contexto

Você foi nomeado líder de um pequeno grupo para desenvolver um **Aplicativo de Delivery para Pequenos Produtores em Feira de Santana**. Sua tarefa não é programar agora, mas sim organizar o trabalho usando as quatro funções do PODC.

---

## Tabela PODC Preenchida

| Função Administrativa | Ações Práticas (O que você vai fazer?) | Por que isso é importante em TI? |
|---|---|---|
| **Planejamento** | **1.** Realizar entrevistas e pesquisas com pequenos produtores de Feira de Santana para mapear funcionalidades essenciais (cardápio digital, formas de pagamento, raio de entrega, geolocalização). | Evita que o código seja escrito sem saber o que o cliente quer. |
| | **2.** Definir cronograma com entregas incrementais (MVP em 4 semanas, testes com 3 produtores reais, lançamento oficial), utilizando metodologia ágil (Scrum) com sprints semanais. | Permite validar hipóteses rapidamente e ajustar o escopo antes de investir tempo em funcionalidades desnecessárias. |
| **Organização** | **1.** Dividir a equipe em squads especializadas: front-end (telas do app e painel do produtor), back-end (API e banco de dados) e QA (testes), com responsabilidades e prazos claros para cada módulo. | Garante que cada programador saiba qual tela deve criar e quais são os limites da sua atuação, evitando retrabalho. |
| | **2.** Criar um repositório compartilhado no GitHub com documentação da arquitetura, padrões de código (linter, formatação) e um board no Trello/Jira para acompanhamento visual das tarefas. | Centraliza o conhecimento técnico e facilita a rastreabilidade do que cada membro está fazendo. |
| **Direção** | **1.** Realizar reuniões diárias de 15 minutos (daily standup) para alinhar o progresso, identificar bloqueios técnicos e celebrar pequenas entregas, mantendo o ânimo da equipe. | Mantém a equipe motivada e resolve conflitos técnicos rapidamente, evitando que um problema emperre o projeto por dias. |
| | **2.** Estabelecer canais de comunicação abertos (grupo no WhatsApp/Discord) e uma cultura de feedback constante, onde cada membro pode sugerir melhorias sem receio. | Reduz atritos interpessoais e acelera a tomada de decisão em momentos críticos, como correção de bugs perto do prazo. |
| **Controle** | **1.** Implementar testes automatizados (unitários e de integração) para cada nova funcionalidade, com validação contínua via pipeline CI/CD (GitHub Actions). | Garante que o app não trave no celular do usuário e que novas alterações não quebrem funcionalidades já testadas. |
| | **2.** Realizar revisões de código (code review) obrigatórias antes de todo merge, além de uma reunião de retrospectiva ao final de cada sprint para medir métricas (velocity, bugs abertos, cobertura de testes). | Mantém a qualidade do código e gera dados objetivos para ajustar o planejamento das próximas sprints. |

---

<div class="page-break"></div>

## Resumo das Ações por Função

### 📋 Planejamento
> "Saber o que construir antes de construir."

As ações de planejamento focam em **entender o problema real** dos pequenos produtores e **definir um cronograma realista**. Sem isso, o risco de entregar um app que ninguém quer usar é altíssimo.

### 🏗️ Organização
> "Quem faz o quê, com quais ferramentas."

A organização estrutura a equipe e os recursos para que cada membro tenha **clareza do seu papel** e acesse a **documentação necessária** para produzir sem depender de terceiros.

### 🧭 Direção / Liderança
> "Manter o time remando na mesma direção."

A direção envolve **comunicação frequente** e **ambiente psicológico seguro**. Num time pequeno, um conflito não resolvido ou um membro desmotivado pode parar o projeto inteiro.

### ✅ Controle
> "Garantir que o que foi planejado está sendo entregue com qualidade."

O controle usa **automação (testes, CI/CD)** e **revisão humana (code review)** para assegurar que o app funcione corretamente no celular do usuário final — um app de delivery que trava ou atrasa o pedido perde a confiança do produtor e do consumidor.

---

> **Referência:** CHIAVENATO, Idalberto. *Introdução à Teoria Geral da Administração*. 10. ed. São Paulo: Atlas, 2020.
