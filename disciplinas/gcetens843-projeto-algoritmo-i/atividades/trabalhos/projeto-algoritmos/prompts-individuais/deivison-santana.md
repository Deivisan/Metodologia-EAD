# 🎤 Meu Roteiro — Deivison de Lima Santana

> **Slides:** 1, 2, 6, 7, 9, 10, 11, 12, 14
> **Duração total:** ~8min

---

## Ordem da Apresentação (eu e Rios)

| # | Slide | Quem | Duração |
|:-:|:------|:----:|:-------:|
| 1 | 🎬 **Capa** | **EU** | 30s |
| 2 | 🎯 **Missão** | **EU** | 30s |
| 3 | 🔴 Problema — Modelo Esgotado | **Rios** | 1min30 |
| 4 | 🔴 Problema — Impacto (dados) | **Rios** | 1min30 |
| 5 | 📊 Casos Existentes | **Rios** | 1min |
| 6 | 🟢 **Proposta MinhaFila** | **EU** | 1min |
| 7 | ⚙️ **Ecossistema Integrado** | **EU** | 1min |
| 8 | 🔁 Fluxograma | **Rios** | 1min |
| 9 | 🏗️ **Arquitetura** | **EU** | 1min30 |
| 10 | 📱 **Jornada do Usuário** | **EU** | 1min30 |
| 11 | 🖥️ **Protótipo — Inclusão** | **EU** | 1min30 |
| 12 | 📺 **Dashboard de Transparência** | **EU** | 1min |
| 13 | 💰 Benefícios | **Rios** | 1min |
| 14 | 🏁 Fim / Perguntas | **EU** | 30s |

---

## Meus Slides — Fala Detalhada

### Slide 1 — Capa (30s)

*"Boa noite. Somos o grupo MinhaFila — Gestão Inteligente e Acessível de Espera. Disciplina GCETENS843 — Projeto Algoritmo I, professor Alex Ferreira. Somos 8 integrantes do Bacharelado em Sistemas de Informação da UFRB."*

💡 *Aponte rapidamente para os nomes no slide enquanto fala.*

➡️ **"Vou começar com a nossa missão."**

---

### Slide 2 — Missão (30s)

*"Nossa missão é transformar o tempo de espera — de uma frustração imprevisível para uma experiência previsível, justa e inclusiva. Três pilares sustentam isso: multissetorial, foco no usuário e acessibilidade nativa."*

➡️ **"Rios, vou passar pra você falar sobre o problema real que a gente identificou."**

---

### Slide 6 — Proposta MinhaFila (1min)

*(entra depois que Rios terminar casos existentes)*

*"E é aí que entra o MinhaFila. Um sistema de senha virtual com acompanhamento remoto, projetado pra funcionar em múltiplos setores de forma unificada. O cadastro é sem fricção — o usuário lê um QR Code na recepção e já entra na fila. Tem transparência total: posição em tempo real e tempo estimado. O usuário aguarda onde quiser, não preso no saguão. Funciona em saúde, bancos, varejo e governo."*

➡️ **"Vou mostrar agora como esse ecossistema se organiza."**

---

### Slide 7 — Ecossistema Integrado (1min)

*"O sistema tem dois módulos principais. O módulo do usuário: acompanhamento em tempo real com posição, tempo estimado e pessoas à frente; alertas inteligentes de proximidade tipo 'faltam 3 pessoas'; e um perfil inclusivo com alto contraste, fonte ampliada, leitura de voz e modo baixo estímulo pra TEA.*

*O módulo do gestor: um painel completo de senhas e guichês ativos, chamada simplificada com um clique, e relatórios de pico, tempo médio e performance operacional."*

➡️ **"Rios, o fluxograma do sistema."**

---

### Slide 9 — Arquitetura — Engenharia Limpa e Escalável (1min30)

*(entra depois do Rios falar do fluxograma)*

*"Nossa arquitetura tem quatro camadas que se comunicam em torno de um core central:*

1. *Frontend PWA — aplicativo web responsivo que funciona como app, sem download. Acesso via QR Code na recepção. Inclui notificações push por Service Worker.*
2. *Backend API REST — processa as requisições do Core, gerencia posições em tempo real e calcula estimativas de espera.*
3. *Banco de Dados Relacional — garante integridade dos dados: senhas, estabelecimentos, histórico de atendimento.*
4. *Infraestrutura Cloud — roda onde precisar: na nuvem pra redes grandes ou servidor local pra clínicas menores.*

*E no centro o MinhaFila Core — o cérebro que concentra as regras de negócio, priorização e lógica do sistema."*

💡 *Se puder, aponte pra cada camada no slide enquanto fala.*

➡️ **"Vou mostrar agora como funciona na prática, na jornada do usuário."**

---

### Slide 10 — Jornada do Usuário (1min30)

*"A jornada é simples e direta. Três passos:*

1. *Tela inicial — o usuário escaneia o QR Code ou seleciona o local via GPS, que já mostra distância e tempo estimado.*
2. *Retirada de senha — escolhe a categoria: Comum, Rápido, Prioritário, Retorno ou Triagem.*
3. *Emissão imediata — em 3 cliques o usuário entra na fila virtual, sem burocracia.*

*O conceito é: acompanhe sua vez sem ficar preso na fila."*

➡️ **"Vou mostrar o protótipo de como isso fica na tela."**

---

### Slide 11 — Visibilidade Total e Inclusão — Protótipo (1min30)

*"Aqui a gente vê três funcionalidades na prática:*

*Primeiro, o painel do usuário — visualização clara em linguagem simples: 'Posição 8, Previsão 18 minutos, Faltam 3 pessoas'.*

*Segundo, notificação de proximidade — aviso sonoro e visual quando a vez se aproxima. O usuário não fica preso no saguão.*

*Terceiro, modos inclusivos — opções de texto ampliado, alto contraste, vibração e redução de estímulos visuais pra TEA, tudo instantâneo."*

➡️ **"E tem também o dashboard pros gestores acompanharem tudo."**

---

### Slide 12 — Dashboard de Transparência (1min)

*"Dois painéis. O painel público na TV da recepção: mostra a senha sendo chamada, as próximas 5 senhas previstas e um QR Code pra acompanhar a fila em tempo real. Isso reduz a suspeita de favorecimento.*

*O painel da equipe no aplicativo móvel: métricas em tempo real, volume de atendimento, botão 'Chamar Próximo' e gerenciamento dinâmico da fila. Auditoria automatizada de prioridades."*

💡 *Se der tempo, abre rapidinho o `admin.html` pra mostrar.*

➡️ **"Rios, os benefícios."**

---

### Slide 14 — Fim / Perguntas (30s)

*(depois do Rios terminar os benefícios)*

*"Era isso, pessoal. Fica aqui nosso espaço pra perguntas. Obrigado!"*

💡 *Mantenha o `index.html` aberto caso perguntem sobre funcionalidades específicas.*

---

## 🔗 O que Rios Fala (meu contexto)

> **Slide 3 — Modelo Esgotado (1min30):** Rios apresenta os 5 problemas do modelo tradicional: opacidade (não sabe posição), prisão física (não pode sair), comunicação falha (painéis ruins), aglomeração (espaços lotados), exclusão (falta acessibilidade PcD/TEA).
>
> **Slide 4 — Impacto (1min30):** Dados — 90% enfrentam filas todo mês, 61% abandonam, +36% percepção de dor, mercado de US$ 77bi em 2031. Custo da ineficiência e falha de acessibilidade.
>
> **Slide 5 — Casos Existentes (1min):** NextQS (totens físicos), Fila Online (só alertas), Vizitor (check-in corporativo). Lacuna: nenhuma oferece posição + tempo real + fora do estabelecimento + multissetorial + acessível.
>
> **Slide 8 — Fluxograma (1min):** Explica o fluxo lógico: entrada do usuário no sistema, verificação de prioridade legal, distribuição entre fila prioritária ou convencional, cálculo dinâmico de ETA.
>
> **Slide 13 — Benefícios (1min):** Redução de 64% na fila presencial, economia de US$ 2M/ano em abandono, conformidade legal (cotas PcD/Idosos), bem-estar físico e mental.

---

## ✅ Checklist Pessoal

- [ ] Li meu roteiro completo (9 slides)
- [ ] Sei exatamente quando entro (1, 2, 6, 7, 9, 10, 11, 12, 14)
- [ ] Sei quando Rios entra (3, 4, 5, 8, 13)
- [ ] Protótipo `index.html` aberto antes de começar
- [ ] `admin.html` pra mostrar rápido se der tempo
- [ ] Respirei fundo e confio no roteiro 🚀

---

*MinhaFila — Apresentação 29/06/2026 — Baseado no PDF (2) de 14 slides*
