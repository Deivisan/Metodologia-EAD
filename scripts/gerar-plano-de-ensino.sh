#!/usr/bin/env bash
# ───────────────────────────────────────────────
# gerar-plano-de-ensino.sh
# Gera um Plano de Ensino em .docx a partir do template
# Uso: ./gerar-plano-de-ensino.sh <disciplina> <professor> <periodo> <ano>
# ───────────────────────────────────────────────

set -euo pipefail

# ─── Config ────────────────────────────────────
TEMPLATE_DIR="$(dirname "$0")/../templates"
DISCIPLINAS_DIR="$(dirname "$0")/../disciplinas"
DOCX_DIR="$(dirname "$0")/../documentos/relatorios"
PANDOC_OPTS="-f markdown -t docx --reference-doc=$TEMPLATE_DIR/plano-de-ensino-template.md"

# ─── Cores ─────────────────────────────────────
VERDE='\033[0;32m'
AZUL='\033[0;34m'
AMARELO='\033[1;33m'
VERMELHO='\033[0;31m'
RESET='\033[0m'

info()  { echo -e "${AZUL}[INFO]${RESET} $1"; }
ok()    { echo -e "${VERDE}[OK]${RESET} $1"; }
warn()  { echo -e "${AMARELO}[WARN]${RESET} $1"; }
erro()  { echo -e "${VERMELHO}[ERRO]${RESET} $1"; }

# ─── Help ──────────────────────────────────────
if [[ "$#" -lt 3 ]]; then
    echo "Uso: $0 <disciplina> <professor> <periodo> [ano]"
    echo ""
    echo "Exemplo:"
    echo "  $0 fundamentos-ead \"João Silva\" 2026.1 2026"
    exit 1
fi

DISCIPLINA="$1"
PROFESSOR="$2"
PERIODO="$3"
ANO="${4:-$(date +%Y)}"

# ─── Verificações ──────────────────────────────
TEMPLATE="$TEMPLATE_DIR/plano-de-ensino-template.md"
if [[ ! -f "$TEMPLATE" ]]; then
    erro "Template não encontrado: $TEMPLATE"
    exit 1
fi

if ! command -v pandoc &>/dev/null; then
    erro "pandoc não instalado. Instale com: sudo pacman -S pandoc"
    exit 1
fi

# ─── Diretório da disciplina ───────────────────
DISC_DIR="$DISCIPLINAS_DIR/$DISCIPLINA/planos-de-ensino"
mkdir -p "$DISC_DIR"

# ─── Nome do arquivo ──────────────────────────
FILENAME="plano-de-ensino-$DISCIPLINA-$ANO-$PERIODO"
MD_FILE="$DISC_DIR/$FILENAME.md"
DOCX_FILE="$DISC_DIR/$FILENAME.docx"

info "Gerando Plano de Ensino para: $DISCIPLINA"
info "Professor: $PROFESSOR | Período: $PERIODO"

# ─── Copiar template e preencher ──────────────
cp "$TEMPLATE" "$MD_FILE"

# Substituições básicas (placeholders)
sed -i "s/{{disciplina}}/$DISCIPLINA/g" "$MD_FILE"
sed -i "s/{{professor}}/$PROFESSOR/g" "$MD_FILE"
sed -i "s/{{periodo}}/$PERIODO/g" "$MD_FILE"
sed -i "s/{{ano-semestre}}/$ANO\/$PERIODO/g" "$MD_FILE"
sed -i "s|{{data}}|$(date '+%d\/%m\/%Y')|g" "$MD_FILE"
sed -i "s|{{data-atualizacao}}|$(date '+%d\/%m\/%Y')|g" "$MD_FILE"

ok "Arquivo markdown gerado: $MD_FILE"

# ─── Converter para .docx ─────────────────────
info "Convertendo para .docx..."
if pandoc "$MD_FILE" -o "$DOCX_FILE" 2>/dev/null; then
    ok "DOCX gerado: $DOCX_FILE"
else
    warn "Falha na conversão para .docx (verifique se o pandoc tem suporte a docx)"
fi

# ─── Converter para .pdf (opcional) ───────────
if command -v wkhtmltopdf &>/dev/null; then
    PDF_FILE="$DISC_DIR/$FILENAME.pdf"
    info "Convertendo para PDF..."
    if pandoc "$MD_FILE" -o "$PDF_FILE" 2>/dev/null; then
        ok "PDF gerado: $PDF_FILE"
    else
        warn "Falha na conversão para PDF"
    fi
fi

ok "Plano de Ensino gerado com sucesso!"
echo ""
eza -la "$DISC_DIR/$FILENAME"*
