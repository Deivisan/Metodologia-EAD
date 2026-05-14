# PADRÃO DE SUBMISSÃO UFRB — Metodologia EAD

> **Baseado na análise de documentos reais baixados do Moodle:**
> - Resumo Crítico - Trilha 1 (PDF real enviado)
> - Atividade 2 - Álgebra de Conjuntos (DOCX real)
> - Lista 5 - Vetores (PDF da disciplina)
> - Lista 7 - Funções em C (PDF da disciplina)

---

## 1. NOMENCLATURA DE ARQUIVOS

```
<codigo-disciplina>-trilha-<N>-<tipo-atividade>-<nome-do-aluno>.<extensao>
```

**Regras:**
- Tudo **minúsculo**, sem acentos
- Separador: hífen `-`
- Extensão: `.pdf` (preferencial) ou `.docx`
- Nome aluno em slug: `deivison-de-lima-santana`

**Exemplos:**
```
gcetens839-trilha-3-avaliacao-deivison-de-lima-santana.pdf
gcetens839-atividade-2-lista-deivison-de-lima-santana.pdf
gcetens841-trilha-5-lista-deivison-de-lima-santana.docx
```

---

## 2. CABEÇALHO — TRILHAS / RESUMOS CRÍTICOS

*Baseado no arquivo real: Resumo Crítico Trilha 1*

```
UNIVERSIDADE FEDERAL DO RECÔNCAVO DA BAHIA
SUPERINTENDÊNCIA DE EDUCAÇÃO ABERTA E A DISTÂNCIA – SEAD
Bacharelado em Sistemas de Informação

RESUMO CRÍTICO DA TRILHA <N>
<Subtítulo>

Discente: Deivison de Lima Santana
Docente: Profª. Me. Daiana Conceição Souza
Componente Curricular: GCETENS839 – Fundamentos de Sistemas de Informação
Turma: 2026.1 T01

Feira de Santana – BA
Maio de 2026
```

### Observações:
- **Docente** usa título acadêmico: `Profª. Me.`, `Prof. Dr.`, etc.
- **Superintendência** é SEAD, não CETENS
- Inclui **cidade e mês/ano** no final
- Título em caixa alta: `RESUMO CRÍTICO DA TRILHA N`
- Subtítulo explicativo abaixo

---

## 3. CABEÇALHO — ATIVIDADES / LISTAS

*Baseado nos arquivos reais: Atividade_2.docx, Lista_5_VETOR.pdf, Lista_7_FUNCAO.pdf*

```
Universidade Federal do Recôncavo da Bahia
Superintendência de Educação Aberta e a Distância

Sistemas de Informação (EaD) - UFRB
Componente curricular: <Nome da Disciplina>
<tipo> - <Título>
<Semana/Período>
Prof. <Nome>

Atividade a ser entregue/enviada no dia <data>: <valor da nota>
```

**Ou versão simplificada (Atividade_2.docx):**
```
UNIVERSIDADE FEDERAL DO RECÔNCAVO DA BAHIA - UFRB
<Disciplina> - <Semestre>
<tipo> - <TÍTULO>
Discente:
```

---

## 4. ESTRUTURA DO CONTEÚDO — RESUMO CRÍTICO (max 3 páginas)

```
1. Introdução — Contexto + pergunta central (1 parágrafo)
2. Desenvolvimento — Análise articulando autores (2-3 seções)
3. Conclusão — Síntese crítica respondendo à pergunta
— Referências (formato ABNT)
```

### Regras de tamanho:
- **Máximo 3 páginas** (exigência do professor)
- Fonte: Times New Roman ou similar, 12pt
- Espaçamento 1.5
- Margens 3cm (padrão ABNT)

---

## 5. PROFESSORES CONFIRMADOS

| Código | Disciplina | Docente |
|--------|-----------|---------|
| GCETENS839 | Fundamentos de Sistemas de Informação | Profª. Me. Daiana Conceição Souza |
| GCETENS841 | Algoritmos e Programação I | (verificar no Moodle atual) |
| GCETENS842 | Lógica Matemática Discreta | Anderon Melhor Miranda |

---

## 6. LOGO DA INSTITUIÇÃO

Disponível em `assets/img/`:
- `logo-ufrb-20-anos.png` — Logo oficial com selo comemorativo 20 anos (obrigatório desde Portaria nº 896/2025)
- `logo-ufrb.svg` — Versão SVG

---

## 7. PIPELINE DE GERAÇÃO

```bash
# 1. Gerar markdown com cabeçalho correto
# 2. Converter para PDF (max 3 paginas)
pandoc arquivo.md --pdf-engine=weasyprint -o arquivo.pdf

# 3. Verificar numero de paginas
# 4. Submeter via BrowserOS no Moodle SEAD
```

---

> **Última atualização:** 14/05/2026
> **Versão do padrão:** 3.0 (baseado em documentos reais)
