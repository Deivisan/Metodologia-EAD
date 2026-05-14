#!/usr/bin/env bash
# ───────────────────────────────────────────────
# converter-pdf.sh
# Converte .md e .docx para PDF
# Uso: ./converter-pdf.sh <arquivo.md|arquivo.docx>
# ───────────────────────────────────────────────

set -euo pipefail

VERDE='\033[0;32m'
AZUL='\033[0;34m'
AMARELO='\033[1;33m'
VERMELHO='\033[0;31m'
RESET='\033[0m'

info()  { echo -e "${AZUL}[INFO]${RESET} $1"; }
ok()    { echo -e "${VERDE}[OK]${RESET} $1"; }
warn()  { echo -e "${AMARELO}[WARN]${RESET} $1"; }
erro()  { echo -e "${VERMELHO}[ERRO]${RESET} $1"; }

if [[ "$#" -lt 1 ]]; then
    echo "Uso: $0 <arquivo.md|arquivo.docx> [output.pdf]"
    echo ""
    echo "Exemplos:"
    echo "  $0 plano-de-ensino.md"
    echo "  $0 plano-de-ensino.docx saida.pdf"
    exit 1
fi

INPUT="$1"
OUTPUT="${2:-${INPUT%.*}.pdf}"

if [[ ! -f "$INPUT" ]]; then
    erro "Arquivo não encontrado: $INPUT"
    exit 1
fi

EXT="${INPUT##*.}"

case "$EXT" in
    md|markdown)
        info "Convertendo Markdown → PDF: $INPUT"
        if command -v pandoc &>/dev/null; then
            pandoc "$INPUT" -o "$OUTPUT"
            ok "PDF gerado: $OUTPUT"
        else
            erro "pandoc não instalado"
            exit 1
        fi
        ;;
    docx|doc)
        info "Convertendo Word → PDF: $INPUT"
        if command -v libreoffice &>/dev/null; then
            libreoffice --headless --convert-to pdf "$INPUT" --outdir "$(dirname "$OUTPUT")"
            ok "PDF gerado: $OUTPUT"
        else
            erro "libreoffice não instalado"
            exit 1
        fi
        ;;
    *)
        erro "Formato não suportado: .$EXT (use .md, .docx ou .doc)"
        exit 1
        ;;
esac
