# 📋 Proposta de Solução — Filas Inteligentes em Serviços de Saúde com Foco em Acessibilidade

> **Documento VIVO** — Aberto para edição coletiva  
> **Responsáveis principais:** Ausiane + Rios (pesquisa + proposta)  
> **Última atualização:** 12/06/2026  
> **Status:** Em construção — decisões em aberto

**Nome do arquivo:** `proposta.md`

---

## O que é este projeto? (Explicação expandida para alinhamento do grupo)

### 1. O Problema Real que Estamos Resolvendo

Hoje, quando uma pessoa chega em um posto de saúde, UPA, pronto-socorro ou clínica, o fluxo costuma ser:

1. Chega no guichê → pega uma senha (ordem de chegada física).
2. Senta na sala de espera.
3. Fica ouvindo chamadas por alto-falante ou olhando um painel com códigos estranhos (ex: "AB-22", "H-27", "Sala 3").
4. Não sabe quantas pessoas estão na frente, nem quanto tempo vai demorar.
5. Pessoas com deficiência auditiva perdem a chamada.
6. Pessoas com baixa visão não conseguem ler o painel.
7. Pessoas com TEA (Transtorno do Espectro Autista) sofrem com a imprevisibilidade, barulho e falta de informação clara.
8. Idosos e acompanhantes de crianças ficam ansiosos porque não sabem se podem sair para ir ao banheiro, tomar água ou dar uma volta.

O resultado é **sensação de injustiça, estresse e falta de transparência**. Muita gente acha que "estão passando na frente" porque o sistema é opaco.

O **Protocolo de Manchester** (cores Vermelho/Laranja/Amarelo/Verde/Azul) já existe para classificar gravidade, mas ele só é aplicado **depois** da triagem. Entre o momento de chegar e ser triado, existe um buraco enorme de informação.

### 2. O que o App Propõe Ser

O app (nome provisório: **FilaClara**) é um **sistema de acompanhamento de filas em tempo real** focado em **transparência + acessibilidade**.

**Ideia central:**
- O paciente chega, faz um cadastro rápido (ou importa do Meu SUS Digital).
- O sistema mostra, no celular da pessoa:
  - Sua posição atual na fila.
  - Tempo estimado de espera (atualizado em tempo real).
  - Quantas pessoas estão na frente e suas cores de risco (sem mostrar nomes).
  - Notificação quando estiver próximo de ser chamado.
- O paciente pode **sair do local** (ir ao banheiro, dar uma volta, tomar café) e ser avisado quando faltar pouco.
- Tudo tem versões acessíveis: alto contraste, texto grande, modo silencioso/visual para surdos, modo baixo estímulo para TEA.

**Não é** um sistema que substitui a triagem oficial. É uma **camada de transparência e acolhimento** que existe **antes e durante** o processo.

### 3. Como o App Pode Funcionar na Prática (Visão de Alto Nível)

**Jornada básica do paciente (versão mais simples que podemos prototipar):**

1. **Chegada** → Abre o app ou escaneia QR Code da recepção.
2. **Cadastro rápido** (nome, CPF ou cartão SUS, telefone, se tem alguma deficiência ou necessidade especial).
3. **Recebe senha virtual** + entra na fila.
4. **Acompanha no celular**:
   - "Você está em 7º lugar"
   - "Tempo estimado: 38 minutos"
   - "3 pessoas na sua frente são Verde, 2 são Amarelo"
5. **Recebe notificação** quando faltarem 2-3 pessoas.
6. **Vai para triagem** quando for chamado.
7. (Opcional) Depois da consulta, recebe resumo com orientações.

**O que a equipe de saúde vê (painel interno):**
- Lista ordenada por chegada + cor de risco.
- Botão para chamar o próximo.
- Histórico de quem já passou.

### 4. Por Que Isso é Diferente de Sistemas Existentes

A maioria dos sistemas de fila atuais:
- Só mostram número na tela física.
- Não têm acessibilidade real.
- Não permitem que a pessoa saia do local.
- Não mostram transparência sobre quem está na frente.

Nosso diferencial proposto: **acessibilidade como pilar central** + **transparência radical** + **mobilidade** (poder sair e ser avisado).

---

## Como usar este documento (formato visual de decisão)

1. Leia toda a explicação expandida acima primeiro (importante para todo mundo estar alinhado).
2. Vá para o **Painel de Decisões**.
3. Para cada item, leia as **opções explicadas** (o que cada escolha significa na prática: quais telas, qual fluxo, o que o usuário vê).
4. Marque os checkboxes para registrar decisões.
5. No final, responda as perguntas de debate de forma mais concreta.

Depois de decidir, consolidamos em `tema-escolhido.md`, `decisoes.md` e atualizamos o protótipo/fluxograma.

---

## 1. Contexto Rápido (Problematização)

O fluxo oficial de urgência/emergência tem um "buraco" entre o guichê (ordem de chegada) e a triagem (Protocolo de Manchester). Isso gera sensação de arbitrariedade e injustiça.

**Cores do Protocolo de Manchester (para referência):**

- **Vermelho** — Emergência (0 min)
- **Laranja** — Muito urgente (até 10 min)
- **Amarelo** — Urgente (até 60 min)
- **Verde** — Pouco urgente (até 120 min) — ~70% dos casos
- **Azul** — Não urgente (até 240 min)

> **Identidade Visual e Cores Oficiais**  
> Arquivo dedicado: [`Identidade-visual.md`](Identidade-visual.md)  
> (Crie/popule esse arquivo com as cores hex exatas, tipografia e padrões que o grupo definir. Todos devem seguir rigorosamente o que estiver lá. Atualizaremos futuramente com as definições finais.)

---

## 2. Identidade Visual (Contexto Correto)

A identidade visual ainda está em definição. Precisamos alinhar **agora** para que slides, protótipo Figma e documentação usem a mesma linguagem.

**O que precisamos decidir nesta semana:**
- Cores exatas do Protocolo de Manchester (HEX).
- Cores adicionais do app (neutras, botões, fundos, alertas).
- Tipografia (fonte legível, tamanhos para acessibilidade).
- Estilo de ícones e ilustrações (simples, alto contraste, ou mais moderno?).
- Modos de acessibilidade visuais (alto contraste, baixo estímulo para TEA, versão grande fonte).

**Recomendação:** Alguém do grupo (quem for fazer o Figma ou os slides) deve popular o arquivo `Identidade-visual.md` com as definições escolhidas. Depois, todo mundo referencia esse arquivo como fonte única.

---

## 3. Painel de Decisões — Com Opções Explicadas (O Que Cada Escolha Significa na Prática)

Cada item agora tem explicação de **como ficaria o fluxo e as telas** dependendo da escolha.

Marque [x] conforme o grupo for decidindo.

### 3.1 Integração com sistemas oficiais do Governo (Meu SUS Digital / RNDS)

**O que isso significa na prática:**

- **Opção A (Integração forte):** O app pede login com Gov.br / Meu SUS Digital. Puxa automaticamente: nome, CPF, alergias conhecidas, deficiências cadastradas, histórico de atendimentos. O paciente só confirma ou corrige. Reduz muito a digitação.
- **Opção B (Fallback manual forte):** Oferece login Gov.br como opcional. Se a pessoa não tiver ou não quiser, faz cadastro simples (nome + CPF/SUS + telefone + perguntas de acessibilidade). Mais inclusivo para quem não tem conta digital.
- **Opção C (Visão futura apenas):** Mencionamos a integração como "poderia fazer no futuro", mas no protótipo atual fazemos só cadastro manual.

**Telas que mudam conforme a escolha:**
- Tela de "Entrar" / "Cadastrar".
- Tela de "Meus dados" (mais ou menos pré-preenchida).

- [ ] A proposta **se apoia** em integração com governo
- [ ] Vamos **incluir** integração real no protótipo/entrega (Opção A)
- [ ] Vamos priorizar cadastro manual + login Gov.br opcional (Opção B — mais inclusivo)
- [ ] Vamos mencionar como **visão futura** (Opção C)
- [ ] Vamos **remover** qualquer menção forte a integração por enquanto

### 3.2 Cadastro alternativo sem conta Gov.br + Perguntas de Acessibilidade

**Como pode ser na prática:**

- **Versão mínima:** Nome, CPF/SUS, telefone, "Tem alguma deficiência ou necessidade especial?" (sim/não).
- **Versão rica (recomendada):** Checkbox ou cards com: Deficiência auditiva, visual, motora, TEA, idoso, gestante, criança pequena acompanhando, etc. + campo "Precisa de algum apoio específico?" (texto livre).
- **Fluxo de impacto:** Se marcar TEA ou auditiva, o sistema pode:
  - Sugerir "Modo Baixo Estímulo" no app.
  - Enviar alerta visual + vibração (sem som).
  - Avisar a equipe internamente ("Paciente com TEA — preferir sala mais silenciosa").

**Telas envolvidas:**
- Tela de Cadastro (1 ou 2 passos).
- Tela "Minha fila" com banner de acessibilidade ativado.
- Painel da recepção com tag de necessidade especial.

- [ ] A proposta **se apoia** em oferecer cadastro manual detalhado
- [ ] Vamos **incluir** perguntas específicas de deficiência + impacto no fluxo (TEA, auditiva, etc.)
- [ ] Vamos fazer cadastro simples só com nome + contato (sem foco em acessibilidade no cadastro)
- [ ] Vamos prototipar telas diferentes dependendo da deficiência marcada

### 3.3 Cor provisória gerada pelo app (antes da triagem oficial)

**Opções reais de como mostrar:**

- **Opção A (Transparente com paciente):** O app faz uma classificação inicial baseada nas respostas do cadastro + sintomas. Mostra ao paciente uma cor provisória grande na tela com texto bem claro: "Isso é uma estimativa automática. A triagem oficial pode mudar sua cor."
- **Opção B (Interno apenas):** O app calcula a cor e mostra só para a equipe no painel interno. Paciente vê só posição e tempo estimado.
- **Opção C (Sem cor provisória):** Não fazemos nenhuma estimativa. Só mostramos ordem de chegada + tempo médio histórico.

**Telas impactadas:**
- Tela "Sua posição na fila".
- Painel da recepção.

- [ ] A proposta **se apoia** em gerar cor provisória
- [ ] Vamos mostrar a cor provisória **visível ao paciente** com aviso claro (Opção A)
- [ ] Vamos usar cor provisória **apenas internamente** (Opção B)
- [ ] Vamos **não usar** cor provisória por enquanto (Opção C)

### 3.4 Transparência no painel (mostrar cores e posição das pessoas na frente)

**Como pode ficar visualmente:**

- **Opção A (Alta transparência):** Lista com bolinhas coloridas + posição aproximada. Exemplo: "3 pessoas na frente (2 Verde, 1 Amarelo)". Sem nomes.
- **Opção B (Média):** Mostra só "Você é o 7º" + tempo estimado. Sem mostrar cores das outras pessoas.
- **Opção C (Testar duas versões no protótipo):** Uma versão com transparência de cores, outra mais discreta, e ver qual o grupo prefere.

**Telas:**
- Tela do paciente "Minha fila".
- Painel grande na recepção (o que todo mundo vê).

- [ ] A proposta **se apoia** em mostrar cores das pessoas na frente
- [ ] Vamos **incluir** transparência de cores no protótipo (Opção A)
- [ ] Vamos mostrar apenas posição + tempo (Opção B)
- [ ] Vamos prototipar as duas versões para comparar (Opção C)

### 3.5 Sair do local e ser avisado (saída temporária)

**Fluxo possível:**

Paciente marca "Vou sair um pouco". O app continua acompanhando a fila. Quando faltarem X pessoas ou X minutos, envia notificação push + vibração + banner na tela (mesmo com o app fechado).

**Variações:**
- Notificação só quando faltar 1-2 pessoas.
- Notificação em dois estágios (ex: "Faltam ~15 min" e depois "Sua vez está chegando").
- Opção de "voltar para o final da fila" se perder a chamada.

- [ ] A proposta **se apoia** nessa funcionalidade
- [ ] Vamos **incluir** saída temporária + notificação no protótipo
- [ ] Vamos mencionar como ideia futura (sem prototipar agora)
- [ ] Vamos remover por enquanto

### 3.6 Tela pós-atendimento (resumo, medicamentos, próximos passos)

**O que pode aparecer:**

- "Você foi atendido(a)".
- Lista de medicamentos prescritos (se o sistema tiver integração futura) ou campo manual.
- "Próximos passos": voltar em X dias, fazer exame, etc.
- Botão "Avaliar o atendimento" (simples, 1-5 estrelas + comentário rápido).
- Versão acessível com áudio ou texto grande.

- [ ] A proposta **se apoia** em incluir tela pós-consulta
- [ ] Vamos **incluir** resumo + lembretes com foco em acessibilidade (idosos/TEA)
- [ ] Vamos focar só até a fila de consulta (sem pós-atendimento no protótipo)
- [ ] Vamos deixar como extensão futura

---

## 4. Possíveis Fluxos Completos do App (para ajudar na decisão)

**Fluxo 1 — Mais simples (recomendado para protótipo inicial)**
Chegada → Cadastro simples → Entra na fila → Acompanha posição + tempo + notificação → Vai para triagem.

**Fluxo 2 — Com transparência alta**
Mesmo do Fluxo 1 + mostra cores das pessoas na frente + opção de sair temporariamente.

**Fluxo 3 — Com acessibilidade forte**
Cadastro com perguntas de deficiência → ativa automaticamente "Modo Baixo Estímulo" ou "Modo Alto Contraste" → equipe recebe tag interna → paciente vê interface adaptada.

Podemos prototipar um fluxo principal e mencionar variações.

---

## 5. Mapa Sugerido de Telas (para referência do protótipo)

Possíveis telas (não todas precisam ser feitas agora):

1. **Tela de Boas-vindas / QR Code**
2. **Cadastro** (1 ou 2 passos, com ou sem perguntas de acessibilidade)
3. **Minha Fila** (posição, tempo estimado, cor provisória?, banner de acessibilidade)
4. **Detalhes da Fila** (pessoas na frente com cores — opcional)
5. **Notificação / Alerta de chamada**
6. **Painel da Recepção** (visão da equipe)
7. **Tela Pós-atendimento** (resumo)
8. **Configurações de Acessibilidade** (alto contraste, tamanho de fonte, modo silencioso)

---

## 6. Nomes Sugeridos

(Mantive a seção original, mas podemos votar depois de definir o escopo.)

### Transparência e Clareza
- [ ] **FilaClara**
- [ ] **FilaTransparente**
- [ ] **ClaraFila**
- [ ] **FilaAberta**

### Acessibilidade e Inclusão
- [ ] **FilaAcessível**
- [ ] **AcessaFila**
- [ ] **FilaInclusiva**
- [ ] **FilaParaTodos**

### Nomes modernos / App
- [ ] **FilaLivre**
- [ ] **AppFila**
- [ ] **FilaAgora**
- [ ] **Fil.Ai**
- [ ] **Filei**

---

## 7. Perguntas para Debate (mais coesas e ligadas às escolhas)

1. Qual fluxo principal vamos prototipar primeiro (Fluxo 1, 2 ou 3 descritos acima)? Por quê?

2. Vamos mostrar cor provisória ao paciente ou só internamente? Qual o risco de mostrar e a triagem mudar?

3. Qual o nível de transparência que queremos no painel (mostrar cores das pessoas na frente ou só posição + tempo)? Isso muda a sensação de justiça?

4. Cadastro com perguntas de deficiência vai ser obrigatório ou opcional? Como evitamos que a pessoa se sinta "obrigada a se declarar"?

5. Vamos priorizar integração com Gov.br desde o começo ou focar primeiro em cadastro manual acessível?

6. Quais telas são **obrigatórias** no protótipo mínimo viável e quais são "bônus"?

7. Quem vai ser responsável por definir as cores HEX e popular o arquivo `Identidade-visual.md` esta semana?

---

**Próximo passo:**  
Leiam a explicação expandida, marquem as opções que fazem mais sentido para o grupo, discutam os fluxos e telas, respondam as perguntas acima. Depois consolidamos.

---

> 📎 Relatório original da Ausiane: `relatorio_filas_inteligentes.pdf`  
> 🔗 Google Docs de pesquisa/casos: no [Index-Geral.md](Index-Geral.md)

*Documento vivo. Editem e marquem decisões.*

## 2. Painel de Decisões — Caminho Linear

Cada item abaixo tem:
- Breve explicação
- **Se apoia na proposta?** (a ideia faz sentido para nós?)
- **Incluir na entrega?** (vamos levar para protótipo, slides, documentação?)

Marque [x] conforme o grupo for decidindo.

### 2.1 Integração com sistemas oficiais do Governo (Meu SUS Digital / RNDS)

A proposta menciona possibilidade de puxar dados automaticamente (alergias, histórico, deficiências) para reduzir repetição e melhorar o acolhimento.

- [ ] A proposta **se apoia** em integração com governo
- [ ] Vamos **incluir** integração real no protótipo/entrega
- [ ] Vamos mencionar como **visão futura** (sem implementar agora)
- [ ] Vamos **remover** qualquer menção forte a integração por enquanto (deixar em aberto)

**Status atual:** Ainda indefinido. Questões do PDF original permanecem em discussão.

### 2.2 Cadastro alternativo sem conta Gov.br

Permite que o paciente informe nome, CPF, deficiências, alergias e sintomas de forma simples.

- [ ] A proposta **se apoia** em oferecer cadastro manual
- [ ] Vamos **incluir** cadastro manual completo no protótipo
- [ ] Vamos priorizar apenas Meu SUS Digital + fallback simples
- [ ] Vamos deixar cadastro manual como item secundário

### 2.3 Módulo forte de Acessibilidade (TEA, auditiva, visual)

Perguntas específicas no cadastro + preparação da equipe antes da chegada (modo baixo estímulo, recursos visuais, etc.).

- [ ] A proposta **se apoia** em acessibilidade como diferencial central
- [ ] Vamos **incluir** perguntas de deficiência e modos acessíveis no protótipo
- [ ] Vamos tratar acessibilidade de forma mais genérica (sem ênfase forte em TEA)
- [ ] Vamos prototipar telas específicas para diferentes tipos de deficiência

### 2.4 Uso de "cor provisória" gerada pelo app

O app faria uma classificação inicial antes da triagem oficial.

- [ ] A proposta **se apoia** em gerar cor provisória
- [ ] Vamos **incluir** cor provisória visível ao paciente (com aviso claro de que é temporária)
- [ ] Vamos usar cor provisória apenas internamente (não mostrar ao paciente)
- [ ] Vamos **remover** o conceito de cor provisória por enquanto

### 2.5 Transparência radical no painel (mostrar cores das pessoas na frente)

Mostrar posição + cores das pessoas à frente (sem nomes).

- [ ] A proposta **se apoia** em mostrar cores no painel
- [ ] Vamos **incluir** cores das pessoas na frente no protótipo
- [ ] Vamos mostrar apenas posição + tempo estimado (sem cores)
- [ ] Vamos testar as duas versões

### 2.6 Opção de sair do local e ser avisado (saída temporária)

Paciente pode sair e receber alerta quando estiver próximo.

- [ ] A proposta **se apoia** nessa funcionalidade
- [ ] Vamos **incluir** no protótipo
- [ ] Vamos mencionar como ideia futura
- [ ] Vamos remover por enquanto

### 2.7 Lembretes de medicamento e resumo pós-consulta

Tela final com medicamentos + próximos passos.

- [ ] A proposta **se apoia** em incluir pós-consulta
- [ ] Vamos **incluir** no protótipo (foco em acessibilidade para idosos/TEA)
- [ ] Vamos focar só até a fila de consulta
- [ ] Vamos deixar como extensão futura

---

## 3. Nomes Sugeridos (apresentação visual clara e coesa)

**Instruções:** Cada pessoa marque **[x]** em até 3 nomes que mais gostar. Depois fazemos votação rápida.

### Transparência e Clareza
- [ ] **FilaClara**
- [ ] **FilaTransparente**
- [ ] **ClaraFila**
- [ ] **FilaAberta**

### Acessibilidade e Inclusão
- [ ] **FilaAcessível**
- [ ] **AcessaFila**
- [ ] **FilaInclusiva**
- [ ] **FilaParaTodos**

### Agilidade e Justiça
- [ ] **FilaRápida**
- [ ] **PriorizaFila**
- [ ] **FilaJusta**
- [ ] **FilaSegura**

### Nomes modernos / App
- [ ] **FilaLivre**
- [ ] **AppFila**
- [ ] **FilaAgora**
- [ ] **FilaDireta**
- [ ] **FilaViva**
- [ ] **SaudeFila**

**Sugestões recentes do chat:**
- [ ] **Filei**
- [ ] **Fil.Ai**
- [ ] **AppFila**

---

## 4. Identidade Visual e Cores do Protocolo de Manchester

> **Arquivo dedicado:** [`Identidade-visual.md`](Identidade-visual.md)  
> (Crie, popule e mantenha esse arquivo. Defina as cores hex exatas do Manchester + estilos de acessibilidade. Todos devem seguir o padrão definido lá.)

**Status:** Arquivo ainda não preenchido. Atualizaremos com as definições do grupo.

---

## 5. Perguntas para Debate pelo Grupo

1. Quais são os requisitos necessários para a integração com o governo (Meu SUS Digital / RNDS)?

2. Como podemos validar se as demandas do PDF estão alinhadas com a proposta?

3. Quais critérios devemos usar para marcar os checkboxes de aprovação?

4. De que forma a decisão sobre cada item impactará o cronograma do projeto?

5. Quem será responsável por acompanhar a implementação das escolhas feitas?

---

**Próximo passo:**  
Marquem os checkboxes, votem nos nomes, respondam as perguntas (no grupo ou editando aqui). Depois consolidamos o que for aprovado.

---

> 📎 Relatório original da Ausiane: `relatorio_filas_inteligentes.pdf`  
> 🔗 Google Docs de pesquisa/casos: no [Index-Geral.md](Index-Geral.md)

*Documento vivo. Editem e marquem decisões.*
