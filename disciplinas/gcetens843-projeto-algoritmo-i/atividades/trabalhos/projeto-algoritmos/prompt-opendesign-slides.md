# 🎯 Prompt para Open Design — Criar Slides Apresentação MinhaFila

> **Instrução:** Use este prompt no **Open Design** (`start_run`) para gerar a apresentação de slides.
> O Open Design produz HTML/CSS/JS nativo — crie um **deck de slides interativo em HTML** que rode no navegador, com navegação por setas do teclado, como uma apresentação real.
> **Commit hash de referência:** `9a8ae93` (main)

---

## 📡 CONTEXTO — Buscar via Web Fetch

Antes de começar, busque o conteúdo completo destes arquivos no GitHub (raw):

### Contexto Consolidado (contém tudo: problema, casos, proposta, fluxograma, protótipo, estrutura)
```
https://raw.githubusercontent.com/Deivisan/Metodologia-EAD/9a8ae93/disciplinas/gcetens843-projeto-algoritmo-i/atividades/trabalhos/projeto-algoritmos/prompt-notebook-lm-slides.md
```

### Roteiro de Falas (distribuição dos apresentadores)
```
https://raw.githubusercontent.com/Deivisan/Metodologia-EAD/9a8ae93/disciplinas/gcetens843-projeto-algoritmo-i/atividades/trabalhos/projeto-algoritmos/roteiro-apresentacao.md
```

### Problema Real (texto completo)
```
https://raw.githubusercontent.com/Deivisan/Metodologia-EAD/9a8ae93/disciplinas/gcetens843-projeto-algoritmo-i/atividades/trabalhos/projeto-algoritmos/problema-real.md
```

### Proposta (texto completo)
```
https://raw.githubusercontent.com/Deivisan/Metodologia-EAD/9a8ae93/disciplinas/gcetens843-projeto-algoritmo-i/atividades/trabalhos/projeto-algoritmos/proposta.md
```

### Index Geral (visão geral do projeto)
```
https://raw.githubusercontent.com/Deivisan/Metodologia-EAD/9a8ae93/disciplinas/gcetens843-projeto-algoritmo-i/atividades/trabalhos/projeto-algoritmos/Index-Geral.md
```

> Cole estas URLs no seu contexto para ter acesso a todo o conteúdo do projeto MinhaFila.

---

## 📋 ESPECIFICAÇÃO DOS SLIDES — 15 Slides

### Regras Obrigatórias

1. **Slide 1 (Capa):** Arte visual com nome **MinhaFila**, logotipo conceitual (ícone de senha/fila), "GCETENS843 — Projeto Algoritmo I", "Prof. Alex Ferreira | UFRB/CETENS | 2026.1", nomes dos **8 integrantes** em grid (2×4)

2. **Palavras-chave em destaque visual** (badge colorido no topo do slide):
   - 🔑 **Problema Real** → slides 4 e 5
   - 🔑 **Casos Existentes** → slide 6
   - 🔑 **Proposta** → slides 7 e 8

3. **2 Lacunas para imagens** (espaços reservados visíveis com borda tracejada):
   - **Slide 9:** Lacuna central grande para inserir **FOTO DO FLUXOGRAMA**
   - **Slide 11:** Lacuna com moldura de smartphone para inserir **FOTO DO PROTÓTIPO**

4. **Código em C:** Menção sutil apenas no slide 3: "opcional — grupo optou por não desenvolver"

5. **Estilo:**
   - Paleta: índigo `#4f46e5` (primária), verde `#10b981` (destaques), fundo claro `#f8fafc`
   - Fonte: Inter ou similar sem serifa (NUNCA Times New Roman)
   - Bullets: máximo 6 por slide, concisos
   - Ícones visuais em cada slide
   - Totalmente responsivo (deve funcionar em apresentação de tela cheia)

---

## 🎬 ESTRUTURA SLIDE A SLIDE

### Slide 1 — 🎨 Arte de Capa
- **Arte:** Nome "MinhaFila" grande em destaque com ícone de senha/fila
- Fundo índigo `#4f46e5`, texto branco
- Subtítulo: GCETENS843 — Projeto Algoritmo I | Prof. Alex Ferreira | UFRB/CETENS | 2026.1
- **Grid 2×4** com os 8 integrantes:
  Deivison Santana, Raimon Rios, Ausiane Costa, Núbia Ramos,
  Artur Campos, Marcos Sena, Uélinton Santana, Wallace Lima
- **Transição:** fade in

### Slide 2 — 📋 Agenda
- Título: "Agenda"
- Lista: Contexto → Problema Real → Casos Existentes → Proposta → Fluxograma → Protótipo → Acessibilidade → Conclusão
- As 3 keywords em badges coloridos
- Design limpo com timeline vertical ou cards horizontais

### Slide 3 — 📋 Contexto do Trabalho
- Título: "O Que o Professor Pediu"
- Checklist visual:
  - ✅ Problema real definido
  - ✅ Casos existentes no mercado
  - ✅ Proposta de solução computacional
  - ✅ Fluxograma do sistema
  - ✅ Protótipo de telas
  - ◻️ Código em C: opcional — grupo optou por não desenvolver (sutil, cinza)
- Data: 29/06/2026 — Apresentação AO VIVO (vale 10 pts)

### Slide 4 — 🔑 Problema Real
- **Badge:** 🔑 Problema Real
- Título: "O Problema das Filas Ineficientes"
- Números grandes em destaque visual:
  - 90% dos consumidores enfrentam filas mensalmente
  - 61% já abandonaram filas antes do atendimento
  - US$ 38,97 bi → US$ 77,13 bi (mercado QMS 2025→2031)
- Frase de impacto: "A espera sem informação parece 36% mais longa"
- Ilustração: fila de pessoas esperando

### Slide 5 — 📊 Impacto por Setor
- **Badge:** 🔑 Problema Real
- Título: "Impacto em Diferentes Setores"
- Cards por setor:
  - 🏦 **Bancos** — 23,85% do mercado global de QMS
  - 🏪 **Comércio** — US$ 2 milhões/loja/ano em perdas
  - 🏥 **Saúde** — Aglomeração e absenteísmo
  - 🏫 **Educação** — Matrículas sem previsibilidade
  - 🏛️ **Governo** — Demanda alta + horários restritos
- Grade 3+2 ou 5 colunas com ícones

### Slide 6 — 🔑 Casos Existentes
- **Badge:** 🔑 Casos Existentes
- Título: "O Que Já Existe no Mercado"
- Tabela comparativa visual:

| Sistema | O que faz | Limitação |
|---------|-----------|-----------|
| **NextQS** | Totens + painéis | Sem previsão de tempo |
| **Fila Online** | Notificações | Sem painel gestor |
| **Vizitor** | Check-in digital | Só recepção corporativa |

- **Destaque:** "Lacuna: nenhuma oferece previsão de tempo de espera em tempo real"
- Ilustração de lupa/scan no mercado

### Slide 7 — 🔑 Proposta: MinhaFila
- **Badge:** 🔑 Proposta
- Título: "MinhaFila — A Nossa Solução"
- **Conceito:** Senha virtual com acompanhamento em tempo real
- Jornada do usuário em **7 passos** (horizontal, tipo timeline):
  1. 📱 Chegada → QR Code
  2. ⚡ Cadastro rápido
  3. 🎫 Senha virtual
  4. 👀 Acompanhamento
  5. 🔔 Notificação
  6. ✅ Atendimento
  7. 📋 Histórico

### Slide 8 — 🏆 Diferenciais
- **Badge:** 🔑 Proposta
- Título: "Nossos Diferenciais"
- 6 cards em grid 3×2:
  - 🎯 **Transparência** — Posição exata + tempo estimado
  - 📱 **Mobilidade** — Aguarde fora, seja notificado
  - 🏢 **Multissetorial** — Um sistema para todos
  - 📊 **Dados Analíticos** — Relatórios de fluxo
  - ♿ **Acessibilidade** — Inclusão como requisito
  - ⚡ **Baixa Fricção** — QR Code + cadastro rápido

### Slide 9 — 📸 Fluxograma — Visão Geral
- Título: "Fluxograma do Sistema"
- **🖼️ LACUNA:** Quadro central grande (70% da largura) com moldura tracejada cinza e texto centralizado:
  ```
  [ Inserir foto do fluxograma do sistema ]
  ```
- Legenda: "Fluxograma desenvolvido por Artur Campos e Marcos Vinícius"
- Setas decorativas ao redor indicando fluxo

### Slide 10 — 🔄 Fluxograma — Lógica
- Título: "Fluxograma — Explicação da Lógica"
- 7 etapas em formato de fluxo vertical:
  1. Entrada → Cadastro/Login
  2. Solicitação → Estabelecimento + Serviço
  3. É prioridade? → Sim/Não (bifurcação)
  4. Geração de senha + previsão
  5. Chamada e notificação antecipada
  6. Atendimento → Remoção da fila
  7. Feedback loop (não comparecimento → retorno)
- Destacar: notificação antecipada ao 2º usuário

### Slide 11 — 📸 Protótipo — Telas do Usuário
- Título: "Protótipo — Experiência do Usuário"
- **🖼️ LACUNA:** Moldura de smartphone (iPhone 15) com texto central:
  ```
  [ Inserir foto do protótipo — telas do usuário ]
  ```
- Ao lado: lista das telas (Splash, Home, Ticket, Acompanhamento, Alerta, Acessibilidade, Histórico)
- Legenda: "Protótipo funcional — Deivison Santana (HTML/CSS/JS)"

### Slide 12 — 🖥️ Protótipo — Painel Gestor
- Título: "Protótipo — Painel do Gestor"
- Layout: imagem grande à esquerda, bullets à direita
- Funcionalidades:
  - 📊 Dashboard com métricas (total, espera, atendidos, tempo médio)
  - 📋 Fila completa por guichê
  - 🔄 Chamar próximo com um clique
  - ⚙️ Configurações (setor, guichês, acessibilidade)
- Sugerir print real do admin.html

### Slide 13 — ♿ Acessibilidade
- Título: "Acessibilidade Como Diferencial"
- 7 cards de recursos:
  - 🔲 Alto contraste
  - 🔠 Texto ampliado
  - 🧩 Modo simples
  - 👁️ Alerta visual
  - 📳 Vibração
  - 🔊 Leitura por voz
  - 🧘 Modo TEA
- Frase: "Inclusão não é adicional — é requisito de produto"

### Slide 14 — 🎯 Conclusão
- Título: "Considerações Finais"
- Checklist de entregas:
  - ✅ Problema real fundamentado
  - ✅ Lacuna de mercado mapeada
  - ✅ Proposta viável e multissetorial
  - ✅ Fluxograma documentado
  - ✅ Protótipo funcional
- 🔮 **Próximos passos:** Backend, testes reais, validação em campo
- "Agradecemos a atenção de todos!"

### Slide 15 — ❓ Perguntas
- Título: "Perguntas?"
- "Estamos abertos a perguntas!"
- QR code (placeholder visual) + link:
  - Repositório: https://github.com/Deivisan/Metodologia-EAD
  - Hub do projeto: https://deivisan.github.io/Metodologia-EAD/minhafila/
  - Protótipo: prototipo-minhafila/index.html
- Fundo índigo, texto branco

---

## 🎨 DESIGN SYSTEM

| Token | Valor |
|-------|-------|
| **Primária** | `#4f46e5` (índigo) |
| **Destaque** | `#10b981` (verde) |
| **Fundo** | `#f8fafc` (claro) |
| **Texto** | `#1e293b` (escuro) |
| **Badge keyword** | `#4f46e5` bg, white text |
| **Lacuna borda** | `#cbd5e1` tracejada |
| **Fonte** | Inter, system-ui, sans-serif |
| **Título slide** | 32px, bold |
| **Bullets** | 18-20px |
| **Transições** | Slide horizontal com setas do teclado |

---

## 🚀 FORMATO DE SAÍDA

1. **Arquivo HTML único** com CSS/JS embutido
2. Navegação por setas do teclado (← →) ou clique
3. Tela cheia (fullscreen)
4. Funcionalidades:
   - Badges das keywords no topo
   - Lacunas visíveis com borda tracejada
   - Animações suaves de transição
   - Responsivo (funciona em qualquer tela)
5. Nome do arquivo: `index.html` (para ser o entry file do projeto Open Design)
6. **Slides com muito texto DEVEM ter layout limpo** — prefira cards, ícones e números grandes

---

> 💡 **Dica:** Se o Open Design tiver limitação de tokens por arquivo, foque em gerar os 15 slides com o conteúdo principal e design funcional. O contexto completo está nos links raw do GitHub.
