# 🎤 Roteiro da Apresentação — MinhaFila

> **Status:** ✅ Atualizado (28/06/2026)  
> **Data:** 29/06/2026 às 20h — AO VIVO  
> **Duração prevista:** 13–15 minutos  
> **Slides:** Uélinton + Wallace

---

## 📋 Estrutura de Slides e Divisão de Falas

| # | Slide | Quem fala | Duração |
|:-:|:------|:----------|:-------:|
| 1 | **Capa** — MinhaFila, GCETENS843, Prof. Alex Ferreira, nomes dos 8 integrantes | Deivison | 30s |
| 2 | **Agenda** — O que vamos apresentar (visão geral dos tópicos) | Deivison | 30s |
| 3 | **Contexto do trabalho** — O que o professor pediu (problema real, casos, proposta, fluxograma, protótipo) | Wallace | 1min |
| 4 | **O problema: filas ineficientes** — 90% enfrentam filas, 61% abandonam, mercado de US$ 38 bi | Rios | 1min30 |
| 5 | **Impacto por setor** — Bancos (23,85% do mercado), comércio (US$ 2mi/loja/ano), serviços públicos, educação | Rios | 1min30 |
| 6 | **Casos existentes** — NextQS, Fila Online, Vizitor — o que fazem e a lacuna | Ausiane | 1min30 |
| 7 | **Proposta MinhaFila** — Senha virtual, acompanhamento em tempo real, notificação, painel gestor, multissetorial | Núbia | 2min |
| 8 | **Diferenciais** — Transparência, mobilidade, multissetorial, dados analíticos, acessibilidade, baixa fricção | Deivison | 1min |
| 9 | **Fluxograma — Visão geral** — Etapas: entrada → solicitação → prioridade → senha → notificação → atendimento → retorno | Artur | 1min30 |
| 10 | **Fluxograma — Detalhamento** — Algoritmo de chamada, fila prioritária vs convencional, notificação antecipada, feedback loop | Marcos | 1min30 |
| 11 | **Protótipo — Usuário** — Demonstração ao vivo (splash, home, ticket, fila, alerta, painel público) | Deivison | 2min |
| 12 | **Protótipo — Gestor** — Demonstração ao vivo (dashboard, métricas, fila completa, chamar próximo, config) | Deivison | 1min |
| 13 | **Acessibilidade** — Alto contraste, modo TEA, vibração, leitura por voz, modo simples | Uélinton ou Wallace | 1min |
| 14 | **Conclusão** — Impacto esperado, limitações, próximos passos, agradecimentos | Rios | 1min |
| 15 | **Perguntas** — "Obrigado! Estamos abertos a perguntas." + QR code do repositório | Todos | — |

---

## 🗣️ Falas Detalhadas por Slide

### Slide 1 — Capa (30s) — Deivison

**Texto do slide:**
- MinhaFila: Gestão Inteligente de Espera
- GCETENS843 — Projeto Algoritmo I
- Prof. Alex Ferreira | UFRB/CETENS | 2026.1
- **Integrantes:** Deivison Santana, Raimon Rios, Ausiane Costa, Núbia Ramos, Artur Campos, Marcos Sena, Uélinton Santana, Wallace Lima

**Fala do apresentador:**
"Boa noite a todos. Nossa apresentação hoje é do projeto MinhaFila, desenvolvido para a disciplina de Projeto Algoritmo I. Somos um grupo de 8 estudantes do Bacharelado em Sistemas de Informação da UFRB. Nosso projeto propõe uma solução de gerenciamento inteligente de filas para múltiplos setores — uma resposta a um problema que todo brasileiro conhece na prática: a espera ineficiente em filas de atendimento."

---

### Slide 2 — Agenda (30s) — Deivison

**Texto do slide:**
1. Contexto do trabalho
2. Problema real e impacto
3. Casos existentes
4. Proposta MinhaFila
5. Fluxograma do sistema
6. Protótipo de telas
7. Acessibilidade
8. Conclusão

**Fala do apresentador:**
"Vamos começar explicando o que o professor nos pediu, depois mostrar o problema real das filas no Brasil, as soluções que já existem no mercado, a nossa proposta, o fluxograma do sistema, o protótipo funcional que desenvolvemos, os recursos de acessibilidade e, por fim, nossas considerações finais."

---

### Slide 3 — Contexto do Trabalho (1min) — Wallace

**Texto do slide:**
- Disciplina: GCETENS843 — Projeto Algoritmo I
- O professor solicitou:
  - ✅ Problema real definido
  - ✅ Casos existentes no mercado
  - ✅ Proposta de solução computacional
  - ✅ Fluxograma do sistema
  - ✅ Protótipo de telas
  - ❌ Código em C cancelado (decisão do grupo)
- Prazo: 29/06/2026 — apresentação AO VIVO (vale 10 pontos)

**Fala do apresentador:**
"O professor Alex Ferreira nos pediu um trabalho completo: identificar um problema real, pesquisar soluções existentes, propor a nossa própria, explicar a lógica com um fluxograma e apresentar um protótipo de telas. O código em C foi discutido no início, mas o grupo decidiu concentrar esforços nos entregáveis obrigatórios para garantir a qualidade do projeto conceitual e do protótipo funcional."

---

### Slide 4 — O Problema: Filas Ineficientes (1min30) — Rios

**Texto do slide:**
- 90% dos consumidores enfrentam filas todo mês
- 64% enfrentam filas múltiplas vezes por semana
- 61% já abandonaram uma fila antes de serem atendidos
- 22% abandonam compras por processos demorados
- Sem informações, a espera parece 36% maior do que realmente é
- Mercado global de QMS: US$ 38,97 bi (2025) → US$ 77,13 bi (2031)

**Fala do apresentador:**
"O problema das filas é maior do que parece. Dados da Waitwhile mostram que 90% dos consumidores enfrentam filas com frequência, e 64% lidam com elas várias vezes por semana. O impacto econômico é enorme: 61% das pessoas já desistiram de um atendimento por causa da fila, e 22% abandonam compras quando a finalização é demorada. Uma loja típica pode perder mais de 2 milhões de dólares por ano só com abandono por filas. O mercado global de sistemas de gerenciamento de filas deve crescer de 38 para 77 bilhões de dólares até 2031 — o que mostra que esse é um problema que o mercado reconhece e está buscando resolver."

---

### Slide 5 — Impacto por Setor (1min30) — Rios

**Texto do slide:**

| Setor | Impacto |
|-------|---------|
| 🏦 **Bancos** | 23,85% do mercado global de QMS. Teoria de filas comprovadamente aplicável |
| 🏪 **Comércio** | US$ 2 milhões/loja/ano em perdas. 43% dos clientes menos satisfeitos |
| 🏛️ **Serviços públicos** | Alta demanda + horários restritos + serviços diversos |
| 🏫 **Educação** | Matrículas, secretaria, atendimento sem previsibilidade |
| 🏥 **Saúde** | Aglomeração, absenteísmo, risco à continuidade do cuidado |

**Fala do apresentador:**
"O problema atinge todos os setores. No setor bancário, que representa quase 24% do mercado de sistemas de fila, a teoria de filas já é aplicada há décadas para melhorar a eficiência. No comércio, as perdas são gritantes: mais de 2 milhões de dólares por ano em cada loja. Nos serviços públicos, a alta demanda combinada com horários restritos gera filas intermináveis. Na saúde, a aglomeração nas recepções aumenta o risco de absenteísmo. Em todos os casos, a falta de informação sobre o tempo de espera é o fator comum de insatisfação."

---

### Slide 6 — Casos Existentes (1min30) — Ausiane

**Texto do slide:**

| Sistema | O que faz | Limitação |
|---------|-----------|-----------|
| **NextQS** | Totens + painéis de chamada | Sem previsão de tempo para o usuário |
| **Fila Online** | Alertas por notificação | Sem painel gestor, sem multissetorial |
| **Vizitor** | Check-in + senhas digitais | Foco corporativo, sem cobertura multi-setor |

**Lacuna comum:** Nenhuma solução informa o tempo estimado de espera em TEMPO REAL.

**Fala do apresentador:**
"Pesquisamos soluções disponíveis no mercado. A NextQS oferece totens e painéis de chamada, mas não informa o tempo de espera ao usuário. O Fila Online envia alertas por notificação, mas não tem painel para o gestor nem suporte a múltiplos setores. A Vizitor faz check-in digital e senhas, mas é focada em recepção corporativa. A lacuna que identificamos é clara: nenhuma dessas soluções informa ao usuário o tempo aproximado de espera em tempo real — e é exatamente isso que o MinhaFila se propõe a resolver."

---

### Slide 7 — Proposta MinhaFila (2min) — Núbia

**Texto do slide:**
- **Conceito:** Senha virtual com acompanhamento em tempo real
- **Multissetorial:** Bancos, saúde, educação, comércio, governo — um único sistema
- **Jornada do usuário:**
  1. Chegada → QR Code ou app
  2. Cadastro rápido → senha virtual
  3. Acompanhamento → posição + tempo estimado
  4. Notificação → alerta quando estiver perto
  5. Atendimento → guichê indicado
- **Jornada do gestor:** Painel com métricas, chamar próximo, relatórios, config

**Fala do apresentador:**
"O MinhaFila é um sistema de senha virtual com acompanhamento em tempo real. O usuário chega, escaneia um QR Code ou abre o app, faz um cadastro rápido e já recebe uma senha virtual. A partir daí, ele acompanha no celular a posição na fila, o tempo estimado de espera e recebe uma notificação quando estiver próximo de ser chamado. O diferencial é que ele pode aguardar fora do local sem medo de perder a vez. Para o gestor, o painel administrativo permite visualizar a fila completa, chamar o próximo usuário com um clique e acessar relatórios analíticos. E tudo isso funciona para qualquer setor: bancos, comércio, educação, serviços públicos e saúde — com um único sistema."

---

### Slide 8 — Diferenciais (1min) — Deivison

**Texto do slide:**
1. 🔍 **Transparência** — Posição exata e tempo estimado visíveis
2. 📱 **Mobilidade** — Aguarde fora do local, receba alerta
3. 🏢 **Multissetorial** — Um sistema para qualquer setor
4. 📊 **Dados analíticos** — Relatórios de fluxo, picos, tempo médio
5. ♿ **Acessibilidade** — Alto contraste, TEA, vibração, leitura por voz
6. ⚡ **Baixa fricção** — QR Code + cadastro rápido, sem burocracia

**Fala do apresentador:**
"O MinhaFila tem seis diferenciais principais. Primeiro, transparência: o usuário vê exatamente sua posição e o tempo estimado, eliminando aquela sensação de injustiça. Segundo, mobilidade: dá para aguardar num café próximo e ser avisado quando faltar pouco. Terceiro, é multissetorial: funciona em banco, comércio, escola, repartição pública e saúde com a mesma plataforma. Quarto, dados analíticos para o gestor tomar decisões baseadas em evidências. Quinto, acessibilidade como requisito, não como adicional. E sexto, baixa fricção: cadastro rápido e entrada por QR Code."

---

### Slide 9 — Fluxograma: Visão Geral (1min30) — Artur

**Texto do slide:**
[Exibir imagem do fluxograma]

1. **Entrada** → Cadastro ou login
2. **Solicitação** → Escolhe estabelecimento e serviço
3. **É prioridade?** → Desvia para fila prioritária ou convencional
4. **Senha** → Geração automática + previsão de atendimento
5. **Notificação** → Alerta quando estiver no topo
6. **Atendimento** → Chamada → Atendimento → Remoção da fila
7. **Retorno** → Se não comparecer, volta ao início

**Fala do apresentador:**
"O fluxograma do sistema foi desenvolvido por mim, Artur, em parceria com o Marcos. Ele começa com a entrada do usuário, que pode fazer login ou cadastro rápido. Depois, ele solicita o atendimento escolhendo o estabelecimento e o tipo de serviço. O sistema então decide se o usuário vai para a fila prioritária ou para a convencional — com base em critérios legais como idade, gestação e deficiência. Uma senha única é gerada com uma previsão inicial de atendimento. Quando o usuário atinge o topo da fila, ele é notificado. Após o atendimento, o sistema o remove da fila e chama o próximo. Se o usuário não comparece, ele pode solicitar novamente."

---

### Slide 10 — Fluxograma: Detalhamento Técnico (1min30) — Marcos

**Texto do slide:**
- **Algoritmo de chamada:** Ordem de chegada + prioridade legal
- **Notificação antecipada:** O 2º usuário na fila recebe alerta para se deslocar
- **Tempo médio:** Calculado em tempo real com base no histórico do dia
- **Feedback loop:** Ausência → retorno à solicitação sem perder dados
- **Painel gestor:** Atualização automática após cada chamada

**Fala do apresentador:**
"Detalhando mais a lógica: o algoritmo de chamada combina ordem de chegada com prioridade legal. Usuários prioritários são direcionados para uma fila separada e chamados antes dentro dessa lógica. Um ponto importante é a notificação antecipada: quando o usuário está em segundo lugar na fila, o sistema já envia um alerta para ele começar a se deslocar. Isso otimiza o fluxo e reduz o tempo ocioso dos guichês. O tempo médio de espera é recalculado continuamente com base no histórico do dia. E se o usuário não comparece quando chamado, ele não perde o lugar definitivamente — o sistema o reinsere na fila automaticamente."

---

### Slide 11 — Protótipo: Usuário (2min) — Deivison

**Texto do slide:**
[MOSTRAR AO VIVO o `index.html` no navegador — NÃO usar imagens estáticas]

Fluxo a percorrer:
1. **Splash** → Começar
2. **Onboarding** (3 telas) → Pular
3. **Home** → Ver posição (8º), cards de ação
4. **Escolher estabelecimento** → "Estabelecimento Modelo"
5. **Tipo de atendimento** → "Atendimento comum"
6. **Ticket** → Senha A-028 gerada
7. **Acompanhamento** → Posição, previsão, progresso
8. **Simular chamada** → Alerta de proximidade
9. **Painel público** → Chamada atual + próximos

**Fala do apresentador:**
"Agora vou mostrar o protótipo funcionando ao vivo. [abre index.html] O fluxo começa na tela de splash, passa pelo onboarding explicativo, e chega à home onde o usuário vê sua posição atual e os cards de ação. Vou retirar uma senha: escolho o estabelecimento, o tipo de atendimento e pronto — a senha A-028 é gerada com posição e previsão. Na tela de acompanhamento, dá pra ver a senha atual sendo chamada, sua posição, o tempo estimado e o progresso da fila. Se eu simular a chamada próxima, o alerta aparece. E o painel público mostra tudo com transparência."

---

### Slide 12 — Protótipo: Gestor (1min) — Deivison

**Texto do slide:**
[MOSTRAR AO VIVO o `admin.html` no navegador]

Funcionalidades:
- **Dashboard** → Métricas: total, espera, atendidos, tempo médio
- **Chamar próxima** → Avança a fila e atualiza tudo automaticamente
- **Fila completa** → Lista detalhada por guichê e tipo
- **Configurações** → Nome, setor, guichês, acessibilidade
- **Acessibilidade** → Alto contraste e modo simples funcionais

**Fala do apresentador:**
"O painel do gestor também está funcional. Aqui temos as métricas do dia: total de atendimentos, pessoas em espera, já atendidos e o tempo médio. Com um clique no botão 'Chamar próxima senha', a fila avança e os números são atualizados automaticamente. Dá para ver a fila completa com detalhes por guichê, e as configurações permitem personalizar o nome do estabelecimento, o setor e o número de guichês. A acessibilidade também está presente aqui, com alto contraste e modo simples."

---

### Slide 13 — Acessibilidade (1min) — Uélinton ou Wallace

**Texto do slide:**
- 🔲 **Alto contraste** — Interface adaptada para baixa visão
- 🔠 **Texto ampliado** — Fonte maior para melhor leitura
- 🧩 **Modo simples** — Remove elementos decorativos
- 👁️ **Alerta visual** — Para pessoas com deficiência auditiva
- 📳 **Vibração** — Feedback tátil para chamadas
- 🔊 **Leitura por voz** — Narração de informações principais
- 🧘 **Modo TEA** — Redução de estímulos sensoriais

**Fala do apresentador:**
"A acessibilidade foi pensada como requisito desde o início, não como algo adicional. O protótipo inclui alto contraste para baixa visão, texto ampliado, modo simples que remove elementos decorativos, alerta visual para pessoas com deficiência auditiva, vibração como feedback tátil, leitura por voz e um modo específico para pessoas com TEA, que reduz os estímulos sensoriais da interface. Tudo isso pode ser ativado nas configurações de acessibilidade do aplicativo."

---

### Slide 14 — Conclusão (1min) — Rios

**Texto do slide:**
- ✅ Problema real identificado e fundamentado
- ✅ Lacuna de mercado mapeada
- ✅ Proposta viável e multissetorial
- ✅ Fluxograma lógico documentado
- ✅ Protótipo funcional desenvolvido
- 🔮 **Próximos passos:** Desenvolvimento do backend, testes com usuários reais, validação em campo

"Agradecemos a atenção de todos!"

**Fala do apresentador:**
"Para concluir: entregamos todos os itens solicitados pelo professor. Identificamos um problema real e urgente — as filas ineficientes —, mapeamos as soluções existentes e suas lacunas, propusemos o MinhaFila como uma resposta viável e multissetorial, documentamos a lógica com um fluxograma completo e desenvolvemos um protótipo funcional que pode ser testado hoje mesmo. Como próximos passos, vislumbramos o desenvolvimento do backend, testes com usuários reais e validação em campo. Agradecemos a atenção de todos e estamos abertos a perguntas."

---

### Slide 15 — Perguntas

**Texto do slide:**
- "Obrigado!"
- Contato: https://github.com/Deivisan/Metodologia-EAD
- QR Code para o repositório / protótipo

---

## ✅ Checklist de Ensaio

- [ ] Todos os 8 integrantes sabem sua fala e seu slide
- [ ] Protótipo `index.html` aberto e testado no navegador
- [ ] Protótipo `admin.html` aberto e testado no navegador
- [ ] Fluxograma JPEG pronto para exibir
- [ ] Slides com fonte legível (sem texto excessivo)
- [ ] Duração total entre 13 e 15 minutos
- [ ] QR Code do repositório no último slide
- [ ] Backup dos slides em PDF (caso falhe o Google Slides)

---

> 🔗 [Voltar ao Index Geral](Index-Geral.md)
> 📋 [Prompt para Notebook LM →](prompt-notebook-lm-slides.md)
