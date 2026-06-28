# Contextualização do Problema — Filas de Atendimento em Múltiplos Setores

> **Elaborado por:** Grupo MinhaFila (Deivison, Rios, Ausiane, Núbia, Wallace, Artur)
> **Data:** 26/06/2026
> **Intenção:** Contextualização do problema real de filas de atendimento em múltiplos setores

---

## 1. O Problema das Filas na Sociedade Contemporânea

A espera em filas de atendimento é uma experiência universal e cotidiana. Seja para ser atendido em um banco, realizar uma matrícula em uma instituição de ensino, aguardar um procedimento em um serviço de saúde, ser chamado em uma repartição pública ou efetuar o pagamento em um estabelecimento comercial, a fila é um elemento estrutural da interação entre cidadãos e organizações prestadoras de serviços.

O estudo matemático das filas, formalizado por Agner Krarup Erlang no início do século XX a partir da análise do tráfego telefônico na Copenhagen Telephone Exchange, deu origem à teoria de filas (*queueing theory*), um ramo da pesquisa operacional que busca modelar, prever e otimizar o comportamento de sistemas de espera (Gross *et al.*, 2008). Desde então, a teoria de filas tem sido aplicada em setores tão diversos como telecomunicações, engenharia de tráfego, manufatura, call centers e serviços de atendimento ao público.

Apesar de mais de um século de avanços teóricos e tecnológicos, o gerenciamento inadequado de filas persiste como uma das principais fontes de insatisfação dos usuários e de ineficiência operacional. Pesquisas recentes indicam que 90% dos consumidores enfrentam filas ao menos algumas vezes por mês, e 64% lidam com filas múltiplas vezes por semana (Waitwhile, 2024). O impacto econômico é expressivo: estima-se que as filas mal gerenciadas custem cerca de US\$ 71 bilhões por ano em vendas perdidas no varejo global (Qminder, 2023).

## 2. O Problema em Diferentes Setores

### 2.1. Bancos e Instituições Financeiras

O setor bancário é historicamente um dos mais afetados pelo problema das filas. Yusuf, Blessing e Kazeem (2015) demonstraram que a teoria de filas pode ser aplicada para avaliar o desempenho operacional em agências bancárias, influenciando diretamente a satisfação dos clientes. Estudos mais recentes, como o de Daramola, Yahaya e Abdullahi (2024), reforçam que modelos de fila multiservidor são fundamentais para reduzir o tempo de espera em instituições financeiras. O segmento BFSI (*Banking, Financial Services and Insurance*) representa aproximadamente 23,85% do mercado global de sistemas de gerenciamento de filas (Mordor Intelligence, 2026).

### 2.2. Serviços de Saúde

Embora o foco deste projeto seja multipropósito, o setor de saúde merece destaque. Hospitais, clínicas, unidades básicas de saúde e laboratórios enfrentam desafios singulares na gestão de filas, agravados pela classificação de risco (triagem) e pela necessidade de atendimento prioritário a idosos, gestantes e pessoas com deficiência. Aggarwal *et al.* (2022) identificaram que o tempo prolongado de espera está associado à redução da satisfação dos usuários e à percepção negativa da qualidade dos serviços. Thompson *et al.* (2023) corroboram que a espera prolongada contribui para aglomeração, falhas de comunicação e absenteísmo.

### 2.3. Educação

Instituições de ensino, especialmente no nível superior, lidam com picos de demanda durante períodos de matrícula, renovação, pagamento de taxas e solicitação de documentos acadêmicos. A American Educational Research Association (AERA) estima que 56% dos estudantes universitários gastam mais de 30 minutos em filas durante períodos de pico (VizitorApp, 2025). Sistemas de gerenciamento de filas têm sido adotados por universidades para organizar filas de matrícula, serviços de biblioteca e atendimento ao estudante (Pantonial *et al.*, 2025).

### 2.4. Comércio e Varejo

O varejo é o setor onde os consumidores mais enfrentam filas, superando restaurantes, farmácias e bancos combinados (Waitwhile, 2024). A pesquisa mostra que 61% dos consumidores já abandonaram uma fila antes de serem atendidos, e 43% relatam menor satisfação com estabelecimentos que exigem espera em filas físicas. Zhao e Gilbert (2025), ao integrar a teoria de filas com o paradigma da expectativa-confirmação (*expectancy-disconfirmation*), estabeleceram que o tempo de espera percebido é um dos principais preditores da qualidade do serviço na percepção do cliente.

### 2.5. Governo e Serviços Públicos

Repartições públicas, órgãos de atendimento ao cidadão, postos do Poupatempo e unidades de serviços públicos enfrentam desafios adicionais: alta demanda, horários restritos e diversidade de serviços oferecidos em um mesmo local. O gerenciamento inadequado de filas nesses ambientes não apenas gera insatisfação, mas também compromete a eficiência administrativa e a percepção da qualidade do serviço público. O mercado de QMS para o setor público tem crescido impulsionado pela digitalização de serviços e pela adoção de soluções de fila virtual (MarketsandMarkets, 2021).

## 3. Consequências da Má Gestão de Filas

As consequências da gestão ineficiente de filas são múltiplas e interdependentes. Do ponto de vista do usuário, a espera prolongada gera frustração, estresse e percepção negativa do serviço. Do ponto de vista da organização, as perdas incluem:

- **Desistência e abandono**: 61% dos consumidores já abandonaram filas antes do atendimento, resultando em perda direta de receita e de oportunidade (Waitwhile, 2024).
- **Redução da fidelização**: 77% dos consumidores declararam-se menos propensos a retornar a um estabelecimento após enfrentar filas longas (Wavetec, 2023).
- **Danos à reputação**: a insatisfação com filas é um dos principais motivadores de avaliações negativas em canais digitais e redes sociais.
- **Perda de eficiência operacional**: a alocação inadequada de recursos humanos e a falta de dados sobre fluxo de atendimento impedem a tomada de decisão baseada em evidências.

## 4. Pergunta Central

Diante do panorama exposto — que atravessa setores bancário, saúde, educacional, varejista e governamental —, surge a seguinte questão:

> Como otimizar o gerenciamento de filas de atendimento em múltiplos setores por meio de uma solução digital acessível, multiplataforma e capaz de reduzir o tempo de espera percebido, aumentar a previsibilidade do atendimento e melhorar a experiência do usuário?

---

## Referências

AGGARWAL, Ravi *et al.* Defining the enablers and barriers to the implementation of large-scale, health care-related mobile technology: qualitative case study in a tertiary hospital setting. **JMIR mHealth and uHealth**, Toronto, v. 10, n. 2, 2022.

DARAMOLA, K.; YAHAYA, A.; ABDULLAHI, U. Evaluating single and multi-server exponential queuing models: a case study of Access Bank PLC in Anyigba, Kogi State, Nigeria. **Malaysian Journal of Science and Advanced Technology**, v. 4, n. 3, 2024.

GROSS, Donald *et al.* **Fundamentals of Queueing Theory**. 4. ed. Hoboken: Wiley, 2008.

KARMAKAR, Tapodhir *et al.* A comprehensive approach to queue waiting time prediction using tree-based ensembles with data balancing and explainable AI. **Discover Analytics**, v. 3, n. 9, 2025.

MARKETSANDMARKETS. **Queue Management System Market — Global Forecast to 2026**. Chicago: MarketsandMarkets, 2021.

MORDOR INTELLIGENCE. **Queue Management System Market Size, Share, Trends & Growth Analysis (2026–2031)**. Hyderabad: Mordor Intelligence, 2026.

PANTONIAL, Lourdes *et al.* Student payment behaviors, queue management, and cashier efficiency in a private higher education institution. **Psychology and Education: A Multidisciplinary Journal**, v. 36, n. 9, p. 1005–1010, 2025.

QMINDER. **The Cost of Customer Service Wait Times**. San Francisco: Qminder, 2023. Disponível em: https://www.qminder.com/blog/queue-management/cost-customer-service-wait-times/. Acesso em: 26 jun. 2026.

THOMPSON, Yee Lam Elim *et al.* Evaluation of wait time saving effectiveness of triage algorithms. **arXiv:2303.07050**, v. 1, 2023.

WAITWHILE. **Consumer Survey: The State of Waiting in Line (2024)**. San Francisco: Waitwhile, 2024. Disponível em: https://waitwhile.com/blog/consumer-survey-waiting-in-line-2024/. Acesso em: 26 jun. 2026.

WAVETEC. **How Improper Queue Management Affects Financial Results**. Lahore: Wavetec, 2023. Disponível em: https://www.wavetec.com/blog/queue-management/how-improper-queue-management-affects-financial-results/. Acesso em: 26 jun. 2026.

YUSUF, Munirat Olafemi; BLESSING, Nwaiwu N.; KAZEEM, Aina Olalekan. Queuing theory and customer satisfaction: a review of performance, trends and application in banking practice. **European Journal of Business and Management**, v. 7, n. 35, p. 90–96, 2015.

ZHAO, X.; GILBERT, K. A queuing theory-based approach to evaluate service delivery quality. **International Journal of Quality and Service Sciences**, v. 17, n. 2, p. 155–167, 2025.
