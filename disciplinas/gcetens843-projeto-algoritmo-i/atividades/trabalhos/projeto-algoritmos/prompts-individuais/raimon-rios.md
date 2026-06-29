# Meu Roteiro - Raimon Rios da Silva

> Slides: 3, 4, 7, 12
> Duracao total: ~5min30

## Ordem Geral

| # | Slide | Quem | Duracao |
|:-:|:------|:----:|:-------:|
| 1 | Capa | Deivison | 30s |
| 2 | Missao | Deivison | 30s |
| 3 | Problema - Modelo Esgotado | EU | 1min30 |
| 4 | Casos Existentes | EU | 1min30 |
| 5 | Proposta MinhaFila | Deivison | 1min |
| 6 | Ecossistema Integrado | Deivison | 1min |
| 7 | Fluxograma | EU | 1min30 |
| 8 | Arquitetura | Deivison | 1min30 |
| 9 | Jornada do Usuario | Deivison | 1min30 |
| 10 | Prototipo - Inclusao | Deivison | 1min30 |
| 11 | Dashboard | Deivison | 1min |
| 12 | Beneficios | EU | 1min |
| 13 | Referencias | (exibir) | - |
| 14 | Fim | Deivison | 30s |

---

## SUA ABERTURA - Leia quando Deivison terminar o slide 2

"Bom, o Deivison falou da missao do MinhaFila. Agora eu vou mostrar por que a gente decidiu criar esse sistema — o problema real que todo mundo conhece mas ninguem resolve direito."

(vire para o slide 3)

---

## Seus Slides

### Slide 3 - Problema Real: Modelo Esgotado (1min30)

"O modelo tradicional de filas esta esgotado, e os numeros comprovam isso. Pesquisas mostram que 90% dos consumidores enfrentam filas com frequencia, e 64% lidam com filas multiplas vezes por semana. So no varejo, 61% dos clientes ja abandonaram uma fila antes de serem atendidos.

A gente identificou cinco problemas centrais nesse modelo:

Primeiro, a opacidade — o usuario chega, pega uma senha e fica sem saber qual e a posicao dele, quanto tempo falta, se ta progredindo.

Segundo, a prisao fisica — ele nao pode sair dali por cinco minutos porque corre o risco de perder a vez. Fica refem do saguao.

Terceiro, a comunicacao falha — sao paineis com codigos dificeis de entender, chamadas por auto-falante que ninguem ouve direito.

Quarto, a aglomeracao — espacos de espera superlotados, o que num contexto pos-pandemia e ainda mais problematico.

E quinto, a exclusao — pessoas com deficiencia visual nao conseguem ler os paineis, pessoas com deficiencia auditiva perdem as chamadas sonoras, pessoas com TEA sofrem com o excesso de estimulos.

O impacto economico disso e gigantesco: o mercado de sistemas de gerenciamento de filas deve crescer de 39 bilhoes de dolares em 2025 pra 77 bilhoes ate 2031."

(seta) "E o que ja existe no mercado pra resolver isso? Vou mostrar."

---

### Slide 4 - Casos Existentes (1min30)

"A gente analisou as principais solucoes disponiveis hoje.

O NextQS e um sistema de totens e paineis de chamada, mas e basicamente um sistema local — voce precisa estar no estabelecimento pra acompanhar.

O Fila Online envia alertas por notificacao, mas e um sistema simples de aviso, nao oferece um ecossistema completo de gestao.

O Vizitor e focado em check-in corporativo e recepcao de visitantes, nao em fluxo de atendimento multissetorial.

A grande lacuna que a gente identificou e a seguinte: nenhuma dessas plataformas informa ao usuario o tempo aproximado de espera em tempo real junto com a posicao exata, permitindo que ele aguarde fora do local, de forma multissetorial e com acessibilidade inclusiva.

E ai que o MinhaFila entra como proposta."

(seta) "Deivison, a proposta."

---

### Slide 7 - Fluxograma (1min30)

(entra depois do Deivison falar do ecossistema)

"Aqui a gente ve a logica por tras do sistema. O fluxograma mostra o algoritmo de entrada, priorizacao e atendimento.

O processo comeca quando o usuario acessa o sistema — seja por QR Code ou pelo app. Ele seleciona o servico desejado. A partir dai, o sistema faz uma verificacao: o usuario se enquadra em alguma categoria de prioridade legal? PcD, idoso, gestante, pessoa com TEA?

Se sim, ele e direcionado pra fila prioritaria. Se nao, vai pra fila convencional. Ambas as filas sao processadas pelo mesmo nucleo de gerenciamento, que calcula dinamicamente o tempo estimado de atendimento — o ETA — que se atualiza automaticamente a cada movimentacao.

O gestor entao chama o proximo da fila, o sistema notifica o usuario, e o atendimento e registrado. O ciclo se fecha com a atualizacao da fila.

O fluxo de saida temporaria tambem esta contemplado: se o usuario precisa se ausentar, ele marca no app e o sistema continua monitorando, enviando alerta quando a vez estiver proxima."

(aponta pro fluxograma enquanto explica o caminho)

(seta) "Deivison, a arquitetura do sistema."

---

### Slide 12 - Beneficios (1min)

(ultimo slide seu antes do encerramento)

"Pra fechar, os beneficios que o MinhaFila entrega.

Primeiro, uma reducao de 64% na fila presencial — os clientes esperam onde quiserem, o saguao fica livre de aglomeracao.

Segundo, o impacto financeiro: no varejo, as perdas com abandono de fila chegam a 2 milhoes de dolares por ano por loja. Com um sistema de fila virtual e previsivel, esse numero cai drasticamente.

Terceiro, a conformidade legal — o sistema se adapta automaticamente as legislacoes estaduais de tempo maximo de espera e as cotas de prioridade pra PcD e idosos, estabelecidas pela Lei 10.048 e pelas normas da Febraban.

E quarto, o bem-estar — reduz a hostilidade no ambiente de atendimento, preserva a saude mental dos funcionarios e da aos usuarios uma experiencia muito menos estressante.

MinhaFila: o seu tempo importa."

(olhe pro Deivison pra ele encerrar)

---

## O que Deivison Fala (meu contexto)

> Slide 1 - Capa (30s): Deivison abre, apresenta os 8 integrantes do grupo e a disciplina.
>
> Slide 2 - Missao (30s): Explica a missao — transformar espera em experiencia previsivel, justa e inclusiva. Depois te chama.
>
> Slide 5 - Proposta (1min): Apresenta o MinhaFila (QR Code, cadastro rapido, acompanhamento remoto, multissetorial).
>
> Slide 6 - Ecossistema (1min): Modulo Usuario (acompanhamento, alertas, perfil inclusivo) + Gestor (dashboard, chamada 1 clique, relatorios).
>
> Slide 8 - Arquitetura (1min30): 4 camadas (PWA, API, BD, Infra) + MinhaFila Core no centro com regras de negocio.
>
> Slide 9 - Jornada (1min30): Tela inicial com QR Code/GPS, escolha de categoria, emissao em 3 cliques. Conceito: "acompanhe sua vez sem ficar preso na fila".
>
> Slide 10 - Prototipo (1min30): Painel usuario com posicao e tempo, notificacao de proximidade, modos inclusivos (alto contraste, texto ampliado, baixo estimulo TEA).
>
> Slide 11 - Dashboard (1min): Painel publico TV (senha atual + 5 proximas + QR Code) + painel equipe app movel com metricas.
>
> Slide 13 - Referencias: apenas exibido, sem fala.
>
> Slide 14 - Fim (30s): Deivison encerra e abre pra perguntas.

---

## Checklist Pessoal

- [ ] Li meu roteiro completo (4 slides)
- [ ] Sei quando entro: 3, 4, 7, 12
- [ ] Sei quando Deivison entra: 1, 2, 5, 6, 8, 9, 10, 11, 14
- [ ] Sei os 5 problemas do slide 3 de cor + os dados (90%, 64%, 61%)
- [ ] Sei a lacuna de mercado: posicao + tempo real + fora + multissetorial + acessivel
- [ ] Sei os 4 beneficios: 64% + US$ 2M + conformidade Lei 10.048 + bem-estar
- [ ] Sei o fluxo do fluxograma: entrada -> prioridade legal -> fila prioritária/convencional -> ETA -> chamada
- [ ] Pratiquei as transicoes entre meus slides (3->4 direto, sem pausa)

---

*MinhaFila - 29/06/2026 - Baseado no PDF (3) e docs do projeto*
