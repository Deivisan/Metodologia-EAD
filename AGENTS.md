# AGENTS.md — Metodologia EAD

> ⚡ **Arquivo Autoatualizável**
> Este arquivo será revisado e expandido automaticamente por agentes conforme o contexto do repositório evolui.
> Cada agente que lê este arquivo deve adaptar seu comportamento com base no conteúdo aqui definido.

---

## 🧠 Propósito do Repositório

Repositório destinado à **criação, organização e automação de materiais didáticos para Educação a Distância (EAD)**.
Aqui serão armazenados artefatos acadêmicos, administrativos e pedagógicos de múltiplas disciplinas.

---

## 📂 Estrutura de Diretórios (esperada)

```
Metodologia-EAD/
├── disciplinas/              # Conteúdo por disciplina
│   └── <nome-disciplina>/
│       ├── planos-de-ensino/ # .doc / .docx
│       ├── aulas/            # PDFs, slides
│       ├── atividades/       # Exercícios, provas
│       └── referencias/      # Materiais de apoio
├── templates/                # Modelos reutilizáveis
├── planilhas/                # .xlsx, .csv
├── documentos/               # Documentos gerais (.doc, .docx)
├── agentes/                  # Scripts de automação dos agentes
└── AGENTS.md                 # ← Você está aqui
```

> Esta estrutura é **dinâmica** — novos diretórios podem surgir conforme as necessidades.

---

## 📄 Formatos de Arquivo

Os agentes DEVEM ser capazes de criar e manipular:

| Formato | Extensão | Uso principal |
|---------|----------|---------------|
| Word (antigo) | `.doc` | Documentos legados |
| Word (moderno) | `.docx` | Planos de ensino, relatórios |
| PDF | `.pdf` | Materiais para alunos, aulas |
| Planilha | `.xlsx` | Notas, cronogramas, presenças |
| Markdown | `.md` | Documentação, instruções |
| CSV | `.csv` | Dados tabulares simples |
| JSON | `.json` | Configurações, metadados |
| HTML | `.html` | Recursos web complementares |
| LaTeX | `.tex` | Documentos acadêmicos formais |
| PPTX | `.pptx` | Apresentações de aula |

---

## 🤖 Regras para o Agente

1. **Leia este arquivo primeiro** ao iniciar qualquer tarefa no repositório.
2. **Adapte-se ao contexto**: verifique a estrutura existente antes de criar novos arquivos.
3. **Autoatualização**: se novas disciplinas, formatos ou regras surgirem, **atualize este AGENTS.md** para que agentes futuros herdem o conhecimento.
4. **Nomenclatura consistente**: use `kebab-case` para pastas e diretórios (`plano-de-ensino/`) e descritivo para arquivos (`plano-de-ensino-fundamentos-ead.docx`).
5. **Commits semânticos**:
   - `feat:`, `docs:`, `fix:`, `refactor:`, `chore:`
6. **Documente tudo**: todo artefato gerado deve ter metadados ou instruções de uso.
7. **Crie, mas não destrua**: prefira evoluir arquivos existentes a sobrescrevê-los.

---

## 🧭 Contexto Atual (última atualização)

- **Data da última atualização**: 14/05/2026
- **Status do repositório**: recém-criado, vazio
- **Próximos passos**: definidos pelo agente baseado nas instruções recebidas

---

## 📌 Tags de Contexto para Agentes

Use estas tags nos commits e na documentação para facilitar a busca futura:

- `#ead` — Assuntos gerais de EAD
- `#plano-de-ensino` — Planos de ensino
- `#pdf` — Geração de PDFs
- `#docx` — Documentos Word
- `#planilha` — Planilhas Excel
- `#template` — Modelos reutilizáveis
- `#disciplina` — Conteúdo de disciplina específica
- `#automacao` — Scripts e automações
- `#autoatualizavel` — Conteúdo que deve ser revisado por agentes

---

> ✨ **Mantenha este arquivo vivo.** Sempre que um novo padrão, formato ou disciplina for adicionada, registre aqui para que o próximo agente já saia na frente.
