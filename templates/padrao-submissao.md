# PADRÃO DE SUBMISSÃO UFRB — Metodologia EAD

> **Arquivo de referência para criação de TODAS as avaliações**
> Este documento define o padrão obrigatório de cabeçalho, nomenclatura e formatação.

---

## 1. NOMENCLATURA DE ARQUIVOS

```
<codigo-disciplina>-trilha-<N>-<tipo-atividade>-<nome-do-aluno>.<extensao>
```

### Regras:
- Tudo **minúsculo** (linux é case-sensitive)
- Separador: hífen `-`
- Sem acentos, sem cedilha, sem espaços
- Extensão: `.docx` (preferencial) ou `.pdf`
- Nome do aluno em slug: `deivison-de-lima-santana`

### Exemplos:
```
gcetens839-trilha-1-avaliacao-deivison-de-lima-santana.docx
gcetens839-trilha-2-avaliacao-deivison-de-lima-santana.pdf
gcetens841-trilha-7-lista-deivison-de-lima-santana.docx
gcetens839-atividade-2-lista-deivison-de-lima-santana.pdf
```

---

## 2. CABEÇALHO PADRÃO (OBRIGATÓRIO)

```
UNIVERSIDADE FEDERAL DO RECÔNCAVO DA BAHIA — UFRB
CENTRO DE CIÊNCIA E TECNOLOGIA — CETENS
BACHARELADO EM SISTEMAS DE INFORMAÇÃO (EAD)

---

DISCIPLINA: GCETENS839 — Fundamentos de Sistemas de Informação
SEMESTRE: 2026.1
TRILHA: 3 — Grace Hopper

DOCENTE: Daiana Conceição Souza
DISCENTE: Deivison de Lima Santana

ATIVIDADE: Avaliação 3 — Resumo Crítico
DATA DE ENTREGA: 16/05/2026
FORMATO DE ENTREGA: Word (.docx)

---

```

### Campos fixos:
- **Instituição:** UNIVERSIDADE FEDERAL DO RECÔNCAVO DA BAHIA — UFRB
- **Centro:** CENTRO DE CIÊNCIA E TECNOLOGIA — CETENS
- **Curso:** BACHARELADO EM SISTEMAS DE INFORMAÇÃO (EAD)
- **Semestre:** 2026.1
- **Discente:** Deivison de Lima Santana

### Professores por Disciplina:
| Código | Disciplina | Docente |
|--------|-----------|---------|
| GCETENS839 | Fundamentos de Sistemas de Informação | Daiana Conceição Souza |
| GCETENS841 | Algoritmos e Programação I | Luis Paulo Morais Conceição |
| GCETENS842 | Lógica Matemática Discreta | Anderon Melhor Miranda |

---

## 3. ESTRUTURA DO CONTEÚDO

### Para resumos críticos (como Avaliação 3):
```
1. Introdução — Contextualização do tema e pergunta central
2. Desenvolvimento — Análise das leituras e vídeos, articulando conceitos
3. Conclusão — Síntese crítica respondendo à pergunta proposta
4. Referências — Obras citadas no formato ABNT
```

### Para listas de exercícios (como Avaliação 7 - Algoritmos):
```
1. Questão 1 — Enunciado + Resolução
2. Questão 2 — Enunciado + Resolução
...
N. Referências (se houver)
```

---

## 4. LOGO DA INSTITUIÇÃO

A logo da UFRB está disponível em `assets/img/`:
- `logo-ufrb.svg` — Versão oficial SVG
- `favicon-ufrb.ico` — Favicon

Para inserir em documentos .docx, usar a logo SVG convertida para PNG
ou referenciar no cabeçalho do documento.

---

## 5. PIPELINE DE GERAÇÃO

```bash
# 1. Gerar arquivo markdown com cabeçalho padrão
bun run scripts/gerar-submissao.js <disciplina> <trilha> <atividade> --format md

# 2. Editar o .md com o conteúdo da atividade
# 3. Converter para .docx
pandoc arquivo.md -o arquivo.docx

# 4. (Opcional) Converter para .pdf
pandoc arquivo.md -o arquivo.pdf
```

---

> **Última atualização:** 14/05/2026
> **Versão do padrão:** 2.0
