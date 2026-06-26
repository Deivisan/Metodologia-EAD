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

echo "============================================"
echo "  Gerando Materiais Acadêmicos - FilaClara  "
echo "============================================"
echo ""

# 1. Fluxograma → .docx
echo "[1/6] Fluxograma → .docx..."
pandoc "$PROJETO/fluxograma.md" \
  -o "$PROJETO/fluxograma.docx" \
  --metadata title="Fluxograma - FilaClara"

# 2. Fluxograma → .pdf (ABNT)
echo "[2/6] Fluxograma → .pdf (ABNT)..."
pandoc "$PROJETO/fluxograma.md" \
  -o "$PROJETO/fluxograma.pdf" \
  --pdf-engine=weasyprint \
  -c "$CSS_ABNT" \
  --metadata title="Fluxograma do Sistema FilaClara"

# 3. Problema Real → .docx
echo "[3/6] Problema Real → .docx..."
if [ -f "$PROJETO/problema-real.md" ]; then
  pandoc "$PROJETO/problema-real.md" \
    -o "$PROJETO/problema-real.docx" \
    --metadata title="Problema Real - FilaClara"
else
  echo "  ⚠️  problema-real.md não encontrado. Pulando."
fi

# 4. Proposta → .docx
echo "[4/6] Proposta → .docx..."
if [ -f "$PROJETO/proposta.md" ]; then
  pandoc "$PROJETO/proposta.md" \
    -o "$PROJETO/proposta.docx" \
    --metadata title="Proposta - FilaClara"
else
  echo "  ⚠️  proposta.md não encontrado. Pulando."
fi

# 5. Index-Geral → .docx (relatório do projeto)
echo "[5/6] Index-Geral → .docx..."
pandoc "$PROJETO/Index-Geral.md" \
  -o "$PROJETO/Index-Geral.docx" \
  --metadata title="Index Geral - FilaClara"

# 6. Gerar slides .pptx via Python
echo "[6/6] Gerando slides .pptx..."
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
