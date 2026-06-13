# Contextualização do Problema — Filas Presenciais em Serviços de Saúde

> **Elaborado por:** Rios  
> **Data:** 12/06/2026  
> **Intenção:** Parte do "Problema" da proposta do grupo (FilaClara)  
> **Base:** O que entendi da proposta do grupo + fundamentação com referências presentes na literatura  
> **Terminologia adotada:** Sempre "fila presencial" para diferenciar claramente das filas de espera por agendamento (que na literatura aparecem como "filas de meses por atendimento")

> **Observação do autor:** Quando nos referimos a "filas no serviço de saúde", a literatura também remete a filas esperando meses por um atendimento. Pelo que entendi, aqui nos referimos a **filas presenciais** (ordem de chegada física no dia), por isso referi sempre como "fila presencial" para não confundir com o outro tipo.

---

## 1. O Problema Real

**Fonte:** Documento completo enviado por Rios via WhatsApp em 12/06/2026 (arquivo `Projeto-Algorit-1-Rios-2026-06-12.docx`).

O texto abaixo é a **contextualização do problema** elaborada por Rios, fundamentada com referências presentes na literatura. O autor pediu explicitamente: "Fiquem à vontade para alterar ou sugerir adequações."

> **Nome da solução proposto no documento:**  
> **Sistema Inteligente de Gestão de Filas Presenciais e Acessibilidade para Serviços de Saúde**

---

A transformação digital tem promovido mudanças significativas em diversos setores da sociedade, incluindo o setor da saúde. O avanço das tecnologias digitais, dos sistemas de informação em saúde e das soluções móveis tem contribuído para a melhoria da gestão dos serviços, da comunicação entre profissionais e usuários e da qualidade da assistência prestada (Aggarwal *et al.*, 2022; Kessel *et al.*, 2022).

Apesar dos avanços tecnológicos observados nos últimos anos, um problema continua presente em hospitais, clínicas, unidades básicas de saúde (UBSs), Unidades de Pronto Atendimento (UPAs) e laboratórios, tanto em serviços públicos quanto privados: a demora nas **filas presenciais** de atendimento e a falta de informações claras sobre a posição do usuário na fila ou sobre o tempo estimado para atendimento.

O tempo de espera na fila presencial depende essencialmente do tipo de unidade e da classificação de risco (triagem). Nas UBSs, a demanda espontânea é uma parcela importante dos atendimentos e frequentemente geram filas presenciais de pessoas aguardando uma senha para agendar uma consulta. Em todos os serviços de saúde de porta aberta, estratégias de gestão da demanda, no sentido de adequar a oferta para garantir o atendimento ao menor tempo possível, são um grande desafio (Giannotti; Louvison; Chioro, 2025).

A depender da natureza da unidade, o atendimento não funciona exatamente por ordem de chegada, pois pode depender da classificação de risco, sobretudo em serviços de urgência e emergência. Um estudo realizado em um hospital de urgência mostrou que os pacientes aguardaram por atendimento médico em tempo superior ao recomendado, evidenciando as dificuldades enfrentadas pelos usuários para acessar os serviços de saúde (Chianca *et al.*, 2017).

A literatura demonstra que tempos prolongados de espera estão associados à redução da satisfação dos usuários e à percepção negativa da qualidade dos serviços de saúde (Aggarwal *et al.*, 2022). Também há prejuízos à experiência do usuário e necessidade de permanência física na unidade por tempo demasiado. A espera prolongada está associada à aglomeração de pacientes, falhas na comunicação com os usuários, aumento do estresse, absenteísmo em consultas e redução da eficiência operacional dos serviços de saúde, constituindo importante barreira ao acesso oportuno à assistência (Thompson *et al.*, 2023).

O problema é ainda mais grave para idosos, gestantes, pessoas com deficiência e pacientes com doenças crônicas. Embora existam dispositivos legais que assegurem atendimento prioritário, pessoas com deficiência frequentemente enfrentam barreiras adicionais relacionadas à acessibilidade física e digital dos serviços de saúde (Farias *et al.*, 2023; Ha *et al.*, 2023; Clemente *et al.*, 2022).

Além disso, indivíduos com deficiência visual, auditiva, limitações motoras ou idosos podem apresentar dificuldades para acompanhar chamadas de atendimento realizadas exclusivamente por painéis visuais ou anúncios sonoros. Revisões recentes sobre acessibilidade em serviços digitais de saúde destacam a necessidade de considerar princípios de acessibilidade e inclusão durante o desenvolvimento de soluções digitais (Jonsson *et al.*, 2023; Ha *et al.*, 2023; Farias *et al.*, 2023).

O contexto sobre o qual estamos nos referindo aqui não é recente e já foi alvo de projetos cujos objetivos não foram satisfatoriamente alcançados (Melo *et al.*, 2021).

Diante desse cenário, surge a necessidade de desenvolver soluções tecnológicas capazes de promover maior eficiência na gestão das filas, reduzir o tempo de permanência dos usuários nas unidades de saúde e garantir acessibilidade para todos os pacientes. Tecnologias móveis e sistemas inteligentes de monitoramento têm demonstrado potencial para otimizar fluxos assistenciais, melhorar a comunicação entre usuários e serviços e aumentar a eficiência operacional das instituições de saúde (Aggarwal *et al.*, 2022).

Nesse contexto, o problema que buscamos resolver é o seguinte:

> **Como reduzir o tempo de permanência física dos usuários nas unidades de saúde e aumentar a previsibilidade do atendimento por meio de uma solução digital acessível e inclusiva?**

---

**Observação importante do autor (transcrita do WhatsApp 12/06 ~18:17):**  
"Estudando eu vi que quando nos referimos a filas no serviço de saúde, a literatura também se remete a filas esperando meses por um atendimento. Pelo que entendi, aqui nos referimos a filas presenciais, por isso, no texto eu tentei referir sempre como fila presencial para não confundir com o outro tipo."

Isso justifica o uso consistente do termo **"fila presencial"** ao longo de todo o texto.

---

**Referências (conforme enviadas por Rios no documento):**

AGGARWAL, Ravi *et al*. Defining the enablers and barriers to the implementation of large-scale, health care-related mobile technology: qualitative case study in a tertiary hospital setting. **JMIR mHealth and uHealth**, Toronto, v. 10, n. 2, 2022.

CHIANCA, Tânia Couto Machado *et al*. Tempos de espera para atendimento usando sistema de triagem de Manchester em um hospital de urgência. **Reme: Revista Mineira de Enfermagem**, v. 20, 2016.

CLEMENTE, Karina Aparecida Padilha *et al*. Barreiras ao acesso das pessoas com deficiência aos serviços de saúde: uma revisão de escopo. **Revista de Saúde Pública**, v. 56, n. 64, 2022.

FARIAS, Tássia Mayra Oliveira *et al*. O estreito acesso das Pessoas com Deficiência aos serviços de saúde em uma capital nordestina. **Ciênc. saúde coletiva**, v. 28, n. 5, 2023.

GIANNOTTI, Elaine Maria; LOUVISON, Marília; CHIORO, Arthur. Listas de espera na atenção ambulatorial especializada: reflexões sobre um conceito crítico para o Sistema Único de Saúde. **Cad. Saúde Pública**, v. 41, n. 6, 2025.

HA, Sandeul *et al*. Digital health equity and tailored health care service for people with disability: user-centered design and usability study. **Journal of Medical Internet Research**, v. 25, 2023.

JONSSON, Marika *et al*. Development and evaluation of eHealth services regarding accessibility: scoping literature review. **Journal of Medical Internet Research**, v. 25, 2023.

KESSEL, Robin Van *et al*. Digital health paradox: international policy perspectives to address increased health inequalities for people living with disabilities. **Journal of Medical Internet Research**, Toronto, v. 24, n. 2, 2022.

MELO, Daiane Celestino *et al*. Acessibilidade aos serviços de saúde e posição dos usuários no espaço social em Salvador, Bahia, 2006: um estudo transversal. **Epidemiol. Serv. Saúde**, v. 30, n. 2, 2021.

THOMPSON, Yee Lam Elim *et al*. Evaluation of wait time saving effectiveness of triage algorithms. **arXiv:2303.07050**, v. 1, 2023.

---

**Status (12/06/2026, 22:20):** ✅ **Texto completo colado e integrado como base oficial do projeto.**

- O documento `Projeto-Algorit-1-Rios-2026-06-12.docx` (enviado via WhatsApp) foi salvo em `material-fonte/`.
- O texto integral (com todas as referências da literatura) foi colado aqui em `problema-real.md`.
- A `proposta.md` agora usa este texto como **fonte principal da problematização** (com resumo executivo, pergunta central e diferencial derivados diretamente dele).
- Index-Geral, decisoes.md e ata-decisoes.md foram atualizados para refletir que o "Problema real definido" está escrito e ancorado.

**O grupo pode (e deve) alterar ou sugerir adequações** — conforme o próprio Rios pediu no WhatsApp: "Fiquem à vontade para alterar ou sugerir adequações."

**Instrução do grupo (transcrita do chat 12/06):**  
"depois de fazer o seu arquivo [este `problema-real.md`], ele vai fazer o seu arquivo. a instalação dele. Após isso, a gente vai entender o que ele passou nessa proposta e qual foi de fato a fala."

**Ação atual do grupo:** Leia este arquivo na íntegra → vá para a `proposta.md` → marque decisões no Painel → sugira alterações aqui se necessário.

---

## 2. Por Que a Distinção "Fila Presencial" é Importante

- Na literatura acadêmica e governamental, "filas na saúde" frequentemente se refere a **listas de espera** para consultas, exames ou cirurgias (às vezes de meses).
- Neste projeto, o foco é outro: a **fila presencial** que ocorre no dia da chegada à unidade (guichê → sala de espera → triagem → atendimento).
- Usar sempre o termo "fila presencial" evita confusão e deixa claro o escopo do problema que estamos atacando com o app.

---

## 3. Contribuição Técnica Adicional (BYOD)

Mensagem do mesmo autor (18:15):

> "Se nossa solução for um aplicativo para dispositivo móvel, podemos sinalizar o BYOD, utilizando gerenciamento de dispositivos móveis para acompanhamento de senha em tempo real."

**O que isso significa:**
- **BYOD** = Bring Your Own Device (Traga Seu Próprio Dispositivo).
- Em vez de depender apenas de totens ou senhas físicas, o paciente usa seu próprio celular.
- **Gerenciamento de Dispositivos Móveis (MDM)** pode ser usado para:
  - Acompanhar a senha/situação em tempo real de forma segura.
  - Garantir que o app funcione mesmo em dispositivos pessoais (políticas de segurança, atualização, etc.).
- Isso é uma consideração importante para a viabilidade técnica da solução móvel, especialmente em contextos públicos onde nem todos têm smartphones recentes ou dados móveis.

**Status:** Sugestão registrada. Deve ser discutida quando o grupo definir o escopo técnico do protótipo (se o app será web responsivo, nativo, PWA, etc.).

---

## 4. Status e Próximos Passos para Este Documento (vivo)

- [x] Criar estrutura + colar texto completo de Rios (12/06).
- [x] Integrar como base oficial na `proposta.md` (resumo executivo + pergunta central + diferencial).
- [x] Atualizar Index-Geral, decisoes.md, ata-decisoes.md e material-fonte/README.md.
- [ ] **Grupo revisa e sugere alterações/adequações** (Rios autorizou explicitamente: "fiquem à vontade para alterar ou sugerir adequações").
- [ ] Após revisões do grupo, consolidar versão final para a apresentação de 29/06.
- [ ] Manter este arquivo como a fonte única da problematização (qualquer mudança aqui deve refletir na proposta).

**Lembrete do chat:** Depois que este arquivo foi feito, a próxima pessoa faz o dela, e o grupo revisa coletivamente "o que ele passou nessa proposta e qual foi de fato a fala".

---

## 5. Links Relacionados

- [Proposta de Solução (documento vivo)](proposta.md)
- [Index Geral do Projeto](Index-Geral.md)
- [Decisões do Projeto](decisoes.md)
- [Ata de Decisões](ata-decisoes.md)
- [Casos Existentes (Google Doc)](https://docs.google.com/document/d/1mSFvxPnuMh5f13xKnHx1B3A1n4uhkBJokg0afE9Tdgw/edit?usp=sharing)
- [Pesquisa Problema Real (Google Doc)](https://docs.google.com/document/d/1jrKcEVSVe25k4PRg3pr_WbrK1pIwx_i76K6i3O_6_Js/edit?usp=sharing)

---

*Documento vivo (base oficial da problematização).*  
Atualizado automaticamente conforme novas contribuições do grupo (última sincronização: 12/06/2026 22:20 — texto completo de Rios integrado como fonte principal da proposta. Grupo convidado a sugerir alterações).
