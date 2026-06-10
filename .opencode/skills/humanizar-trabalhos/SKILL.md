---
name: humanizar-trabalhos
description: Humanizar trabalhos acadêmicos, respostas EAD, resumos críticos e PDFs/MDs quando o usuário disser que o texto parece IA, robótico, artificial ou que professor reclamou da escrita.
---

# Humanizar Trabalhos Acadêmicos

Use esta skill quando o usuário pedir para **humanizar**, **naturalizar**, **tirar cara de IA**, **revisar texto robótico**, **adaptar para parecer aluno**, ou quando mencionar que **professor reclamou que estava escrito por IA**.

O objetivo não é “enganar detector”. O objetivo é transformar rascunhos genéricos em textos com **autoria real, voz compatível com estudante EAD da UFRB, fidelidade ao enunciado e linguagem natural**.

## Contexto fixo do repositório

- Discente padrão: **Deivison de Lima Santana**.
- Curso: **Bacharelado em Sistemas de Informação (EAD) — UFRB/CETENS**.
- Perfil de escrita desejado: aluno de graduação, claro, direto, sem excesso de floreio acadêmico.
- Prioridade: cumprir o que o professor pediu antes de “embelezar” o texto.
- Em atividades curtas, especialmente resumos críticos, prefira **3 parágrafos bem escritos** em vez de títulos, listas e subtítulos.

## O que foi observado na pesquisa web

Alternativas e guias de humanização costumam repetir alguns pontos úteis:

1. **Reescrita estrutural funciona melhor que trocar sinônimos**: mudar ritmo, ordem dos argumentos e abertura/fechamento dos parágrafos.
2. **Variação de frases reduz aparência mecânica**: misturar frases curtas e médias; evitar parágrafos perfeitamente simétricos.
3. **Transições genéricas denunciam IA**: “além disso”, “ademais”, “é importante destacar”, “nesse sentido” em excesso deixam o texto artificial.
4. **Voz pessoal ajuda quando o enunciado pede opinião**: usar “eu considero”, “para mim”, “eu preferiria”, sem virar conversa informal demais.
5. **Detalhes concretos melhoram autoria**: relacionar ao curso, ao contexto EAD, à programação, ao Moodle, a prazos, a trabalhos em grupo etc.
6. **Ferramentas automáticas de humanização existem**, mas são arriscadas: podem mudar sentido, inventar informação ou deixar frases estranhas. Aqui a revisão deve ser manual e responsável.

## Sinais de texto com cara de IA

Marque mentalmente trechos com estes padrões:

- Frases longas demais, com muitos travessões e conceitos abstratos.
- Vocabulário incompatível com uma resposta curta de aluno: “artefato essencialmente humano”, “proliferação”, “insumo de aprendizado”, “alta complexidade”, “sustentável a longo prazo”.
- Conclusões muito perfeitas: “sistemas mais robustos, inovadores e sustentáveis”.
- Estrutura artificial: título para cada pergunta quando o professor pediu “texto” ou “três parágrafos”.
- Parágrafos com o mesmo tamanho e ritmo.
- Muitos pares binários: “não apenas X, mas também Y”, “estrutura e flexibilidade”, “curto e longo prazo”.
- Citação de autores ou teorias que o enunciado não pediu ou que não aparecem nas leituras fornecidas.
- Resposta maior que o limite do enunciado.

## Workflow obrigatório

### 1. Ler antes de reescrever

Antes de editar, localizar e ler:

- o enunciado da atividade, se existir;
- o arquivo `.md`, `.docx` ou `.pdf` entregue/gerado;
- limites explícitos: número de páginas, parágrafos, fonte, tópicos obrigatórios.

Se houver PDF original do professor, compare com a resposta. O texto final deve responder exatamente ao que foi pedido.

### 2. Diagnosticar sem detector

Produza uma análise rápida:

```text
problemas encontrados:
- passou do limite de páginas/parágrafos;
- linguagem muito formal para a atividade;
- termos com cara de IA;
- faltou opinião pessoal;
- excesso de estrutura/títulos;
- resposta não segue o formato pedido.
```

Não dependa de percentual de detector. Detectores erram e podem marcar texto humano.

### 3. Preservar o que não pode mudar

Trave estes elementos:

- nome do aluno;
- disciplina, professor, semestre e trilha;
- datas, números, regras do enunciado;
- conceitos centrais corretos;
- citações e referências, quando existirem;
- resposta às perguntas obrigatórias.

Não invente experiência pessoal falsa. Se precisar de voz pessoal, use formulações plausíveis e gerais ligadas ao curso.

### 4. Reescrever por parágrafos

Para cada parágrafo:

- troque abstrações por linguagem direta;
- reduza frases longas;
- mantenha uma ideia principal por bloco;
- use primeira pessoa quando o enunciado pedir opinião;
- inclua exemplos concretos moderados;
- remova excesso de “perfeição” retórica.

Exemplo de transformação:

```text
antes: A abordagem promove um ambiente psicologicamente seguro, com baixa rotatividade, aprendizado coletivo e inovação favorecida.
depois: Na equipe de Marina, o ponto positivo é que as pessoas parecem trabalhar com mais confiança e conseguem trocar ideias sem medo de errar.
```

### 5. Ajustar ao formato acadêmico real

Para atividades curtas da UFRB/EAD:

- se o professor pediu “texto”, evite subtítulos numerados;
- se pediu “três parágrafos”, entregue três parágrafos;
- se pediu “máximo de 1 página”, gere e leia o PDF para confirmar;
- mantenha cabeçalho simples quando o espaço for limitado;
- não use linguagem de artigo científico em resposta simples.

### 6. Leitura em voz alta mental

Antes de finalizar, leia como se o aluno fosse apresentar ao professor. Se uma frase parecer “frase de LinkedIn”, “texto de redação perfeita” ou “manual corporativo”, simplifique.

## Banco de substituições úteis

Evite usar substituições de forma mecânica. Escolha conforme o contexto.

| Com cara de IA | Mais natural |
|---|---|
| é importante destacar que | vale observar que / nesse caso |
| contudo | mas / porém |
| ademais / outrossim | além disso / também / remova |
| no contexto contemporâneo | hoje / nesse caso |
| configura-se como | é / funciona como |
| evidencia-se | mostra / deixa claro |
| torna-se imprescindível | é necessário / precisa |
| proliferação de erros | aumento dos erros |
| métricas superficiais | métricas simples demais |
| psicologicamente seguro | ambiente onde as pessoas se sentem à vontade |
| artefato essencialmente humano | software é feito por pessoas |
| robusto, inovador e sustentável | bem feito e útil |

## Voz recomendada para Deivison

Use um tom parecido com:

```text
Para mim, o melhor caminho seria juntar as duas ideias. Eu não acho que só cobrar metas resolva, porque programação depende de comunicação e revisão. Ao mesmo tempo, também não dá para uma equipe funcionar sem prazo e responsabilidade.
```

Evite:

```text
A gestão eficaz, na era digital, exige uma síntese dialética entre estrutura e flexibilidade, produzindo resultados sustentáveis no longo prazo.
```

## Checklist final

Antes de entregar, confirme:

- [ ] respondeu todas as perguntas do enunciado;
- [ ] respeitou limite de páginas/parágrafos;
- [ ] tem voz de estudante, não de artigo gerado;
- [ ] não adicionou autores ou conceitos sem necessidade;
- [ ] não perdeu conteúdo importante da versão anterior;
- [ ] PDF foi regenerado e lido/conferido, quando houver PDF;
- [ ] nomes de arquivos continuam em `kebab-case`;
- [ ] se criar nova versão, usar sufixo claro: `-versao-humanizada.md` e `-versao-humanizada.pdf`.

## Formato de resposta ao usuário

Ao terminar, responda curto:

```text
pronto ✅

encontrei estes pontos com cara de ia:
- ...

criei a versão humanizada:
- caminho/do/arquivo.md
- caminho/do/arquivo.pdf

ela agora está em X página(s), com Y parágrafos, e mais próxima de uma resposta de aluno.
```

## Regra ética

Se o usuário pedir para “burlar detector”, redirecione: ofereça revisão de autoria, clareza, adequação ao enunciado e voz pessoal. Nunca prometa indetectabilidade.
