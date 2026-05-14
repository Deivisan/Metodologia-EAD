#!/usr/bin/env bash
# ───────────────────────────────────────────────
# baixar-materiais.sh
# Baixa vídeos, áudios e materiais de apoio via yt-dlp
# Uso: ./baixar-materiais.sh <url> [opcoes]
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
    echo "Uso: $0 <url> [--audio|--video] [--destino <pasta>]"
    echo ""
    echo "Exemplos:"
    echo "  $0 https://youtube.com/watch?v=xyz --video"
    echo "  $0 https://youtube.com/watch?v=xyz --audio"
    echo "  $0 https://youtube.com/playlist?list=abc --audio --destino musicas"
    exit 1
fi

URL="$1"
shift

MODE="video"
DESTINO="$(dirname "$0")/../referencias/multimidia"

while [[ "$#" -gt 0 ]]; do
    case "$1" in
        --audio)   MODE="audio"; shift ;;
        --video)   MODE="video"; shift ;;
        --destino) DESTINO="$2"; shift 2 ;;
        *)         warn "Opção desconhecida: $1"; shift ;;
    esac
done

mkdir -p "$DESTINO"

if ! command -v yt-dlp &>/dev/null; then
    erro "yt-dlp não instalado. Instale com: sudo pacman -S yt-dlp"
    exit 1
fi

info "Baixando: $URL"
info "Modo: $MODE"
info "Destino: $DESTINO"

case "$MODE" in
    audio)
        yt-dlp -x --audio-format mp3 -o "$DESTINO/%(title)s.%(ext)s" "$URL"
        ;;
    video)
        yt-dlp -f "bestvideo+bestaudio/best" -o "$DESTINO/%(title)s.%(ext)s" "$URL"
        ;;
esac

ok "Download concluído em: $DESTINO"
eza -la "$DESTINO"
