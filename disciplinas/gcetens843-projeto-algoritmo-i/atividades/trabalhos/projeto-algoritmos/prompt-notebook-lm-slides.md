# 🎯 Prompt para Notebook LM — Geração dos Slides do MinhaFila

> Cole este documento no Notebook LM como fonte de contexto.
> Use o resumo abaixo para gerar uma apresentação de slides de **15 slides** pronta para uso.
> **ATENÇÃO:** Esta é a apresentação que o grupo vai usar AO VIVO. Precisa ser visual, direta e ter lacunas claras para inserção de imagens.

---

## 📌 REGRAS OBRIGATÓRIAS (LEIA PRIMEIRO)

### 1. Capa do Slide 1
O **primeiro slide** DEVE ser uma **arte visual de capa** com:
- Nome do projeto em destaque: **MinhaFila**
- logotipo/arte conceitual (sugerir algo visual, com ícone de fila/senha digital)
- Nome dos **8 integrantes** listados em grid ou coluna
- Disciplina, professor, UFRB/CETENS, semestre

### 2. Palavras-chave OBRIGATÓRIAS nos slides
Os slides DEVEM conter estas palavras em DESTAQUE (negrito, cor diferente, ou badge visual):

| Palavra-chave | Onde aparece |
|:---------------|:-------------|
| **Problema Real** | Slides 4, 5 |
| **Casos Existentes** | Slide 6 |
| **Proposta** | Slides 7, 8 |

### 3. Slides com Lacunas para Imagens (2 slides específicos)
Dois slides devem ter **espaços reservados (lacunas) visíveis** para inserir fotos:

| Slide | Lacuna para | Descrição |
|:-----:|:------------|:----------|
| **Slide 9** | 🖼️ **FOTO DO FLUXOGRAMA** | Quadro/placeholder grande no centro do slide com texto: *"[Inserir foto do fluxograma do sistema]"* |
| **Slide 11** | 🖼️ **FOTO DO PROTÓTIPO** | Espaço para print das telas do protótipo (mockup iPhone 15) com texto: *"[Inserir foto do protótipo — telas do usuário]"* |

### 4. Fotos do Protótipo
Além da lacuna no slide 11, os **slides 11 e 12** são para demonstrar o protótipo com imagens.
Sugerir legendas e disposição para prints de tela (estilo iPhone 15 frame).

### 5. Código em C (menção sutil)
No slide de **Contexto do Trabalho** (slide 3), incluir uma linha sutil:
- *Código em C: opcional — grupo optou por não desenvolver*
- Apenas uma linha informativa, sem justificativa longa, sem destaque exagerado.
- Nos demais slides, **não mencionar** código em C.

### 6. Estilo Visual
- Paleta: índigo `#4f46e5` (primária), verde `#10b981` (destaques positivos)
- Fundo claro, fonte sem serifa (Inter ou similar)
- Bullets concisos, no máximo 6 pontos por slide
- Keywords em destaque visual (badge, cor diferente ou ícone)
- **Nada de Times New Roman** — slides modernos, não acadêmicos

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
| **Código em C** | ❌ Cancelado. Não mencionar. |

---

## 2. INTEGRANTES E ATRIBUIÇÕES

| Nº | Nome | Atribuição |
|:--:|:-----|:-----------|
| 1 | **Deivison de Lima Santana** | Documentação, repositório, protótipo de telas (HTML/iPhone 15), proposta |
| 2 | **Raimon Rios da Silva** | Pesquisa de campo, proposta (documento base), problema real |
| 3 | **Ausiane de Oliveira Costa** | Casos existentes (soluções de mercado). Experiência no NAI |
| 4 | **Núbia Rosália de Souza Ramos** | Casos existentes (inclusão, diagnósticos tardios) |
| 5 | **Artur Campos** | Fluxograma do sistema |
| 6 | **Marcos Vinícius dos Santos Sena** | Fluxograma do sistema |
| 7 | **Uélinton Cardoso Santana** | Slides da apresentação |
| 8 | **Wallace Ribeiro Lima** | Slides da apresentação |

---

## 3. PROBLEMA REAL

### Contexto
Filas presenciais afetam bancos, hospitais, faculdades, comércios e repartições públicas em todo o Brasil. O funcionamento é similar e problemático:

1. Usuário chega, recebe senha física (ordem de chegada)
2. Permanece no local sem saber quantos estão à frente
3. Depende de chamadas por alto-falante ou painéis de difícil compreensão
4. Não tem visibilidade do tempo estimado de espera
5. Não pode se ausentar — corre risco de perder a vez
6. PcD auditiva perde chamadas sonoras; baixa visão tem dificuldade com painéis; TEA sofre com excesso de estímulos

### Consequências
- Sensação de injustiça e opacidade
- Ansiedade pela imprevisibilidade
- Aglomeração desnecessária
- Desistência e absenteísmo
- Exclusão de pessoas com deficiência

### Dados de Mercado
- 90% dos consumidores enfrentam filas mensalmente (Waitwhile, 2024)
- 64% enfrentam filas múltiplas vezes por semana
- 61% já abandonaram uma fila antes do atendimento
- Mercado global de QMS: US$ 38,97 bi (2025) → US$ 77,13 bi (2031), CAGR 12,05%
- Sem informações, a duração percebida parece 36% maior (Queberry, 2026)
- Uma loja pode perder US$ 2 milhões/ano com abandono por filas
- Segmento BFSI = ~23,85% do mercado global de QMS

---

## 4. CASOS EXISTENTES

| Sistema | Função | Limitação |
|---------|--------|-----------|
| **NextQS** | Totens de autoatendimento + painéis | Sem previsão de tempo |
| **Fila Online** | Alertas por notificação | Sem painel gestor, sem multissetorial |
| **Vizitor** | Check-in digital, gestão de balcões | Focado em recepção corporativa |

**Lacuna principal:** Nenhuma solução informa o **tempo aproximado de espera** em tempo real. Essa é a oportunidade do MinhaFila.

---

## 5. PROPOSTA — MinhaFila

### Conceito
Sistema de senha virtual com acompanhamento em tempo real, notificações e painéis de gestão, projetado para **múltiplos setores**: bancos, saúde, educação, comércio e governo.

### Jornada do Usuário
1. **Chegada** → Escaneia QR Code ou abre o app
2. **Cadastro rápido** → Nome, telefone, serviço (opcional: acessibilidade)
3. **Senha virtual** → Entra na fila automaticamente
4. **Acompanhamento** → Posição, tempo estimado, pessoas à frente
5. **Notificação** → Alerta quando estiver próximo de ser chamado
6. **Atendimento** → Dirige-se ao guichê na hora certa
7. **Histórico** → Consulta atendimentos anteriores

### Jornada do Gestor
1. Visualiza fila em tempo real
2. Gerencia múltiplos guichês e serviços
3. Chama próximo com um clique
4. Relatórios analíticos de fluxo

### Diferenciais
| Diferencial | Descrição |
|-------------|-----------|
| **Transparência** | Usuário vê posição exata e tempo estimado |
| **Mobilidade** | Aguarda fora do local e é notificado |
| **Multissetorial** | Único sistema para todos os setores |
| **Dados analíticos** | Relatórios de fluxo, picos, tempo médio |
| **Acessibilidade** | Alto contraste, vibração, alertas visuais, modo TEA |
| **Baixa fricção** | Cadastro rápido via QR Code |

### Funcionalidades por Módulo

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

### Etapas do Fluxo

```
1. ENTRADA NO SISTEMA
   Usuário acessa app (web/mobile)
   ├─ Já tem cadastro → Login
   └─ Não tem → Cadastro rápido

2. SOLICITAÇÃO DE ATENDIMENTO
   ├─ Escolhe estabelecimento/unidade
   └─ Seleciona tipo de serviço

3. É PRIORIDADE?
   ├─ Sim → Fila prioritária (idosos, gestantes, PcD, TEA)
   └─ Não → Fila convencional

4. GERAÇÃO DE SENHA
   ├─ Senha única (ex: A-028)
   ├─ Registra horário de entrada
   ├─ Posiciona no final da fila correspondente
   └─ Calcula previsão inicial

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
   ├─ Não compareceu → Retorna à solicitação
   └─ Atendimento concluído → Opção de retorno
```

### Funcionalidades do Sistema
- Entrada (cadastro/login)
- Classificação de fila (comum vs prioritária)
- Algoritmo de chamada (ordem + prioridade legal)
- Notificação antecipada ao 2º usuário
- Painel de acompanhamento
- Cálculo de tempo médio de espera
- Atualização automática da fila
- Feedback loop (não comparecimento + nova solicitação)

---

## 7. PROTÓTIPO DE TELAS

### Telas do Usuário (index.html)
1. **Splash** — Boas-vindas + "Começar"
2. **Onboarding (3 telas)** — Senha virtual, acompanhamento, alertas
3. **Home** — Posição + cards: Retirar senha, Minha fila, Estabelecimentos, Acessibilidade
4. **Escolha do estabelecimento** — 3 opções
5. **Tipo de atendimento** — Comum, Rápido, Prioritário, Retorno, Triagem
6. **Ticket/Senha** — Senha gerada + posição + previsão
7. **Acompanhamento** — Posição atual, previsão, progresso
8. **Alerta de proximidade** — "Faltam 3 pessoas"
9. **Painel público** — Chamada atual + próximas
10. **Acessibilidade** — Switches: contraste, texto ampliado, modo simples, TEA
11. **Histórico** — Senhas anteriores

### Telas do Gestor (admin.html)
1. **Dashboard** — Métricas + chamada atual
2. **Fila completa** — Lista detalhada
3. **Configurações** — Estabelecimento, setor, guichês, acessibilidade

---

## 8. ACESSIBILIDADE

Recurso estrutural do MinhaFila (presente em todo o protótipo):

- **Alto contraste** — Inverte cores para maior legibilidade
- **Texto ampliado** — Aumenta tamanho da fonte
- **Modo simples** — Remove elementos decorativos
- **Alerta visual** — Para pessoas com deficiência auditiva
- **Vibração** — Feedback tátil para chamadas próximas
- **Leitura por voz** — Narração de informações principais
- **Modo TEA** — Redução de estímulos visuais

---

## 9. ARQUITETURA TECNOLÓGICA

| Componente | Tecnologia |
|------------|-----------|
| Frontend (usuário) | Web responsivo PWA |
| Frontend (gestor) | Dashboard web responsivo |
| Painel TV | Página otimizada para telas grandes |
| Backend | API REST |
| Notificações | Push notification via Service Worker |
| Identificação | QR Code estático por estabelecimento |
| Banco de Dados | Relacional |

---

## 10. REFERÊNCIAS BIBLIOGRÁFICAS

- CLEMENTE et al. Barreiras ao acesso das pessoas com deficiência. Rev. Saúde Pública, 2022.
- DARAMOLA; YAHAYA; ABDULLAHI. Evaluating queuing models. MJSAT, 2024.
- GIANNOTTI; LOUVISON; CHIORO. Listas de espera na atenção ambulatorial. Cad. Saúde Pública, 2025.
- GROSS et al. Fundamentals of Queueing Theory. 4.ed. Wiley, 2008.
- HA et al. Digital health equity for people with disability. JMIR, 2023.
- JONSSON et al. eHealth services accessibility. JMIR, 2023.
- MORDOR INTELLIGENCE. Queue Management System Market (2026-2031), 2026.
- QUEBERRY. How long wait times cost you customers, 2026.
- THOMPSON et al. Wait time saving effectiveness of triage algorithms. arXiv, 2023.
- WAITWHILE. Consumer Survey: The State of Waiting in Line, 2024.
- ZHAO; GILBERT. Queuing theory to evaluate service delivery quality. IJQSS, 2025.

---

## 11. ESTRUTURA DOS SLIDES — 15 SLIDES

> ⚠️ **IMPORTANTE:** Siga esta estrutura EXATAMENTE. Cada slide tem função específica. As keywords obrigatórias estão indicadas com 🔑. As lacunas para imagens estão indicadas com 📸.

| # | Slide | Conteúdo Principal | 🔑 Keyword | 📸 Lacuna |
|:-:|:------|:-------------------|:----------:|:---------:|
| 1 | **🎨 ARTE DE CAPA** | Arte visual com nome **MinhaFila**, logotipo conceitual (icone de senha/fila), "GCETENS843 — Projeto Algoritmo I", "Prof. Alex Ferreira", nomes dos **8 integrantes** em grid | — | — |
| 2 | **📋 Agenda** | Tópicos da apresentação com as 3 keywords em destaque visual | — | — |
| 3 | **📋 Contexto do Trabalho** | O que o professor pediu: problema real, casos existentes, proposta, fluxograma, protótipo. Código em C: opcional — grupo optou por não desenvolver | — | — |
| 4 | **🔑 Problema Real** | O problema das filas ineficientes: contexto, dados (90%, 61%, US$ 38bi), consequências | **Problema Real** | — |
| 5 | **📊 Impacto por Setor** | Dados de impacto + setores: bancos (23,85%), comércio (US$ 2mi/loja/ano), saúde, educação, governo | **Problema Real** | — |
| 6 | **🔑 Casos Existentes** | NextQS, Fila Online, Vizitor — tabela com funções e limitações + lacuna principal | **Casos Existentes** | — |
| 7 | **🔑 Proposta: MinhaFila** | Conceito, jornada do usuário (7 passos), jornada do gestor | **Proposta** | — |
| 8 | **🏆 Diferenciais** | 6 diferenciais em destaque: Transparência, Mobilidade, Multissetorial, Dados, Acessibilidade, Baixa Fricção | **Proposta** | — |
| 9 | **📸 Fluxograma — Visão Geral** | **LACUNA central para inserir FOTO DO FLUXOGRAMA.** Quadro grande com borda tracejada e texto "[Inserir foto do fluxograma do sistema]". Abaixo: legenda "Fluxograma desenvolvido por Artur Campos e Marcos Vinícius" | — | ✅ Fluxograma |
| 10 | **🔄 Fluxograma — Lógica** | Explicação textual do algoritmo: entrada → classificação → senha → notificação → atendimento → feedback loop | — | — |
| 11 | **📸 Protótipo — Telas do Usuário** | **LACUNA para FOTO DO PROTÓTIPO.** Espaço para print das telas (mockup iPhone 15). Legenda: "[Inserir foto do protótipo — telas do usuário]". Listar ao lado: Splash, Home, Ticket, Acompanhamento, Alerta, Acessibilidade | — | ✅ Protótipo |
| 12 | **🖥️ Protótipo — Painel Gestor** | Dashboard, fila completa, chamar próximo, configurações. Sugerir print do admin.html | — | — |
| 13 | **♿ Acessibilidade** | 7 recursos: alto contraste, texto ampliado, modo simples, alerta visual, vibração, leitura por voz, modo TEA | — | — |
| 14 | **🎯 Conclusão** | Impacto esperado, limitações, próximos passos, agradecimentos | — | — |
| 15 | **❓ Perguntas** | "Obrigado! Estamos abertos a perguntas." + contato/repositório (QR code sugerido) | — | — |

---

## 12. INSTRUÇÕES DETALHADAS POR SLIDE

### Slide 1 — 🎨 Arte de Capa
- **Título visual:** "MinhaFila — Gestão Inteligente de Espera"
- **Subtítulo:** GCETENS843 — Projeto Algoritmo I | Prof. Alex Ferreira | UFRB/CETENS | 2026.1
- **Arte:** Sugerir ícone grande de senha digital/fila (pode ser um ticket estilizado com números)
- **Grid de integrantes:** 8 nomes em 2 colunas × 4 linhas
- **Cores:** Índigo `#4f46e5` como fundo ou destaque principal, texto branco
- **NÃO colocar lacuna de fluxograma aqui** — o fluxograma tem slide próprio (slide 9)

### Slide 2 — Agenda
- Listar em ordem: Contexto → Problema Real → Casos Existentes → Proposta → Fluxograma → Protótipo → Acessibilidade → Conclusão
- As 3 keywords **Problema Real**, **Casos Existentes** e **Proposta** DEVEM aparecer com destaque visual (badge ou cor diferente)

### Slide 3 — 📋 Contexto do Trabalho
- **Título:** "O Que o Professor Pediu"
- Checklist do enunciado:
  - ✅ Problema real definido
  - ✅ Casos existentes no mercado
  - ✅ Proposta de solução computacional
  - ✅ Fluxograma do sistema
  - ✅ Protótipo de telas
  - ◻️ Código em C: opcional — grupo optou por não desenvolver
- **Tom:** Apenas informativo, uma linha sutil sobre o C (sem justificativa elaborada)
- **Importância:** Mostra que o grupo entendeu e atendeu o enunciado da disciplina

### Slide 4 — 🔑 Problema Real
- **Badge/tag no topo:** "🔑 Problema Real"
- Título: "O Problema das Filas Ineficientes"
- Bullets: 90% enfrentam filas, 61% abandonam, mercado de US$ 38bi
- Dados em destaque: tempo percebido 36% maior, US$ 2mi/ano perdidos por loja
- Frase de impacto: "A espera sem informação parece 36% mais longa do que realmente é"
- Imagem sugerida: ilustração de fila/pessoas esperando

### Slide 5 — 📊 Impacto por Setor
- **Badge/tag no topo:** "🔑 Problema Real"
- Tabela ou cards com setores e dados:
  - 🏦 **Bancos** — 23,85% do mercado global de QMS
  - 🏪 **Comércio** — US$ 2 milhões/loja/ano em perdas
  - 🏥 **Saúde** — Aglomeração e absenteísmo
  - 🏫 **Educação** — Matrículas e secretaria sem previsibilidade
  - 🏛️ **Governo** — Alta demanda + horários restritos
- Ícone/ilustração para cada setor

### Slide 6 — 🔑 Casos Existentes
- **Badge/tag no topo:** "🔑 Casos Existentes"
- Título: "O Que Já Existe no Mercado"
- Tabela comparativa: NextQS / Fila Online / Vizitor
- **Destaque visual:** "Lacuna: Nenhuma solução oferece previsão de tempo de espera em tempo real"

### Slide 7 — 🔑 Proposta: MinhaFila
- **Badge/tag no topo:** "🔑 Proposta"
- Título: "MinhaFila — A Nossa Solução"
- Jornada do usuário em 7 passos (formato linha do tempo ou fluxo horizontal)
- Jornada do gestor em 4 passos

### Slide 8 — Diferenciais
- **Badge/tag no topo:** "🔑 Proposta"
- 6 cards ou colunas com os diferenciais:
  - 🎯 Transparência | 📱 Mobilidade | 🏢 Multissetorial
  - 📊 Dados Analíticos | ♿ Acessibilidade | ⚡ Baixa Fricção

### Slide 9 — 📸 Fluxograma — Visão Geral
- **Título:** "Fluxograma do Sistema"
- **LACUNA:** Quadro grande central (70% do slide) com moldura tracejada e texto central:
  ```
  [ Inserir foto do fluxograma do sistema ]
  ```
- **Legenda abaixo:** "Fluxograma desenvolvido por Artur Campos e Marcos Vinícius dos Santos Sena"
- Elementos mínimos ao redor (setas, indicadores visuais)

### Slide 10 — Fluxograma — Lógica
- **Título:** "Fluxograma — Explicação da Lógica"
- Bullets com as 7 etapas: Entrada → Solicitação → Prioridade → Senha → Notificação → Atendimento → Retorno
- Destacar o algoritmo de chamada e o feedback loop

### Slide 11 — 📸 Protótipo — Telas do Usuário
- **Título:** "Protótipo — Experiência do Usuário"
- **LACUNA:** Moldura de smartphone (iPhone 15) com texto central:
  ```
  [ Inserir foto do protótipo — telas do usuário ]
  ```
- Ao lado: lista das principais telas (Splash, Home, Ticket, Acompanhamento, Alerta, Acessibilidade, Histórico)
- **Legenda:** "Protótipo funcional desenvolvido por Deivison Santana (HTML/CSS/JS — frame iPhone 15)"

### Slide 12 — Protótipo — Painel Gestor
- **Título:** "Protótipo — Painel do Gestor"
- Sugerir print real do admin.html (dashboard)
- Funcionalidades: Dashboard com métricas, fila completa, chamar próximo, configurações
- Layout: imagem grande à esquerda, bullets à direita

### Slide 13 — Acessibilidade
- **Título:** "Acessibilidade Como Diferencial"
- 7 ícones/cards com os recursos
- Frase de destaque: "Inclusão não é adicional — é requisito de produto"

### Slide 14 — Conclusão
- **Título:** "Considerações Finais"
- Impacto esperado: redução de abandono, transparência, inclusão
- Limitações: projeto conceitual, sem backend implementado
- Próximos passos: desenvolvimento full-stack, testes reais, parcerias
- Agradecimento: "Obrigado!"

### Slide 15 — Perguntas
- **Título:** "Perguntas?"
- "Estamos abertos a perguntas!"
- Contato: repositório GitHub (sugerir QR code)
- Links: Hub do projeto, protótipo online

---

## 13. NOTAS DE DESIGN

1. **Capa:** Impactante, use fundo índigo + branco. Fonte grande para o nome.
2. **Paleta:** `#4f46e5` (índigo) principal, `#10b981` (verde) para destaques, `#f8fafc` (fundo claro)
3. **Fontes:** Inter ou similar sem serifa. Nada de Times New Roman.
4. **Keywords:** Sempre com badge visual colorido (índigo ou verde) no topo do slide
5. **Lacunas:** Moldura tracejada em cinza, texto interno em itálico centralizado
6. **Bullets:** Máximo 6 por slide, concisos, sem parágrafos longos
7. **Demonstração ao vivo:** Os slides de protótipo DEVEM abrir o HTML real no navegador. As lacunas são placeholder para caso a demonstração ao vivo falhe.
8. **Código em C:** Menção sutil apenas no slide 3 (Contexto do Trabalho): "opcional — grupo optou por não desenvolver". Não mencionar nos demais slides.
9. **Distribuição das falas:** Todos os 8 integrantes falam. A atribuição está na tabela da seção 2.

---

## 14. FORMATO DE SAÍDA ESPERADO

Para cada slide, gere:
1. **Número e título do slide**
2. **Layout sugerido** (disposição dos elementos: imagem, texto, badge)
3. **Conteúdo textual** (bullet points prontos para copiar)
4. **Notas do apresentador** (fala em linguagem natural, 30s-2min)
5. **Indicação clara das lacunas** com `[colchetes]` para identificar onde inserir imagem

Formato: markdown estruturado, direto, pronto para produção no Google Slides ou PowerPoint.
