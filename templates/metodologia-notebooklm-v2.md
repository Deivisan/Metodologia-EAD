# 📘 Metodologia NotebookLM 2.0

> **Versão:** 2.0
> **Data:** 15/07/2026
> **Propósito:** Guia padronizado de uso do Google NotebookLM para geração de materiais acadêmicos (slides, resumos, mapas mentais, podcasts, roteiros)

---

## 🔄 Fluxo de Trabalho

```
1. CRIAR prompt markdown no repositório
   │
   ▼
2. CARREGAR como source no NotebookLM
   │
   ▼
3. COLAR prompt no Chat do NotebookLM
   │
   ▼
4. REVISAR resposta (ajustar tom, conteúdo, formato)
   │
   ▼
5. GERAR artefato final no Studio:
   ├── Slide Decks → PowerPoint/Google Slides
   ├── Audio Overview → Podcast (inglês, personalizado)
   ├── FAQ → Perguntas frequentes
   ├── Study Guide → Guia de estudos
   │
   ▼
6. EXPORTAR e salvar no repositório
   │
   ▼
7. SUBMETER via BrowserOS no Moodle SEAD
```

---

## 📂 Estrutura do Prompt Markdown

### Localização no repositório
```
disciplinas/<codigo-disciplina>/
  ├── prompt-notebooklm-<atividade>.md     (na raiz da disciplina)
  └── atividades/
       └── provas/
            └── prompt-notebooklm-<atividade>.md
```

### Seções obrigatórias

| Seção | Conteúdo |
|-------|----------|
| **Cabeçalho** | `# 🎯 Prompt NotebookLM — Nome da Atividade` + instruções de uso |
| **Seção A — Contexto** | Quem é o autor, disciplina, história pessoal, experiência |
| **Seção B — Conteúdo Base** | Temas, matérias, referências, textos (o que o NotebookLM precisa saber) |
| **Seção C — Estrutura do Output** | Quantidade de slides/tópicos, ordem, o que cada um deve conter |
| **Seção D — Regras de Estilo** | Tom de voz, limites de texto, cores, formatação |

---

## 🧠 Boas Práticas (versão 2.0)

### 1. NotebookLM funciona melhor com fontes AUTORAIS
- Em vez de jogar PDFs genéricos, escreva o contexto **com suas palavras**
- O NotebookLM capta melhor o tom pessoal quando a fonte é um texto original seu
- **Regra:** sempre inclua uma seção de contexto pessoal (quem é o autor, o que ele pensa, como ele fala)

### 2. Prompts devem ser DETALHADOS, mas OBJETIVOS
- NotebookLM não é ChatGPT — ele precisa de estrutura clara
- Diga **exatamente** quantos slides, quantos bullets, qual tom
- Use seções numeradas para facilitar a leitura do modelo

### 3. Tom HUMANO é prioridade
- Sempre incluir instruções de tom: "pessoal", "autêntico", "voz de estudante real"
- Especificar se é em primeira ou terceira pessoa
- Proibir linguagem robótica, jargões de IA e frases genéricas

### 4. Studio gera melhor com gatilhos visuais
- Incluir sugestões de layout (4 colunas, grid, capa com imagem)
- Especificar paleta de cores (hex ou nome)
- Indicar onde colocar imagens/ícones com `📸` ou placeholders

### 5. Sempre revisar antes de exportar
- O NotebookLM às vezes "inventa" informações — confira dados citados
- Ajuste o tom se ficou muito formal ou muito informal
- Peça para regenerar trechos específicos se necessário

---

## 🎯 Tipos de Output por Atividade

| Atividade | Output ideal | Studio Feature | Formato Final |
|-----------|-------------|----------------|---------------|
| **Mapa mental / Reflexão crítica** | Slides com reflexão pessoal | Slide Decks | PPTX / PDF |
| **Slides de apresentação** | Slides técnicos com dados | Slide Decks | PPTX |
| **Resumo de conteúdo** | Guia de estudos | Study Guide | PDF / DOCX |
| **Podcast explicativo** | Áudio de discussão | Audio Overview | MP3 |
| **Roteiro de vídeo** | FAQ ou Guia | FAQ / Study Guide | MD / DOCX |

---

## 📌 Lembretes

- [ ] O prompt markdown está salvo no repositório?
- [ ] O contexto pessoal do autor está incluído?
- [ ] A estrutura do output está clara (quantos slides, ordem)?
- [ ] As regras de tom/estilo estão especificadas?
- [ ] O NotebookLM gerou algo próximo do esperado?
- [ ] A revisão humana foi feita?
- [ ] O commit foi semântico (`feat: prompt notebooklm ...`)?
