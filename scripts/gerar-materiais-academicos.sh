#!/usr/bin/env bash
# ============================================================
# gerar-materiais-academicos.sh
# Pipeline de conversão dos documentos .md para formatos
# acadêmicos: .docx (Word), .pdf (ABNT), .pptx (slides)
# ============================================================
# Uso: bash scripts/gerar-materiais-academicos.sh
# Executar DA RAIZ do repositório (/home/deivi/Projetos/Metodologia-EAD)
# ============================================================

set -euo pipefail

RAIZ="$(pwd)"
TEMPLATES="$RAIZ/templates"
CSS_ABNT="$TEMPLATES/abnt-template.css"
LOGO="$TEMPLATES/logo-ufrb-20-anos.png"
PROJETO="$RAIZ/disciplinas/gcetens843-projeto-algoritmo-i/atividades/trabalhos/projeto-algoritmos"
FILTRO="$TEMPLATES/strip-emoji.lua"

# Função: pré-processa markdown (remove linhas de status/to-do/AI fluff)
# e roda pandoc com filtro de emoji, DENTRO do diretório do projeto
# para paths relativos do markdown funcionarem (assets/fluxograma.jpeg etc.)
pandoc_clean() {
  local src="$1"
  local dst="$2"
  shift 2
  local dir
  dir="$(dirname "$src")"
  local file
  file="$(basename "$src")"
  local tmpfile
  tmpfile="$(mktemp /tmp/pandoc-clean-XXXXXX.md)"

  # Pré-processamento: remove linhas de working-document / AI fluff
  # Regras:
  #  1. Remove TODOS os blockquotes (linhas começando com >)
  #     (são usados pra metadados de working-document, anotações, navegação)
  #  2. Remove linhas de checklist ( [ ], [x], [✅], etc.)
  #  3. Remove linhas "Nome do arquivo:" 
  #  4. Remove linhas de separador --- que ficam soltas
  #  5. Remove linhas de link de navegação tipo "🔗 [Voltar ao"
  sed -E \
    -e '/^>/d' \
    -e '/^\[.?\]/d' \
    -e '/Nome do arquivo:/d' \
    -e '/^Sugestões da enquete:/d' \
    -e '/^Vencedor:/d' \
    -e '/^---$/d' \
    -e '/🔗/d' \
    -e '/↩/d' \
    -e '/^Sugestões da enquete:/d' \
    "$dir/$file" > "$tmpfile"

  cd "$dir"
  pandoc "$tmpfile" \
    --lua-filter="$FILTRO" \
    -o "$dst" \
    "$@"
  cd "$RAIZ"
  rm -f "$tmpfile"
}

echo "============================================"
echo "  Gerando Materiais Acadêmicos - MinhaFila  "
echo "============================================"
echo ""

# 1. Fluxograma → .docx
echo "[1/6] Fluxograma → .docx..."
pandoc_clean "$PROJETO/fluxograma.md" \
  "$PROJETO/fluxograma.docx" \
  --metadata title="Fluxograma - MinhaFila"

# 2. Fluxograma → .pdf (ABNT)
echo "[2/6] Fluxograma → .pdf (ABNT)..."
pandoc_clean "$PROJETO/fluxograma.md" \
  "$PROJETO/fluxograma.pdf" \
  --pdf-engine=weasyprint \
  -c "$CSS_ABNT" \
  --resource-path="$PROJETO" \
  --metadata title="Fluxograma do Sistema MinhaFila"

# 3. Problema Real → .docx
echo "[3/6] Problema Real → .docx..."
if [ -f "$PROJETO/problema-real.md" ]; then
  pandoc_clean "$PROJETO/problema-real.md" \
    "$PROJETO/problema-real.docx" \
    --metadata title="Problema Real - MinhaFila"
else
  echo "  ⚠️  problema-real.md não encontrado. Pulando."
fi

# 4. Proposta → .docx + .pdf
echo "[4/8] Proposta → .docx..."
if [ -f "$PROJETO/proposta.md" ]; then
  pandoc_clean "$PROJETO/proposta.md" \
    "$PROJETO/proposta.docx" \
    --metadata title="Proposta - MinhaFila"
  echo "[5/8] Proposta → .pdf (ABNT)..."
  pandoc_clean "$PROJETO/proposta.md" \
    "$PROJETO/proposta.pdf" \
    --pdf-engine=weasyprint \
    -c "$CSS_ABNT" \
    --resource-path="$PROJETO" \
    --metadata title="Proposta - MinhaFila"
else
  echo "  ⚠️  proposta.md não encontrado. Pulando."
fi

# 5. Problema Real → .pdf (ABNT)
echo "[6/8] Problema Real → .pdf (ABNT)..."
if [ -f "$PROJETO/problema-real.md" ]; then
  pandoc_clean "$PROJETO/problema-real.md" \
    "$PROJETO/problema-real.pdf" \
    --pdf-engine=weasyprint \
    -c "$CSS_ABNT" \
    --resource-path="$PROJETO" \
    --metadata title="Problema Real - MinhaFila"
else
  echo "  ⚠️  problema-real.md não encontrado. Pulando."
fi

# 6. Index-Geral → .docx (relatório do projeto)
echo "[7/8] Index-Geral → .docx..."
pandoc_clean "$PROJETO/Index-Geral.md" \
  "$PROJETO/Index-Geral.docx" \
  --metadata title="Index Geral - MinhaFila"

# 7. Gerar slides .pptx via Python
echo "[8/8] Gerando slides .pptx..."
python3 "$RAIZ/scripts/gerar-slides.py" 2>/dev/null && \
  echo "  ✅ Slides gerados!" || \
  echo "  ⚠️  Script de slides não encontrado ou erro. Pulando."

echo ""
echo "============================================"
echo "  ✅ Geração concluída!"
echo "============================================"
echo ""
echo "Arquivos gerados em:"
echo "  $PROJETO/"
eza -la "$PROJETO"/*.docx "$PROJETO"/*.pdf 2>/dev/null || true
