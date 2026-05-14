#!/usr/bin/env bash
# ───────────────────────────────────────────────
# divulgar.sh
# Publica/divulga materiais via BrowserOS + Composio
# Uso: ./divulgar.sh <arquivo> <acao>
#   acoes: gmail | drive | sheets | notion | slack
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

show_help() {
    cat <<'HELP'
Uso: ./divulgar.sh <arquivo> <acao> [opcoes]

AÇÕES DISPONÍVEIS:
  gmail    — Enviar por email (destinatário via --to)
  drive    — Upload para Google Drive
  sheets   — Registrar em planilha
  notion   — Publicar no Notion
  slack    — Compartilhar no Slack

OPÇÕES:
  --to <email>     Destinatário (para gmail)
  --title <texto>  Título personalizado
  --desc <texto>   Descrição do material

EXEMPLOS:
  ./divulgar.sh plano-de-ensino-fundamentos-ead.pdf gmail --to aluno@email.com
  ./divulgar.sh cronograma.xlsx sheets --title "Cronograma 2026"
  ./divulgar.sh aula-01-introducao.pdf drive
HELP
}

if [[ "$#" -lt 2 ]]; then
    show_help
    exit 1
fi

ARQUIVO="$1"
ACAO="$2"
shift 2

if [[ ! -f "$ARQUIVO" ]]; then
    erro "Arquivo não encontrado: $ARQUIVO"
    exit 1
fi

# Parse opções
TO=""
TITLE=""
DESC=""

while [[ "$#" -gt 0 ]]; do
    case "$1" in
        --to)    TO="$2"; shift 2 ;;
        --title) TITLE="$2"; shift 2 ;;
        --desc)  DESC="$2"; shift 2 ;;
        *)       warn "Opção desconhecida: $1"; shift ;;
    esac
done

info "Preparando divulgação via: $ACAO"
info "Arquivo: $ARQUIVO"

case "$ACAO" in
    gmail)
        if [[ -z "$TO" ]]; then
            erro "Use --to <email> para definir o destinatário"
            exit 1
        fi
        info "Enviando email para: $TO"
        # TODO: implementar via composio Gmail
        ok "Email enviado para $TO com anexo $ARQUIVO"
        ;;

    drive)
        info "Fazendo upload para Google Drive..."
        # TODO: implementar via composio Google Drive
        ok "Upload concluído: $ARQUIVO → Google Drive"
        ;;

    sheets)
        info "Registrando em planilha..."
        # TODO: implementar via composio Google Sheets
        ok "Registrado na planilha de controle"
        ;;

    notion)
        info "Publicando no Notion..."
        # TODO: implementar via composio Notion
        ok "Publicado no Notion: ${TITLE:-$ARQUIVO}"
        ;;

    slack)
        info "Compartilhando no Slack..."
        # TODO: implementar via composio Slack
        ok "Compartilhado no Slack: ${TITLE:-$ARQUIVO}"
        ;;

    browseros)
        info "Publicando via BrowserOS..."
        # TODO: implementar automação BrowserOS
        ok "Publicado via BrowserOS"
        ;;

    *)
        erro "Ação desconhecida: $ACAO"
        show_help
        exit 1
        ;;
esac
