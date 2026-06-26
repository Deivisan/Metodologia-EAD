# prompt para open designer — protótipo minhafila no iphone 15

crie um protótipo navegável, clicável e funcional de alta fidelidade para o aplicativo **minhafila**, dentro de um **frame realista de iphone 15**. o objetivo é que qualquer pessoa, inclusive colegas e professor da disciplina **gcetens843 — projeto algoritmo i**, entenda completamente como funcionaria um sistema de gerenciamento inteligente de filas que atende **múltiplos setores** em um único aplicativo.

## contexto do projeto

o projeto se chama **minhafila — filas inteligentes para todos os setores**. ele foi pensado para resolver um problema que atinge qualquer cidadão: perder tempo em filas presenciais sem saber sua posição, sem previsão de atendimento e com medo de perder a chamada. isso acontece em bancos, hospitais, lojas, escolas e repartições públicas.

o diferencial do minhafila é **unificar todos os setores em um único aplicativo**. o usuário abre o app, seleciona a aba do setor desejado (banco, saúde, comércio, educação ou governo) e escolhe o estabelecimento. a partir daí, o fluxo é o mesmo: retirar senha virtual, acompanhar posição em tempo real, receber notificação quando estiver perto e visualizar o painel do local.

a acessibilidade está presente em todo o app, com opções de alto contraste, texto ampliado, modo simples e redução de estímulos para tea. mas **não é o pilar central** — o foco principal é a gestão inteligente de filas multissetorial.

## direção visual

- criar tudo dentro de um **mockup/frame de iphone 15**.
- estética moderna, limpa e profissional.
- **cada setor com uma cor predominante levemente diferente**:
  - banco: azul (#1565c0)
  - saúde: verde (#2e7d32)
  - comércio: laranja (#e65100)
  - educação: roxo (#6a1b9a)
  - governo: azul-marinho (#0d1b3e)
- a cor do setor ativo aparece na aba selecionada e em detalhes sutis do card.
- interface grande, legível e com botões fáceis de tocar.
- aparência de aplicativo real, não apenas slides estáticos.
- evitar poluição visual e excesso de textos.
- usar ícones claros: banco, hospital, carrinho, capelo, prédio público, fila, relógio, sino, acessibilidade, mapa, usuário, senha.
- mostrar status bar do iphone, dynamic island e navegação inferior quando fizer sentido.
- fonte limpa e grande (mínimo 16px no corpo, 20px em botões).

## regras de prototipagem

o protótipo precisa ser **totalmente clicável**. todos os botões principais devem levar para alguma tela ou abrir algum estado visual. não deixar botões mortos.

adicionar interações de clique/tap para:

- entrar no app;
- pular onboarding;
- navegar entre as abas de setor (banco, saúde, comércio, educação, governo);
- escolher um estabelecimento dentro do setor;
- escolher tipo de serviço;
- retirar senha virtual;
- acompanhar fila em tempo real;
- alternar modo acessível (alto contraste, texto ampliado, modo simples);
- visualizar detalhes da senha;
- receber notificação de chamada próxima;
- confirmar presença no estabelecimento;
- ver painel público do estabelecimento;
- ver painel administrativo;
- voltar para tela anterior;
- navegar pelo menu inferior.

usar transições suaves entre telas, como slide lateral, fade curto ou mudança de estado. o fluxo deve parecer um aplicativo móvel funcional.

## telas obrigatórias

### 1. splash / abertura

tela inicial com logo **minhafila**, subtítulo "filas inteligentes para todos os setores" e botão **entrar**.

o logo pode ser um ícone estilizado de três pessoas organizadas em fila, com um check verde ao lado.

### 2. onboarding curto

criar 3 telas rápidas com ilustrações minimalistas:

1. "escolha o setor e o estabelecimento" — ícone de abas;
2. "retire sua senha virtual em segundos" — ícone de senha/ticket;
3. "acompanhe de onde estiver e receba aviso" — ícone de sino/notificação.

botões: **próximo**, **pular** e **começar agora**.

### 3. tela principal com abas de setor

esta é a tela central do app. no topo, uma **barra de abas horizontais** com 5 setores:

| banco | saúde | comércio | educação | governo |

a aba ativa tem a cor do setor e um indicador visual (linha ou fundo preenchido). ao trocar de aba, o conteúdo abaixo muda instantaneamente.

acima das abas, saudação: "olá, devison" e um pequeno resumo se houver senha ativa em algum setor (ex: "você tem 2 senhas ativas").

cada aba exibe cards de estabelecimentos daquele setor (veja dados abaixo).

no canto superior direito, ícone de acessibilidade (engrenagem com símbolo de pessoa). canto inferior: menu com início, minhas senhas, painéis e perfil.

### 4. tela de estabelecimentos por setor

cada aba mostra uma lista/cards de estabelecimentos. o design é o mesmo, mas a cor de destaque muda por setor.

**banco (azul):**
- banco minhafila (agência 001) — fila moderada — ~12 min — 42 pessoas
- banco central — fila baixa — ~5 min — 8 pessoas
- banco nacional — fila alta — ~35 min — 78 pessoas

**saúde (verde):**
- clínica bem-estar — fila moderada — ~18 min — 34 pessoas
- hospital geral — fila alta — ~45 min — 112 pessoas
- laboratório saúde+ — fila baixa — ~7 min — 15 pessoas

**comércio (laranja):**
- supermercado popular — fila moderada — ~7 min — 22 pessoas
- loja cidade — fila baixa — ~3 min — 6 pessoas
- shopping center — fila alta — ~25 min — 55 pessoas

**educação (roxo):**
- secretaria ufrb — fila moderada — ~25 min — 40 pessoas
- colégio estadual — fila baixa — ~10 min — 18 pessoas
- universidade federal — fila alta — ~40 min — 90 pessoas

**governo (marinho):**
- prefeitura central — fila alta — ~30 min — 65 pessoas
- posto cidadão — fila moderada — ~20 min — 38 pessoas
- receita federal — fila baixa — ~15 min — 12 pessoas

cada card deve mostrar: nome, distância, tempo médio de espera, quantidade de pessoas na fila e botão **selecionar**.

### 5. escolha do tipo de serviço

após selecionar um estabelecimento, mostrar os serviços disponíveis (variam por setor):

**banco:**
- caixa (saque, depósito, pagamento)
- gerente (abertura de conta, negociação)
- prioritário (idosos, pcd, gestantes)

**saúde:**
- consulta comum
- exames
- retorno
- triagem
- prioritário

**comércio:**
- atendimento ao cliente
- caixa
- retirada de pedido
- sac

**educação:**
- matrícula
- secretaria
- atendimento ao aluno
- financeiro

**governo:**
- protocolo
- atendimento geral
- documentos
- ouvidoria

incluir explicação simples de que a ordem considera tipo de serviço e prioridades legais (idosos, pcd, gestantes, tea têm prioridade em qualquer setor).

### 6. confirmação da senha virtual

tela mostrando:

- senha: **b-042** (banco), **s-015** (saúde), **c-008** (comércio), **e-022** (educação), **g-033** (governo)
- estabelecimento: [nome do local]
- tipo de serviço: [serviço escolhido]
- posição inicial: [varia por setor, ver dados abaixo]
- previsão: [tempo em tempo real]
- botão **acompanhar fila**

adicionar mensagem: "você não precisa ficar preso no local. avisaremos quando estiver perto."

**importante:** o prefixo da senha muda conforme o setor:
- b-042 = banco
- s-015 = saúde
- c-008 = comércio
- e-022 = educação
- g-033 = governo

### 7. acompanhamento em tempo real

esta é a tela mais importante. mostrar:

- senha atual chamada no painel: [senha atual, ver dados]
- sua senha: [senha do usuário]
- posição na fila: [posição]
- previsão: [tempo em tempo real]
- barra de progresso visual
- total de pessoas na fila hoje
- botão **ver painel do estabelecimento**
- botão **confirmar presença**
- botão **ativar alerta**

o app mostra o tempo médio de espera calculado em tempo real. deixar claro que o estabelecimento continua com fluxo, mas sem necessidade de todos ficarem parados em pé.

### 8. notificação de chamada próxima

criar estado/tela simulando notificação:

"sua vez está chegando — faltam 3 pessoas"

botões:
- **estou chegando**
- **ver painel**
- **descartar**

### 9. painel público do estabelecimento

tela simulando o painel de chamada da recepção, mas dentro do app. mostrar:

- senha em atendimento: [senha atual]
- próximas senhas: [lista das próximas 4-5 senhas]
- guichê/sala: [número]
- legenda: comum, prioritário

essa tela demonstra transparência e reduz suspeita de favorecimento. funciona para qualquer setor.

### 10. acessibilidade (toggle no canto superior)

tela de configurações acessíveis com switches clicáveis:

- alto contraste (toggle que muda visivelmente o tema do app)
- texto ampliado (+20% visível)
- modo simples (remove decorações, fundo branco puro, fonte reta)
- alerta visual forte (flash na tela quando chamar)
- vibração
- leitura por voz
- reduzir estímulos visuais para tea (tons pasteis, sem animações)

ao ativar alto constraste ou modo simples, mostrar mudança visual perceptível no protótipo.

### 11. minhas senhas (ativo / histórico)

tela acessada pelo menu inferior, mostrando:

**senhas ativas:**
- b-042 — banco minhafila — pos 5 — previsão 12 min
- s-015 — clínica bem-estar — pos 8 — previsão 18 min
- c-008 — supermercado popular — pos 3 — previsão 7 min
- e-022 — secretaria ufrb — pos 11 — previsão 25 min
- g-033 — prefeitura central — pos 15 — previsão 30 min

**histórico (atendidas):**
- s-012 — clínica bem-estar — 12/06 — atendido
- b-039 — banco minhafila — 10/06 — atendido
- c-005 — supermercado popular — 08/06 — cancelado

### 12. painel administrativo (gestor)

criar uma área simples demonstrativa para o estabelecimento, acessada por um botão discreto "painel do estabelecimento". mostrar:

- total cadastrado hoje: 120
- em espera: 34
- atendidos: 86
- tempo médio: 16 min
- senha atual sendo chamada
- chamar próxima senha
- pausar chamada
- priorizar atendimento legal
- feedback loop: "não comparecimento → volta para o fim da fila"

essa tela serve para mostrar ao professor que o sistema também organiza o lado do gestor.

## fluxo principal obrigatório

o usuário precisa conseguir seguir este caminho clicando:

1. abrir app (splash)
2. passar onboarding
3. ver tela principal com abas
4. clicar na aba **saúde** (ver cards)
5. selecionar clínica bem-estar
6. escolher "consulta comum"
7. confirmar senha s-015
8. acompanhar fila (posição 8, 18 min)
9. receber notificação de chamada próxima
10. ver painel público da clínica
11. voltar para tela principal
12. clicar na aba **banco**
13. selecionar banco minhafila
14. ver senha b-042 ativa
15. ativar modo acessibilidade (alto contraste)
16. desativar e voltar
17. acessar "minhas senhas" no menu
18. ver todas as 5 senhas ativas nos 5 setores

## fluxo secundário (navegação entre setores)

o usuário pode:
- trocar de aba a qualquer momento sem perder a senha ativa
- ter múltiplas senhas ativas em setores diferentes simultaneamente
- ver no topo da tela principal um resumo: "3 senhas ativas"

## conteúdo textual dentro do app

usar textos curtos, humanos e objetivos:

- "escolha o setor e retire sua senha"
- "acompanhe sua vez sem ficar preso na fila"
- "sua posição atualiza em tempo real"
- "avisaremos quando estiver perto"
- "uma fila organizada muda tudo — em qualquer lugar"
- "banco, saúde, comércio, educação, governo — tudo num app só"
- "minhafila: a sua vez, do seu jeito"

## dados fictícios para simulação

### por setor

| setor | estabelecimento | senha | posição | previsão |
|-------|-----------------|-------|---------|----------|
| banco | banco minhafila (ag 001) | b-042 | 5ª | 12 min |
| saúde | clínica bem-estar | s-015 | 8ª | 18 min |
| comércio | supermercado popular | c-008 | 3ª | 7 min |
| educação | secretaria ufrb | e-022 | 11ª | 25 min |
| governo | prefeitura central | g-033 | 15ª | 30 min |

### senha atual chamada (simulação dinâmica)
- banco: b-037 → depois b-040
- saúde: s-009 → depois s-012
- comércio: c-005 → depois c-006
- educação: e-015 → depois e-019
- governo: g-025 → depois g-030

### dados gerais do estabelecimento (ex: clínica bem-estar)
- cadastrados hoje: 120
- atendidos: 86
- aguardando: 34
- tempo médio: 18 min
- redução de fila presencial: 64%

### dados gerais (ex: banco minhafila)
- cadastrados hoje: 89
- atendidos: 62
- aguardando: 27
- tempo médio: 12 min
- redução de fila presencial: 58%

## acessibilidade

a acessibilidade é um **recurso importante** do app, mas **não o pilar central**. ela aparece de forma consistente em todo o fluxo:

- toggle de alto contraste acessível de qualquer tela (ícone no topo)
- texto ampliado visível em toda interface
- modo simples ativável (remove gradientes, sombras, decorações)
- alerta visual forte (flash + vibração)
- leitor de tela compatível (labels semânticas)
- sinalização visual + sonora
- redução de estímulos para tea (modo calmo: sem animações, fundo neutro)

incluir:
- botões grandes em todo o app
- contraste adequado (wcag aa)
- feedback visual além de som
- textos simples e diretos
- indicação clara de posição e tempo
- ícones sempre acompanhados de texto

## cores por setor

| setor | cor primária | hex |
|-------|-------------|-----|
| banco | azul | #1565c0 |
| saúde | verde | #2e7d32 |
| comércio | laranja | #e65100 |
| educação | roxo | #6a1b9a |
| governo | azul-marinho | #0d1b3e |

## ícones por setor (sugestão)

| setor | ícone |
|-------|-------|
| banco | prédio com colunas / cifrão |
| saúde | cruz / estetoscópio |
| comércio | sacola / carrinho |
| educação | capelo / livro |
| governo | prédio público / brasão |

## resultado esperado

entregar um protótipo de aplicativo no frame do iphone 15, com múltiplas telas conectadas e fluxo navegável. a pessoa que abrir o protótipo deve entender em poucos minutos:

1. qual problema o minhafila resolve (filas em qualquer setor);
2. como o usuário navega entre setores por abas;
3. como retirar senha virtual em qualquer estabelecimento;
4. como acompanhar múltiplas filas ativas simultaneamente;
5. como recebe notificação de chamada;
6. como o gestor mantém controle do atendimento;
7. como a acessibilidade está presente sem ser intrusiva;
8. por que a solução reduz filas físicas independente do setor.

criar o protótipo com aparência profissional, limpa, funcional e pronta para apresentação acadêmica.

**importante:** cada setor deve ser visualmente distinguível pela cor, mas o layout e fluxo são consistentes — isso demonstra que o sistema é escalável para qualquer tipo de estabelecimento.
