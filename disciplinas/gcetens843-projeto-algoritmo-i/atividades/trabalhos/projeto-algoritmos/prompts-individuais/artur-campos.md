# Meu Roteiro - Artur Campos

> Slides: 1, 7
> Duracao total: ~2min

## Ordem Geral

| # | Slide | Quem | Duracao |
|:-:|:------|:----:|:-------:|
| 1 | Capa | EU | 30s |
| 2 | Missao | Deivison | 30s |
| 3 | Problema | Rios | 1min30 |
| 4 | Casos | Rios | 1min30 |
| 5 | Proposta | Deivison | 1min |
| 6 | Ecossistema | Deivison | 1min |
| 7 | Fluxograma | EU | 1min30 |
| 8 | Arquitetura | Deivison | 1min30 |
| 9 | Jornada | Deivison | 1min30 |
| 10 | Prototipo | Deivison | 1min30 |
| 11 | Dashboard | Deivison | 1min |
| 12 | Beneficios | Rios | 1min |
| 13 | Referencias | (exibir) | - |
| 14 | Fim | Deivison | 30s |

---

## Minhas Falas

### Slide 1 - Capa (30s)

"Boa noite, professor Alex, boa noite a todos. Somos o grupo MinhaFila, da disciplina Projeto Algoritmo I. Nosso grupo tem 8 integrantes: Artur Campos; Ausiane Costa; Deivison Santana; Marcos Sena; Nubia Ramos; Raimon Rios; Uelinton Santana e Wallace Lima. Somos todos do Bacharelado em Sistemas de Informacao EAD da UFRB."

(apos apresentar) "E agora o Deivison vai falar sobre a nossa missao com esse projeto."

(seta) "Deivison, a missao."

---

### Slide 7 - Fluxograma (1min30)

(entra depois do Deivison falar do ecossistema)

"Aqui a gente ve a logica por tras do sistema. O fluxograma mostra o algoritmo de entrada, priorizacao e atendimento.

O processo comeca quando o usuario acessa o sistema — seja por QR Code ou pelo app. Ele seleciona o servico desejado. A partir dai, o sistema faz uma verificacao: o usuario se enquadra em alguma categoria de prioridade legal? PcD, idoso, gestante, pessoa com TEA?

Se sim, ele e direcionado pra fila prioritaria. Se nao, vai pra fila convencional. Ambas as filas sao processadas pelo mesmo nucleo de gerenciamento, que calcula dinamicamente o tempo estimado de atendimento — o ETA — que se atualiza automaticamente a cada movimentacao na fila.

O gestor entao chama o proximo da fila, o sistema notifica o usuario, e o atendimento e registrado. O ciclo se fecha com a atualizacao da fila.

Tem tambem o fluxo de saida temporaria: se o usuario precisa se ausentar, ele marca no app e o sistema continua monitorando, enviando um alerta quando a vez estiver proxima."

(aponta pro fluxograma no slide enquanto explica o caminho)

(seta) "Deivison, a arquitetura do sistema."

---

## O que os outros falam (pra eu saber o contexto)

> **Deivison**
> Slide 2 - Missao (30s): Explica a missao — transformar espera em experiencia previsivel, justa e inclusiva.
>
> Slide 5 - Proposta (1min): Apresenta o MinhaFila (QR Code, cadastro rapido, acompanhamento remoto, multissetorial).
>
> Slide 6 - Ecossistema (1min): Modulo Usuario (acompanhamento, alertas, perfil inclusivo) + Gestor (dashboard, chamada 1 clique, relatorios).
>   *Depois do ecossistema, chama o Artur pro fluxograma.*
>
> Slide 8 - Arquitetura (1min30): 4 camadas (PWA, API, BD, Infra) + MinhaFila Core.
>
> Slide 9 - Jornada (1min30): QR Code, escolha de categoria, 3 cliques.
>
> Slide 10 - Prototipo (1min30): Painel usuario, notificacao, modos inclusivos.
>
> Slide 11 - Dashboard (1min): Painel TV + painel equipe.
>
> Slide 14 - Fim (30s): Encerra e abre pra perguntas.

> **Rios**
> Slide 3 - Problema (1min30): 5 problemas — opacidade, prisao fisica, comunicacao falha, aglomeracao, exclusao. Dados: 90%, 64%, 61%.
>
> Slide 4 - Casos (1min30): NextQS, Fila Online, Vizitor. Lacuna: nenhuma oferece posicao+tempo+fora+multissetorial+acessivel.
>
> Slide 12 - Beneficios (1min): 64% reducao, US$ 2M economia, Lei 10.048, bem-estar.

---

## Checklist Pessoal

- [ ] Li meu roteiro completo (2 slides)
- [ ] Sei quando entro: 1, 7
- [ ] Sei quando os outros entram
- [ ] Sei os nomes dos 8 integrantes de cor (incluindo o meu)
- [ ] Sei o fluxo do fluxograma: entrada -> prioridade legal -> fila prioritária/convencional -> ETA -> chamada
- [ ] Pratiquei a transicao: Capa -> chamo Deivison (slide 2)
- [ ] Pratiquei a transicao: Fluxograma -> chamo Deivison (slide 8)

---

*MinhaFila - 29/06/2026 - Baseado no PDF (3)*
