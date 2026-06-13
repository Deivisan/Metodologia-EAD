# 🎨 Identidade Visual — Projeto FilaClara (Filas Inteligentes + Acessibilidade)

> **⚠️ STATUS OFICIAL: NADA APROVADO AINDA (12/06/2026)**
>
> Este arquivo existe **exatamente** para o grupo definir o padrão visual.
> Cada pessoa pode e deve propor cores, tipografia e estilos.
> Nada está decidido. Tudo que está aqui são **propostas**.

**Objetivo deste arquivo:**
- Escolher o padrão de cores (especialmente as do Protocolo de Manchester)
- Definir a paleta de interface do app
- Criar templates sólidos para protótipos, slides e **agentes de IA**
- Garantir que todo mundo use a mesma coisa

---

## Como usar este arquivo (leia isso primeiro)

| O que você quer fazer          | O que fazer aqui |
|--------------------------------|------------------|
| Propor cores do Manchester     | Preencha a tabela "Sua proposta" ou crie uma nova seção |
| Propor paleta do app           | Preencha a tabela de "Paleta de Interface" |
| Votar em alguma proposta       | Coloque `[x]` na coluna Votos da proposta que você curtiu |
| Usar IA para gerar imagens     | Copie o bloco **"PROMPT PRONTO PARA IA"** no final deste arquivo |
| Fazer slides ou Figma          | Use **somente** as cores marcadas como "Aprovadas pelo grupo" |
| Discutir no grupo              | Comente no WhatsApp + atualize aqui depois |

**Regra de ouro:**  
Depois que o grupo marcar uma paleta como **"APROVADA"**, ninguém pode usar outra cor sem atualizar este arquivo primeiro.

---

## 1. Cores do Protocolo de Manchester (Risco / Triagem)

Essas são as cores mais importantes do projeto.  
Elas representam **gravidade clínica** (não são só decoração).

Devem ser usadas em:
- Bolinhas / barras de risco na fila
- Painel da recepção
- Alertas e notificações
- Protótipo e slides

### Propostas Atuais

#### Proposta A — Cores clássicas do Manchester (muito usada em sistemas reais)

| Prioridade | Nome            | HEX          | Contraste | Quem propôs | Votos |
|------------|-----------------|--------------|-----------|-------------|-------|
| Vermelho   | Emergência      | `#D32F2F`    | AA        |             | [ ]   |
| Laranja    | Muito Urgente   | `#F57C00`    | AA        |             | [ ]   |
| Amarelo    | Urgente         | `#FBC02D`    | AA        |             | [ ]   |
| Verde      | Pouco Urgente   | `#388E3C`    | AA        |             | [ ]   |
| Azul       | Não Urgente     | `#1976D2`    | AA        |             | [ ]   |

#### Proposta B — Versão mais suave / moderna (melhor para telas mobile)

| Prioridade | Nome            | HEX          | Contraste | Quem propôs | Votos |
|------------|-----------------|--------------|-----------|-------------|-------|
| Vermelho   | Emergência      | `#E53935`    | AA        |             | [ ]   |
| Laranja    | Muito Urgente   | `#FB8C00`    | AA        |             | [ ]   |
| Amarelo    | Urgente         | `#FDD835`    | AA        |             | [ ]   |
| Verde      | Pouco Urgente   | `#43A047`    | AA        |             | [ ]   |
| Azul       | Não Urgente     | `#1E88E5`    | AA        |             | [ ]   |

#### Sua / Nova Proposta (adicione a sua aqui)

| Prioridade | Nome            | HEX sugerido | Contraste | Quem propôs          | Votos |
|------------|-----------------|--------------|-----------|----------------------|-------|
| Vermelho   | Emergência      | `#________`  | AA        | [seu nome]           | [ ]   |
| Laranja    | Muito Urgente   | `#________`  | AA        | [seu nome]           | [ ]   |
| Amarelo    | Urgente         | `#________`  | AA        | [seu nome]           | [ ]   |
| Verde      | Pouco Urgente   | `#________`  | AA        | [seu nome]           | [ ]   |
| Azul       | Não Urgente     | `#________`  | AA        | [seu nome]           | [ ]   |

**Decisão atual sobre as cores do Manchester:**

- [ ] Ainda em votação (nenhuma aprovada)
- [ ] Proposta A aprovada pelo grupo
- [ ] Proposta B aprovada pelo grupo
- [ ] Outra proposta aprovada: ____________________

---

## 2. Paleta de Interface do App (Brand + Neutros)

Essas são as cores da **marca do app** (botões, fundos, textos, cards etc).

**Importante:** Elas **não podem** conflitar com as cores do Manchester.

### Propostas de Paleta de Interface

#### Campos para preencher

| Uso                              | Nome da cor          | HEX sugerido | Descrição                              | Quem propôs | Votos |
|----------------------------------|----------------------|--------------|----------------------------------------|-------------|-------|
| Cor primária (botões principais) | Primary              | `#________`  | Botão "Entrar na fila", destaques      |             | [ ]   |
| Cor secundária                   | Secondary            | `#________`  | Botões secundários, links              |             | [ ]   |
| Fundo de telas (claro)           | Background Light     | `#________`  | Fundo geral das telas                  |             | [ ]   |
| Fundo de telas (escuro)          | Background Dark      | `#________`  | Modo escuro (se tiver)                 |             | [ ]   |
| Texto principal                  | Text Primary         | `#________`  | Títulos e textos importantes           |             | [ ]   |
| Texto secundário                 | Text Secondary       | `#________`  | Subtítulos, descrições                 |             | [ ]   |
| Sucesso (sem conflitar)          | Success              | `#________`  | "Atendido", confirmações               |             | [ ]   |
| Atenção (sem conflitar)          | Warning              | `#________`  | Avisos que não são risco clínico       |             | [ ]   |
| Fundo de cards                   | Card Background      | `#________`  | Cards da fila                          |             | [ ]   |
| Bordas / divisores               | Border               | `#________`  | Linhas separadoras                     |             | [ ]   |

**Adicione sua paleta completa aqui** (copie a tabela acima e preencha).

**Decisão atual da paleta de interface:**
- [ ] Ainda em votação
- [ ] Paleta escolhida: ____________________

---

## 3. Tipografia

| Item                    | Decisão / Proposta          | Status     |
|-------------------------|-----------------------------|------------|
| Fonte principal (corpo) | Inter / Roboto / System     | [ ]        |
| Fonte de títulos        | -                           | [ ]        |
| Tamanho base            | 16px                        | [ ]        |
| Tamanhos acessíveis     | 120% / 150% / 200%          | [ ]        |

---

## 4. Modos de Acessibilidade (obrigatórios)

Quais modos queremos ter no protótipo mínimo?

- [ ] Modo Alto Contraste
- [ ] Modo Baixo Estímulo (TEA)
- [ ] Modo Silencioso / Visual (vibração + banner)
- [ ] Aumento de Fonte (120% / 150% / 200%)
- [ ] Leitura em voz alta (texto para fala)

---

## 5. PROMPTS PRONTOS PARA AGENTES DE IA (o mais importante para consistência)

Copie e cole estes blocos quando for gerar imagens com IA.

### 5.1 Master Prompt (use este como base sempre)

```text
Projeto: FilaClara — Sistema de filas inteligentes em serviços de saúde com foco em acessibilidade.

Cores OFICIAIS (use EXATAMENTE estas, nunca invente):
- Manchester Emergência (Vermelho): #________
- Manchester Muito Urgente (Laranja): #________
- Manchester Urgente (Amarelo): #________
- Manchester Pouco Urgente (Verde): #________
- Manchester Não Urgente (Azul): #________

Cores de interface:
- Primária: #________
- Secundária: #________
- Fundo claro: #________
- Texto principal: #________

Estilo visual: interface mobile moderna, limpa, alto contraste, acessível. 
Use sempre as cores oficiais acima. 
Evite cores fora da paleta. 
Design minimalista, ícones simples e de alto contraste.
```

### 5.2 Prompt para Midjourney / Flux / Leonardo (versão curta e forte)

```text
Modern mobile app screen for hospital queue system called FilaClara, clean UI, high contrast, accessibility focused, using exact official colors: red #________ for emergency, orange #________ for very urgent, yellow #________ for urgent, green #________ for less urgent, blue #________ for non-urgent. Primary brand color #________, light background #________. Minimalist flat design, large readable text, simple icons, iPhone 15 frame, realistic screenshot --ar 9:16 --stylize 250 --v 6
```

### 5.3 Prompt para GPT-4o / ChatGPT Image (mais descritivo)

```text
Crie uma imagem realista de tela de celular mostrando o app FilaClara. 
A tela mostra a posição do paciente na fila com bolinhas coloridas usando o Protocolo de Manchester: 
- Vermelho (#________) para emergência
- Laranja (#________) para muito urgente
- Amarelo (#________) para urgente
- Verde (#________) para pouco urgente
- Azul (#________) para não urgente

Use também a cor primária #________ nos botões principais. 
Fundo claro #________, texto preto ou cinza escuro. 
Design moderno, limpo, acessível, alto contraste. 
Estilo de screenshot de iPhone 15, realista, boa iluminação.
```

### 5.4 Prompt para Slides (PowerPoint / Google Slides)

```text
Crie um slide de apresentação com o seguinte padrão visual oficial do projeto FilaClara:

- Título principal em [cor primária #________], fonte bold, tamanho grande
- Subtítulos em [cor secundária]
- Texto normal em preto ou cinza escuro
- Cards de risco usando as 5 cores do Manchester com fundo branco + bolinha colorida grande
- Nunca use vermelho para erro ou verde para sucesso se isso conflitar com o significado clínico das cores

Estilo limpo, profissional, acessível.
```

### 5.5 Prompt para Figma (descrição de componentes)

```text
Crie componentes no Figma seguindo esta identidade visual:

- Botão primário: fundo #________, texto branco, borda radius 12px, altura 48px
- Card de paciente na fila: fundo branco, borda sutil #________, bolinha de risco do lado esquerdo usando as cores Manchester
- Texto de posição na fila: tamanho 24px, bold
- Use sempre as cores oficiais do Manchester para risco e as cores de interface para o resto
```

---

## 6. Propostas Enviadas pelos Integrantes (espaço para cada um)

Cada pessoa pode colar aqui o que enviou (ou resumo das ideias de cor).

- **Rios:** (ainda não enviou proposta de identidade visual)
- **Ausiane:** (ainda não enviou proposta de identidade visual)
- **Deivison:** (ainda não enviou proposta de identidade visual)
- **Nubia:** (ainda não enviou)
- **Artur:** (ainda não enviou)
- **Uelinton:** (ainda não enviou)
- **Marcos Vinicius:** (ainda não enviou)
- **Wallace:** (ainda não enviou)

**Instrução:** Quando alguém enviar arquivo ou sugestão de cores, colar aqui + preencher as tabelas acima.

---

## 7. Decisões Oficiais (só preencher quando o grupo aprovar)

| Data       | O que foi aprovado                  | Cores / Paleta | Aprovado por | Link da decisão |
|------------|-------------------------------------|----------------|--------------|-----------------|
|            | Cores do Manchester                 |                |              |                 |
|            | Paleta de interface do app          |                |              |                 |
|            | Tipografia                          |                |              |                 |
|            | Modos de acessibilidade obrigatórios|                |              |                 |

---

**Lembrete final:**

Este arquivo é o contrato visual do projeto.  
Depois que as cores forem aprovadas, qualquer protótipo, slide, imagem gerada por IA, banner ou material visual que não seguir o que está aqui será considerado fora do padrão.

*Documento 100% vivo. Atualizem conforme as propostas e votações do grupo.*

**Última atualização:** 12/06/2026 — Fase de propostas abertas (nenhuma cor aprovada ainda).
