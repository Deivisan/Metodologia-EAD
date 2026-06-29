# Meu Roteiro - Deivison de Lima Santana

> Slides: 2, 5, 6, 8, 9, 10, 11, 14
> Duracao total: ~7min

## Ordem Geral

| # | Slide | Quem | Duracao |
|:-:|:------|:----:|:-------:|
| 1 | Capa | Artur | 30s |
| 2 | Missao | EU | 30s |
| 3 | Problema | Rios | 1min30 |
| 4 | Casos | Rios | 1min30 |
| 5 | Proposta | EU | 1min |
| 6 | Ecossistema | EU | 1min |
| 7 | Fluxograma | Artur | 1min30 |
| 8 | Arquitetura | EU | 1min30 |
| 9 | Jornada | EU | 1min30 |
| 10 | Prototipo | EU | 1min30 |
| 11 | Dashboard | EU | 1min |
| 12 | Beneficios | Rios | 1min |
| 13 | Referencias | (exibir) | - |
| 14 | Fim | EU | 30s |

---

## Minhas Falas

### Slide 2 - Missao (30s)

(entra depois do Artur)

"A gente comecou este projeto com uma pergunta simples: por que esperar em fila ainda e uma experiencia tao frustrante e desorganizada? A nossa missao com o MinhaFila e transformar o tempo de espera — de uma frustracao imprevisivel para uma experiencia previsivel, justa e inclusiva. E o Rios vai mostrar agora por que a gente acredita que isso e necessario."

(seta) "Rios, o problema real."

---

### Slide 5 - Proposta (1min)

(entra depois do Rios)

"Entao, com base nesse problema e na lacuna que o Rios mostrou, a gente desenvolveu o MinhaFila. E um sistema de senha virtual com acompanhamento remoto. A ideia e simples: o usuario chega no local, le um QR Code na recepcao, faz um cadastro rapido — nome, telefone, servico desejado — e ja entra na fila. A partir dai ele acompanha a posicao e o tempo estimado direto no celular, sem precisar ficar preso no saguao. O sistema funciona em bancos, saude, varejo, governo — a ideia e ser multissetorial mesmo, um sistema unico que se adapta a qualquer tipo de estabelecimento."

### Slide 6 - Ecossistema (1min)

"A gente dividiu o sistema em dois modulos. O modulo do usuario tem tres recursos principais: acompanhamento em tempo real com posicao e tempo estimado; alertas inteligentes de proximidade, tipo 'faltam 3 pessoas'; e um perfil inclusivo com alto contraste, fonte ampliada, leitura de voz e modo baixo estimulo pra pessoas com TEA.

O modulo do gestor funciona como uma central de operacao: o painel mostra todas as senhas ativas por guiche, o atendente chama o proximo com um clique, e o sistema gera relatorios de tempo medio, horarios de pico e performance. E basicamente dar visibilidade completa pra quem ta operando a fila."

(seta) "Artur, o fluxograma do sistema."

---

### Slide 8 - Arquitetura (1min30)

(entra depois do Artur)

"A arquitetura do MinhaFila foi pensada em quatro camadas que se comunicam com um nucleo central. Esse nucleo e o MinhaFila Core, que concentra as regras de negocio — a logica de priorizacao, o calculo de tempo estimado, o gerenciamento de posicoes.

Em volta dele: o Frontend PWA, que e um aplicativo web responsivo que funciona como app sem precisar de download, acessivel via QR Code, com notificacoes push por Service Worker; o Backend API REST, que processa as requisicoes do Core, gerencia posicoes em tempo real e calcula as estimativas; o Banco de Dados Relacional, que garante a integridade das senhas, estabelecimentos e historico; e a Infraestrutura Cloud, que pode rodar na nuvem pra redes grandes ou num servidor local pra estabelecimentos menores."

### Slide 9 - Jornada do Usuario (1min30)

"Na pratica, a jornada do usuario tem tres passos. Primeiro, a tela inicial: o usuario escaneia o QR Code na recepcao ou seleciona o local via GPS, que ja mostra a distancia e o tempo estimado. Segundo, a retirada de senha: ele escolhe a categoria de atendimento — Comum, Rapido, Prioritario, Retorno ou Triagem. Terceiro, a emissao imediata: em 3 cliques o usuario ja esta na fila virtual, sem burocracia, sem papel, sem ficha.

O conceito central e esse: acompanhe sua vez sem ficar preso na fila. O usuario sai do saguao, vai resolver outras coisas, e quando a vez ta chegando o celular avisa."

### Slide 10 - Prototipo - Inclusao (1min30)

"Aqui da pra ver na pratica como fica. O painel do usuario mostra as informacoes em linguagem simples: 'Posicao 8, Previsao 18 minutos, Faltam 3 pessoas'. Nada de codigo confuso, e direto.

A notificacao de proximidade dispara um aviso sonoro e visual quando a vez se aproxima. O usuario nao fica refem do saguao.

E os modos inclusivos: a gente implementou opcoes de texto ampliado, alto contraste, vibracao e reducao de estimulos visuais pra pessoas com TEA. E acionamento instantaneo, sem precisar ficar caçando em menu.

Essa parte de acessibilidade nao e um adicional — a gente tratou como requisito de produto desde o inicio."

### Slide 11 - Dashboard (1min)

"Tem dois paineis. O painel publico, que fica numa TV na recepcao, mostra a senha sendo chamada no guiche, as proximas 5 senhas previstas e um QR Code pra acompanhar a fila em tempo real. O principal beneficio disso e reduzir aquela suspeita de favorecimento ou de furar fila — e tudo visivel.

O painel da equipe, que funciona num aplicativo movel, exibe metricas em tempo real: volume de atendimento, senhas ativas, tempo medio. O atendente tem um botao 'Chamar Proximo' e faz o gerenciamento dinâmico da fila. Tudo registrado e auditavel."

(seta) "Rios, os beneficios."

---

### Slide 13 - Referencias

(sem fala — exiba o slide por alguns segundos enquanto faz uma pausa natural)

### Slide 14 - Fim (30s)

(depois do Rios)

"Entao e isso, pessoal. Ficamos a disposicao pra perguntas. Obrigado!"

---

## O que os outros falam (pra eu saber o contexto)

> **Artur**
> Slide 1 - Capa (30s): Abre a apresentacao, apresenta os 8 integrantes e passa pra voce.
>
> Slide 7 - Fluxograma (1min30): Entrada no sistema, verificacao de prioridade legal (PcD, idoso, gestante, TEA), distribuicao entre fila prioritaria ou convencional, calculo dinâmico de ETA.

> **Rios**
> Slide 3 - Problema: Os 5 problemas do modelo tradicional — opacidade, prisao fisica, comunicacao falha, aglomeracao, exclusao. Baseado em dados da Waitwhile, Queberry, e na Lei 10.048.
>
> Slide 4 — Casos: NextQS (totens), Fila Online (notificacoes), Vizitor (check-in). Lacuna: nenhuma oferece posicao + tempo real + fora + multissetorial + acessivel.
>
> Slide 12 — Beneficios: 64% reducao na fila presencial, economia de US$ 2M/ano, conformidade com Lei 10.048 e normas Febraban, bem-estar fisico e mental.

---

## Checklist Pessoal

- [ ] Li meu roteiro completo (8 slides)
- [ ] Sei quando entro: 2, 5, 6, 8, 9, 10, 11, 14
- [ ] Sei quando os outros entram
- [ ] Transicao: Artur (slide 1) -> eu (slide 2)
- [ ] Transicao: eu (slide 6) -> Artur (slide 7)
- [ ] Transicao: Artur (slide 7) -> eu (slide 8)
- [ ] Transicao: eu (slide 11) -> Rios (slide 12)
- [ ] Sei o slide 13 (referencias) — apenas exibir, sem falar
- [ ] Sei o slide 14 — encerramento

---

*MinhaFila - 29/06/2026 - Baseado no PDF (3)*
