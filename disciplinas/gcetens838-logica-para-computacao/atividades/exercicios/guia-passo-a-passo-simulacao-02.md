# GUIA PASSO A PASSO — Simulação 02 (do zero)

## O QUE A ATIVIDADE PEDI (versão simples)

Um tanque de produto químico tem 4 sensores. O sistema deve ligar uma emergência
quando acontecer algo perigoso: (temperatura alta + tanque cheio) OU (motor ligado + tampa aberta).
Você precisa montar isso com portas lógicas num site online e tirar prints.

---

## PASSO 1 — Abrir o simulador

1. Abre https://circuitverse.org
2. Clica em "Launch Simulator"
3. Vai abrir o editor com uma tela branca e uma barra lateral à esquerda

---

## PASSO 2 — Colocar as 4 entradas

Na barra lateral esquerda, tem uma categoria "Inputs":
1. Arrasta "Input Pin" da barra pra tela 4 vezes
2. Clica em cada pin e renomeia:
   - Pin 1 -> "A" (Abastecimento)
   - Pin 2 -> "B" (Batedor)
   - Pin 3 -> "C" (Cobertura)
   - Pin 4 -> "T" (Temperatura)
3. Coloca os pins mais ou menos assim na tela (vertical):

```
A  [ ]  (topo)
B  [ ]
C  [ ]
T  [ ]  (fundo)
```

---

## PASSO 3 — Colocar as portas NAND

Na barra lateral, na categoria "Gates":
1. Arrasta 4 portas NAND pra tela
2. Cada NAND tem 2 entradas e 1 saída
3. Coloca assim:

```
A  [ ]---+----------> [NAND U2] ----> (saída U2)
          |
B  [ ]---+---> [NAND U3] ----> (saída U3)
          |      ^
C  [ ]---+------+  |
          |         |
          v         |
      [NAND U1] ----+
      (NOT C)
      
T  [ ]---+----------> [NAND U2] (segunda entrada)

(saida U2) -------> [NAND U4] ----> LED S
(saida U3) -------> [NAND U4]
```

---

## PASSO 4 — Ligar os fios (clique pra clique)

Aqui vai EXATAMENTE onde cada fio deve ir. Cada linha é um clique pra clique:

### Porta U1: NOT C (transforma C em C̅)
- Entrada superior: clique na saída de C, arrasta até a 1ª entrada de U1
- Entrada inferior: clique na saída de C de novo, arrasta até a 2ª entrada de U1
  (sim, as duas entradas da U1 ficam ligadas no C — isso vira um inversor)

### Porta U2: NAND A,T
- 1ª entrada: clique na saída de A, arrasta até a 1ª entrada de U2
- 2ª entrada: clique na saída de T, arrasta até a 2ª entrada de U2

### Porta U3: NAND B, C̅
- 1ª entrada: clique na saída de B, arrasta até a 1ª entrada de U3
- 2ª entrada: clique na SAÍDA da U1 (C̅), arrasta até a 2ª entrada de U3

### Porta U4: NAND final (saída = S)
- 1ª entrada: clique na SAÍDA da U2, arrasta até a 1ª entrada de U4
- 2ª entrada: clique na SAÍDA da U3, arrasta até a 2ª entrada de U4

### LED
- Arrasta um LED da barra lateral (categoria "Output")
- Conecta a saída da U4 no LED

---

## PASSO 5 — Testar (aqui você tira os 16 prints)

Agora clique em cada pin A, B, C, T pra mudar entre 0 e 1.
Cada clique alterna o valor. Testa as 16 combinações:

| # | A | B | C | T | LED deve estar... |
|---|---|---|---|---|---|
| 1 | 0 | 0 | 0 | 0 | DESLIGADO |
| 2 | 0 | 0 | 0 | 1 | DESLIGADO |
| 3 | 0 | 0 | 1 | 0 | DESLIGADO |
| 4 | 0 | 0 | 1 | 1 | DESLIGADO |
| 5 | 0 | 1 | 0 | 0 | **LIGADO** (vermelho/aceso) |
| 6 | 0 | 1 | 0 | 1 | **LIGADO** |
| 7 | 0 | 1 | 1 | 0 | DESLIGADO |
| 8 | 0 | 1 | 1 | 1 | DESLIGADO |
| 9 | 1 | 0 | 0 | 0 | DESLIGADO |
| 10 | 1 | 0 | 0 | 1 | **LIGADO** |
| 11 | 1 | 0 | 1 | 0 | DESLIGADO |
| 12 | 1 | 0 | 1 | 1 | **LIGADO** |
| 13 | 1 | 1 | 0 | 0 | **LIGADO** |
| 14 | 1 | 1 | 0 | 1 | **LIGADO** |
| 15 | 1 | 1 | 1 | 0 | DESLIGADO |
| 16 | 1 | 1 | 1 | 1 | **LIGADO** |

**A cada combinação, dá um Print Screen (ou Windows+Shift+S) e salva na pasta prints/**
Nomeia como: print-01.png, print-02.png, ..., print-16.png

---

## PASSO 6 — Gravar o vídeo (3 a 5 minutos)

### O que falar (roteiro simples):

**INÍCIO (30 seg):**
"Oi, meu nome é Deivison, aluno de Sistemas de Informação EAD da UFRB.
Essa é a Simulação 02 da disciplina Lógica para Computação.
O problema é sobre um misturador industrial com 4 sensores de segurança."

**EXPLICAÇÃO (1 min):**
"Montei a tabela-verdade com 16 combinações.
A expressão que cheguei foi S = A·T + B·¬C.
Isso significa: o alarme liga quando a temperatura está alta E o tanque cheio,
OU quando o motor está ligado com a tampa aberta.
A conversão pra portas NAND ficou com 4 portas."

**DEMONSTRAÇÃO (2 min):**
Abre o CircuitVerse com o circuito montado.
Clica nos pins pra mostrar os 3 cenários:
- "Aqui tá tudo desligado, LED apagado" (A=0,B=0,C=1,T=0)
- "Agora tanque cheio e temperatura alta, LED acende" (A=1,B=0,C=1,T=1)
- "Motor ligado e tampa aberta, LED acende" (A=0,B=1,C=0,T=0)

**CONCLUSÃO (30 seg):**
"A maior dificuldade foi organizar os fios no simulador.
Obrigado."

### Como gravar:
- Abre o OBS Studio ou o gravador de tela do Windows (Win+G)
- Liga a câmera
- Grava a tela + sua voz
- Para em 3-5 minutos

---

## PASSO 7 — Subir no YouTube

1. Vai em https://youtube.com
2. Clica no ícone de "+" (criar) -> "Enviar vídeo"
3. Seleciona o vídeo
4. Na hora de escolher visibilidade, coloca: **"Não listado"**
   (ou "Unlisted" se tiver em inglês)
5. Publica
6. Copia o link

IMPORTANTE: O link tem que funcionar pra qualquer pessoa que tenha o link.
Testa abrindo em aba anônima antes de enviar.

---

## PASSO 8 — Colocar o link no relatório

1. Abre o arquivo gcetens838-simulacao-02-relatorio-deivison-santana.md
2. Substitui "[INSERIR LINK AQUI APÓS GRAVAÇÃO]" pelo link do YouTube
3. Manda pra mim que eu gero o PDF

---

## PASSO 9 — Enviar no Google Forms

1. Vai no AVA (ead.ufrb.edu.br)
2. Procura o link do Google Forms na atividade Simulação 02
3. Cola o link do vídeo
4. Anexa o PDF
5. Envia

---

## RESUMO RÁPIDO

1. Montar circuito no CircuitVerse (4 NANDs + 4 inputs + 1 LED)
2. Testar 16 combinações, tirar print de cada uma
3. Gravar vídeo 3-5min mostrando o circuito
4. Subir no YouTube como "Não listado"
5. Colocar link do vídeo no relatório
6. Enviar PDF + link no Google Forms

---

*Guia criado em 13/07/2026*
