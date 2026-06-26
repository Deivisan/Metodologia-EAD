# Index Geral — FilaClara

> **Core do grupo:** este arquivo é o ponto de partida. Fixado no grupo do WhatsApp para que qualquer integrante entenda rapidamente o projeto, encontre os documentos certos e saiba o que já foi feito e o que ainda precisa ser entregue.

---

![Foto do grupo](imagens-grupo/nova-foto-grupo.png)

> *Grupo: Deivison, Ausiane, Rios, Artur, Uélinton, Nubia e Marcos Vinicius. Wallace ainda não mandou imagem — bora, Wallace! 😅*

---

## 1. Resumo do Projeto

| Campo | Informação |
|:------|:-----------|
| **Nome oficial** | **FilaClara** ✅ |
| **Instituição** | UFRB — Universidade Federal do Recôncavo da Bahia |
| **Curso** | Bacharelado em Sistemas de Informação (EAD) |
| **Disciplina** | GCETENS843 — Projeto Algoritmo I |
| **Semestre** | 2026.1 |
| **Tema** | Filas Inteligentes em Serviços de Saúde com Foco em Acessibilidade |
| **Apresentação final** | **29/06/2026 às 20h (AO VIVO)** |
| **Dias restantes** | **4 dias ⏳** |

> 📄 [Tema completo](tema-escolhido.md) · [Divisão de tarefas](divisao-de-tarefas.md) · [Decisões do projeto](decisoes.md) · [Protótipo ao vivo](prototipo-filaclara-opendesigner/index.html)

---

## 2. Integrantes e Tarefas

| # | Integrante | Tarefas | Status |
|:-:|:-----------|:--------|:------:|
| 🧠 | **Deivison** | Proposta + Documentação + Repositório | ✅ Ativo |
| 🏥 | **Rios** | Pesquisa + Proposta (experiência em saúde) | ✅ Ativo |
| ♿ | **Ausiane** | Casos Existentes + Protótipo (design e acessibilidade) | ✅ Ativo |
| 📚 | **Nubia** | Pesquisa + Casos Existentes (inclusão) | ✅ Ativo |
| 📊 | **Artur** | Fluxograma (perfil técnico) | ✅ Ativo |
| 🆕 | **Marcos Vinicius** | Fluxograma | ✅ Ativo |
| 🎤 | **Uélinton** (Uélinton Cardoso Santana) | Protótipo + Slides | ✅ Ativo |
| 👤 | **Wallace** | Slides (apoio) | ⏳ Pendente |

> 📋 [Divisão de tarefas completa com justificativas](divisao-de-tarefas.md)

---

## 3. O Que o Professor Pediu

| Item | Obrigatório? | Status |
|:-----|:------------:|:------:|
| Problema real definido | ✅ Sim | ✅ **Feito** |
| Casos existentes (mercado) | ✅ Sim | 🔄 Em andamento |
| Proposta/solução inovadora | ✅ Sim | 🔄 Em andamento |
| Fluxograma do sistema | ✅ Sim | ✅ **Feito** |
| Protótipo de telas (mockups) | ✅ Sim | 🔄 Em andamento |
| Apresentação AO VIVO | ✅ Sim | **29/06 às 20h** |
| Código em C | ❌ **Cancelado** | Decisão do grupo em 12/06 |

---

## 4. Roadmap — Status Geral (25/06/2026)

### ✅ Pronto

| Etapa | Arquivo(s) | Responsável |
|:------|:-----------|:-----------:|
| Tema escolhido | [`tema-escolhido.md`](tema-escolhido.md) | Deivison |
| Tarefas distribuídas | [`divisao-de-tarefas.md`](divisao-de-tarefas.md) | Deivison |
| Decisões registradas | [`decisoes.md`](decisoes.md) | Deivison |
| Nome oficial definido | **FilaClara** (enquete encerrada) | Grupo |
| Histórico do WhatsApp | [`historico-whatsapp.json`](historico-whatsapp.json) (519 msgs) | Deivison |
| Problema real (Rios) | [`problema-real.md`](problema-real.md) | Rios |
| Fluxograma do sistema | [`fluxograma.md`](fluxograma.md) + [`assets/fluxograma.jpeg`](assets/fluxograma.jpeg) | Deivison (refatorado) |
| Protótipo interativo | [`prototipo-filaclara-opendesigner/index.html`](prototipo-filaclara-opendesigner/index.html) + [admin.html](prototipo-filaclara-opendesigner/admin.html) | Open Designer |

### 🔄 Em andamento

| O quê | Responsáveis | Onde |
|:------|:-------------|:-----|
| Casos existentes | Ausiane + Nubia | [Google Doc](https://docs.google.com/document/d/1mSFvxPnuMh5f13xKnHx1B3A1n4uhkBJokg0afE9Tdgw/edit?usp=sharing) |
| Proposta e diferencial | Deivison + Rios | [`proposta.md`](proposta.md) |

### 🔒 Pendente (prazo: 28-29/06)

| O quê | Responsáveis | Prazo |
|:------|:-------------|:-----:|
| Protótipo de telas (Figma) | Ausiane + Uélinton | 28/06 |
| Slides da apresentação (.pptx) | Uélinton + Wallace | 28/06 |
| Roteiro de apresentação | Uélinton + Wallace | 28/06 |

---

## 5. ⚡ PRIORIDADE: Materiais Acadêmicos Finais

> **Faltam 4 dias para a apresentação.** Precisamos dos materiais nos **formatos corretos** para submissão e apresentação.

### Pipeline de Geração

Cada documento `.md` precisa ser convertido para o formato acadêmico adequado:

| Documento | Formato de entrega | Conversão | Status |
|:----------|:-------------------|:----------|:------:|
| **Problema Real** | `.docx` (Word ABNT) | `pandoc` | ⏳ Converter |
| **Casos Existentes** | `.docx` (Word ABNT) | `pandoc` | ⏳ Aguardando conteúdo |
| **Proposta** | `.docx` (Word ABNT) | `pandoc` | ⏳ Finalizar + converter |
| **Fluxograma** | `.pdf` + `.jpeg` + `.docx` | `pandoc` + `img` | 🔄 Fazer `.pdf` e `.docx` |
| **Protótipo** | PDF com prints + link Figma | Screenshot | ⏳ Aguardando Figma |
| **Slides** | `.pptx` (PowerPoint) | `python-pptx` | ⏳ Criar |
| **Roteiro** | `.docx` (Word) | `pandoc` | ⏳ Criar |
| **Relatório do Projeto** | `.docx` + `.pdf` (ABNT) | `pandoc` + `weasyprint` | ⏳ Consolidar |

### Scripts de Automação Disponíveis

```bash
# Converter .md → .docx (Word)
pandoc arquivo.md -o arquivo.docx

# Converter .md → .pdf (ABNT, da raiz do repo)
pandoc arquivo.md -o arquivo.pdf \
  --pdf-engine=weasyprint \
  -c templates/abnt-template.css

# Gerar slides .pptx (via script Python)
python3 scripts/gerar-slides.py
```

> 📁 Modelos e templates em [`templates/`](../../../../../templates/) (ABNT, CSS, logo UFRB)

---

## 6. Status Atual (25/06/2026)

### ✅ Enquete de nomes — ENCERRADA
O nome escolhido é **FilaClara**! 🎉
- Enquete: [Google Forms](https://docs.google.com/forms/d/1WUZeQXdwwt9bzunqKoV18Fd1V8pdRj_dJxyWlW9CVEw)
- Sugestões: FilaAcessível (Deivison), Sistema Inteligente de Gestão de Filas... (Rios), Minha Fila (Marcos)
- **Vencedor: FilaClara** (já em uso no protótipo)

### ✅ Fluxograma finalizado
Fluxo completo documentado em [`fluxograma.md`](fluxograma.md) com base no JPEG original.

### ✅ Uélinton confirmado
Nome completo: **Uélinton Cardoso Santana**

### ✅ Histórico do WhatsApp
519 mensagens (05/06 a 25/06) em [`historico-whatsapp.json`](historico-whatsapp.json)

### ✅ GitHub Pages ativo
🌐 https://deivisan.github.io/Metodologia-EAD/

---

## 7. O Que Já Está Sólido

- ✅ Tema escolhido + acessibilidade como pilar obrigatório
- ✅ Problema real definido com fundamentação em literatura (Aggarwal, Chianca, Clemente, Farias, Giannotti, Ha, Jonsson, Kessel, Melo, Thompson etc.)
- ✅ Pergunta central: *"Como reduzir o tempo de permanência física dos usuários nas unidades de saúde e aumentar a previsibilidade do atendimento por meio de uma solução digital acessível e inclusiva?"*
- ✅ Código em C cancelado oficialmente (decisão do grupo em 12/06)
- ✅ Divisão de tarefas equilibrada (8 integrantes)
- ✅ Esclarecimento da tutora Lorena sobre "casos existentes": analisar soluções já existentes no mercado e propor melhorias

---

## 8. Links Rápidos

| O que procura? | Link |
|:---------------|:-----|
| 🌐 Site do projeto (GitHub Pages) | https://deivisan.github.io/Metodologia-EAD/ |
| 📱 Protótipo FilaClara | [`prototipo-filaclara-opendesigner/index.html`](prototipo-filaclara-opendesigner/index.html) |
| 🏥 Painel da clínica | [`prototipo-filaclara-opendesigner/admin.html`](prototipo-filaclara-opendesigner/admin.html) |
| 📄 Tema completo | [`tema-escolhido.md`](tema-escolhido.md) |
| 👥 Divisão de tarefas | [`divisao-de-tarefas.md`](divisao-de-tarefas.md) |
| 📋 Decisões do projeto | [`decisoes.md`](decisoes.md) |
| 📊 Fluxograma | [`fluxograma.md`](fluxograma.md) |
| 🧾 Proposta | [`proposta.md`](proposta.md) |
| 🔍 Problema real (Rios) | [`problema-real.md`](problema-real.md) |
| 🎨 Identidade visual | [`Identidade-visual.md`](Identidade-visual.md) |
| 📜 Histórico WhatsApp | [`historico-whatsapp.json`](historico-whatsapp.json) |
| 📚 Documentação geral | [`documentacao-geral-projeto-algoritmos.md`](documentacao-geral-projeto-algoritmos.md) |
| 🖼️ Imagens do grupo | [`imagens-grupo/`](imagens-grupo/) |

---

## 9. Regras do Repositório

- 📌 Este link está fixado no grupo do WhatsApp
- 📁 Todo novo documento deve ser linkado aqui
- 🔒 Não publique telefones, senhas ou dados pessoais
- 💬 Dúvidas? Pergunte no grupo do WhatsApp
- 📝 Todo material final deve ser convertido para `.docx` ou `.pdf` antes da entrega

---

> **Resumo para a apresentação (29/06 às 20h):**
> - Problema real sólido e fundamentado
> - Acessibilidade como diferencial central (TEA, auditiva, visual, idosos, gestantes)
> - Foco total nos entregáveis obrigatórios (sem Código em C)
> - Equipe completa com 8 integrantes
> - Nome oficial: **FilaClara** ✅
> - **⚠️ PRIORIDADE: converter todos os materiais para formatos acadêmicos (docx, pdf, pptx)**

---

*Última atualização: 25/06/2026 — nome oficial definido (FilaClara), enquete encerrada, fluxograma finalizado, prioridade em materiais acadêmicos.*
