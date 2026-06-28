> 📦 **ARQUIVADO** — Documento extra, não é entregável obrigatório do professor.
> Os entregáveis obrigatórios são: Problema Real · Casos Existentes · Proposta · Fluxograma · Protótipo · Apresentação

<div class="cabecalho-atividade">
<img src="templates/logo-ufrb-20-anos.png" alt="UFRB" style="max-width: 55%;" />
<span class="inst">Universidade Federal do Recôncavo da Bahia — UFRB</span><br/>
<span class="sub">Centro de Ciência e Tecnologia — CETENS</span><br/>
<span class="curso">Bacharelado em Sistemas de Informação (EAD)</span>
<hr/>
</div>

# MinhaFila: Sistema de Gerenciamento Inteligente de Filas para Múltiplos Setores

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
| Deivison de Lima Santana | Organização, documentação, proposta e protótipo |
| Ausiane de Oliveira Costa | Pesquisa e acessibilidade |
| Nubia de Asiká | Pesquisa e referências |
| Raimon Rios da Silva | Pesquisa e fundamentação |
| Artur Campos | Fluxograma |
| Marcos Vinícius dos Santos Sena | Fluxograma |
| Uélinton Cardoso Santana | Protótipo e identidade visual |
| Wallace Ribeiro Lima | Apresentação e slides |

---

## Resumo

O presente trabalho apresenta o **MinhaFila**, um sistema de gerenciamento inteligente de filas presenciais para múltiplos setores da sociedade, incluindo bancos, serviços de saúde, instituições de ensino, comércio e órgãos públicos. A solução propõe o acompanhamento de filas em tempo real por meio de dispositivo móvel, com geração de senha virtual, notificação antecipada de atendimento e recursos de acessibilidade para pessoas com deficiência auditiva, visual, Transtorno do Espectro Autista (TEA), idosos e gestantes. O sistema visa reduzir o tempo de permanência física dos usuários nos locais de atendimento, oferecer previsibilidade sobre o momento do serviço e garantir que pessoas com necessidades especiais não sejam excluídas do processo. O trabalho inclui a fundamentação do problema real, análise de soluções existentes no mercado, fluxograma do sistema, protótipo de telas e considerações sobre a viabilidade técnica da proposta.

**Palavras-chave:** filas de atendimento; sistema de informação; gestão de filas; tecnologia mobile.

---

## 1. Introdução

As filas de espera são uma realidade presente em praticamente todos os setores da sociedade moderna. Seja em agências bancárias, hospitais e clínicas, instituições de ensino, estabelecimentos comerciais ou repartições públicas, a espera por atendimento é uma experiência frequente e, na maioria das vezes, desconfortável para o cidadão.

Estudos de mercado indicam que o setor de sistemas de gerenciamento de filas (*Queue Management Systems* — QMS) tem experimentado crescimento significativo nos últimos anos. De acordo com a Fortune Business Insights (2024), o mercado global de QMS foi avaliado em aproximadamente USD 542,3 milhões em 2023 e projeta-se que atinja USD 1.127,6 milhões até 2032, com uma taxa de crescimento anual composta (CAGR) de 8,5%. Esse crescimento é impulsionado pela transformação digital dos serviços, pela exigência dos consumidores por mais transparência e eficiência, e pela necessidade de reduzir custos operacionais.

Paralelamente, a transformação digital tem promovido mudanças profundas na forma como os serviços são prestados e consumidos. Aplicativos móveis, sistemas de informação baseados em nuvem e tecnologias de notificação em tempo real tornaram-se ferramentas acessíveis para melhorar a experiência do usuário e otimizar processos organizacionais (Kessel et al., 2022).

No entanto, grande parte das soluções de gerenciamento de filas disponíveis no mercado ainda apresenta limitações significativas: são voltadas para segmentos específicos, possuem custos elevados de implantação, não oferecem recursos adequados de acessibilidade ou dependem de infraestrutura física especializada (painéis eletrônicos, totens de senha, entre outros).

Diante desse cenário, o presente projeto propõe o **MinhaFila**, um sistema de gerenciamento inteligente de filas presenciais desenvolvido para atender a múltiplos setores, com foco em flexibilidade, acessibilidade e mobilidade. A pergunta que orienta esta pesquisa é: *como reduzir o tempo de permanência física dos usuários nos locais de atendimento e aumentar a previsibilidade do serviço por meio de uma solução digital flexível, acessível e aplicável a diferentes setores?*

---

## 2. Problema Real

### 2.1 Contextualização

O fluxo de atendimento presencial em estabelecimentos de diferentes setores segue, de maneira geral, etapas semelhantes: o usuário chega ao local, dirige-se ao balcão de recepção, recebe uma senha física (baseada na ordem de chegada) e aguarda na sala de espera até ser chamado por alto-falante, painel eletrônico ou chamada nominal. Esse modelo apresenta problemas recorrentes em todos os setores:

- **Falta de previsibilidade**: o usuário não sabe quanto tempo precisará esperar nem quantas pessoas estão à sua frente;
- **Necessidade de permanência física**: o usuário precisa permanecer no local de atendimento durante toda a espera, sob pena de perder sua vez;
- **Comunicação ineficiente**: chamadas por áudio podem não ser ouvidas em ambientes ruidosos ou por pessoas com deficiência auditiva;
- **Desorganização**: em horários de pico, a aglomeração de pessoas dificulta a organização e o fluxo do atendimento.

Pesquisas indicam que tempos prolongados de espera estão associados à redução da satisfação dos usuários e à percepção negativa da qualidade dos serviços, independentemente do setor (Aggarwal et al., 2022). A espera prolongada também está associada à aglomeração, falhas na comunicação, aumento do estresse e redução da eficiência operacional (Thompson et al., 2023).

### 2.2 O Problema da Acessibilidade

Pessoas com deficiência enfrentam barreiras adicionais significativas durante a espera por atendimento. Indivíduos com deficiência auditiva podem não perceber chamadas realizadas exclusivamente por áudio. Pessoas com baixa visão ou deficiência visual encontram dificuldades para ler painéis com caracteres pequenos ou em cores de baixo contraste. Pessoas com TEA podem ser sobrecarregadas sensorialmente pelo ambiente de sala de espera, com ruídos, luzes e aglomeração. Idosos e gestantes, por sua vez, têm dificuldade em permanecer em pé por longos períodos.

Embora existam dispositivos legais que assegurem atendimento prioritário a esses grupos, a acessibilidade física e digital dos serviços ainda é insuficiente na maioria dos setores (Farias et al., 2023; Jonsson et al., 2023).

### 2.3 Pergunta Central

A questão que orienta este projeto é:

> Como reduzir o tempo de permanência física dos usuários nos locais de atendimento e aumentar a previsibilidade do serviço por meio de uma solução digital flexível, acessível e aplicável a diferentes setores?

---

## 3. Soluções Existentes

A pesquisa por soluções existentes no mercado foi realizada pela equipe com o objetivo de identificar sistemas concorrentes ou complementares que já atuam no segmento de gerenciamento de filas. Foram analisadas as seguintes plataformas:

- **Qmatic** — plataforma global de gestão de filas com soluções para bancos, saúde, governo e varejo. Oferece agendamento remoto, check-in digital e painéis de chamada. Tem presença consolidada em mais de 80 países.
- **Wavetec** — especializada em soluções de gerenciamento de filas e displays digitais para bancos, hospitais e órgãos governamentais. Seu sistema inclui totens de autoatendimento e painéis eletrônicos.
- **Waitwhile** — plataforma baseada em nuvem voltada principalmente para o setor de saúde e varejo. Oferece lista de espera virtual, notificações por SMS e integração com sistemas de agendamento.
- **Qminder** — sistema de gerenciamento de filas com foco em atendimento ao cliente, utilizado por universidades, clínicas e agências governamentais. Permite chamada virtual e monitoramento em tempo real.
- **Ysoft SafeQ** — solução voltada para filas em ambientes corporativos e educacionais, com gerenciamento de fluxo de pessoas e integração com sistemas de impressão e digitalização.
- **Skiplino** — plataforma de fila virtual focada em clínicas e consultórios, com funcionalidades de agendamento, lembretes e notificações.

A análise dessas soluções indicou que, embora haja uma variedade de sistemas de gerenciamento de filas disponíveis, a maioria apresenta uma ou mais das seguintes limitações: (a) alto custo de implantação e manutenção, especialmente para pequenos e médios estabelecimentos; (b) dependência de hardware especializado (totens, painéis, impressoras de senha); (c) foco setorial restrito, sem flexibilidade para atender a diferentes segmentos; (d) recursos limitados de acessibilidade para pessoas com deficiência.

---

## 4. Proposta de Solução: MinhaFila

### 4.1 Visão Geral

O **MinhaFila** é um sistema de gerenciamento inteligente de filas presenciais para múltiplos setores, com foco em **flexibilidade**, **acessibilidade** e **mobilidade**. A solução permite que o usuário:

1. Realize um cadastro rápido ou check-in ao chegar ao estabelecimento;
2. Receba uma senha virtual diretamente em seu dispositivo móvel;
3. Acompanhe em tempo real sua posição na fila e o tempo estimado de espera;
4. Receba notificações antecipadas quando o atendimento estiver próximo;
5. Visualize informações claras sobre as pessoas à sua frente (quantidade, sem identificação nominal);
6. Utilize recursos de acessibilidade como alto contraste, texto ampliado, modo silencioso (para surdos) e modo baixo estímulo (para TEA).

### 4.2 Funcionalidades Principais

**Para o usuário:**
- Check-in remoto ou presencial com identificação de necessidades especiais
- Senha virtual e posição na fila em tempo real
- Tempo estimado de atendimento
- Notificação push quando o atendimento estiver próximo
- Modos de acessibilidade adaptáveis

**Para o estabelecimento:**
- Painel interno com lista ordenada por ordem de chegada e prioridade
- Botão para chamar o próximo cliente
- Identificação de usuários com necessidades especiais
- Histórico de atendimentos e relatórios de fluxo
- Configuração setorial parametrizável (bancos, saúde, educação, comércio, governo)

### 4.3 Diferenciais

O MinhaFila se diferencia das soluções existentes por:

- **Flexibilidade setorial**: arquitetura parametrizável que permite adaptação a diferentes segmentos sem necessidade de desenvolvimento específico;
- **Acessibilidade integrada**: modos específicos para pessoas com deficiência auditiva, visual, TEA, idosos e gestantes;
- **Mobilidade**: possibilidade de sair do local e ser notificado quando o atendimento estiver próximo;
- **Baixo custo de implantação**: solução baseada em dispositivos móveis, sem necessidade de hardware especializado (totens, painéis ou impressoras);
- **Redução do tempo de permanência física**: a previsibilidade permite que o usuário planeje melhor sua espera.

---

## 5. Fluxograma do Sistema

O fluxograma do sistema descreve o percurso completo do usuário no MinhaFila, desde a chegada ao estabelecimento até o atendimento, incluindo a lógica de prioridade e notificação.

**Etapas do fluxo:**

1. **Entrada no Sistema** — O usuário acessa o aplicativo (web ou mobile). Se já possui cadastro, realiza login; caso contrário, faz um cadastro rápido informando dados pessoais e necessidades especiais.

2. **Solicitação de Atendimento** — O usuário seleciona o estabelecimento e o tipo de serviço desejado (atendimento comum, prioritário, retorno ou outro, conforme a categoria do estabelecimento).

3. **Decisão de Prioridade** — O sistema verifica se o usuário se enquadra em alguma categoria de prioridade legal (idoso, gestante, pessoa com deficiência, TEA). Em caso positivo, é direcionado para a fila prioritária; caso contrário, para a fila convencional. Ambas as filas seguem o mesmo fluxo de atendimento.

4. **Geração de Senha** — O sistema gera uma senha única, registra o horário de entrada, posiciona o usuário no final da fila correspondente e calcula a previsão inicial de atendimento com base no tempo médio histórico.

5. **Chamada e Notificação** — Quando o usuário atinge o topo da fila, é chamado para atendimento. O segundo usuário da fila recebe uma notificação antecipada para se dirigir ao local, reduzindo o tempo de espera entre chamadas.

6. **Atendimento e Finalização** — Após o atendimento, o sistema remove o usuário da fila, que é atualizada automaticamente. O próximo usuário no topo é então chamado.

7. **Feedback Loop** — Caso o usuário não compareça quando chamado, retorna à etapa de solicitação de atendimento. Se o atendimento é concluído, o sistema oferece a opção de retorno (nova solicitação).

O fluxograma completo pode ser visualizado no arquivo complementar `fluxograma.pdf` anexo a este relatório.

---

## 6. Protótipo de Telas

O protótipo do MinhaFila foi desenvolvido no **Open Designer** por **Deivison de Lima Santana**, com foco na experiência do usuário e nos princípios de acessibilidade. As telas principais incluem:

**Fluxo do usuário:**
- **Splash Screen** — Tela inicial com a identidade visual do sistema
- **Onboarding** — Apresentação das funcionalidades principais
- **Home** — Opções de estabelecimentos e serviços disponíveis
- **Cadastro** — Formulário com campos para dados pessoais e necessidades especiais
- **Senha Virtual** — Exibição da senha gerada e posição na fila
- **Acompanhamento** — Tela principal com posição, tempo estimado e notificações
- **Notificação de Chamada** — Alerta visual e sonoro quando o atendimento estiver próximo
- **Painel Público** — Display informativo com as senhas em chamamento

**Painel do estabelecimento:**
- **Lista de Clientes** — Ordenada por ordem de chegada com indicação de prioridade
- **Chamada** — Botão para chamar o próximo cliente
- **Histórico** — Registro dos atendimentos realizados
- **Configurações** — Parametrização setorial do sistema

O protótipo interativo pode ser acessado no diretório `prototipo-minhafila/` anexo a este relatório.

---

## 7. Considerações Finais

O MinhaFila apresenta-se como uma solução viável e necessária para o problema das filas presenciais em múltiplos setores da sociedade, combinando tecnologia móvel, flexibilidade e acessibilidade em um único sistema. A abordagem proposta responde diretamente à pergunta central do projeto, oferecendo meios para reduzir o tempo de permanência física dos usuários nos locais de atendimento e aumentar a previsibilidade do serviço.

A pesquisa realizada pela equipe evidenciou que as soluções existentes no mercado, embora variadas, apresentam limitações significativas de custo, portabilidade e acessibilidade. O mercado global de QMS, avaliado em mais de meio bilhão de dólares, demonstra a relevância e o potencial de crescimento do segmento, reforçando a oportunidade para soluções inovadoras como o MinhaFila.

Como trabalhos futuros, sugere-se o desenvolvimento da implementação computacional em linguagem C para validação dos algoritmos de gerenciamento de filas, a realização de testes de usabilidade com usuários reais de diferentes setores e a expansão dos recursos de acessibilidade com base em feedback de pessoas com deficiência.

---

## Referências

AGGARWAL, Ravi et al. Defining the enablers and barriers to the implementation of large-scale, health care-related mobile technology: qualitative case study in a tertiary hospital setting. **JMIR mHealth and uHealth**, Toronto, v. 10, n. 2, 2022.

CLEMENTE, Karina Aparecida Padilha et al. Barreiras ao acesso das pessoas com deficiência aos serviços de saúde: uma revisão de escopo. **Revista de Saúde Pública**, v. 56, n. 64, 2022.

FARIAS, Tássia Mayra Oliveira et al. O estreito acesso das Pessoas com Deficiência aos serviços de saúde em uma capital nordestina. **Ciência & Saúde Coletiva**, v. 28, n. 5, 2023.

FORTUNE BUSINESS INSIGHTS. **Queue Management System Market Size, Share & Industry Analysis**. Report ID: FBI107326, 2024.

JONSSON, Marika et al. Development and evaluation of eHealth services regarding accessibility: scoping literature review. **Journal of Medical Internet Research**, v. 25, 2023.

KESSEL, Robin Van et al. Digital health paradox: international policy perspectives to address increased health inequalities for people living with disabilities. **Journal of Medical Internet Research**, Toronto, v. 24, n. 2, 2022.

QMINDER. **Qminder Queue Management System: product overview**. Disponível em: https://www.qminder.com. Acesso em: 20 jun. 2026.

QMATIC. **Qmatic Customer Journey Platform: documentation**. Disponível em: https://www.qmatic.com. Acesso em: 20 jun. 2026.

STRATEGIC MARKET RESEARCH. **Queue Management System Market Report**. SMR Report ID: SMR-1745-2024, 2024.

THOMPSON, Yee Lam Elim et al. Evaluation of wait time saving effectiveness of triage algorithms. **arXiv:2303.07050**, v. 1, 2023.

WAITWHILE. **Waitwhile Queue Management Platform: features and pricing**. Disponível em: https://www.waitwhile.com. Acesso em: 20 jun. 2026.

WAVETEC. **Wavetec Queue Management Solutions**. Disponível em: https://www.wavetec.com. Acesso em: 20 jun. 2026.
