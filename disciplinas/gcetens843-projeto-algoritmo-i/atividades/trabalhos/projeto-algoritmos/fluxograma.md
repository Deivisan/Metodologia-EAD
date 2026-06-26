# Fluxograma do Sistema — MinhaFila

> **Status:** ✅ Finalizado
> **Arquivo original:** [`assets/fluxograma.jpeg`](assets/fluxograma.jpeg)
> **Criado por:** Artur + Marcos Vinicius
> **Data:** 25/06/2026 (atualizado 26/06/2026)

---

## 🖼️ Fluxograma Completo

![Fluxograma MinhaFila](assets/fluxograma.jpeg)

*Clique na imagem para visualizar em tamanho real (715×1511 px)*

---

## 🔍 Detalhamento de Cada Etapa

### 1. Entrada no Sistema
- Usuário acessa o aplicativo (web ou mobile)
- Se já tem cadastro → faz login
- Se não tem → realiza cadastro rápido

### 2. Solicitação de Atendimento
- Usuário escolhe o estabelecimento/unidade
- Seleciona o tipo de serviço (atendimento comum, prioritário, retorno, informação)

### 3. Decisão: É Prioridade?
- **Sim** → direcionado para **fila prioritária** (idosos, gestantes, PcD, TEA, prioridades legais)
- **Não** → direcionado para **fila convencional**
- Ambas as filas seguem o mesmo fluxo a partir daqui

### 4. Geração de Senha
- Sistema gera senha única (ex: `A-028`, `B-015`)
- Registra horário de entrada
- Posiciona usuário no final da fila correspondente
- Calcula previsão inicial de atendimento

### 5. Chamada e Notificação
- Quando o usuário atinge o topo da fila → é chamado para atendimento
- Notificação antecipada: o 2º usuário na fila recebe aviso para se dirigir ao local
- Sistema exibe o tempo médio de atendimento em tempo real

### 6. Atendimento e Finalização
- Usuário é atendido
- Sistema o exclui da fila
- Fila é atualizada automaticamente
- Próximo usuário no topo é chamado

### 7. Retorno (Feedback Loop)
- Se o usuário **não comparece** quando chamado → retorna ao passo de solicitação de atendimento
- Se o atendimento é concluído → sistema oferece opção de **retorno** (nova solicitação)
- O fluxo reinicia a partir da etapa de escolha do tipo de atendimento

### Funcionalidades do Sistema

- Entrada do usuário (cadastro/login)
- Classificação de fila (comum vs prioritária)
- Algoritmo de chamada (ordem + prioridade)
- Notificação antecipada ao usuário
- Painel de acompanhamento para o estabelecimento
- Cálculo de tempo médio de espera
- Atualização automática da fila
- Feedback loop (não comparecimento + nova solicitação)

---

> 🔗 [Voltar ao Index Geral](Index-Geral.md)
