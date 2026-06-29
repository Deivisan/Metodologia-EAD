# Meu Roteiro - Raimon Rios da Silva

> Slides: 3, 4, 7, 12
> Duracao total: ~5min30

## Ordem da Apresentacao (eu e Deivison)

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
| 13 | Referencias | (apenas exibir) | - |
| 14 | Fim / Perguntas | Deivison | 30s |

---

## SUA ABERTURA - Leia quando Deivison terminar o slide 2

"Bom, o Deivison falou da missao do MinhaFila. Agora eu vou mostrar por que a gente decidiu criar esse sistema - o problema real que todo mundo conhece mas ninguem resolve direito."

(seta) Vire para o slide 3.

---

## Seus Slides - Fala Detalhada

### Slide 3 - Problema Real: Modelo Esgotado (1min30)

"O modelo tradicional de filas esta esgotado. A gente identificou cinco problemas centrais:

1. Opacidade - o usuario nao sabe sua posicao exata nem o tempo estimado.
2. Prisao fisica - nao pode se ausentar sob risco de perder a vez.
3. Comunicacao falha - paineis dificeis de ler e chamadas que ninguem ouve.
4. Aglomeracao - espacos de espera superlotados desnecessariamente.
5. Exclusao - falta de acessibilidade pra deficiencia auditiva, visual e TEA."

(dica: fale pausadamente, um item por vez)

(seta) "E o que ja existe no mercado pra resolver isso? Vou mostrar."

---

### Slide 4 - Casos Existentes (1min30)

"A gente analisou as principais solucoes do mercado:

- NextQS - foco restrito a totens e paineis fisicos locais.
- Fila Online - alertas simples por notificacao, sem ecossistema completo.
- Vizitor - focado em check-in corporativo e recepcao, nao em fluxo multissetorial.

A grande lacuna que a gente identificou: nenhuma das plataformas populares informa ao usuario o tempo aproximado de espera em tempo real e a posicao exata durante a jornada fora do estabelecimento de forma multissetorial e totalmente acessivel.

E ai que o MinhaFila entra."

(seta) "Deivison, a proposta."

---

### Slide 7 - Fluxograma (1min30)

(entra depois do Deivison falar do ecossistema)

"Aqui a gente ve a logica por tras do sistema. O fluxograma mostra o algoritmo de entrada, priorizacao legal e atendimento:

O usuario entra no sistema e seleciona o servico desejado. O sistema verifica se o usuario tem prioridade legal - PcD, idoso, gestante, pessoa com TEA - e distribui entre fila prioritaria ou convencional. A distribuicao e baseada em servico e prioridade. O sistema calcula dinamicamente o Tempo Estimado de Atendimento - ETA - que se atualiza a cada movimentacao na fila."

(dica: aponte pro fluxograma no slide enquanto explica o caminho)

(seta) "Deivison, a arquitetura do sistema."

---

### Slide 12 - Beneficios (1min)

(ultimo slide seu antes do encerramento)

"O MinhaFila vai muito alem de uma senha digital. Quatro beneficios principais:

1. Reducao de 64% na fila presencial - clientes esperam onde quiserem, o saguao fica livre.
2. Economia de receita - reduz significativamente a evasao de clientes no varejo, onde as perdas chegam a 2 milhoes de dolares por ano por loja.
3. Conformidade legal ativa - atende facilmente legislacoes estaduais de tempo de espera e cota de prioridades pra PcD e idosos.
4. Bem-estar fisico e mental - reduz a hostilidade no atendimento, preserva a saude mental dos funcionarios e acalma os usuarios.

MinhaFila: o seu tempo importa."

(olhe pro Deivison pra ele encerrar)

---

## O que Deivison Fala (meu contexto)

> Slide 1 - Capa (30s): Deivison abre, apresenta o grupo e a disciplina.
>
> Slide 2 - Missao (30s): Explica a missao - transformar espera em experiencia justa e inclusiva. Depois te chama.
>
> Slide 5 - Proposta (1min): Apresenta o MinhaFila (QR Code, transparencia, mobilidade, multissetorial).
>
> Slide 6 - Ecossistema (1min): Modulo Usuario (acompanhamento, alertas, perfil inclusivo) + Gestor (dashboard, chamada 1 clique, relatorios).
>
> Slide 8 - Arquitetura (1min30): 4 camadas (PWA, API, BD, Infra) + MinhaFila Core no centro.
>
> Slide 9 - Jornada (1min30): QR Code, escolha de categoria, emissao em 3 cliques.
>
> Slide 10 - Prototipo (1min30): Painel usuario, notificacao de proximidade, modos inclusivos.
>
> Slide 11 - Dashboard (1min): Painel publico TV + painel equipe app movel.
>
> Slide 13 - Referencias: apenas exibido, sem fala.
>
> Slide 14 - Fim (30s): Deivison encerra e abre pra perguntas.

---

## Checklist Pessoal

- [ ] Li meu roteiro completo (4 slides)
- [ ] Sei quando entro: 3, 4, 7, 12
- [ ] Sei quando Deivison entra: 1, 2, 5, 6, 8, 9, 10, 11, 14
- [ ] Sei os 5 problemas do slide 3 de cor
- [ ] Sei a lacuna de mercado: posicao + tempo real + fora + multissetorial + acessivel
- [ ] Sei os 4 beneficios: 64% + US$ 2M + conformidade + bem-estar
- [ ] Pratiquei as transicoes entre meus slides (3->4 direto, sem pausa)

---

*MinhaFila - 29/06/2026 - Baseado no PDF (3)*
