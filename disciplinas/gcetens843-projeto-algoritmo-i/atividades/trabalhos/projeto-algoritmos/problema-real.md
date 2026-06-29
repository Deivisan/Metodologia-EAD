# Problema Real — MinhaFila

**Responsáveis:** Raimon Rios da Silva, Deivison de Lima Santana  
**Fonte-base:** Documento "Projeto Algoritmo 1 V2" (Rios, 2026)  
**Última atualização:** 28/06/2026

## 1. Introdução

A transformação digital tem promovido mudanças significativas em diversos setores da sociedade. Apesar dos avanços tecnológicos, a espera em filas de atendimento é uma experiência universal e cotidiana. O estudo matemático das filas foi formalizado por Agner Krarup Erlang no início do século XX, a partir da análise do tráfego telefônico na Copenhagen Telephone Exchange, dando origem à teoria das filas (*queueing theory*), um ramo da pesquisa operacional que busca modelar, prever e otimizar o comportamento de sistemas de espera (Gross et al., 2008). Desde então, a teoria das filas tem sido aplicada em setores tão diversos como telecomunicações, engenharia de tráfego, manufatura, *call centers* e serviços de atendimento ao público.

Pesquisas recentes indicam que 90% dos consumidores enfrentam filas ao menos algumas vezes por mês, e 64% lidam com filas múltiplas vezes por semana (Waitwhile, 2024). Seja para ser atendido em um banco, realizar uma matrícula em uma instituição de ensino, aguardar um procedimento em um serviço de saúde, ser chamado em uma repartição pública ou privada ou efetuar o pagamento em um estabelecimento comercial, a fila é um elemento estrutural da interação entre cidadãos e organizações prestadoras de serviços.

Entretanto, frequentemente, a fila envolve falta de informações claras sobre a posição real do usuário ou o tempo estimado para atendimento, afetando a rotina de trabalho ou a capacidade de otimização do tempo.

O problema é ainda mais grave para idosos, gestantes, pessoas com deficiência e pacientes com doenças crônicas. Embora existam dispositivos legais que assegurem atendimento prioritário, pessoas com deficiência frequentemente enfrentam barreiras adicionais relacionadas à acessibilidade física e digital (Farias et al., 2023; Ha et al., 2023; Clemente et al., 2022).

Além disso, indivíduos com deficiência visual, auditiva, limitações motoras ou idosos podem apresentar dificuldades para acompanhar chamadas de atendimento realizadas exclusivamente por painéis visuais ou anúncios sonoros. Revisões recentes sobre acessibilidade em serviços digitais destacam a necessidade de considerar princípios de acessibilidade e inclusão durante o desenvolvimento de soluções digitais (Jonsson et al., 2023; Ha et al., 2023; Farias et al., 2023).

Impulsionado por esse contexto e associado à digitalização de serviços, o mercado de Sistemas de Gerenciamento de Filas deverá crescer de US$ 38,97 bilhões em 2025 para US$ 43,67 bilhões em 2026, com previsão de atingir US$ 77,13 bilhões em 2031, a uma taxa composta de crescimento anual (CAGR) de 12,05% entre 2026 e 2031 (Mordor Intelligence, 2026).

Diante desse cenário, surge a necessidade de desenvolver soluções tecnológicas capazes de promover maior eficiência na gestão das filas, garantindo acessibilidade. Nesse contexto, o problema que buscamos resolver é o seguinte:

**Como melhorar a gestão de filas físicas, aumentando a previsibilidade do atendimento, por meio de uma solução digital acessível e inclusiva?**

---

## 2. O problema em diferentes setores

### 2.1 Bancos e instituições financeiras

O setor bancário é historicamente um dos mais afetados pelo problema das filas. Yusuf, Blessing e Kazeem (2015) demonstraram que a teoria de filas pode ser aplicada para avaliar o desempenho operacional em agências bancárias, influenciando diretamente a satisfação dos clientes. Mais recentemente, Daramola, Yahaya e Abdullahi (2024) reforçaram que modelos de fila multiservidor são fundamentais para reduzir o tempo de espera em instituições financeiras. O segmento BFSI (Banking, Financial Services and Insurance) representa aproximadamente 23,85% do mercado global de sistemas de gerenciamento de filas (Mordor Intelligence, 2026).

### 2.2 Serviços de saúde

Embora o foco deste projeto seja multipropósito, o setor de saúde merece destaque. Hospitais, clínicas, unidades básicas de saúde e laboratórios enfrentam desafios singulares na gestão de filas, agravados pela classificação de risco (triagem).

Serviços que envolvem demanda espontânea, como UBSs e clínicas, são uma parcela importante dos atendimentos e, frequentemente, geram filas de pessoas aguardando uma senha para agendar uma consulta. Em todos os serviços de saúde de porta aberta, estratégias de gestão da demanda, no sentido de adequar a oferta para garantir o atendimento ao menor tempo possível, são um grande desafio (Giannotti; Louvison; Chioro, 2025).

A espera prolongada está associada à aglomeração de pacientes, falhas na comunicação com os usuários, aumento do estresse, absenteísmo em consultas e redução da eficiência operacional dos serviços de saúde, constituindo importante barreira ao acesso oportuno à assistência (Thompson et al., 2023).

### 2.3 Comércio e varejo

O varejo é o setor onde os consumidores mais enfrentam filas, superando restaurantes, farmácias e bancos combinados. 61% dos consumidores já abandonaram uma fila antes de serem atendidos e 43% relatam menor satisfação com estabelecimentos que exigem espera em filas físicas (Waitwhile, 2024).

Zhao e Gilbert (2025), ao integrar a teoria de filas com o paradigma da expectativa-confirmação (*expectancy-disconfirmation*), estabeleceram que o tempo de espera percebido é um dos principais preditores da qualidade do serviço na percepção do cliente. Quando os clientes não têm informações sobre o tempo de espera, a duração percebida parece 36% maior do que o tempo real (Queberry, 2026).

As pesquisas mostram também que 22% dos consumidores abandonam suas compras durante processos de finalização demorados. Para uma loja típica que atende 500 clientes por dia, isso se traduz em 110 transações abandonadas diariamente. Considerando um valor médio de transação de US$ 50, isso representa uma perda de receita de US$ 5.500 por dia — ou US$ 2 milhões por ano — apenas devido ao abandono de carrinho. Durante as festas de fim de ano ou eventos promocionais, o abandono de carrinho pode chegar a 34% das transações.

Os danos causados por uma má gestão de filas afetam também a fidelização. Dados recentes mostram que 68,5% dos funcionários do varejo lidam regularmente com clientes frustrados devido aos longos tempos de espera. Essa frustração se acumula e após várias experiências ruins, os clientes migram definitivamente para a concorrência (Queberry, 2026). O impacto econômico é expressivo: estima-se que para uma única loja, uma má gestão de filas pode custar mais de 4 milhões de dólares por ano. Para uma rede com 50 lojas, esse valor sobe para 206 milhões de dólares (Queberry, 2026).

### 2.4 Serviços públicos

Repartições públicas, órgãos de atendimento ao cidadão, postos do Poupatempo e unidades de serviços públicos enfrentam desafios adicionais: alta demanda, horários restritos e diversidade de serviços oferecidos em um mesmo local. O gerenciamento inadequado de filas nesses ambientes não apenas gera insatisfação, mas também compromete a eficiência administrativa e a percepção da qualidade do serviço público. Nesse contexto, vale ressaltar que o mercado global de Sistemas de Gerenciamento de Filas para o setor público tem crescido impulsionado pela digitalização de serviços e pela adoção de soluções de fila virtual (Markets and Markets, 2021).

---

## 3. Referências

CLEMENTE, Karina Aparecida Padilha et al. Barreiras ao acesso das pessoas com deficiência aos serviços de saúde: uma revisão de escopo. **Revista de Saúde Pública**, v. 56, n. 64, 2022. Disponível em: <https://www.scielosp.org/pdf/rsp/2022.v56/64/pt>. Acesso em: 28 jun. 2026.

DARAMOLA, K.; YAHAYA, A.; ABDULLAHI, U. Evaluating single and multi-server exponential queuing models: a case study of Access Bank PLC in Anyigba, Kogi State, Nigeria. **Malaysian Journal of Science and Advanced Technology**, v. 4, n. 3, 2024. Disponível em: <https://mjsat.com.my/index.php/mjsat/article/view/360>. Acesso em: 28 jun. 2026.

FARIAS, Tássia Mayra Oliveira et al. O estreito acesso das Pessoas com Deficiência aos serviços de saúde em uma capital nordestina. **Ciênc. saúde coletiva**, v. 28, n. 5, 2023. Disponível em: <https://www.scielo.br/j/csc/a/TYkCcwGVLJBTsJ7tTY7hJNg/?lang=pt>. Acesso em: 28 jun. 2026.

GIANNOTTI, Elaine Maria; LOUVISON, Marília; CHIORO, Arthur. Listas de espera na atenção ambulatorial especializada: reflexões sobre um conceito crítico para o Sistema Único de Saúde. **Cad. Saúde Pública**, v. 41, n. 6, 2025. Disponível em: <https://www.scielosp.org/article/csp/2025.v41n6/e00220724/>. Acesso em: 28 jun. 2026.

GROSS, Donald et al. **Fundamentals of Queueing Theory**. 4. ed. Hoboken: Wiley, 2008.

HA, Sandeul et al. Digital health equity and tailored health care service for people with disability: user-centered design and usability study. **Journal of Medical Internet Research**, v. 25, 2023. Disponível em: <https://pubmed.ncbi.nlm.nih.gov/38015589/>. Acesso em: 28 jun. 2026.

IDEC. Fila de banco demorada? Saiba seus direitos, 2017. Disponível em: <https://idec.org.br/dicas-e-direitos/fila-de-banco-demorada-saiba-seus-direitos>. Acesso em: 28 jun. 2026.

JONSSON, Marika et al. Development and evaluation of eHealth services regarding accessibility: scoping literature review. **Journal of Medical Internet Research**, v. 25, 2023. Disponível em: <https://pubmed.ncbi.nlm.nih.gov/37590050/>. Acesso em: 28 jun. 2026.

MARKETS AND MARKETS. Queue Management System Market --- Global Forecast to 2026. Chicago: Markets and Markets, 2021. Disponível em: <https://www.marketsandmarkets.com/Market-Reports/queue-management-system-market-23961354.html>. Acesso em: 28 jun. 2026.

MELO, Daiane Celestino et al. Acessibilidade aos serviços de saúde e posição dos usuários no espaço social em Salvador, Bahia, 2006: um estudo transversal. **Epidemiol. Serv. Saúde**, v. 30, n. 2, 2021. Disponível em: <https://www.scielo.br/j/ress/a/HqFwZfhyGDWpkXqB58nsmqv/?lang=pt>. Acesso em: 28 jun. 2026.

MORDOR INTELLIGENCE. Queue Management System Market Size, Share, Trends & Growth Analysis (2026--2031). Hyderabad: Mordor Intelligence, 2026. Disponível em: <https://www.mordorintelligence.com/industry-reports/queue-management-system-market>. Acesso em: 28 jun. 2026.

QUEBERRY. Como longos tempos de espera custam clientes para você (e como resolver isso), 2026. Disponível em: <https://queberry.com/blogs/how-long-wait-times-cost-you-customers>. Acesso em: 28 jun. 2026.

THOMPSON, Yee Lam Elim et al. Evaluation of wait time saving effectiveness of triage algorithms. **arXiv:2303.07050**, v. 1, 2023. Disponível em: <https://arxiv.org/pdf/2303.07050>. Acesso em: 28 jun. 2026.

WAITWHILE. Consumer Survey: The State of Waiting in Line. San Francisco: Waitwhile, 2024. Disponível em: <https://waitwhile.com/blog/consumer-survey-waiting-in-line-2024/>. Acesso em: 28 jun. 2026.

YUSUF, Munirat Olafemi; BLESSING, Nwaiwu N.; KAZEEM, Aina Olalekan. Queuing theory and customer satisfaction: a review of performance, trends and application in banking practice. **European Journal of Business and Management**, v. 7, n. 35, 2015. Disponível em: <https://iiste.org/Journals/index.php/EJBM/article/view/27500/28215>. Acesso em: 28 jun. 2026.

ZHAO, X.; GILBERT, K. A queuing theory-based approach to evaluate service delivery quality. **International Journal of Quality and Service Sciences**, v. 17, n. 2, 2025. Disponível em: <https://www.emerald.com/ijqss/article-abstract/17/2/155/1250844/>. Acesso em: 28 jun. 2026.
