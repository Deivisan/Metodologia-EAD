# Metodologia EAD

> Repositório de organização, criação e submissão de atividades acadêmicas para **Educação a Distância (EAD)**
> — **UFRB** | Bacharelado em Sistemas de Informação | Semestre 2026.1

---

## 🧭 Contexto

**Aluno:** Deivison de Lima Santana  
**Instituição:** Universidade Federal do Recôncavo da Bahia — UFRB  
**Centro:** Centro de Ciência e Tecnologia — CETENS  
**Curso:** Bacharelado em Sistemas de Informação (EAD)  
**Semestre:** 2026.1 (30/03 a 16/05/2026)  
**Plataforma:** SEAD Moodle — [`ead.ufrb.edu.br`](https://ead.ufrb.edu.br)  
**Automação:** BrowserOS + Composio + scripts CLI

---

## 📚 Disciplinas

| Código | Disciplina | Professor(a) |
|--------|-----------|-------------|
| GCETENS839 | Fundamentos de Sistemas de Informação | Profª. Me. Daiana Conceição Souza |
| GCETENS841 | Algoritmos e Programação I | Luis Paulo Morais Conceição |
| GCETENS842 | Lógica Matemática Discreta | Anderon Melhor Miranda |
| GCETENS843 | Projeto Algoritmo I | A confirmar no Moodle/AVA |

---

## 📁 Estrutura do Repositório

```
Metodologia-EAD/
├── disciplinas/                    # Conteúdo por disciplina
│   ├── gcetens839-fundamentos-si/  # Fundamentos de Sistemas de Informação
│   ├── gcetens841-algoritmos/      # Algoritmos e Programação I
│   ├── gcetens842-logica/          # Lógica Matemática Discreta
│   └── gcetens843-projeto-algoritmo-i/ # Projeto Algoritmo I
├── templates/                      # Modelos reutilizáveis
├── scripts/                        # Automações CLI
├── assets/                         # Logo UFRB e recursos
├── documentos/                     # PPC, relatórios, formulários
├── planilhas/                      # Notas, cronogramas
├── divulgação/                     # Posts, landing pages
└── agentes/                        # Scripts dos agentes
```

---

## 📄 Atividades Concluídas

### ENVIADAS ao Moodle

| Disciplina | Atividade | Arquivo | Status |
|-----------|-----------|---------|--------|
| GCETENS839 | Avaliação 1 - Trilha 1 (Alan Turing) | — | ✅ Enviado pelo aluno |
| GCETENS839 | Avaliação 2 - Trilha 2 (Ada Lovelace) | [`gcetens839-trilha-2-questionario-deivison-de-lima-santana.pdf`](disciplinas/gcetens839-fundamentos-si/atividades/provas/gcetens839-trilha-2-questionario-deivison-de-lima-santana.pdf) | ✅ PDF gerado |
| GCETENS839 | Avaliação 3 - Trilha 3 (Grace Hopper) | [`gcetens839-trilha-3-avaliacao-deivison-de-lima-santana.pdf`](disciplinas/gcetens839-fundamentos-si/atividades/provas/gcetens839-trilha-3-avaliacao-deivison-de-lima-santana.pdf) | ✅ PDF gerado |
| GCETENS839 | Atividade 2 - Lista de Exercícios | — | ✅ Enviado pelo aluno |
| GCETENS842 | Mapa Conceitual (Grafos) | [`gcetens842-mapa-conceitual-deivison-de-lima-santana.pdf`](disciplinas/gcetens842-logica/atividades/exercicios/gcetens842-mapa-conceitual-deivison-de-lima-santana.pdf) | ✅ PDF gerado |
| GCETENS842 | Atividade Indução/Recorrência | [`gcetens842-atividade-inducao-recorencia-deivison-de-lima-santana.pdf`](disciplinas/gcetens842-logica/atividades/exercicios/gcetens842-atividade-inducao-recorencia-deivison-de-lima-santana.pdf) | ✅ PDF gerado |

### AGUARDANDO ENVIO

| Disciplina | Atividade | Vencimento |
|-----------|-----------|------------|
| GCETENS841 | Lista 5 - Vetores em C | 17/05/2026 |
| GCETENS842 | Atividade 6 - Grafos no Cotidiano | 17/05/2026 |
| GCETENS841 | Lista 7 - Funções em C | 31/05/2026 |
| GCETENS841 | Avaliações 1 a 4 (100% Nota) | 31/05/2026 |

---

## 🛠 Stack

| Ferramenta | Versão | Uso |
|-----------|--------|-----|
| **Bun** | 1.3.13 | Scripts de geração |
| **Python** | 3.14 | WeasyPrint, docx, openpyxl, pptx |
| **Pandoc** | 3.6 | Conversão .md ↔ .docx ↔ .pdf |
| **WeasyPrint** | 68.1 | PDF com CSS |
| **BrowserOS** | — | Automação de navegador Moodle |

---

## 📋 Padrão de Arquivos

### Nomenclatura
```
<codigo-disciplina>-<trilha-N>-<tipo-atividade>-<nome-aluno>.<extensao>
```

### Cabeçalho padrão (resumos críticos)
```
UNIVERSIDADE FEDERAL DO RECÔNCAVO DA BAHIA
SUPERINTENDÊNCIA DE EDUCAÇÃO ABERTA E A DISTÂNCIA – SEAD
Bacharelado em Sistemas de Informação

RESUMO CRÍTICO DA TRILHA <N>
<Subtítulo>

Discente: Deivison de Lima Santana
Docente: Profª. Me. Nome
Componente Curricular: GCETENSXXX – Nome
Turma: 2026.1 T01

Feira de Santana – BA
Mês de 2026
```

### Cabeçalho simplificado (atividades)
```
UNIVERSIDADE FEDERAL DO RECÔNCAVO DA BAHIA - UFRB
<Disciplina> - <Semestre>
<ATIVIDADE - TÍTULO>
Discente:
```

---

## 🚀 Pipeline de Geração

```bash
# 1. Criar .md com conteúdo + cabeçalho padrão
# 2. Converter para PDF
pandoc arquivo.md --pdf-engine=weasyprint -o arquivo.pdf
# 3. Verificar páginas (máx 3)
# 4. Submeter via BrowserOS no Moodle SEAD
```

---

## 📌 Links Rápidos

- [AGENTS.md](AGENTS.md) — Documentação completa para agentes
- [Padrão de Submissão](templates/padrao-submissao.md) — Regras detalhadas
- [Script de Geração](scripts/gerar-submissao.js) — Gerador automático
- [Assets UFRB](assets/img/) — Logo oficial 20 anos
