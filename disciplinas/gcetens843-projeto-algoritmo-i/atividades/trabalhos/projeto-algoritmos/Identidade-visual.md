# 🎨 Identidade Visual — Projeto FilaClara (Filas Inteligentes + Acessibilidade)

> **Arquivo VIVO** — Definições oficiais de cores, tipografia e padrões visuais.  
> **Todos os documentos, slides, protótipos Figma e código devem seguir rigorosamente o que está definido aqui.**  
> Última atualização: 12/06/2026 (ainda em definição)

---

## Por que este arquivo é importante

A identidade visual precisa ser decidida **antes** de fazer os slides e o protótipo.  
Se cada pessoa usar cores diferentes, o trabalho fica incoerente.

**Regra do grupo:** Depois que este arquivo estiver preenchido, ninguém pode usar outras cores ou estilos sem atualizar aqui primeiro.

---

## 1. Cores do Protocolo de Manchester (obrigatórias)

Quando o grupo definir, preencha os HEX abaixo com as cores **exatas** que serão usadas em:

- Protótipo Figma
- Slides da apresentação
- Fluxogramas
- Painel de fila (tanto no app quanto na recepção)
- Ícones e alertas

| Prioridade | Nome       | HEX (preencher) | Descrição                          | Contraste mínimo (WCAG) |
|------------|------------|------------------|------------------------------------|-------------------------|
| Vermelho   | Emergência | `#HEX`           | Risco de morte iminente (0 min)   | AA                      |
| Laranja    | Muito Urgente | `#HEX`        | Até 10 minutos                    | AA                      |
| Amarelo    | Urgente    | `#HEX`           | Até 60 minutos                    | AA                      |
| Verde      | Pouco Urgente | `#HEX`        | Até 120 min (~70% dos casos)      | AA                      |
| Azul       | Não Urgente | `#HEX`          | Até 240 minutos                   | AA                      |

**Regras de uso das cores:**
- Usar sempre essas cores para representar risco/classificação.
- Nunca usar vermelho para "erro" ou verde para "sucesso" se isso conflitar com o significado do Manchester.
- Para acessibilidade: garantir contraste mínimo WCAG AA em todos os textos sobre essas cores.

**Versões de acessibilidade (a definir):**
- Modo Alto Contraste (versões mais escuras ou com bordas)
- Modo Baixo Estímulo para TEA (versões menos saturadas, sem animações fortes)

---

## 2. Cores Adicionais do App (neutras + interface)

Além das 5 cores do Manchester, precisamos definir:

- Cor primária do app (botões principais, destaques)
- Cor secundária
- Fundo de telas (claro / escuro)
- Texto principal
- Texto secundário
- Cor de sucesso / atenção (que não conflite com o Manchester)
- Cor de fundo de cards e painéis

**Sugestão de paleta base (o grupo pode trocar):**

- Primária: (a definir)
- Secundária: (a definir)
- Neutro claro (fundo): `#F8F9FA` ou similar
- Neutro escuro (texto): `#212529`
- Aviso / atenção: (a definir — diferente do Laranja do Manchester)

---

## 3. Tipografia

- Fonte principal (corpo de texto): (a definir — recomendo algo legível como Inter, Roboto ou system sans-serif)
- Fonte para títulos: (a definir)
- Tamanho base recomendado: 16px (1rem) — nunca menor que 14px em textos importantes
- Tamanhos de acessibilidade: ter escalas maiores (18px, 20px, 24px) ativáveis pelo usuário

**Regras de acessibilidade:**
- Nunca usar texto abaixo de 14px em informações críticas.
- Contraste mínimo 4.5:1 para texto normal.

---

## 4. Estilo de Componentes

### Botões
- Primário: cor definida acima + ícone opcional
- Secundário: outline ou cor neutra
- Acessibilidade: área clicável mínima 44x44px (toque)

### Cards / Painéis de fila
- Fundo claro
- Borda sutil
- Cor de risco sempre visível (bolinha ou barra lateral)

### Alertas e Notificações
- Usar as cores do Manchester quando for sobre risco
- Usar ícones + texto (nunca só cor)
- Versão silenciosa (sem som, só visual + vibração)

### Painel da Recepção (tela grande)
- Lista clara, com cores grandes
- Nome da pessoa (ou "Paciente 07") + cor + tempo estimado

---

## 5. Modos de Acessibilidade Obrigatórios (devem existir no protótipo)

1. **Modo Alto Contraste** — aumenta contraste de todas as cores.
2. **Modo Baixo Estímulo (TEA)** — reduz animações, saturação e elementos visuais complexos.
3. **Modo Silencioso / Visual** — substitui sons por vibração + banner grande na tela.
4. **Aumento de Fonte** — slider ou botões para 120%, 150%, 200%.
5. **Audiodescrição / Leitura em voz alta** (opcional no protótipo, mas deve ser mencionado).

**Onde isso aparece:**
- Tela de Configurações
- Ativação automática baseada no cadastro (se a pessoa marcou TEA ou deficiência auditiva)

---

## 6. Ícones e Ilustrações

- Estilo: simples, line ou flat, alto contraste.
- Evitar ilustrações muito detalhadas ou com muitas cores (pior para TEA e baixa visão).
- Sempre ter texto alternativo.

---

## 7. Status Atual (12/06/2026)

Este arquivo ainda está majoritariamente vazio.  

**Próximo passo imediato:**
Alguém do grupo (idealmente quem vai fazer o Figma ou os slides) deve:
1. Escolher ou pesquisar as cores HEX do Manchester (pode usar as oficiais do SUS ou versões acessíveis).
2. Definir as cores neutras do app.
3. Preencher as seções acima.
4. Compartilhar com o grupo para aprovação.

Depois que este arquivo estiver preenchido, atualizem a `proposta.md` e o `tema-escolhido.md` para apontar para ele como fonte oficial.

---

**Referência rápida para o grupo:**
- Todas as cores do risco → vêm deste arquivo.
- Cores de interface → vêm deste arquivo.
- Qualquer dúvida de "qual cor usar aqui?" → consulte este arquivo primeiro.

*Documento vivo. Atualizem conforme as decisões do grupo.*
