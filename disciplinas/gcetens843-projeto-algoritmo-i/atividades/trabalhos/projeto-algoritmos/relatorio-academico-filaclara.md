<div class="cabecalho-atividade">
<img src="templates/logo-ufrb-20-anos.png" alt="UFRB" style="max-width: 55%;" />
<span class="inst">Universidade Federal do Recôncavo da Bahia — UFRB</span><br/>
<span class="sub">Centro de Ciência e Tecnologia — CETENS</span><br/>
<span class="curso">Bacharelado em Sistemas de Informação (EAD)</span>
<hr/>
</div>

# FilaClara: Sistema de Gerenciamento Inteligente de Filas Presenciais em Serviços de Saúde com Foco em Acessibilidade

<div class="tabela-dados">

| | |
|---|---|
| **Disciplina:** | GCETENS843 — Projeto Algoritmo I |
| **Docente:** | Prof. Luis Paulo Morais Conceição |
| **Semestre:** | 2026.1 |
| **Data:** | 29 de junho de 2026 |

</div>

**Equipe:**

| Nome | Função |
|---|---|
| Deivison de Lima Santana | Organização, documentação e proposta |
| Ausiane | Pesquisa de casos, acessibilidade e protótipo |
| Nubia de Asiká | Pesquisa de casos e referências |
| Rios | Pesquisa do problema real e fundamentação teórica |
| Artur Campos | Fluxograma |
| Marcos Vinícius | Fluxograma |
| Uélinton Cardoso Santana | Protótipo de telas e identidade visual |
| Wallace | Apresentação e slides |

---

## Resumo

O presente trabalho apresenta o **FilaClara**, um sistema de gerenciamento inteligente de filas presenciais para serviços de saúde, desenvolvido com foco em transparência, acessibilidade e inclusão. A solução propõe o acompanhamento de filas em tempo real por meio de dispositivo móvel, com geração de senha virtual, notificação antecipada de atendimento e recursos de acessibilidade para pessoas com deficiência auditiva, visual, Transtorno do Espectro Autista (TEA), idosos e gestantes. O sistema visa reduzir o tempo de permanência física dos usuários nas unidades de saúde, oferecer previsibilidade sobre o atendimento e garantir que pessoas com necessidades especiais não sejam excluídas do processo. O trabalho inclui a fundamentação do problema real, análise de soluções existentes, fluxograma do sistema, protótipo de telas e considerações sobre a viabilidade técnica da proposta.

**Palavras-chave:** filas presenciais; saúde; acessibilidade; inclusão; sistema de informação.

---

## 1. Introdução

A transformação digital tem promovido mudanças significativas em diversos setores da sociedade, incluindo o setor da saúde. O avanço das tecnologias digitais, dos sistemas de informação em saúde e das soluções móveis tem contribuído para a melhoria da gestão dos serviços, da comunicação entre profissionais e usuários e da qualidade da assistência prestada (Aggarwal et al., 2022; Kessel et al., 2022).

No entanto, um problema persiste em hospitais, clínicas, unidades básicas de saúde (UBSs) e Unidades de Pronto Atendimento (UPAs): a demora nas filas presenciais de atendimento e a falta de informações claras sobre a posição do usuário na fila ou sobre o tempo estimado para o atendimento.

Este problema é agravado para pessoas com deficiência. Indivíduos com deficiência auditiva podem não ouvir chamadas por alto-falante; pessoas com baixa visão podem não ler painéis com códigos opacos; e pessoas com TEA podem sofrer com o excesso de estímulos sensoriais e a imprevisibilidade do ambiente de espera (Clemente et al., 2022; Farias et al., 2023; Ha et al., 2023).

Diante desse cenário, o presente projeto propõe o **FilaClara**, um sistema de gerenciamento inteligente de filas presenciais para serviços de saúde, desenvolvido com transparência radical e acessibilidade como pilares centrais. A pergunta que orienta esta pesquisa é: *como reduzir o tempo de permanência física dos usuários nas unidades de saúde e aumentar a previsibilidade do atendimento por meio de uma solução digital acessível e inclusiva?*

---

## 2. Problema Real

### 2.1 Contextualização

O fluxo atual em serviços de saúde de porta aberta segue, de maneira geral, as seguintes etapas: o usuário chega à unidade, dirige-se ao guichê de recepção, recebe uma senha física (baseada na ordem de chegada) e aguarda na sala de espera até ser chamado por alto-falante ou painel eletrônico. A chamada é geralmente feita por meio de códigos opacos como "AB-22" ou "H-27", sem qualquer informação sobre a posição do usuário na fila ou o tempo estimado de espera.

Estudos demonstram que tempos prolongados de espera estão associados à redução da satisfação dos usuários e à percepção negativa da qualidade dos serviços de saúde (Aggarwal et al., 2022). A espera prolongada também está associada à aglomeração de pacientes, falhas na comunicação, aumento do estresse, absenteísmo em consultas e redução da eficiência operacional dos serviços (Thompson et al., 2023).

### 2.2 O Problema da Acessibilidade

Pessoas com deficiência enfrentam barreiras adicionais significativas. Indivíduos com deficiência auditiva podem não perceber chamadas realizadas exclusivamente por áudio. Pessoas com baixa visão ou deficiência visual encontram dificuldades para ler painéis com caracteres pequenos ou em cores de baixo contraste. Pessoas com TEA podem ser sobrecarregadas sensorialmente pelo ambiente de sala de espera, com ruídos, luzes e aglomeração. Idosos e gestantes, por sua vez, têm dificuldade em permanecer em pé por longos períodos.

Embora existam dispositivos legais que assegurem atendimento prioritário a esses grupos, a acessibilidade física e digital dos serviços de saúde ainda é insuficiente (Farias et al., 2023; Jonsson et al., 2023).

### 2.3 Pergunta Central

A questão que orienta este projeto é:

> Como reduzir o tempo de permanência física dos usuários nas unidades de saúde e aumentar a previsibilidade do atendimento por meio de uma solução digital acessível e inclusiva?

---

## 3. Soluções Existentes

A pesquisa por soluções existentes no mercado foi realizada pela equipe com o objetivo de identificar sistemas concorrentes ou complementares que já atuam no segmento de gerenciamento de filas em serviços de saúde. Os resultados desta pesquisa estão documentados em arquivo complementar e incluem aplicativos e plataformas que oferecem funcionalidades como senha digital, acompanhamento remoto e painéis de chamada.

A análise dessas soluções existentes indicou que, embora haja sistemas de gerenciamento de filas disponíveis, a maioria não incorpora a acessibilidade como um pilar central do design, limitando-se a oferecer recursos básicos que não atendem adequadamente pessoas com deficiência auditiva, visual ou TEA.

---

## 4. Proposta de Solução: FilaClara

### 4.1 Visão Geral

O **FilaClara** é um sistema de acompanhamento de filas em tempo real para serviços de saúde, com foco em **transparência** e **acessibilidade**. A solução permite que o paciente:

1. Realize um cadastro rápido ao chegar à unidade de saúde;
2. Receba uma senha virtual diretamente em seu dispositivo móvel;
3. Acompanhe em tempo real sua posição na fila e o tempo estimado de espera;
4. Receba notificações antecipadas quando o atendimento estiver próximo;
5. Visualize informações claras sobre as pessoas à sua frente (quantidade e classificação de risco, sem identificação nominal);
6. Utilize recursos de acessibilidade como alto contraste, texto ampliado, modo silencioso (para surdos) e modo baixo estímulo (para TEA).

### 4.2 Funcionalidades Principais

**Para o paciente:**
- Cadastro rápido com identificação de necessidades especiais
- Senha virtual e posição na fila em tempo real
- Tempo estimado de atendimento
- Notificação push quando faltarem poucas pessoas
- Modos de acessibilidade adaptáveis

**Para a equipe de saúde:**
- Painel interno com lista ordenada por ordem de chegada e classificação de risco
- Botão para chamar o próximo paciente
- Identificação de pacientes com necessidades especiais
- Histórico de atendimentos realizados

### 4.3 Diferenciais

O FilaClara se diferencia das soluções existentes por:

- **Acessibilidade como pilar central**: modos específicos para pessoas com deficiência auditiva, visual, TEA, idosos e gestantes;
- **Transparência radical**: exibição da posição real e cores de risco das pessoas à frente, sem identificação nominal;
- **Mobilidade**: possibilidade de sair do local e ser notificado quando o atendimento estiver próximo;
- **Redução do tempo de permanência física**: a previsibilidade permite que o usuário planeje melhor sua espera.

---

## 5. Fluxograma do Sistema

O fluxograma do sistema descreve o percurso completo do usuário no FilaClara, desde a entrada até o atendimento, incluindo a lógica de prioridade e notificação.

**Etapas do fluxo:**

1. **Entrada no Sistema** — O usuário acessa o aplicativo (web ou mobile). Se já possui cadastro, realiza login; caso contrário, faz um cadastro rápido informando dados pessoais e necessidades especiais.

2. **Solicitação de Atendimento** — O usuário seleciona a clínica ou unidade de saúde e o tipo de atendimento desejado (consulta comum, exame, atendimento prioritário, retorno ou triagem).

3. **Decisão de Prioridade** — O sistema verifica se o usuário se enquadra em alguma categoria de prioridade legal (idoso, gestante, pessoa com deficiência, TEA). Em caso positivo, é direcionado para a fila prioritária; caso contrário, para a fila convencional. Ambas as filas seguem o mesmo fluxo de atendimento.

4. **Geração de Senha** — O sistema gera uma senha única, registra o horário de entrada, posiciona o usuário no final da fila correspondente e calcula a previsão inicial de atendimento com base no tempo médio histórico.

5. **Chamada e Notificação** — Quando o usuário atinge o topo da fila, é chamado para atendimento. O segundo usuário da fila recebe uma notificação antecipada para se dirigir ao local, reduzindo o tempo de espera entre chamadas.

6. **Atendimento e Finalização** — Após o atendimento, o sistema exclui o usuário da fila, que é atualizada automaticamente. O próximo usuário no topo é então chamado.

O fluxograma completo pode ser visualizado no arquivo complementar `fluxograma.pdf` anexo a este relatório.

---

## 6. Protótipo de Telas

O protótipo do FilaClara foi desenvolvido com foco na experiência do usuário e nos princípios de acessibilidade. As telas principais incluem:

**Fluxo do paciente:**
- **Splash Screen** — Tela inicial com a identidade visual do sistema
- **Onboarding** — Apresentação das funcionalidades principais
- **Home** — Opções de clínicas e atendimentos disponíveis
- **Cadastro** — Formulário com campos para dados pessoais e necessidades especiais
- **Senha Virtual** — Exibição da senha gerada e posição na fila
- **Acompanhamento** — Tela principal com posição, tempo estimado e notificações
- **Notificação de Chamada** — Alerta visual e sonoro quando o atendimento estiver próximo

**Painel da clínica:**
- **Lista de Pacientes** — Ordenada por ordem de chegada com indicação de prioridade
- **Chamada** — Botão para chamar o próximo paciente
- **Histórico** — Registro dos atendimentos realizados

O protótipo interativo pode ser acessado em formato HTML anexo a este relatório.

---

## 7. Considerações Finais

O FilaClara apresenta-se como uma solução viável e necessária para o problema das filas presenciais em serviços de saúde, combinando tecnologia móvel, transparência e acessibilidade em um único sistema. A abordagem proposta responde diretamente à pergunta central do projeto, oferecendo meios para reduzir o tempo de permanência física dos usuários nas unidades de saúde e aumentar a previsibilidade do atendimento.

A pesquisa realizada pela equipe evidenciou que as soluções existentes no mercado não incorporam a acessibilidade como pilar central do design, deixando desassistidas pessoas com deficiência auditiva, visual e TEA. O FilaClara preenche essa lacuna ao oferecer recursos específicos para cada tipo de necessidade.

Como trabalhos futuros, sugere-se o desenvolvimento de integração com sistemas oficiais de saúde, como o Meu SUS Digital e a Rede Nacional de Dados em Saúde (RNDS), bem como a implementação do código computacional em linguagem C para validação dos algoritmos de gerenciamento de filas.

---

## Referências

AGGARWAL, Ravi et al. Defining the enablers and barriers to the implementation of large-scale, health care-related mobile technology: qualitative case study in a tertiary hospital setting. **JMIR mHealth and uHealth**, Toronto, v. 10, n. 2, 2022.

CHIANCA, Tânia Couto Machado et al. Tempos de espera para atendimento usando sistema de triagem de Manchester em um hospital de urgência. **Reme: Revista Mineira de Enfermagem**, v. 20, 2016.

CLEMENTE, Karina Aparecida Padilha et al. Barreiras ao acesso das pessoas com deficiência aos serviços de saúde: uma revisão de escopo. **Revista de Saúde Pública**, v. 56, n. 64, 2022.

FARIAS, Tássia Mayra Oliveira et al. O estreito acesso das Pessoas com Deficiência aos serviços de saúde em uma capital nordestina. **Ciência & Saúde Coletiva**, v. 28, n. 5, 2023.

GIANNOTTI, Elaine Maria; LOUVISON, Marília; CHIORO, Arthur. Listas de espera na atenção ambulatorial especializada: reflexões sobre um conceito crítico para o Sistema Único de Saúde. **Cadernos de Saúde Pública**, v. 41, n. 6, 2025.

HA, Sandeul et al. Digital health equity and tailored health care service for people with disability: user-centered design and usability study. **Journal of Medical Internet Research**, v. 25, 2023.

JONSSON, Marika et al. Development and evaluation of eHealth services regarding accessibility: scoping literature review. **Journal of Medical Internet Research**, v. 25, 2023.

KESSEL, Robin Van et al. Digital health paradox: international policy perspectives to address increased health inequalities for people living with disabilities. **Journal of Medical Internet Research**, Toronto, v. 24, n. 2, 2022.

MELO, Daiane Celestino et al. Acessibilidade aos serviços de saúde e posição dos usuários no espaço social em Salvador, Bahia, 2006: um estudo transversal. **Epidemiologia e Serviços de Saúde**, v. 30, n. 2, 2021.

THOMPSON, Yee Lam Elim et al. Evaluation of wait time saving effectiveness of triage algorithms. **arXiv:2303.07050**, v. 1, 2023.
