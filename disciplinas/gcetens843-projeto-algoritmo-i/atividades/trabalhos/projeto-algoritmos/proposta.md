# 📋 Proposta de Solução — Filas Inteligentes em Serviços de Saúde com Foco em Acessibilidade

> **Documento VIVO** — Aberto para edição coletiva  
> **Responsáveis principais:** Ausiane + Rios (pesquisa + proposta)  
> **Última atualização:** 12/06/2026  
> **Status:** Em construção — ideias em aberto para discussão e condensação

**Nome do arquivo:** `proposta.md` (use este nome para referenciar)

---

**Instruções para o grupo:**
- Escrevam diretamente neste arquivo as ideias de proposta.
- Usem `[IDEIA]` ou seções com checkboxes para facilitar seleção e votação.
- Tudo aqui pode (e deve) ser atualizado.
- Após condensar, mover o que for aprovado para `tema-escolhido.md` e `decisoes.md`.

---

## 1. Resumo Executivo (para alinhamento rápido)

O projeto propõe um **aplicativo de fila inteligente** que:
- Permite ao paciente fazer uma **pré-classificação** antes de chegar (ou no guichê).
- Resolve o "buraco" identificado entre recepção e triagem.
- Prioriza acessibilidade desde o primeiro contato (TEA, deficiência auditiva/visual, etc.).
- Integra com sistemas oficiais do Governo (Meu SUS Digital / RNDS) quando possível.
- Reduz aglomeração, incerteza e sensação de injustiça nas filas de saúde pública.

---

## 2. Problematização (base da proposta)

### Perguntas que surgiram no grupo
> "A ordem da fila segue chegada, gravidade, ou os dois? A triagem não é justamente para identificar a gravidade?"

> "No guichê, como se julga a gravidade para decidir quem vai primeiro até a triagem?"

Essas dúvidas geram sensação de arbitrariedade e injustiça.

### O que a pesquisa revelou (fluxo oficial em urgência/emergência)

| Etapa | O que acontece | Critério de ordenação | Problema identificado |
|-------|----------------|-----------------------|-----------------------|
| 1. Guichê / Recepção | Cadastro administrativo (dados pessoais, cartão SUS) | Ordem de chegada (FIFO) — **sem avaliação de gravidade** | Todos entram na mesma fila, sem priorização |
| 2. Triagem / Classificação de Risco | Enfermeiro avalia sintomas, sinais vitais | Protocolo de Manchester (5 cores) | Existe um "buraco" antes da triagem |
| 3. Consulta médica | Atendimento pelo médico | Cor + tempo dentro da cor | — |

**Conclusão da pesquisa:**  
A confusão do paciente é legítima. Entre o guichê e a triagem existe um período sem priorização. Um caso extremo documentado pelo Ministério da Saúde: paciente com dor abdominal intensa esperou 35 minutos sem triagem sistematizada e morreu.

### Cores do Protocolo de Manchester (resumo)

- **Vermelho** — Emergência (0 min)
- **Laranja** — Muito urgente (até 10 min)
- **Amarelo** — Urgente (até 60 min)
- **Verde** — Pouco urgente (até 120 min) — ~70% dos casos
- **Azul** — Não urgente (até 240 min)

Dado relevante: Mesmo pacientes vermelho/laranja aguardaram em média mais de 4 minutos antes da triagem.

---

## 3. Proposta de Solução

### 3.1 Visão Geral

**Nome provisório atual:** FilaClara (sujeito a mudança — ver seção de nomes abaixo)

**Conceito central:**
Um aplicativo que permite ao paciente realizar uma **pré-classificação** (questionário simples + acessibilidade) antes ou no momento da chegada, gerando uma **cor provisória**. Casos graves (vermelho/laranja) são encaminhados com prioridade imediata. Os demais entram na fila normal do guichê, mas com transparência total de posição e tempo estimado.

**Diferenciais propostos:**
- Acessibilidade desde o primeiro contato (TEA, auditiva, visual, etc.)
- Redução de aglomeração (pessoa pode sair e voltar quando chamado)
- Integração com Meu SUS Digital / RNDS (quando disponível)
- Transparência radical (posição, cores na frente, tempo estimado)
- Modo de baixo estímulo para TEA

### 3.2 Cadastro Alternativo (sem conta Gov.br)

Campos sugeridos:
- Nome
- CPF
- Idade
- Possui alguma deficiência? (ramifica perguntas específicas)
  - Cegueira/baixa visão → audiodescrição / aumento de fonte
  - Autismo → modo de baixo estímulo
  - Deficiência auditiva → recursos visuais / Libras
- Possui alergia a medicamentos? (Sim / Não / Não consigo lembrar)
- Sintomas: campo de texto livre (com chatbot estruturador) + opção "Não consigo descrever, estou passando muito mal" (gatilho de prioridade)

### 3.3 Integração com Governo (Meu SUS Digital / RNDS)

Justificativa técnica (2025-2026):
- RNDS já é plataforma oficial com mais de 80% dos estados integrados.
- CPF como base de registro nacional.
- Meu SUS Digital já expõe alergias e medicamentos.
- Na Atenção Primária já existe integração funcional.

Benefícios:
- Reduzir aglomeração
- Obter automaticamente alergias, histórico, deficiências
- Preparar a equipe antes da chegada (especialmente para TEA)

---

## 4. Fluxo Proposto do Aplicativo (Telas)

(Tela 1) **Identificação**  
Login via Meu SUS Digital ou cadastro manual.

(Tela 2) **Pré-classificação**  
Questionário gera "cor provisória".  
- Vermelho/Laranja → Chamada prioritária imediata  
- Amarelo/Verde/Azul → Fila normal do guichê

(Tela 3) **Painel de Fila (Pré-triagem)**  
- Posição ("Você é o nº X, faltam Y pessoas")  
- Cores das pessoas na frente (sem nomes)  
- Tempo estimado atualizado em tempo real  
- Alerta sonoro/vibração  
- Opção "Sair temporariamente" com aviso de retorno

(Tela 4) **Pós-triagem**  
Confirmação da cor oficial + novo painel para a etapa de consulta médica.

(Tela 5) **Pós-consulta**  
Resumo do diagnóstico, medicamentos com lembretes, próximos passos (exames, retorno).

---

## 5. Sugestões de Nomes para o App (15+ ideias)

**Grupo 1 — Foco em Transparência e Clareza**
1. **FilaClara**
2. **FilaTransparente**
3. **ClaraFila**
4. **FilaAberta**

**Grupo 2 — Foco em Acessibilidade**
5. **FilaAcessível**
6. **AcessaFila**
7. **FilaInclusiva**
8. **FilaParaTodos**

**Grupo 3 — Foco em Agilidade e Prioridade**
9. **FilaRápida**
10. **PriorizaFila**
11. **FilaJusta**
12. **FilaSegura**

**Grupo 4 — Nomes mais modernos / App-like**
13. **FilaApp**
14. **FilaLivre**
15. **AppFila**
16. **FilaAgora**
17. **SaudeFila**
18. **FilaDireta**
19. **FilaViva**
20. **SUSFila** (se quiser vincular ao SUS)

**Sugestão de processo:** Cada pessoa vota em 3 favoritos. Depois fazemos uma enquete rápida no grupo.

---

## 6. Ideias para Fluxograma

- Mostrar claramente as 3 etapas oficiais + onde o app interfere.
- Destacar o "buraco" entre Guichê e Triagem.
- Usar cores do Protocolo de Manchester no diagrama.
- Versão simplificada (para slides) + versão detalhada (para documentação).

**Sugestão de Deivison (chat):** O fluxograma deve mostrar todas as etapas do problema e como a solução resolve cada uma.

---

## 7. Ideias para Protótipo de Telas (Figma)

Ausiane já começou a organizar ideias no documento.

**Telas mínimas recomendadas para entrega:**
1. Tela de Identificação / Cadastro
2. Tela de Pré-classificação (questionário)
3. Tela de Painel de Fila (com posição + cores)
4. Tela Pós-triagem
5. Tela Pós-consulta (com lembretes de medicamento)

**Requisitos de acessibilidade a prototipar:**
- Modo de alto contraste
- Modo de baixo estímulo (para TEA)
- Opções de audiodescrição / texto grande
- Recursos visuais no lugar de som (para surdos)

---

## 8. Ideias para Slides da Apresentação

- Slide de Problematização com as duas perguntas iniciais do grupo (forte impacto).
- Slide com o "buraco" do fluxo (guichê → triagem).
- Tabela do Protocolo de Manchester.
- Antes e Depois (fluxo atual vs fluxo com o app).
- Telas do protótipo (máximo 5-6 slides).
- Diferenciais de acessibilidade.
- Integração com RNDS / Meu SUS Digital (mostra viabilidade técnica).
- Fundamentação teórica curta (psicologia da espera + David Maister).
- Referências principais.

---

## 9. Casos de Uso e Alinhamento com a Proposta

**Casos onde a solução seria útil (exemplos do cotidiano):**
- Paciente com dor abdominal intensa (caso real citado).
- Pessoas com TEA que precisam de preparo sensorial.
- Idosos que esquecem medicamentos ou próximos passos.
- Pacientes com deficiência auditiva que perdem chamadas por voz.
- Qualquer pessoa que queira evitar ficar presa na recepção por horas.

**Perguntas que o professor pode fazer (preparar respostas):**
- "E se todo mundo colocar 'estou passando muito mal'?"
- "Como isso se diferencia de sistemas que já existem?"
- "E a integração com o sistema do hospital — é viável hoje?"
- "Qual o ganho real de acessibilidade?"

---

## 10. Questões em Aberto (para o grupo decidir)

- [ ] Qual nome vamos adotar?
- [ ] Vamos manter a ideia de "cor provisória" gerada pelo app?
- [ ] Vamos incluir funcionalidade de agendamento por horário (sugestão do chat)?
- [ ] Até que ponto vamos integrar com RNDS/Meu SUS Digital na entrega (protótipo vs visão)?
- [ ] O protótipo vai mostrar o fluxo completo (incluindo pós-consulta) ou focar só na fila?
- [ ] Como vamos apresentar os "casos existentes" vs "exemplos de aplicação da nossa ideia"?

---

**Próximo passo recomendado:**  
Cada integrante leia este documento, escreva suas ideias diretamente aqui (ou comente no grupo), e vote nos nomes preferidos.

---

> 📎 **Relatório original enviado por Ausiane:** `relatorio_filas_inteligentes.pdf` (anexado no chat)  
> 🔗 Links dos Google Docs de pesquisa e casos estão no [Index-Geral.md](Index-Geral.md)

*Documento criado para facilitar a construção coletiva da proposta. Atualizem livremente.*
