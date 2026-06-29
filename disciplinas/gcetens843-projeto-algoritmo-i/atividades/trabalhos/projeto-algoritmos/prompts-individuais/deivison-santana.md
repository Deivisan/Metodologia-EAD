# Meu Roteiro - Deivison de Lima Santana

> Slides: 1, 2, 5, 6, 8, 9, 10, 11, 14
> Duracao total: ~8min

## Ordem da Apresentacao (eu e Rios)

| # | Slide | Quem | Duracao |
|:-:|:------|:----:|:-------:|
| 1 | Capa | EU | 30s |
| 2 | Missao | EU | 30s |
| 3 | Problema - Modelo Esgotado | Rios | 1min30 |
| 4 | Casos Existentes | Rios | 1min30 |
| 5 | Proposta MinhaFila | EU | 1min |
| 6 | Ecossistema Integrado | EU | 1min |
| 7 | Fluxograma | Rios | 1min30 |
| 8 | Arquitetura | EU | 1min30 |
| 9 | Jornada do Usuario | EU | 1min30 |
| 10 | Prototipo - Inclusao | EU | 1min30 |
| 11 | Dashboard | EU | 1min |
| 12 | Beneficios | Rios | 1min |
| 13 | Referencias | (apenas exibir) | - |
| 14 | Fim / Perguntas | EU | 30s |

---

## Meus Slides - Fala Detalhada

### Slide 1 - Capa (30s)

"Boa noite. Somos o grupo MinhaFila - Gestao Inteligente e Acessivel de Espera. Disciplina GCETENS843 - Projeto Algoritmo I, professor Alex Ferreira. Somos 8 integrantes do Bacharelado em Sistemas de Informacao da UFRB."

### Slide 2 - Missao (30s)

"Nossa missao e transformar o tempo de espera - de uma frustracao imprevisivel para uma experiencia previsivel, justa e inclusiva."

(seta) "Rios, vou passar pra voce falar sobre o problema real que a gente identificou."

---

### Slide 5 - Proposta MinhaFila (1min)

(entra depois que Rios terminar casos existentes)

"E ai que entra o MinhaFila. Um sistema de senha virtual com acompanhamento remoto, projetado pra funcionar em multiplos setores de forma unificada. O cadastro e sem friccao - o usuario le um QR Code na recepcao e ja entra na fila. Transparencia total: posicao em tempo real e tempo estimado. O usuario aguarda onde quiser, nao preso no saguao. Funciona em saude, bancos, varejo e governo."

### Slide 6 - Ecossistema Integrado (1min)

"O sistema tem dois modulos principais. O modulo do usuario: acompanhamento em tempo real com posicao, tempo estimado e pessoas a frente; alertas inteligentes de proximidade tipo 'faltam 3 pessoas'; e um perfil inclusivo com alto contraste, fonte ampliada, leitura de voz e modo baixo estimulo pra TEA. O modulo do gestor: um painel completo de senhas e guiches ativos, chamada simplificada com um clique, e relatorios de pico, tempo medio e performance operacional."

(seta) "Rios, o fluxograma do sistema."

---

### Slide 8 - Arquitetura (1min30)

(entra depois do Rios falar do fluxograma)

"Nossa arquitetura tem quatro camadas que se comunicam em torno de um core central:

1. Frontend PWA - aplicativo web responsivo que funciona como app, sem download. Acesso via QR Code na recepcao. Inclui notificacoes push por Service Worker.
2. Backend API REST - processa as requisicoes do Core, gerencia posicoes em tempo real e calcula estimativas de espera.
3. Banco de Dados Relacional - garante integridade dos dados: senhas, estabelecimentos, historico de atendimento.
4. Infraestrutura Cloud - roda onde precisar: na nuvem pra redes grandes ou servidor local pra clinicas menores.

E no centro o MinhaFila Core - o cerebro que concentra as regras de negocio, priorizacao e logica do sistema."

### Slide 9 - Jornada do Usuario (1min30)

"A jornada e simples e direta. Tres passos:

1. Tela inicial - o usuario escaneia o QR Code ou seleciona o local via GPS, que ja mostra distancia e tempo estimado.
2. Retirada de senha - escolhe a categoria: Comum, Rapido, Prioritario, Retorno ou Triagem.
3. Emissao imediata - em 3 cliques o usuario entra na fila virtual, sem burocracia.

O conceito e: acompanhe sua vez sem ficar preso na fila."

### Slide 10 - Prototipo - Inclusao (1min30)

"Aqui a gente ve tres funcionalidades na pratica:

Primeiro, o painel do usuario - visualizacao clara em linguagem simples: 'Posicao 8, Previsao 18 minutos, Faltam 3 pessoas'.

Segundo, notificacao de proximidade - aviso sonoro e visual quando a vez se aproxima. O usuario nao fica preso no saguao.

Terceiro, modos inclusivos - opcoes de texto ampliado, alto contraste, vibracao e reducao de estimulos visuais pra TEA, tudo instantaneo."

### Slide 11 - Dashboard (1min)

"Dois paineis. O painel publico na TV da recepcao: mostra a senha sendo chamada, as proximas 5 senhas previstas e um QR Code pra acompanhar a fila em tempo real. Isso reduz a suspeita de favorecimento.

O painel da equipe no aplicativo movel: metricas em tempo real, volume de atendimento, botao 'Chamar Proximo' e gerenciamento dinamico da fila. Auditoria automatizada de prioridades."

(seta) "Rios, os beneficios."

---

### Slide 13 - Referencias (apenas exibir, sem fala)

(apenas deixe o slide aparecer por alguns segundos enquanto voce faz uma pausa ou diz "nossas referencias estao ai")

### Slide 14 - Fim / Perguntas (30s)

(depois do Rios terminar os beneficios)

"E era isso, pessoal.Ficamos abertos a perguntas. Obrigado!"

---

## O que Rios Fala (meu contexto)

> Slide 3 - Modelo Esgotado (1min30): Rios apresenta os 5 problemas - opacidade, prisao fisica, comunicacao falha, aglomeracao, exclusao.
>
> Slide 4 - Casos Existentes (1min30): NextQS (totens fisicos), Fila Online (solo alertas), Vizitor (check-in corporativo). Lacuna: nenhuma oferece posicao + tempo real + fora + multissetorial + acessivel.
>
> Slide 7 - Fluxograma (1min30): Explica o fluxo logico: entrada, verificacao de prioridade legal, distribuicao entre fila prioritaria ou convencional, calculo dinâmico de ETA.
>
> Slide 12 - Beneficios (1min): Reducao de 64% na fila presencial, economia de US$ 2M/ano, conformidade legal, bem-estar.

---

## Checklist Pessoal

- [ ] Li meu roteiro completo (9 slides)
- [ ] Sei quando entro: 1, 2, 5, 6, 8, 9, 10, 11, 14
- [ ] Sei quando Rios entra: 3, 4, 7, 12
- [ ] Prototipo index.html aberto antes de comecar
- [ ] admin.html pra mostrar se der tempo
- [ ] Slide 13 (referencias) e mudo - deixa passar natural

---

*MinhaFila - 29/06/2026 - Baseado no PDF (3)*
